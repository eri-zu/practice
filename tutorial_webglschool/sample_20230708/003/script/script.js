
// = 003 ======================================================================
// WebGL で利用するシェーダには３つの修飾子があり、既に登場している attribute と
// varying の他に、uniform 変数と呼ばれる固有の役割を持つ変数タイプがあります。
// これまでに登場した attribute 変数が「あらかじめ VBO（頂点属性）にしておく必要
// があった」のに対し、ここで登場する uniform 変数は、あらかじめバッファにデータ
// を詰めておく必要はありません。
// 任意のタイミングで、自由に、汎用的に、CPU 側の実装（JavaScript）からシェーダ
// に対してデータを送ることができます。
// ただし、データを送る手順（利用するメソッド）などがやや難しいので、少しずつ慣
// れていきましょう。
// ============================================================================

// モジュールを読み込み
import { WebGLUtility } from './webgl.js';

// ドキュメントの読み込みが完了したら実行されるようイベントを設定する
window.addEventListener('DOMContentLoaded', () => {
  // アプリケーションのインスタンスを初期化し、必要なリソースをロードする
  const app = new App();
  app.init();
  app.load()
  .then(() => {
    // ジオメトリセットアップ
    app.setupGeometry();
    // ロケーションのセットアップ
    app.setupLocation();

    // セットアップが完了したら描画を開始する @@@
    app.start();
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
     * uniform 変数のロケーションを保持するオブジェクト @@@
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
     * レンダリング開始時のタイムスタンプ @@@
     * @type {number}
     */
    this.startTime = null;
    /**
     * レンダリングを行うかどうかのフラグ @@@
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
    this.canvas = document.getElementById('webgl-canvas');
    this.gl = WebGLUtility.createWebGLContext(this.canvas);

    // canvas のサイズを設定
    const size = Math.min(window.innerWidth, window.innerHeight);
    this.canvas.width  = size;
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
        const error = new Error('not initialized');
        reject(error);
      } else {
        let vs = null;
        let fs = null;
        // まず頂点シェーダのソースコードを読み込む
        WebGLUtility.loadFile('./shader/main.vert')
        .then((vertexShaderSource) => {
          vs = WebGLUtility.createShaderObject(gl, vertexShaderSource, gl.VERTEX_SHADER);
          return WebGLUtility.loadFile('./shader/main.frag');
        })
        .then((fragmentShaderSource) => {
          fs = WebGLUtility.createShaderObject(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
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
    // 頂点座標の定義
    this.position = [
       0.0,  0.5,  0.0, // ひとつ目の頂点の x, y, z 座標
       0.5, -0.5,  0.0, // ふたつ目の頂点の x, y, z 座標
      -0.5, -0.5,  0.0, // みっつ目の頂点の x, y, z 座標
    ];
    // 要素数は XYZ の３つ
    this.positionStride = 3;
    // VBO を生成
    this.positionVBO = WebGLUtility.createVBO(this.gl, this.position);

    // 頂点の色の定義
    this.color = [
      1.0, 0.0, 0.0, 1.0, // ひとつ目の頂点の r, g, b, a カラー
      0.0, 1.0, 0.0, 1.0, // ふたつ目の頂点の r, g, b, a カラー
      0.0, 0.0, 1.0, 1.0, // みっつ目の頂点の r, g, b, a カラー
    ];
    // 要素数は RGBA の４つ
    this.colorStride = 4;
    // VBO を生成
    this.colorVBO = WebGLUtility.createVBO(this.gl, this.color);
  }

  /**
   * 頂点属性のロケーションに関するセットアップを行う
   */
  setupLocation() {
    const gl = this.gl;
    // attribute location の取得
    const attPosition = gl.getAttribLocation(this.program, 'position');
    const attColor = gl.getAttribLocation(this.program, 'color');
    // attribute location の有効化
    WebGLUtility.enableAttribute(gl, this.positionVBO, attPosition, this.positionStride);
    WebGLUtility.enableAttribute(gl, this.colorVBO, attColor, this.colorStride);

    // uniform location の取得 @@@
    this.uniformLocation = {
      time: gl.getUniformLocation(this.program, 'time'),
    };
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
   * 描画を開始する @@@
   */
  start() {
    // レンダリング開始時のタイムスタンプを取得しておく @@@
    this.startTime = Date.now();

    // レンダリングを行っているフラグを立てておく @@@
    this.isRender = true;

    // レンダリングの開始
    this.render();
  }

  /**
   * 描画を停止する @@@
   */
  stop() {
    this.isRender = false;
  }

  /**
   * レンダリングを行う
   */
  render() {
    const gl = this.gl;

    // レンダリングのフラグの状態を見て、requestAnimationFrame を呼ぶか決める @@@
    if (this.isRender === true) {
      requestAnimationFrame(this.render);
    }

    // ビューポートの設定やクリア処理は毎フレーム呼び出す @@@
    this.setupRendering();

    // 現在までの経過時間を計算し、秒単位に変換する @@@
    const nowTime = (Date.now() - this.startTime) * 0.001;

    // プログラムオブジェクトを選択
    gl.useProgram(this.program);

    // - uniform 変数は種類応じてメソッドが変化 -------------------------------
    // シェーダプログラム（つまり GLSL）側で uniform 変数がどのように定義されて
    // いるのかによって、CPU 側から値を送る際は適切にメソッドを呼び分けないとい
    // けません。
    // 残念ながら、これは暗記するというかメソッド名のルールを覚えるしかないので、
    // 最初はちょっと難しいかもしれません。
    // 基本的なルールは「要素数＋データ型＋配列かどうか」という３つの要因によっ
    // て決まります。たとえば uniform1fv なら「１つの、float の、配列」です。
    // ※配列の部分はより正確にはベクトルで、v で表されます
    // 以下に、いくつかの例を記載しますがこれで全種類ではありません。まずは代表
    // 的なところだけでいいのでやんわり憶えておきましょう。
    //
    // メソッド名       : 中身のデータ                       : GLSL での意味
    // -----------------:------------------------------------:--------------
    // uniform1i        : １つの整数                         : int
    // uniform1f        : １つの浮動小数点                   : float
    // uniform1fv       : １つの浮動小数点を配列に入れたもの : float[n]
    // uniform2fv       : ２つの浮動小数点を配列にいれたもの : vec2
    // uniform3fv       : ３つの浮動小数点を配列にいれたもの : vec3
    // uniform4fv       : ４つの浮動小数点を配列にいれたもの : vec4
    // uniformMatrix2fv : 配列で表現された 2x2 の行列        : mat2
    // uniformMatrix3fv : 配列で表現された 3x3 の行列        : mat3
    // uniformMatrix4fv : 配列で表現された 4x4 の行列        : mat4
    //
    // ※ここに記載されているものが全てではありません
    // --------------------------------------------------------------------

    // ロケーションを指定して、uniform 変数の値を更新する（GPU に送る） @@@
    gl.uniform1f(this.uniformLocation.time, nowTime);

    // ドローコール（描画命令）
    gl.drawArrays(gl.TRIANGLES, 0, this.position.length / this.positionStride);
  }
}

