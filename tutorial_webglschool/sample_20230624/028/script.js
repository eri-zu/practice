
// = 028 ======================================================================
// glTF は、ウェブの画像で言うところの JPEG のように、ウェブで安心して利用できる
// 3D データフォーマットとして仕様策定が行われているデータ形式です。
// 仕様を策定しているのは WebGL の管理を行っている Khronos で、仕様は GitHub で
// 確認することができます。
// https://github.com/KhronosGroup/glTF
//
// glTF には仕様そのものにバージョンがあり、現状は 2.0 が主流です。
// 1.0 の頃は、ファイル拡張子が *.gltf といったものもありましたが、現在はバイナ
// リ形式の *.glb がほとんどです。
// three.js ではローダーが実装されているので、テクスチャの場合と同様にローダーを
// 利用して手軽にファイルをロード・パースすることができます。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from '../lib/three.module.js';
import { OrbitControls } from '../lib/OrbitControls.js';
import { GLTFLoader } from '../lib/GLTFLoader.js'; // glTF のローダーを追加 @@@

// DOM がパースされたことを検出するイベントで App3 クラスをインスタンス化する
window.addEventListener('DOMContentLoaded', () => {
  const app = new App3();
  app.load()
  .then(() => {
    app.init();
    app.render();
  });
}, false);

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
   * コンストラクタ
   * @constructor
   */
  constructor() {
    this.renderer;         // レンダラ
    this.scene;            // シーン
    this.camera;           // カメラ
    this.directionalLight; // ディレクショナルライト
    this.ambientLight;     // アンビエントライト
    this.controls;         // オービットコントロール
    this.axesHelper;       // 軸ヘルパー
    this.gltf;             // ロードした glTF 由来のオブジェクト @@@

    // 再帰呼び出しのための this 固定
    this.render = this.render.bind(this);

    // リサイズイベント
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    }, false);
  }

  /**
   * アセット（素材）のロードを行う Promise
   */
  load() {
    return new Promise((resolve) => {
      // 読み込むファイルのパス @@@
      const gltfPath = './Duck.glb';
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
    this.renderer.setClearColor(new THREE.Color(App3.RENDERER_PARAM.clearColor));
    this.renderer.setSize(App3.RENDERER_PARAM.width, App3.RENDERER_PARAM.height);
    const wrapper = document.querySelector('#webgl');
    wrapper.appendChild(this.renderer.domElement);

    // シーン
    this.scene = new THREE.Scene();

    // カメラ
    this.camera = new THREE.PerspectiveCamera(
      App3.CAMERA_PARAM.fovy,
      App3.CAMERA_PARAM.aspect,
      App3.CAMERA_PARAM.near,
      App3.CAMERA_PARAM.far,
    );
    this.camera.position.set(
      App3.CAMERA_PARAM.x,
      App3.CAMERA_PARAM.y,
      App3.CAMERA_PARAM.z,
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
      App3.DIRECTIONAL_LIGHT_PARAM.z,
    );
    this.scene.add(this.directionalLight);

    // アンビエントライト（環境光）
    this.ambientLight = new THREE.AmbientLight(
      App3.AMBIENT_LIGHT_PARAM.color,
      App3.AMBIENT_LIGHT_PARAM.intensity,
    );
    this.scene.add(this.ambientLight);

    // - glTF はシーンを含むデータ構造 ----------------------------------------
    // glTF にはシーン全体の情報を含めることができる仕様になっており three.js も
    // それにならって読み込み後に返されるオブジェクトは scene というプロパティを
    // 持った状態になっています。
    // scene プロパティは要するに Object3D で、その子要素にメッシュなどのデータ
    // が含まれます。
    // ※その他、glTF にはカメラやアニメーションの情報を含ませることもできます
    // ------------------------------------------------------------------------
    // シーンに glTF を追加 @@@
    this.scene.add(this.gltf.scene);

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
    this.renderer.render(this.scene, this.camera);
  }
}

