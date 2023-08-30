// = 013 ======================================================================
// 単に CG の世界でテクスチャと言った場合には、大抵の場合それは画素の集まり、つ
// まり連想しやすいものでいうと「画像」のことを言う場合が多いです。
// three.js でも、やはり画像を読み込んでこれを 3DCG の世界で利用する方法があり、
// その文脈でテクスチャというキーワードが登場します。
// テクスチャ自体は、three.js では非常に簡単に使うことができますが、ブラウザの
// セキュリティ上の理由から、ローカルファイルを直接ブラウザでリソースとして扱う
// ことができないため、ローカルサーバなどを用いて実行してやる必要があります。
// また一連の処理が非同期に行われることにも気をつけましょう。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from "../lib/three.module.js";
import { OrbitControls } from "../lib/OrbitControls.js";

// DOM がパースされたことを検出するイベントで App3 クラスをインスタンス化する
window.addEventListener(
  "DOMContentLoaded",
  () => {
    const app = new App3();

    // 画像をロードしテクスチャを初期化する（Promise による非同期処理） @@@
    app.load().then(() => {
      // ロードが終わってから初期化し、描画する
      app.init();
      app.render();
    });
  },
  false
);

// 参考までに、もし async/await を用いる場合は次のように書けます。
/*
window.addEventListener('DOMContentLoaded', async () => {
  const app = new App3();

  // 画像をロードしテクスチャを初期化する（Promise による非同期処理） @@@
  await app.load()
  // ロードが終わってから初期化し、描画する
  app.init();
  app.render();

}, false);
*/

// ★Promise
// const func = (resolve) => {
//   // 非同期処理（画像の読み込み）

//   // 非同期処理（画像の読み込み）が終わったら[解決]する
//   resolve(image);
// };
// const p = new Promise(func);
// p.then((image) => {
//   // 非同期処理が終わった後の処理
// });

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
      far: 20.0,
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
      color: 0xffffff, // 光の色
      intensity: 1.0, // 光の強度
      x: 1.0, // 光の向きを表すベクトルの X 要素
      y: 1.0, // 光の向きを表すベクトルの Y 要素
      z: 1.0, // 光の向きを表すベクトルの Z 要素
    };
  }
  /**
   * アンビエントライト定義のための定数
   */
  static get AMBIENT_LIGHT_PARAM() {
    return {
      color: 0xffffff, // 光の色
      intensity: 0.2, // 光の強度
    };
  }
  /**
   * マテリアル定義のための定数
   */
  static get MATERIAL_PARAM() {
    return {
      color: 0xffffff, // マテリアルの基本色 @@@
    };
  }
  /**
   * フォグの定義のための定数
   */
  static get FOG_PARAM() {
    return {
      fogColor: 0xffffff, // フォグの色
      fogNear: 10.0, // フォグの掛かり始めるカメラからの距離
      fogFar: 20.0, // フォグが完全に掛かるカメラからの距離
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
    this.material; // マテリアル
    this.torusGeometry; // トーラスジオメトリ
    this.torusArray; // トーラスメッシュの配列
    this.controls; // オービットコントロール
    this.axesHelper; // 軸ヘルパー
    this.group; // グループ
    this.texture; // テクスチャ @@@

    this.isDown = false; // キーの押下状態を保持するフラグ

    // 再帰呼び出しのための this 固定
    this.render = this.render.bind(this);

    // キーの押下や離す操作を検出できるようにする
    window.addEventListener(
      "keydown",
      (keyEvent) => {
        switch (keyEvent.key) {
          case " ":
            this.isDown = true;
            break;
          default:
        }
      },
      false
    );
    window.addEventListener(
      "keyup",
      (keyEvent) => {
        this.isDown = false;
      },
      false
    );

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
   * アセット（素材）のロードを行う Promise @@@
   */
  load() {
    return new Promise((resolve) => {
      // 読み込む画像のパス
      const imagePath = "./sample.jpg";
      // テクスチャ用のローダーのインスタンスを生成
      const loader = new THREE.TextureLoader();
      // ローダーの load メソッドに読み込む画像のパスと、ロード完了時のコールバックを指定
      loader.load(imagePath, (texture) => {
        // コールバック関数の引数として、初期化済みのテクスチャオブジェクトが渡されてくる
        this.texture = texture;
        // Promise を解決
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

    // シーンとフォグ
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(
      App3.FOG_PARAM.fogColor,
      App3.FOG_PARAM.fogNear,
      App3.FOG_PARAM.fogFar
    );

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

    // マテリアル
    this.material = new THREE.MeshPhongMaterial(App3.MATERIAL_PARAM);
    // init が実行される際はロードは完了済みのはずなので、マテリアルにテクスチャを設定する @@@
    // マテリアルの基本色とテクスチャの色は乗算される点に注意すること
    this.material.map = this.texture;

    // グループ
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // トーラスメッシュ
    const TORUS_COUNT = 10;
    const TRANSFORM_SCALE = 5.0;
    this.torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 8, 16);
    this.torusArray = [];
    for (let i = 0; i < TORUS_COUNT; ++i) {
      // トーラスメッシュのインスタンスを生成
      const torus = new THREE.Mesh(this.torusGeometry, this.material);
      // 座標をランダムに散らす
      torus.position.x = (Math.random() * 2.0 - 1.0) * TRANSFORM_SCALE;
      torus.position.y = (Math.random() * 2.0 - 1.0) * TRANSFORM_SCALE;
      torus.position.z = (Math.random() * 2.0 - 1.0) * TRANSFORM_SCALE;
      this.group.add(torus);
      this.torusArray.push(torus);
    }

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
    // 恒常ループ
    requestAnimationFrame(this.render);

    // コントロールを更新
    this.controls.update();

    // フラグに応じてオブジェクトの状態を変化させる
    if (this.isDown === true) {
      this.group.rotation.y += 0.05;
    }

    // レンダラーで描画
    this.renderer.render(this.scene, this.camera);
  }
}
