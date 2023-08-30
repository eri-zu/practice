// = 006 ======================================================================
// WebGL で 3DCG を描画するとき、魔法のような謎の力で 3D の描画結果が作られるわ
// けではなく、単純に「頂点を 3D に見えるように動かす」ことで、CG は描かれます。
// しかし、3D に見えるように動かすと言っても、より具体的にはいったいどのような処
// 理を行えばよいのでしょうか。
// ここで登場するのが行列です。
// 行列は、大量の頂点を一気に変換するのに適した特性を持っており、WebGL では行列
// の情報を uniform 変数としてシェーダに送ることで、シェーダ内で（つまり GPU で）
// 大量の頂点を一気に変換します。（実際には、頂点シェーダが頂点１つ１つに対して
// 呼び出されることで一律に変換が適用されます）
// three.js の場合は、各種 Object3D 系のオブジェクトが position や rotation など
// のプロパティを持っていて、これが最終的には行列を生成するのに使われます。一方、
// ネイティブな WebGL 実装では当然自前で行列を処理する必要があります。
// 今回から場面が三次元的に描画されるようになりますので、深度値のクリアといった、
// 3D 特有の処理も一部増えています。
// 特に最初のうちは、やることが多く、ひどく複雑に感じられるかもしれません。１つ
// １つ丁寧に、手順を追っていきましょう。
// ============================================================================

// モジュールを読み込み
import { WebGLUtility } from "./webgl.js";
import { WebGLMath } from "./math.js";
import { WebGLGeometry } from "./geometry.js";

// ドキュメントの読み込みを待って処理を行う
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
     * レンダリングを行うかどうかのフラグ
     * @type {boolean}
     */
    this.isRender = false;

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

    // 最初に一度リサイズ処理を行っておく @@@
    this.resize();

    // リサイズイベントの設定 @@@
    window.addEventListener("resize", this.resize, false);
  }

  /**
   * リサイズ処理 @@@
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
        WebGLUtility.loadFile("./shader/main.vert")
          .then((vertexShaderSource) => {
            vs = WebGLUtility.createShaderObject(
              gl,
              vertexShaderSource,
              gl.VERTEX_SHADER
            );
            return WebGLUtility.loadFile("./shader/main.frag");
          })
          .then((fragmentShaderSource) => {
            fs = WebGLUtility.createShaderObject(
              gl,
              fragmentShaderSource,
              gl.FRAGMENT_SHADER
            );
            this.program = WebGLUtility.createProgramObject(gl, vs, fs);
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
    // 板ポリゴンのジオメトリ情報を取得
    const width = 1.0;
    const height = 0.5;
    const color = [1.0, 0.0, 0.0, 1.0];
    this.planeGeometry = WebGLGeometry.plane(width, height, color);

    // VBO と IBO を生成する
    this.planeVBO = [
      WebGLUtility.createVBO(this.gl, this.planeGeometry.position),
      WebGLUtility.createVBO(this.gl, this.planeGeometry.color),
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
      gl.getAttribLocation(this.program, "position"),
      gl.getAttribLocation(this.program, "color"),
    ];
    // attribute のストライド
    this.attributeStride = [3, 4];
    // uniform location の取得 @@@
    this.uniformLocation = {
      mvpMatrix: gl.getUniformLocation(this.program, "mvpMatrix"),
      time: gl.getUniformLocation(this.program, "time"),
    };
  }

  /**
   * レンダリングのためのセットアップを行う
   */
  setupRendering() {
    const gl = this.gl;
    // ビューポートを設定する
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    // クリアする色と深度を設定する @@@
    gl.clearColor(0.3, 0.3, 0.3, 1.0);
    gl.clearDepth(1.0);
    // 色と深度をクリアする @@@
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
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

    // レンダリングのフラグの状態を見て、requestAnimationFrame を呼ぶか決める
    if (this.isRender === true) {
      requestAnimationFrame(this.render);
    }

    // 現在までの経過時間
    const nowTime = (Date.now() - this.startTime) * 0.001;

    // レンダリングのセットアップ
    this.setupRendering();

    // - 各種行列を生成する @@@ ------------------------------------------------
    const m4 = WebGLMath.Mat4;
    const v3 = WebGLMath.Vec3;

    // モデル座標変換行列
    // 空の配列が作られ、それが単位行列化され、そこに回転効果が加えられる
    const rotateAxis = v3.create(0.0, 1.0, 0.0); // Y 軸回転を掛ける
    let m = m4.rotate(m4.identity(), nowTime, rotateAxis); // 時間の経過が回転量 ※identityで単位行列を作成
    m = m4.scale(m, [2.0, 2.0, 2.0]);

    // ビュー座標変換行列（視点、注視点、カメラの上方向を元にビュー行列を作る）
    const eye = v3.create(0.0, 0.0, 3.0); // カメラの位置
    const center = v3.create(0.0, 0.0, 0.0); // カメラの注視点
    const upDirection = v3.create(0.0, 1.0, 0.0); // カメラの天面の向き
    const v = m4.lookAt(eye, center, upDirection);

    // プロジェクション座標変換行列
    const fovy = 45; // 視野角（度数）
    const aspect = window.innerWidth / window.innerHeight; // アスペクト比
    const near = 0.1; // ニア・クリップ面までの距離
    const far = 10.0; // ファー・クリップ面までの距離
    const p = m4.perspective(fovy, aspect, near, far);

    // 行列を乗算して MVP 行列を生成する（掛ける順序に注意）
    // ※スクールのサンプルは列優先で行列を処理しています
    const vp = m4.multiply(p, v);
    const mvp = m4.multiply(vp, m);
    // ------------------------------------------------------------------------

    // プログラムオブジェクトを選択
    gl.useProgram(this.program);

    // ロケーションを指定して、uniform 変数の値を更新する
    gl.uniformMatrix4fv(this.uniformLocation.mvpMatrix, false, mvp);
    gl.uniform1f(this.uniformLocation.time, nowTime);

    // VBO と IBO を設定し、描画する
    WebGLUtility.enableBuffer(
      gl,
      this.planeVBO,
      this.attributeLocation,
      this.attributeStride,
      this.planeIBO
    );
    gl.drawElements(
      gl.TRIANGLES,
      this.planeGeometry.index.length,
      gl.UNSIGNED_SHORT,
      0
    );

    gl.uniformMatrix4fv(this.uniformLocation.mvpMatrix, false, m4.identity());
    gl.drawElements(
      gl.TRIANGLES,
      this.planeGeometry.index.length,
      gl.UNSIGNED_SHORT,
      0
    );

    // ★ドローコールは、ジオメトリごとにmvpを変えて、奥にあるものから呼び出す（ジオメトリごとに、mvp設定）
  }
}
