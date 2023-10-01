// = 017 ======================================================================
// CG の世界に欠かせない概念の１つに「ポストエフェクト」または「ポストプロセス」
// と呼ばれる概念があります。
// これを実現するための機構として WebGL にはフレームバッファと呼ばれるオブジェク
// トと、それを利用する API が用意されています。フレームバッファを用いれば、一度
// 完成したグラフィックスに対して、事後処理を施して質感などを変化させることがで
// きるようになり、表現力が大幅に強化されます。
// three.js で言うと、WebGLRenderTarget に相当する機能だといえます。
// WebGL あるあるですが、初期化処理はそれなりに手続きが多く複雑です。
// また、ポストエフェクトを実現するためには必然的にシェーダを同時に２組利用する
// ことになるので、それに関連する諸々の手続きも一気に増えます。落ち着いて読み解
// いていきましょう。
// ============================================================================

import { WebGLUtility } from "./webgl.js";
import { WebGLMath } from "./math.js";
import { WebGLGeometry } from "./geometry.js";
import { WebGLOrbitCamera } from "./camera.js";
import "../../lib/tweakpane-3.1.0.min.js";

window.addEventListener(
  "DOMContentLoaded",
  () => {
    const app = new App();
    app.init();
    app.load().then(() => {
      app.setupGeometry();
      app.setupLocation();
      app.start();
    });

    // Tweakpane を使った GUI の設定
    const pane = new Tweakpane.Pane();
    const parameter = {
      rotation: false,
    };
    // フレームバッファ内のトーラスを回すかどうか @@@
    pane.addInput(parameter, "rotation").on("change", (v) => {
      app.setRotation(v.value);
    });
  },
  false
);

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
     * プログラムオブジェクト @@@
     * @type {WebGLProgram}
     */
    this.renderProgram = null; // 最終的な描画結果（画面に出る方）
    this.offscreenProgram = null; // オフスクリーンレンダリング
    /**
     * attribute 変数のロケーションを保持する配列 @@@
     * @type {Array.<number>}
     */
    this.renderAttLocation = null;
    this.offscreenAttLocation = null;
    /**
     * attribute 変数のストライドの配列 @@@
     * @type {Array.<number>}
     */
    this.renderAttStride = null;
    this.offscreenAttStride = null;
    /**
     * uniform 変数のロケーションを保持するオブジェクト @@@
     * @type {object.<WebGLUniformLocation>}
     */
    this.renderUniLocation = null;
    this.offscreenUniLocation = null;
    /**
     * cube ジオメトリの情報を保持するオブジェクト
     * @type {object}
     */
    this.cubeGeometry = null;
    /**
     * cube ジオメトリの VBO の配列
     * @type {Array.<WebGLBuffer>}
     */
    this.cubeVBO = null;
    /**
     * cube ジオメトリの IBO
     * @type {WebGLBuffer}
     */
    this.cubeIBO = null;
    /**
     * torus ジオメトリの情報を保持するオブジェクト
     * @type {object}
     */
    this.torusGeometry = null;
    /**
     * torus ジオメトリの VBO の配列
     * @type {Array.<WebGLBuffer>}
     */
    this.torusVBO = null;
    /**
     * torus ジオメトリの IBO
     * @type {WebGLBuffer}
     */
    this.torusIBO = null;
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
     * フレームバッファ関連オブジェクトの格納用 @@@
     * @type {object}
     */
    this.framebufferObject = null;
    /**
     * フレームバッファの大きさ @@@
     * @type {WebGLTexture}
     */
    this.framebufferSize = 128; // 効果をわかりやすくするためにあえて低解像度にしています
    /**
     * レンダリングを行うかどうかのフラグ
     * @type {boolean}
     */
    this.isRender = false;
    /**
     * フレームバッファに描画されるトーラスを回転するかどうか @@@
     * @type {boolean}
     */
    this.isRotation = false;

    // this を固定するためのバインド処理
    this.resize = this.resize.bind(this);
    this.render = this.render.bind(this);
  }

  /**
   * 初期化処理を行う
   */
  init() {
    // canvas エレメントの取得と WebGL コンテキストの初期化
    this.canvas = document.getElementById("webgl-canvas");
    this.gl = WebGLUtility.createWebGLContext(this.canvas);

    // カメラ制御用インスタンスを生成する
    const cameraOption = {
      distance: 5.0, // Z 軸上の初期位置までの距離
      min: 1.0, // カメラが寄れる最小距離
      max: 10.0, // カメラが離れられる最大距離
      move: 2.0, // 右ボタンで平行移動する際の速度係数
    };
    this.camera = new WebGLOrbitCamera(this.canvas, cameraOption);

    // フレームバッファを生成する @@@
    this.framebufferObject = WebGLUtility.createFramebuffer(
      this.gl,
      this.framebufferSize,
      this.framebufferSize
    );

    // 最初に一度リサイズ処理を行っておく
    this.resize();

    // リサイズイベントの設定
    window.addEventListener("resize", this.resize, false);

    // バックフェイスカリングと深度テストは初期状態で有効
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);
  }

  /**
   * リサイズ処理
   */
  resize() {
    this.canvas.width = window.innerWidth;
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
        const error = new Error("not initialized");
        reject(error);
      } else {
        let vs = null;
        let fs = null;
        WebGLUtility.loadFile("./shader/render.vert")
          .then((vertexShaderSource) => {
            vs = WebGLUtility.createShaderObject(
              gl,
              vertexShaderSource,
              gl.VERTEX_SHADER
            );
            return WebGLUtility.loadFile("./shader/render.frag");
          })
          .then((fragmentShaderSource) => {
            fs = WebGLUtility.createShaderObject(
              gl,
              fragmentShaderSource,
              gl.FRAGMENT_SHADER
            );
            // レンダリング用プログラムオブジェクト @@@
            this.renderProgram = WebGLUtility.createProgramObject(gl, vs, fs);
            return WebGLUtility.loadFile("./shader/offscreen.vert");
          })
          .then((vertexShaderSource) => {
            vs = WebGLUtility.createShaderObject(
              gl,
              vertexShaderSource,
              gl.VERTEX_SHADER
            );
            return WebGLUtility.loadFile("./shader/offscreen.frag");
          })
          .then((fragmentShaderSource) => {
            fs = WebGLUtility.createShaderObject(
              gl,
              fragmentShaderSource,
              gl.FRAGMENT_SHADER
            );
            // オフスクリーン用プログラムオブジェクト @@@
            this.offscreenProgram = WebGLUtility.createProgramObject(
              gl,
              vs,
              fs
            );
            // Promise を解決
            resolve();
          });
      }
    });
  }

  /**
   * フレームバッファに描画されるトーラスの回転フラグを設定する @@@
   * @param {boolean} flag - 設定する値
   */
  setRotation(flg) {
    this.isRotation = flg;
  }

  /**
   * 頂点属性（頂点ジオメトリ）のセットアップを行う
   */
  setupGeometry() {
    const color = [1.0, 1.0, 1.0, 1.0];

    // cube は this.renderProgram と一緒に使う @@@
    const size = 2.0;
    this.cubeGeometry = WebGLGeometry.cube(size, color);
    this.cubeVBO = [
      WebGLUtility.createVBO(this.gl, this.cubeGeometry.position),
      WebGLUtility.createVBO(this.gl, this.cubeGeometry.texCoord),
    ];
    this.cubeIBO = WebGLUtility.createIBO(this.gl, this.cubeGeometry.index);

    // torus は this.offscreenProgram と一緒に使う @@@
    const segment = 64;
    const inner = 0.4;
    const outer = 0.8;
    this.torusGeometry = WebGLGeometry.torus(
      segment,
      segment,
      inner,
      outer,
      color
    );
    this.torusVBO = [
      WebGLUtility.createVBO(this.gl, this.torusGeometry.position),
      WebGLUtility.createVBO(this.gl, this.torusGeometry.normal),
    ];
    this.torusIBO = WebGLUtility.createIBO(this.gl, this.torusGeometry.index);
  }

  /**
   * 頂点属性のロケーションに関するセットアップを行う @@@
   */
  setupLocation() {
    const gl = this.gl;
    // レンダリング用のセットアップ
    this.renderAttLocation = [
      gl.getAttribLocation(this.renderProgram, "position"),
      gl.getAttribLocation(this.renderProgram, "texCoord"),
    ];
    this.renderAttStride = [3, 2];
    this.renderUniLocation = {
      mvpMatrix: gl.getUniformLocation(this.renderProgram, "mvpMatrix"), // MVP 行列
      textureUnit: gl.getUniformLocation(this.renderProgram, "textureUnit"), // テクスチャユニット
    };

    // オフスクリーン用のセットアップ
    this.offscreenAttLocation = [
      gl.getAttribLocation(this.offscreenProgram, "position"),
      gl.getAttribLocation(this.offscreenProgram, "normal"),
    ];
    this.offscreenAttStride = [3, 3];
    this.offscreenUniLocation = {
      mvpMatrix: gl.getUniformLocation(this.offscreenProgram, "mvpMatrix"), // MVP 行列
      normalMatrix: gl.getUniformLocation(
        this.offscreenProgram,
        "normalMatrix"
      ), // 法線変換用行列
      lightVector: gl.getUniformLocation(this.offscreenProgram, "lightVector"), // ライトベクトル
    };
  }

  /**
   * レンダリングのためのセットアップを行う @@@
   */
  setupRendering() {
    const gl = this.gl;
    // フレームバッファのバインドを解除する
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // ビューポートを設定する
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    // クリアする色と深度を設定する
    gl.clearColor(0.3, 0.3, 0.3, 1.0);
    gl.clearDepth(1.0);
    // 色と深度をクリアする
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // プログラムオブジェクトを選択
    gl.useProgram(this.renderProgram);
    // フレームバッファにアタッチされているテクスチャをバインドする
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.framebufferObject.texture);
  }

  /**
   * オフスクリーンレンダリングのためのセットアップを行う @@@
   */
  setupOffscreenRendering() {
    const gl = this.gl;
    // フレームバッファをバインドして描画の対象とする
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebufferObject.framebuffer);
    // ビューポートを設定する
    gl.viewport(0, 0, this.framebufferSize, this.framebufferSize);
    // クリアする色と深度を設定する
    gl.clearColor(1.0, 0.6, 0.9, 1.0);
    gl.clearDepth(1.0);
    // 色と深度をクリアする
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // プログラムオブジェクトを選択
    gl.useProgram(this.offscreenProgram);
  }

  /**
   * 描画を開始する
   */
  start() {
    const gl = this.gl;
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

    // １フレームの間に２度レンダリングする @@@

    // - オフスクリーンレンダリング -------------------------------------------
    {
      // レンダリングのセットアップ
      this.setupOffscreenRendering();

      // オフスクリーンシーン用のカメラの情報からビュー行列を作る
      const cameraPosition = v3.create(0.0, 0.0, 5.0);
      const cameraCenter = v3.create(0.0, 0.0, 0.0);
      const cameraUpDirection = v3.create(0.0, 1.0, 0.0);
      const v = m4.lookAt(cameraPosition, cameraCenter, cameraUpDirection);
      // オフスクリーンシーン用のプロジェクション行列を作る
      const fovy = 45;
      const aspect = 1.0; // フレームバッファは正方形！
      const near = 0.1;
      const far = 10.0;
      const p = m4.perspective(fovy, aspect, near, far);
      // オフスクリーン用のビュー・プロジェクション行列
      const vp = m4.multiply(p, v);
      // オフスクリーン用のモデル行列（ここでは回転＋上下移動、適用順序に注意！）
      const vertical = Math.sin(nowTime) * 0.5;
      let m = m4.translate(m4.identity(), v3.create(0.0, vertical, 0.0));
      if (this.isRotation === true) {
        m = m4.rotate(m, nowTime, v3.create(1.0, 1.0, 0.0));
      }
      // オフスクリーン用の MVP 行列
      const mvp = m4.multiply(vp, m);
      // オフスクリーン用の法線変換行列
      const normalMatrix = m4.transpose(m4.inverse(m));

      // VBO と IBO
      WebGLUtility.enableBuffer(
        gl,
        this.torusVBO,
        this.offscreenAttLocation,
        this.offscreenAttStride,
        this.torusIBO
      );
      // シェーダに各種パラメータを送る
      gl.uniformMatrix4fv(this.offscreenUniLocation.mvpMatrix, false, mvp);
      gl.uniformMatrix4fv(
        this.offscreenUniLocation.normalMatrix,
        false,
        normalMatrix
      );
      gl.uniform3fv(
        this.offscreenUniLocation.lightVector,
        v3.create(1.0, 1.0, 1.0)
      );
      // 描画
      gl.drawElements(
        gl.TRIANGLES,
        this.torusGeometry.index.length,
        gl.UNSIGNED_SHORT,
        0
      );
    }
    // ------------------------------------------------------------------------

    // - 最終シーンのレンダリング ---------------------------------------------
    {
      // レンダリングのセットアップ
      this.setupRendering();

      // 最終シーン用のビュー・プロジェクション行列
      const v = this.camera.update();
      const fovy = 45;
      const aspect = window.innerWidth / window.innerHeight;
      const near = 0.1;
      const far = 10.0;
      const p = m4.perspective(fovy, aspect, near, far);
      const vp = m4.multiply(p, v);
      // 最終シーン用のモデル行列（Y 軸回転）
      const m = m4.rotate(
        m4.identity(),
        nowTime * 0.5,
        v3.create(0.0, 1.0, 0.0)
      );
      // 最終シーン用の MVP 行列
      const mvp = m4.multiply(vp, m);

      // VBO と IBO
      WebGLUtility.enableBuffer(
        gl,
        this.cubeVBO,
        this.renderAttLocation,
        this.renderAttStride,
        this.cubeIBO
      );
      // シェーダに各種パラメータを送る
      gl.uniformMatrix4fv(this.renderUniLocation.mvpMatrix, false, mvp);
      gl.uniform1i(this.renderUniLocation.textureUnit, 0);
      // 描画
      gl.drawElements(
        gl.TRIANGLES,
        this.cubeGeometry.index.length,
        gl.UNSIGNED_SHORT,
        0
      );
    }
    // ------------------------------------------------------------------------
  }
}
