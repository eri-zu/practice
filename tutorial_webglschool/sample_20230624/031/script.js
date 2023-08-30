// = 031 ======================================================================
// WebGL では、画面に直接描画結果を出すだけでなく、内部的に描画を行い、その結果
// をメモリ上に保持しておく機能があります。
// 表面上スクリーンに現れない描画であることから、このような内部的な描画処理のこ
// とをオフスクリーンレンダリングと呼ぶのが一般的です。
// 一見、画面に直接描画せずに内部的に描画結果を保持できても、それの何が便利なの
// か想像するのが難しいかもしれません。しかし現代の CG においてオフスクリーンレ
// ンダリングは極めて重要な役割を担っています。１つ上の表現を目指すなら、避けて
// は通れないテクニックと言えます。
// たとえば、3D シーン内にテレビやディスプレイがあるような場面で、画面の部分に別
// の 3D シーンを投影したり、レーシングゲームでミラーに映るシーンをレンダリング
// したり、あるいは、ガラスや水面に映り込む風景を作ったりするのにもオフスクリー
// ンレンダリングが利用されています。ちなみに、ポストプロセス処理（ポストエフェ
// クト）も、オフスクリーンレンダリングなしには実現できません。
// three.js でも当然オフスクリーンレンダリングを行うことができ、レンダラーに対し
// て「レンダーターゲット」と呼ばれるオブジェクトを割り当てることでこれを実現し
// ます。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from "../lib/three.module.js";
import { OrbitControls } from "../lib/OrbitControls.js";
import { GLTFLoader } from "../lib/GLTFLoader.js";

// DOM がパースされたことを検出するイベントで App3 クラスをインスタンス化する
window.addEventListener(
  "DOMContentLoaded",
  () => {
    const app = new App3();
    app.load().then(() => {
      app.init();
      app.render();
    });
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
      clearColor: 0xffffff,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  /**
   * ディレクショナルライト定義のための定数
   */
  static get DIRECTIONAL_LIGHT_PARAM() {
    return {
      color: 0xffffff,
      intensity: 1.0,
      x: 1.0,
      y: 1.0,
      z: 1.0,
    };
  }
  /**
   * アンビエントライト定義のための定数
   */
  static get AMBIENT_LIGHT_PARAM() {
    return {
      color: 0xffffff,
      intensity: 0.2,
    };
  }
  /**
   * レンダーターゲットの大きさ @@@
   */
  static get RENDER_TARGET_SIZE() {
    return 1024;
  }

  /**
   * コンストラクタ
   * @constructor
   */
  constructor() {
    this.renderer; // レンダラ
    this.scene; // シーン
    this.camera; // カメラ
    this.directionalLight; // ディレクショナルライト
    this.ambientLight; // アンビエントライト
    this.controls; // オービットコントロール
    this.axesHelper; // 軸ヘルパー
    this.gltf; // ロードした glTF 由来のオブジェクト

    this.offscreenScene; // オフスクリーン用のシーン @@@
    this.offscreenCamera; // オフスクリーン用のカメラ @@@
    this.plane; // 板ポリゴン @@@
    this.renderTarget; // オフスクリーン用のレンダーターゲット @@@
    this.blackColor; // 背景色出し分けのため @@@
    this.whiteColor; // 背景色出し分けのため @@@

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
   * アセット（素材）のロードを行う Promise
   */
  load() {
    return new Promise((resolve) => {
      // 読み込むファイルのパス
      const gltfPath = "./Duck.glb";
      const loader = new GLTFLoader();
      loader.load(gltfPath, (gltf) => {
        // あとで使えるようにプロパティに代入しておく
        this.gltf = gltf;
        resolve();
      });
    });
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

    // オフスクリーン用のシーン @@@
    // 以下、各種オブジェクトやライトはオフスクリーン用のシーンに add しておく
    this.offscreenScene = new THREE.Scene();

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

    // ディレクショナルライト（平行光源）
    this.directionalLight = new THREE.DirectionalLight(
      App3.DIRECTIONAL_LIGHT_PARAM.color,
      App3.DIRECTIONAL_LIGHT_PARAM.intensity
    );
    this.directionalLight.position.set(
      App3.DIRECTIONAL_LIGHT_PARAM.x,
      App3.DIRECTIONAL_LIGHT_PARAM.y,
      App3.DIRECTIONAL_LIGHT_PARAM.z
    );
    this.offscreenScene.add(this.directionalLight);

    // アンビエントライト（環境光）
    this.ambientLight = new THREE.AmbientLight(
      App3.AMBIENT_LIGHT_PARAM.color,
      App3.AMBIENT_LIGHT_PARAM.intensity
    );
    this.offscreenScene.add(this.ambientLight);

    // シーンに glTF を追加
    this.offscreenScene.add(this.gltf.scene);

    // コントロール
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // ヘルパー
    const axesBarLength = 5.0;
    this.axesHelper = new THREE.AxesHelper(axesBarLength);
    this.offscreenScene.add(this.axesHelper);

    // レンダーターゲットをアスペクト比 1.0 の正方形で生成する @@@
    this.renderTarget = new THREE.WebGLRenderTarget(
      App3.RENDER_TARGET_SIZE,
      App3.RENDER_TARGET_SIZE
    );

    // オフスクリーン用のカメラは、この時点でのカメラの状態を（使いまわして手間軽減のため）クローンしておく @@@
    this.offscreenCamera = this.camera.clone();
    // ただし、最終シーンがブラウザのクライアント領域のサイズなのに対し……
    // レンダーターゲットは正方形なので、アスペクト比は 1.0 に設定を上書きしておく
    this.offscreenCamera.aspect = 1.0;
    this.offscreenCamera.updateProjectionMatrix();

    // レンダリング結果を可視化するのに、板ポリゴンを使う @@@
    const planeGeometry = new THREE.PlaneGeometry(5.0, 5.0);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // 板ポリゴンのマテリアルには、レンダーターゲットに描き込まれた結果を投影したいので……
    // マテリアルの map プロパティにレンダーターゲットのテクスチャを割り当てておく @@@
    // .textureプロパティは、renderingされた結果焼き込まれるプロパテぃ
    planeMaterial.map = this.renderTarget.texture;

    // 板ポリゴンをシーンに追加
    this.scene.add(this.plane);

    // 背景色を出し分けるため、あらかじめ Color オブジェクトを作っておく @@@
    this.blackColor = new THREE.Color(0x000000);
    this.whiteColor = new THREE.Color(0xffffff);
  }

  /**
   * 描画処理
   */
  render() {
    requestAnimationFrame(this.render);
    this.controls.update();

    // オフスクリーンレンダリングがリアルタイムであることをわかりやすくするため……
    // Duck には絶えず動いておいてもらう @@@
    this.gltf.scene.rotation.y += 0.01;

    // まず最初に、オフスクリーンレンダリングを行う @@@
    this.renderer.setRenderTarget(this.renderTarget);
    // オフスクリーンレンダリングは常に固定サイズ
    this.renderer.setSize(App3.RENDER_TARGET_SIZE, App3.RENDER_TARGET_SIZE);
    // わかりやすくするために、背景を黒にしておく
    this.renderer.setClearColor(this.blackColor, 1.0);
    // オフスクリーン用のシーン（Duck が含まれるほう）を描画する
    this.renderer.render(this.offscreenScene, this.offscreenCamera);

    // 次に最終的な画面の出力用のシーンをレンダリングするため null を指定しもとに戻す @@@
    this.renderer.setRenderTarget(null);
    // 最終的な出力はウィンドウサイズ
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // わかりやすくするために、背景を白にしておく
    this.renderer.setClearColor(this.whiteColor, 1.0);
    // 板ポリゴンが１枚置かれているだけのシーンを描画する
    this.renderer.render(this.scene, this.camera);
  }
}
