// = 030 ======================================================================
// 影は、現代の CG では当たり前のように描画されていることが多いですが、実はかな
// り実装難易度の高い技術に分類されます。
// 3DCG の基礎を理解していない場合、原理を説明されたとしてもそれを理解することが
// 難しい場合が多いです。ここではあくまでも three.js の場合のお作法を押さえてお
// きましょう。
// 最低限、影を落とすための設定としてなにをしないといけないのか、というのがまず
// 項目が多くて難しいのですが、１つ１つ落ち着いてポイントを押さえていきましょう。
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
      near: 1.0,
      far: 1000.0,
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
      x: 50.0, // 影を使う場合は、ディレクショナルライトであっても位置が重要になる @@@
      y: 50.0,
      z: 50.0,
    };
    // - 平行光源の position プロパティ ---------------------------------------
    // 一般的な解釈として、平行光源は「無限遠から降り注ぎ、ワールド座標に関係な
    // く水平に降り注ぐ光」というように考えます。
    // 現実世界で言えば、太陽の光のような光源と言えます。
    // そのような前提で考えると、平行光源には厳密には位置という概念がなく、実際
    // three.js においても通常の平行光源は位置ベクトルを向きベクトルのように扱う
    // ことで陰影を計算しています。（位置ベクトルを単位化してライティングに用い
    // る）
    // しかし、こと影を描画する場合にはその仕組み上、光源の位置にカメラを置いた
    // ような状態を考えるため、位置の概念が重要になります。ライトのヘルパーを使
    // うとそのあたりが可視化され理解の助けになるので、まず最初はヘルパーを上手
    // に活用しながら理解・把握するのがよいでしょう。
    // ------------------------------------------------------------------------
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
   * 影に関する定数の定義 @@@
   */
  static get SHADOW_PARAM() {
    return {
      spaceSize: 100.0, // 影を生成するためのカメラの空間の広さ
      mapSize: 512, // 影を生成するためのバッファのサイズ
    };
    // - 影を生成するためのバッファとは ---------------------------------------
    // 影を生成する原理は、ものすごく簡単に言えば「距離を格納したバッファの中身
    // と実際の値を比較して、遮蔽物があるか調べる」ということを行っています。
    // このとき、バッファが高解像度であれば、当然ながら影かそうでないかがより高
    // 精細にチェックされることになるので、きれいな影が出ます。
    // 一方で、バッファを高解像度にするということはそれだけ負荷が高くなります。
    // mapSize は大きすぎる数値を指定すると一気にパフォーマンスが下がるので注意
    // が必要です。
    // ------------------------------------------------------------------------
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
    this.mixer; // アニメーションミキサー
    this.actions; // アニメーションのアクション
    this.plane; // 床面用プレーン @@@

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
          // アクションを生成
          this.actions.push(this.mixer.clipAction(animations[i]));
          // ループ方式を設定する
          this.actions[i].setLoop(THREE.LoopRepeat);
          // 再生状態にしつつ、ウェイトをいったん 0.0 にする
          this.actions[i].play();
          this.actions[i].weight = 0.0;
        }

        // 最初のアクションのウェイトだけ 1.0 にして目に見えるようにしておく
        this.actions[0].weight = 1.0;

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

    // レンダラーで影を描画するための機能を有効化する @@@
    this.renderer.shadowMap.enabled = true;

    // レンダラーに対しては影の描画アルゴリズムを指定できる @@@
    // ※ちなみに既定値は THREE.PCFShadowMap なので、以下は省略可
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

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

    // ディレクショナルライトが影を落とすように設定する @@@
    this.directionalLight.castShadow = true;

    // 影用のカメラ（平行投影のカメラ）は必要に応じて範囲を広げる @@@
    this.directionalLight.shadow.camera.top = App3.SHADOW_PARAM.spaceSize;
    this.directionalLight.shadow.camera.bottom = -App3.SHADOW_PARAM.spaceSize;
    this.directionalLight.shadow.camera.left = -App3.SHADOW_PARAM.spaceSize;
    this.directionalLight.shadow.camera.right = App3.SHADOW_PARAM.spaceSize;

    // 影用のバッファのサイズは変更することもできる @@@
    this.directionalLight.shadow.mapSize.width = App3.SHADOW_PARAM.mapSize;
    this.directionalLight.shadow.mapSize.height = App3.SHADOW_PARAM.mapSize;

    // ライトの設定を可視化するためにヘルパーを使う @@@
    const cameraHelper = new THREE.CameraHelper(
      this.directionalLight.shadow.camera
    );
    this.scene.add(cameraHelper);

    // アンビエントライト（環境光）
    this.ambientLight = new THREE.AmbientLight(
      App3.AMBIENT_LIGHT_PARAM.color,
      App3.AMBIENT_LIGHT_PARAM.intensity
    );
    this.scene.add(this.ambientLight);

    // シーンに glTF を追加
    this.scene.add(this.gltf.scene);

    // glTF の階層構造をたどり、Mesh が出てきたら影を落とす（cast）設定を行う @@@
    this.gltf.scene.traverse((object) => {
      if (object.isMesh === true || object.isSkinnedMesh === true) {
        object.castShadow = true;
      }
    });

    // コントロール
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // アニメーション時間管理のための Clock オブジェクトを生成しておく
    this.clock = new THREE.Clock();

    // ヘルパー
    const axesBarLength = 5.0;
    this.axesHelper = new THREE.AxesHelper(axesBarLength);
    this.scene.add(this.axesHelper);

    // 床面をプレーンで生成する @@@
    const planeGeometry = new THREE.PlaneGeometry(250.0, 250.0);
    const planeMaterial = new THREE.MeshPhongMaterial();
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // プレーンは XY 平面に水平な状態なので、後ろに 90 度分倒す
    this.plane.rotation.x = -Math.PI * 0.5;

    // 床面は、影を受ける（receive）するよう設定する @@@
    this.plane.receiveShadow = true;

    // シーンに追加
    this.scene.add(this.plane);
  }

  /**
   * 描画処理
   */
  render() {
    requestAnimationFrame(this.render);
    this.controls.update();

    // 前回からの経過時間（デルタ）を取得してミキサーに適用する
    const delta = this.clock.getDelta();
    this.mixer.update(delta);

    this.renderer.render(this.scene, this.camera);
  }
}
