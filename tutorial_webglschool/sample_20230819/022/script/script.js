// = 022 ======================================================================
// フレームバッファを活用すると、一度レンダリングしたシーンに対してブラー（つま
// りボカシ）を掛けることができます。
// 一般に、ボカシは非常にコストの高いポストエフェクトなので、様々な軽量化の手法
// が研究されていますが、ここでは「縦と横を別々にぼかすことで軽量化する」という
// テクニックを使っています。
// フレームバッファが２つ必要になることや、頻繁に行われるバインド・アンバインド
// がどうしても難しく感じるかと思いますが、落ち着いて手順を確認していきましょう。
// 順番としては、１．オフスクリーンレンダリング → ２．横方向ブラー → ３．縦方
// 向ブラー（この描画結果が画面に出る）、となります。
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
    // ブラーの強さ @@@
    pane
      .addBlade({
        view: "slider",
        label: "strength",
        min: 1.0,
        max: 200.0,
        value: 100.0,
      })
      .on("change", (v) => {
        app.calcGaussWeight(v.value);
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
     * プログラムオブジェクト
     * @type {WebGLProgram}
     */
    this.renderProgram = null;
    this.offscreenProgram = null;
    /**
     * attribute 変数のロケーションを保持する配列
     * @type {Array.<number>}
     */
    this.renderAttLocation = null;
    this.offscreenAttLocation = null;
    /**
     * attribute 変数のストライドの配列
     * @type {Array.<number>}
     */
    this.renderAttStride = null;
    this.offscreenAttStride = null;
    /**
     * uniform 変数のロケーションを保持するオブジェクト
     * @type {object.<WebGLUniformLocation>}
     */
    this.renderUniLocation = null;
    this.offscreenUniLocation = null;
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
     * sphere ジオメトリの情報を保持するオブジェクト
     * @type {object}
     */
    this.sphereGeometry = null;
    /**
     * sphere ジオメトリの VBO の配列
     * @type {Array.<WebGLBuffer>}
     */
    this.sphereVBO = null;
    /**
     * sphere ジオメトリの IBO
     * @type {WebGLBuffer}
     */
    this.sphereIBO = null;
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
     * フレームバッファ関連オブジェクトの格納用（配列） @@@
     * @type {Array.<object>}
     */
    this.framebufferArray = [];
    /**
     * レンダリングを行うかどうかのフラグ
     * @type {boolean}
     */
    this.isRender = false;
    /**
     * スフィアに貼るテクスチャ格納用
     * @type {WebGLTexture}
     */
    this.texture = null;
    /**
     * ガウシアンブラーの強さ @@@
     * @type {number}
     */
    this.gaussStrength = 100.0;
    /**
     * ガウス係数の配列 @@@
     * @type {Array.<number>}
     */
    this.gaussWeight = [];

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

    // 最初に一度リサイズ処理を行っておく（ここで結果的にフレームバッファが生成される）
    this.resize();

    // ガウス係数を最初に一度求めておく @@@
    this.calcGaussWeight(this.gaussStrength);

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

    // フレームバッファもサイズをキャンバスに合わせる
    if (this.framebufferArray != null) {
      this.framebufferArray.forEach((buffer) => {
        WebGLUtility.deleteFramebuffer(
          this.gl,
          buffer.framebuffer,
          buffer.renderbuffer,
          buffer.texture
        );
      });
    }

    // 削除したあとに新しくフレームバッファを生成する
    this.framebufferArray = [
      WebGLUtility.createFramebuffer(
        this.gl,
        this.canvas.width,
        this.canvas.height
      ),
      WebGLUtility.createFramebuffer(
        this.gl,
        this.canvas.width,
        this.canvas.height
      ),
    ];
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
            this.offscreenProgram = WebGLUtility.createProgramObject(
              gl,
              vs,
              fs
            );
            return WebGLUtility.loadImage("./sample.jpg");
          })
          .then((image) => {
            this.texture = WebGLUtility.createTexture(gl, image);
            // Promise を解決
            resolve();
          });
      }
    });
  }

  /**
   * ガウス係数を算出する @@@
   * @param {number} strength - ブラーの強さ
   */
  calcGaussWeight(strength) {
    // 参照するピクセルをどういう比率で混ぜ合わせるか（ガウス関数）配列で返ってくる
    // この変数 RESOLUTION がシェーダのなかでループする回数と同じになるようにする
    const RESOLUTION = 20;

    // ガウス係数を算出
    const weight = [];
    let total = 0.0;
    for (let i = 0; i < RESOLUTION; ++i) {
      const r = 1.0 + 2.0 * i;
      let c = Math.exp((-0.5 * (r * r)) / strength);
      weight[i] = c;
      if (i > 0) {
        c *= 2.0;
      }
      total += c;
    }

    // ガウシアンブラーの強さ
    this.gaussStrength = strength;

    // ウェイト総量で割って正規化したものを使う
    this.gaussWeight = weight.map((v) => {
      return v / total;
    });
  }

  /**
   * 頂点属性（頂点ジオメトリ）のセットアップを行う
   */
  setupGeometry() {
    const color = [1.0, 1.0, 1.0, 1.0];

    // plane は this.renderProgram と一緒に使う
    const size = 2.0;
    this.planeGeometry = WebGLGeometry.plane(size, size, color);
    this.planeVBO = [
      WebGLUtility.createVBO(this.gl, this.planeGeometry.position),
      WebGLUtility.createVBO(this.gl, this.planeGeometry.texCoord),
    ];
    this.planeIBO = WebGLUtility.createIBO(this.gl, this.planeGeometry.index);

    // sphere は this.offscreenProgram と一緒に使う
    const segment = 64;
    const radius = 1.0;
    this.sphereGeometry = WebGLGeometry.sphere(segment, segment, radius, color);
    this.sphereVBO = [
      WebGLUtility.createVBO(this.gl, this.sphereGeometry.position),
      WebGLUtility.createVBO(this.gl, this.sphereGeometry.normal),
      WebGLUtility.createVBO(this.gl, this.sphereGeometry.texCoord),
    ];
    this.sphereIBO = WebGLUtility.createIBO(this.gl, this.sphereGeometry.index);
  }

  /**
   * 頂点属性のロケーションに関するセットアップを行う
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
      textureUnit: gl.getUniformLocation(this.renderProgram, "textureUnit"), // テクスチャユニット
      resolution: gl.getUniformLocation(this.renderProgram, "resolution"), // 解像度
      horizontal: gl.getUniformLocation(this.renderProgram, "horizontal"), // 水平に処理するかどうか @@@
      weight: gl.getUniformLocation(this.renderProgram, "weight"), // ガウス係数の配列 @@@
    };

    // オフスクリーン用のセットアップ
    this.offscreenAttLocation = [
      gl.getAttribLocation(this.offscreenProgram, "position"),
      gl.getAttribLocation(this.offscreenProgram, "normal"),
      gl.getAttribLocation(this.offscreenProgram, "texCoord"),
    ];
    this.offscreenAttStride = [3, 3, 2];
    this.offscreenUniLocation = {
      mvpMatrix: gl.getUniformLocation(this.offscreenProgram, "mvpMatrix"), // MVP 行列
      normalMatrix: gl.getUniformLocation(
        this.offscreenProgram,
        "normalMatrix"
      ), // 法線変換用行列
      lightVector: gl.getUniformLocation(this.offscreenProgram, "lightVector"), // ライトベクトル
      textureUnit: gl.getUniformLocation(this.offscreenProgram, "textureUnit"), // テクスチャユニット
    };
  }

  /**
   * 一番最初のオフスクリーンレンダリングのためのセットアップを行う @@@
   * ※まず最初にフレームバッファ[0] に普通にシーンをレンダリングする
   */
  setupFirstOffscreenRendering() {
    const gl = this.gl;
    // ０番目のフレームバッファをバインドして描画の対象とする
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebufferArray[0].framebuffer);
    // ビューポートを設定する
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    // クリアする色と深度を設定する
    gl.clearColor(1.0, 0.6, 0.9, 1.0);
    gl.clearDepth(1.0);
    // 色と深度をクリアする
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // プログラムオブジェクトを選択
    gl.useProgram(this.offscreenProgram);
    // スフィアに貼るテクスチャをバインドする
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
  }

  /**
   * 二番目のオフスクリーンレンダリングのためのセットアップを行う @@@
   * ※フレームバッファ[1] に対して横方向ブラーを掛けた結果をレンダリングする
   */
  setupSecondOffscreenRendering() {
    const gl = this.gl;
    // １番目のフレームバッファをバインドして描画の対象とする
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebufferArray[1].framebuffer);
    // 色と深度をクリアする
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // プログラムオブジェクトを選択
    gl.useProgram(this.renderProgram);
    // setupFirstOffscreenRendering で描画した結果をバインドする
    gl.bindTexture(gl.TEXTURE_2D, this.framebufferArray[0].texture);
  }

  /**
   * 最終レンダリングのためのセットアップを行う @@@
   */
  setupFinalRendering() {
    const gl = this.gl;
    // フレームバッファのバインドを解除する
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // 色と深度をクリアする
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // setupSecondOffscreenRendering で描画した結果をバインドする
    gl.bindTexture(gl.TEXTURE_2D, this.framebufferArray[1].texture);
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

    // - 一番最初のオフスクリーンレンダリング ---------------------------------
    {
      // レンダリングのセットアップ
      this.setupFirstOffscreenRendering();

      // オフスクリーンシーン用のビュー行列を作る
      const v = this.camera.update();
      // オフスクリーンシーン用のプロジェクション行列を作る
      const fovy = 45;
      const aspect = window.innerWidth / window.innerHeight;
      const near = 0.1;
      const far = 10.0;
      const p = m4.perspective(fovy, aspect, near, far);
      // オフスクリーン用のビュー・プロジェクション行列
      const vp = m4.multiply(p, v);
      // オフスクリーン用のモデル行列（ここでは回転＋上下移動、適用順序に注意！）
      const vertical = Math.sin(nowTime) * 0.5;
      const m = m4.translate(m4.identity(), v3.create(0.0, vertical, 0.0));
      // オフスクリーン用の MVP 行列
      const mvp = m4.multiply(vp, m);
      // オフスクリーン用の法線変換行列
      const normalMatrix = m4.transpose(m4.inverse(m));

      // VBO と IBO
      WebGLUtility.enableBuffer(
        gl,
        this.sphereVBO,
        this.offscreenAttLocation,
        this.offscreenAttStride,
        this.sphereIBO
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
      gl.uniform1i(this.offscreenUniLocation.textureUnit, 0);
      // 描画
      gl.drawElements(
        gl.TRIANGLES,
        this.sphereGeometry.index.length,
        gl.UNSIGNED_SHORT,
        0
      );
    }
    // ------------------------------------------------------------------------

    // - 二番目のオフスクリーンレンダリング -----------------------------------
    {
      // レンダリングのセットアップ
      this.setupSecondOffscreenRendering();

      // VBO と IBO
      WebGLUtility.enableBuffer(
        gl,
        this.planeVBO,
        this.renderAttLocation,
        this.renderAttStride,
        this.planeIBO
      );
      // シェーダに各種パラメータを送る
      gl.uniform1i(this.renderUniLocation.textureUnit, 0);
      gl.uniform2fv(this.renderUniLocation.resolution, [
        this.canvas.width,
        this.canvas.height,
      ]);
      gl.uniform1i(this.renderUniLocation.horizontal, true); // 水平に処理するかどうか
      gl.uniform1fv(this.renderUniLocation.weight, this.gaussWeight); // ガウス係数の配列
      // 描画
      gl.drawElements(
        gl.TRIANGLES,
        this.planeGeometry.index.length,
        gl.UNSIGNED_SHORT,
        0
      );
    }
    // ------------------------------------------------------------------------

    // - 最終シーンのレンダリング ---------------------------------------------
    {
      // レンダリングのセットアップ
      this.setupFinalRendering();

      // シェーダに各種パラメータを送る
      gl.uniform1i(this.renderUniLocation.horizontal, false); // 水平に処理するかどうか
      // 描画
      gl.drawElements(
        gl.TRIANGLES,
        this.planeGeometry.index.length,
        gl.UNSIGNED_SHORT,
        0
      );
    }
    // ------------------------------------------------------------------------
  }
}
