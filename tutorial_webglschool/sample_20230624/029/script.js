// = 029 ======================================================================
// glTF にはアニメーションの情報を含めることができる仕様があり、three.js はこれ
// に対応しています。
// three.js にはミキサーと呼ばれるアニメーションの再生を制御する仕組みがあるので、
// これを利用して glTF モデルをアニメーションさせてみましょう。
// 複数のアニメーションを内蔵する glTF の場合は、それぞれのモーションごとのウェ
// イト（重み）を調整することで、それらを 50% ずつブレンドするといった複雑な制御
// を行うこともできます。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from "../lib/three.module.js";
import { OrbitControls } from "../lib/OrbitControls.js";
import { GLTFLoader } from "../lib/GLTFLoader.js"; // glTF のローダーを追加

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
      far: 500.0,
      x: 0.0,
      y: 50.0,
      z: 200.0,
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
    this.mixer; // アニメーションミキサー @@@
    this.actions; // アニメーションのアクション @@@

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
      // 読み込むファイルのパス @@@
      const gltfPath = "./Fox.glb";
      const loader = new GLTFLoader();
      loader.load(gltfPath, (gltf) => {
        this.gltf = gltf;
        // ミキサーを生成する（scene プロパティを渡す点に注意）
        this.mixer = new THREE.AnimationMixer(this.gltf.scene);
        // アニメーション情報を取り出す
        const animations = this.gltf.animations;
        // 取り出したアニメーション情報を順番にミキサーに通してアクション化する
        this.actions = [];
        for (let i = 0; i < animations.length; ++i) {
          // アクションを生成（clipActionで、AnimationActionというオブジェクトが返ってくる）
          this.actions.push(this.mixer.clipAction(animations[i]));
          // ループ方式を設定する
          this.actions[i].setLoop(THREE.LoopRepeat);
          // 再生状態にしつつ、ウェイトをいったん 0.0 にする
          this.actions[i].play(); // あくまでも再生可能な状態にしているイメージ
          this.actions[i].weight = 0.0;
        }

        // 最初のアクションのウェイトだけ 1.0 にして目に見えるようにしておく
        this.actions[0].weight = 1.0;

        // - アクションのウェイト ---------------------------------------------
        // three.js の AnimationAction では上記のように weight という概念があり
        // アニメーションに対して重み付けができます。
        // このウェイトは、再生されるアニメーションに対してアクションをどの程度
        // 反映させるかの指標で、0.0 ～ 1.0 の範囲で指定します。これを上手に制御
        // してやることで、スムーズに複数のモーションを切り替えることができます。
        // --------------------------------------------------------------------

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
    this.scene.add(this.directionalLight);

    // アンビエントライト（環境光）
    this.ambientLight = new THREE.AmbientLight(
      App3.AMBIENT_LIGHT_PARAM.color,
      App3.AMBIENT_LIGHT_PARAM.intensity
    );
    this.scene.add(this.ambientLight);

    // シーンに glTF を追加
    this.scene.add(this.gltf.scene);

    // コントロール
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // アニメーション時間管理のための Clock オブジェクトを生成しておく @@@
    this.clock = new THREE.Clock();

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

    // 前回からの経過時間（デルタ）を取得してミキサーに適用する @@@
    const delta = this.clock.getDelta();
    this.mixer.update(delta);

    this.renderer.render(this.scene, this.camera);
  }
}
