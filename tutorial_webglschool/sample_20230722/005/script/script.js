// = 005 ======================================================================
// 自力で頂点を定義して多角形を描こうとすると、同じ座標に複数の頂点を配置しなけ
// ればならないことに気がつくかもしれません。
// たとえば四角形の場合でも、３頂点で三角形が１つだとすれば、四角形を描くために
// は三角形が２つ必要なので６頂点が必要ということになります。
// 形状がシンプルな幾何学形状ならまだしも、ポリゴンの数が数万～数十万などになる
// 場合はかなりの数の座標が重複する頂点ができてしまい、データ効率が悪くなってし
// まいます。
// これに対する改善策の１つにインデックスバッファ（IBO）を用いる方法があります。
// インデックス（何個目の頂点であるかの番号）を指定してポリゴンを構成する頂点を
// 直接指定することで、一度定義した頂点を再利用可能にします。
// かつては IBO を用いたほうがパフォーマンスが良いというケースもあったようですが
// 現代では IBO の有無によるパフォーマンスの変化はほぼないと思います。
// ============================================================================

// モジュールを読み込み
import { WebGLUtility } from "./webgl.js";

// ドキュメントの読み込みが完了したら実行されるようイベントを設定する
window.addEventListener(
  "DOMContentLoaded",
  () => {
    // アプリケーションのインスタンスを初期化し、必要なリソースをロードする
    const app = new App();
    app.init();
    app.load().then(() => {
      // ジオメトリセットアップ
      app.setupGeometry();
      // ロケーションのセットアップ
      app.setupLocation();

      // セットアップが完了したら描画を開始する
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
     * uniform 変数のロケーションを保持するオブジェクト
     * @type {object.<WebGLUniformLocation>}
     */
    this.uniformLocation = null;
    /**
     * 頂点の座標を格納する配列
     * @type {Array.<number>}
     */
    this.position = null;
    /**
     * 頂点の座標を構成する要素数（ストライド）
     * @type {number}
     */
    this.positionStride = null;
    /**
     * 座標の頂点バッファ
     * @type {WebGLBuffer}
     */
    this.positionVBO = null;
    /**
     * 頂点の色を格納する配列
     * @type {Array.<number>}
     */
    this.color = null;
    /**
     * 頂点の色を構成する要素数（ストライド）
     * @type {number}
     */
    this.colorStride = null;
    /**
     * 色の頂点バッファ
     * @type {WebGLBuffer}
     */
    this.colorVBO = null;
    /**
     * 頂点インデックスの結び順を格納する配列 @@@
     * @type {Array.<number>}
     */
    this.indices = null;
    /**
     * インデックスバッファ @@@
     * @type {WebGLBuffer}
     */
    this.IBO = null;
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
    this.render = this.render.bind(this);
  }

  /**
   * 初期化処理を行う
   */
  init() {
    // canvas エレメントの取得と WebGL コンテキストの初期化
    this.canvas = document.getElementById("webgl-canvas");
    this.gl = WebGLUtility.createWebGLContext(this.canvas);

    // canvas のサイズを設定
    const size = Math.min(window.innerWidth, window.innerHeight);
    this.canvas.width = size;
    this.canvas.height = size;
  }

  /**
   * 各種リソースのロードを行う
   * @return {Promise}
   */
  load() {
    return new Promise((resolve, reject) => {
      // 変数に WebGL コンテキストを代入しておく（コード記述の最適化）
      const gl = this.gl;
      // WebGL コンテキストがあるかどうか確認する
      if (gl == null) {
        // もし WebGL コンテキストがない場合はエラーとして Promise を reject する
        const error = new Error("not initialized");
        reject(error);
      } else {
        let vs = null;
        let fs = null;
        // まず頂点シェーダのソースコードを読み込む
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
    // 頂点属性用に配列を定義
    this.position = [];
    this.color = [];

    // インデックス格納用 @@@
    this.indices = [];

    // 多角形の中心に支点となる頂点を先に１つ定義しておく
    // まず真ん中に頂点をおく
    this.position.push(0.0, 0.0, 0.0);
    this.color.push(1.0, 1.0, 1.0, 1.0);

    // 五角形になるように頂点を定義
    const split = 5;
    const scale = 0.5;
    for (let i = 0; i < split; ++i) {
      // 座標を計算
      const r = ((Math.PI * 2) / split) * i + Math.PI / 2;
      const x = Math.cos(r) * scale;
      const y = Math.sin(r) * scale;
      this.position.push(x, y, 0.0);
      // 色を計算
      const hue = (360 / split) * i;
      const hsv = App.hsva(hue, 1.0, 1.0, 1.0);
      this.color.push(hsv[0], hsv[1], hsv[2], hsv[3]);

      // インデックスを自動で割り振る場合の例（以下、直接指定の例も参考に） @@@
      // this.indices.push(0, i % split + 1, (i + 1) % split + 1);
    }

    // インデックスをひとまず５角形として直接指定する場合 @@@
    // ★頂点に自分で番号をふる→三角形一枚ずつ取りにいく（反時計周りに）
    this.indices.push(0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5, 0, 5, 1);

    // = ポリゴンの裏表 =======================================================
    // バックフェイスカリングの説明の際にも触れますが、ポリゴンには表と裏という
    // 概念があります。
    // カメラ側から見て、反時計回りとなる定義順の場合が表、時計回りとなる定義順
    // の場合が裏です。上記でインデックスを直接指定する際、ポリゴンの定義が正し
    // く表になるように定義されていることを（必要に応じて図解するなどして）確認
    // してみましょう。
    // ========================================================================

    // 各属性のストライド
    this.positionStride = 3;
    this.colorStride = 4;

    // VBO を生成
    this.positionVBO = WebGLUtility.createVBO(this.gl, this.position);
    this.colorVBO = WebGLUtility.createVBO(this.gl, this.color);

    // IBO を生成 @@@
    this.IBO = WebGLUtility.createIBO(this.gl, this.indices);
  }

  /**
   * 頂点属性のロケーションに関するセットアップを行う
   */
  setupLocation() {
    const gl = this.gl;
    // attribute location の取得
    const attPosition = gl.getAttribLocation(this.program, "position");
    const attColor = gl.getAttribLocation(this.program, "color");
    // attribute location の有効化
    WebGLUtility.enableAttribute(
      gl,
      this.positionVBO,
      attPosition,
      this.positionStride
    );
    WebGLUtility.enableAttribute(gl, this.colorVBO, attColor, this.colorStride);

    // uniform location の取得
    this.uniformLocation = {
      time: gl.getUniformLocation(this.program, "time"),
    };

    // インデックスバッファをバインドしておく @@@
    // ※厳密にはロケーションに関する処理ではないが、ここで VBO とセットで設定を行っておく
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);
  }

  /**
   * レンダリングのためのセットアップを行う
   */
  setupRendering() {
    const gl = this.gl;
    // ビューポートを設定する
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    // クリアする色を設定する（RGBA で 0.0 ～ 1.0 の範囲で指定する）
    gl.clearColor(0.3, 0.3, 0.3, 1.0);
    // 実際にクリアする（gl.COLOR_BUFFER_BIT で色をクリアしろ、という指定になる）
    gl.clear(gl.COLOR_BUFFER_BIT);
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
    // ビューポートの設定やクリア処理は毎フレーム呼び出す
    this.setupRendering();
    // 現在までの経過時間を計算し、秒単位に変換する
    const nowTime = (Date.now() - this.startTime) * 0.001;
    // プログラムオブジェクトを選択
    gl.useProgram(this.program);

    // ロケーションを指定して、uniform 変数の値を更新する（GPU に送る）
    gl.uniform1f(this.uniformLocation.time, nowTime);

    // インデックスバッファを使った場合のドローコール（描画命令） @@@
    gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
  }

  /**
   * HSV カラーを生成して配列で返す
   * @param {number} h - 色相
   * @param {number} s - 彩度
   * @param {number} v - 明度
   * @param {number} a - アルファ
   * @return {Array.<number>} RGBA を 0.0 から 1.0 の範囲に正規化した色の配列
   */
  static hsva(h, s, v, a) {
    const th = h % 360;
    const i = Math.floor(th / 60);
    const f = th / 60 - i;
    const m = v * (1 - s);
    const n = v * (1 - s * f);
    const k = v * (1 - s * (1 - f));
    const r = [v, n, m, m, k, v];
    const g = [k, v, v, n, m, m];
    const b = [m, m, k, v, v, n];
    return [r[i], g[i], b[i], a];
  }
}
