
// = 014 ======================================================================
// WebGL に限らず、CG の世界で「鬼門」と呼ばれている非常に難しい問題の１つとして
// ブレンディングがあります。
// 普段、CSS などで opacity を操作して透明度を変更したり、photoshop などのツール
// でアルファ値を扱っていたりすると誤解しやすいのですが、実は透明や半透明を正しく
// 扱うためには、色と色を混ぜ合わせるブレンド処理について深い理解が必要です。
// とはいえ、完全に理解した上で細かい調整をしなければならない場面は通常利用の範
// 囲ではそれほど多くありません。まずは定番の設定内容から覚えていきましょう。
// ============================================================================

import { WebGLUtility }     from './webgl.js';
import { WebGLMath }        from './math.js';
import { WebGLGeometry }    from './geometry.js';
import { WebGLOrbitCamera } from './camera.js';
import '../../lib/tweakpane-3.1.0.min.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
  app.load()
  .then(() => {
    app.setupGeometry();
    app.setupLocation();
    app.start();
  });

  // Tweakpane を使った GUI の設定
  const pane = new Tweakpane.Pane();
  const parameter = {
    texture: true,
    blend: false, // ブレンドを有効化するかどうか @@@
  };
  // テクスチャの表示・非表示
  pane.addInput(parameter, 'texture')
  .on('change', (v) => {
    app.setTextureVisibility(v.value);
  });
  // ブレンディングを有効化するかどうか @@@
  pane.addInput(parameter, 'blend')
  .on('change', (v) => {
    app.setBlending(v.value);
  });
  // グローバルアルファの設定 @@@
  pane.addBlade({
    view: 'slider',
    label: 'alpha',
    min: 0.0,
    max: 1.0,
    value: 1.0,
  })
  .on('change', (v) => {
    app.setGlobalAlpha(v.value);
  });
}, false);

/**
 * アプリケーション管理クラス
 */
class App {
  /**
   * @constructro
   */
  constructor() {
    /**
     * WebGL で描画対象となる canvas
     * @type {HTMLCanvasElement}
     */
    this.canvas = null;
    /**
     * WebGL コンテキスト
     * @type {WebGLRenderingContext}
     */
    this.gl = null;
    /**
     * プログラムオブジェクト
     * @type {WebGLProgram}
     */
    this.program = null;
    /**
     * attribute 変数のロケーションを保持する配列
     * @type {Array.<number>}
     */
    this.attributeLocation = null;
    /**
     * attribute 変数のストライドの配列
     * @type {Array.<number>}
     */
    this.attributeStride = null;
    /**
     * uniform 変数のロケーションを保持するオブジェクト
     * @type {object.<WebGLUniformLocation>}
     */
    this.uniformLocation = null;
    /**
     * plane ジオメトリの情報を保持するオブジェクト
     * @type {object}
     */
    this.planeGeometry = null;
    /**
     * plane ジオメトリの VBO の配列
     * @type {Array.<WebGLBuffer>}
     */
    this.planeVBO = null;
    /**
     * plane ジオメトリの IBO
     * @type {WebGLBuffer}
     */
    this.planeIBO = null;
    /**
     * レンダリング開始時のタイムスタンプ
     * @type {number}
     */
    this.startTime = null;
    /**
     * カメラ制御用インスタンス
     * @type {WebGLOrbitCamera}
     */
    this.camera = null;
    /**
     * テクスチャ格納用
     * @type {WebGLTexture}
     */
    this.texture = null;
    /**
     * レンダリングを行うかどうかのフラグ
     * @type {boolean}
     */
    this.isRender = false;
    /**
     * テクスチャの可視性
     * @type {boolean}
     */
    this.textureVisibility = true;
    /**
     * グローバルアルファ @@@
     * @type {number}
     */
    this.globalAlpha = 1.0;

    // this を固定するためのバインド処理
    this.resize = this.resize.bind(this);
    this.render = this.render.bind(this);
  }

  /**
   * ブレンディングを設定する @@@
   * @param {boolean} flag - 設定する値
   */
  setBlending(flag) {
    const gl = this.gl;
    if (gl == null) {return;}
    if (flag === true) {
      gl.enable(gl.BLEND);
    } else {
      gl.disable(gl.BLEND);
    }
  }

  /**
   * テクスチャの可視性を設定する
   * @param {boolean} flag - 設定する値
   */
  setTextureVisibility(flag) {
    this.textureVisibility = flag;
  }

  /**
   * グローバルアルファ値を設定する @@@
   * @param {number} alpha - 設定するアルファ値
   */
  setGlobalAlpha(alpha) {
    this.globalAlpha = alpha;
  }

  /**
   * 初期化処理を行う
   */
  init() {
    // canvas エレメントの取得と WebGL コンテキストの初期化
    this.canvas = document.getElementById('webgl-canvas');
    this.gl = WebGLUtility.createWebGLContext(this.canvas);

    // カメラ制御用インスタンスを生成する
    const cameraOption = {
      distance: 5.0, // Z 軸上の初期位置までの距離
      min: 1.0,      // カメラが寄れる最小距離
      max: 10.0,     // カメラが離れられる最大距離
      move: 2.0,     // 右ボタンで平行移動する際の速度係数
    };
    this.camera = new WebGLOrbitCamera(this.canvas, cameraOption);

    // 最初に一度リサイズ処理を行っておく
    this.resize();

    // リサイズイベントの設定
    window.addEventListener('resize', this.resize, false);

    // 深度テストは初期状態で有効
    this.gl.enable(this.gl.DEPTH_TEST);
  }

  /**
   * リサイズ処理
   */
  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  /**
   * 各種リソースのロードを行う
   * @return {Promise}
   */
  load() {
    return new Promise((resolve, reject) => {
      const gl = this.gl;
      if (gl == null) {
        const error = new Error('not initialized');
        reject(error);
      } else {
        let vs = null;
        let fs = null;
        WebGLUtility.loadFile('./shader/main.vert')
        .then((vertexShaderSource) => {
          vs = WebGLUtility.createShaderObject(gl, vertexShaderSource, gl.VERTEX_SHADER);
          return WebGLUtility.loadFile('./shader/main.frag');
        })
        .then((fragmentShaderSource) => {
          fs = WebGLUtility.createShaderObject(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
          this.program = WebGLUtility.createProgramObject(gl, vs, fs);

          // 画像の読み込み
          return WebGLUtility.loadImage('./sample.jpg');
        })
        .then((image) => {
          // 読み込んだ画像からテクスチャを生成
          this.texture = WebGLUtility.createTexture(gl, image);

          // Promise を解決
          resolve();
        });
      }
    });
  }

  /**
   * 頂点属性（頂点ジオメトリ）のセットアップを行う
   */
  setupGeometry() {
    // プレーンジオメトリの情報を取得
    const size = 2.0;
    const color = [1.0, 1.0, 1.0, 1.0];
    this.planeGeometry = WebGLGeometry.plane(size, size, color);

    // VBO と IBO を生成する
    this.planeVBO = [
      WebGLUtility.createVBO(this.gl, this.planeGeometry.position),
      WebGLUtility.createVBO(this.gl, this.planeGeometry.normal),
      WebGLUtility.createVBO(this.gl, this.planeGeometry.color),
      WebGLUtility.createVBO(this.gl, this.planeGeometry.texCoord),
    ];
    this.planeIBO = WebGLUtility.createIBO(this.gl, this.planeGeometry.index);
  }

  /**
   * 頂点属性のロケーションに関するセットアップを行う
   */
  setupLocation() {
    const gl = this.gl;
    // attribute location の取得
    this.attributeLocation = [
      gl.getAttribLocation(this.program, 'position'),
      gl.getAttribLocation(this.program, 'normal'),
      gl.getAttribLocation(this.program, 'color'),
      gl.getAttribLocation(this.program, 'texCoord'),
    ];
    // attribute のストライド
    this.attributeStride = [
      3,
      3,
      4,
      2,
    ];
    // uniform location の取得
    this.uniformLocation = {
      mvpMatrix: gl.getUniformLocation(this.program, 'mvpMatrix'),
      normalMatrix: gl.getUniformLocation(this.program, 'normalMatrix'),
      textureUnit: gl.getUniformLocation(this.program, 'textureUnit'),
      useTexture: gl.getUniformLocation(this.program, 'useTexture'),
      globalAlpha: gl.getUniformLocation(this.program, 'globalAlpha'), // グローバルアルファ @@@
    };
  }

  /**
   * レンダリングのためのセットアップを行う
   */
  setupRendering() {
    const gl = this.gl;
    // ビューポートを設定する
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    // クリアする色と深度を設定する
    gl.clearColor(0.3, 0.3, 0.3, 1.0);
    gl.clearDepth(1.0);
    // 色と深度をクリアする
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // ブレンドの設定 @@@
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
    // その他の設定例（加算合成＋アルファで透明）
    // gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE);
  }

  /**
   * 描画を開始する
   */
  start() {
    // レンダリング開始時のタイムスタンプを取得しておく
    this.startTime = Date.now();
    // レンダリングを行っているフラグを立てておく
    this.isRender = true;
    // レンダリングの開始
    this.render();
  }

  /**
   * 描画を停止する
   */
  stop() {
    this.isRender = false;
  }

  /**
   * レンダリングを行う
   */
  render() {
    const gl = this.gl;
    const m4 = WebGLMath.Mat4;
    const v3 = WebGLMath.Vec3;

    // レンダリングのフラグの状態を見て、requestAnimationFrame を呼ぶか決める
    if (this.isRender === true) {
      requestAnimationFrame(this.render);
    }

    // 現在までの経過時間
    const nowTime = (Date.now() - this.startTime) * 0.001;

    // レンダリングのセットアップ
    this.setupRendering();

    // ビュー・プロジェクション座標変換行列
    const v = this.camera.update();
    const fovy   = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near   = 0.1
    const far    = 10.0;
    const p = m4.perspective(fovy, aspect, near, far);
    const vp = m4.multiply(p, v);

    // VBO と IBO を設定
    WebGLUtility.enableBuffer(gl, this.planeVBO, this.attributeLocation, this.attributeStride, this.planeIBO);

    // テクスチャのバインド
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    // プログラムオブジェクトを選択
    gl.useProgram(this.program);

    // 汎用的な uniform 変数は先にまとめて設定しておく
    gl.uniform1i(this.uniformLocation.textureUnit, 0);
    gl.uniform1i(this.uniformLocation.useTexture, this.textureVisibility);
    gl.uniform1f(this.uniformLocation.globalAlpha, this.globalAlpha); // グローバルアルファ @@@

    // １つ目のポリゴンを描画する @@@
    {
      // モデル座標変換行列（１つ目は奥）
      const m = m4.translate(m4.identity(), v3.create(0.0, 0.0, -0.5));
      const mvp = m4.multiply(vp, m);
      const normalMatrix = m4.transpose(m4.inverse(m));
      gl.uniformMatrix4fv(this.uniformLocation.mvpMatrix, false, mvp);
      gl.uniformMatrix4fv(this.uniformLocation.normalMatrix, false, normalMatrix);
      gl.drawElements(gl.TRIANGLES, this.planeGeometry.index.length, gl.UNSIGNED_SHORT, 0);
    }

    // ２つ目のポリゴンを描画する @@@
    {
      // モデル座標変換行列（２つ目は手前）
      const m = m4.translate(m4.identity(), v3.create(0.0, 0.0, 0.5));
      const mvp = m4.multiply(vp, m);
      const normalMatrix = m4.transpose(m4.inverse(m));
      gl.uniformMatrix4fv(this.uniformLocation.mvpMatrix, false, mvp);
      gl.uniformMatrix4fv(this.uniformLocation.normalMatrix, false, normalMatrix);
      gl.drawElements(gl.TRIANGLES, this.planeGeometry.index.length, gl.UNSIGNED_SHORT, 0);
    }
  }
}

