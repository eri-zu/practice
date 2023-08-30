// = 025 ======================================================================
// three.js では、あらかじめ形状が定義されているジオメトリを用いる方法だけでなく、
// それらの元となっている基底クラスを使って、独自にジオメトリを定義して利用する
// 方法も用意されています。
// たとえばパーティクルを定義したい場合など、既存のジオメトリのような特定の形状
// に依存しない使い方をしたい場合に、こういったアプローチが必要になります。
// 基底クラスは BufferGeometry という名前で、すべてのビルトインジオメトリはこの
// クラスを継承して設計されています。今回はパーティクルを独自に定義する方法を通
// じて BufferGeometry の使い方を見てみましょう。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from "../lib/three.module.js";
import { OrbitControls } from "../lib/OrbitControls.js";

// DOM がパースされたことを検出するイベントで App3 クラスをインスタンス化する
window.addEventListener(
  "DOMContentLoaded",
  () => {
    const app = new App3();
    app.init();
    app.render();
  },
  false
);

/**
 * three.js を効率よく扱うために自家製の制御クラスを定義
 */
class App3 {
  /**
   * カメラ定義のための定数
   */
  static get CAMERA_PARAM() {
    return {
      fovy: 60,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 50.0,
      x: 0.0,
      y: 2.0,
      z: 10.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    };
  }
  /**
   * レンダラー定義のための定数
   */
  static get RENDERER_PARAM() {
    return {
      clearColor: 0x000000, // パーティクルが目立つように背景は黒に
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  /**
   * マテリアル定義のための定数（点群用） @@@
   */
  static get MATERIAL_PARAM() {
    return {
      color: 0xffffff, // 頂点の色
      size: 0.25, // 頂点の基本となるサイズ
      sizeAttenuation: true, // 遠近感を出すかどうかの真偽値 （カメラを斜めにすると、遠い点は小さくなることがわかる）
    };
  }

  /**
   * コンストラクタ
   * @constructor
   */
  constructor() {
    this.renderer; // レンダラ
    this.scene; // シーン
    this.camera; // カメラ
    this.points; // 点群
    this.geometry; // ジオメトリ
    this.material; // マテリアル
    this.controls; // オービットコントロール
    this.axesHelper; // 軸ヘルパー

    // 再帰呼び出しのための this 固定
    this.render = this.render.bind(this);

    // リサイズイベント
    window.addEventListener(
      "resize",
      () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
      },
      false
    );
  }

  /**
   * 初期化処理
   */
  init() {
    // レンダラー
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(
      new THREE.Color(App3.RENDERER_PARAM.clearColor)
    );
    this.renderer.setSize(
      App3.RENDERER_PARAM.width,
      App3.RENDERER_PARAM.height
    );
    const wrapper = document.querySelector("#webgl");
    wrapper.appendChild(this.renderer.domElement);

    // シーン
    this.scene = new THREE.Scene();

    // カメラ
    this.camera = new THREE.PerspectiveCamera(
      App3.CAMERA_PARAM.fovy,
      App3.CAMERA_PARAM.aspect,
      App3.CAMERA_PARAM.near,
      App3.CAMERA_PARAM.far
    );
    this.camera.position.set(
      App3.CAMERA_PARAM.x,
      App3.CAMERA_PARAM.y,
      App3.CAMERA_PARAM.z
    );
    this.camera.lookAt(App3.CAMERA_PARAM.lookAt);

    // 点を描画する際は、それ専用のマテリアルを利用することができる @@@
    this.material = new THREE.PointsMaterial(App3.MATERIAL_PARAM);

    // - パーティクルを定義する -----------------------------------------------
    // なんらかの形状をあらかじめ持っているビルトインの各種ジオメトリとは違い
    // BufferGeometry には、最初の段階では一切頂点が含まれていません。
    // この BufferGeometry というオブジェクトは、three.js のすべてのビルトインジ
    // オメトリのベースになっているオブジェクトです。（すべてのジオメトリがこの
    // クラスを継承している）
    // この空のジオメトリに頂点を追加するには、まず配列を用意し、そこに必要な情
    // 報を格納していきます。ここでは最も単純な頂点に関する情報である「頂点座標」
    // をジオメトリに対して追加していく方法を見てみましょう。
    // ------------------------------------------------------------------------
    // パーティクルの定義 @@@
    this.geometry = new THREE.BufferGeometry(); // 特定の形状を持たないジオメトリ
    const COUNT = 10; // パーティクルの行と列のカウント数
    const WIDTH = 10.0; // どの程度の範囲に配置するかの幅
    const vertices = []; // まず頂点情報を格納する単なる配列（Array）
    for (let i = 0; i <= COUNT; ++i) {
      // カウンタ変数 i から X 座標を算出
      const x = (i / COUNT - 0.5) * WIDTH;
      for (let j = 0; j <= COUNT; ++j) {
        // カウンタ変数 j から Y 座標を算出
        const y = (j / COUNT - 0.5) * WIDTH;
        // 配列に頂点を加える
        vertices.push(x, y, 0.0);
      }
    }

    // - 定義した頂点の情報を加工する -----------------------------------------
    // three.js では、ジオメトリに頂点の情報を設定する（上書きや追加する） 場合
    // は、BufferAttribute というクラスを利用します。
    // また、この BufferAttribute クラスは、データの入力として TypedArray を使い
    // ますので、混乱しないように落ち着いて、どのような処理が行われているのか確
    // 認しましょう。
    // ポイントは、適切な TypedArray を利用すること。また、データの個数がいくつ
    // でワンセットになっているのか（ストライド）を忘れずに指定します。
    // ※ストライドは three.js のドキュメントなどでは itemSize と記載されている
    // ------------------------------------------------------------------------
    // この頂点情報がいくつの要素からなるか（XYZ なので、３を指定）（頂点一個当たり何個の座標の塊ですか）
    const stride = 3;
    // BufferAttribute の生成
    // 1.まず、普通の配列の中に座標を直列に追加する
    // 2.これをFloat32Arrayに変換
    // 3.Float32ArrayをBufferAttributeに与える
    const attribute = new THREE.BufferAttribute(
      new Float32Array(vertices),
      stride
    );
    // position という名前に対して BufferAttribute を割り当てる
    // three.jsがあらかじめ定義している定数なら、その名前にしておけばそれとして使ってくれる
    // ※あらかじめ定義 = シェーダ内でどういう名前で定義しているか
    this.geometry.setAttribute("position", attribute);

    // パーティクルを格納したジオメトリとマテリアルからポイントオブジェクトを生成
    // ※ポイントオブジェクトは、頂点１つを「点」として描画するジオメトリの形態です
    // メッシュ: ポリゴン（面）があるオブジェクト
    // ジオメトリからオブジェクトを生成するタイミングでどのような形状で描かれるか決まる
    this.points = new THREE.Points(this.geometry, this.material);
    // シーンにパーティクルを追加
    this.scene.add(this.points);

    // コントロール
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // ヘルパー
    const axesBarLength = 5.0;
    this.axesHelper = new THREE.AxesHelper(axesBarLength);
    this.scene.add(this.axesHelper);
  }

  /**
   * 描画処理
   */
  render() {
    requestAnimationFrame(this.render);
    this.controls.update();
    if (this.isDown === true) {
      this.group.rotation.y += 0.05;
    }
    this.renderer.render(this.scene, this.camera);
  }
}
