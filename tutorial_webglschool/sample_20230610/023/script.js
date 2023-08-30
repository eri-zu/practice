// = 023 ======================================================================
// 注意：これはオマケのサンプルです！
// クォータニオンや、ベクトルの内積・外積などが登場しますので、かなり数学的に難
// しい内容となっています。このサンプルはあくまでもオマケです。
// 一見して意味がわからなくても気に病む必要はまったくありませんので、あまり過度
// に落ち込んだり心配したりしないようにしてください。
// このサンプルでは、人工衛星を三角錐で作られたロケットに置き換え、進行方向にき
// ちんと頭を向けるようにしています。
// 内積や外積といったベクトル演算は、実際にどのような使いみちがあるのかわかりに
// くかったりもするので、このサンプルを通じて雰囲気だけでも掴んでおくと、いつか
// 自分でなにか特殊な挙動を実現したい、となったときにヒントになるかもしれません。
// 内積・外積だけでもかなりいろんなことが実現できますので、絶対に損はしません。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from "../lib/three.module.js";
import { OrbitControls } from "../lib/OrbitControls.js";

// DOM がパースされたことを検出するイベントで App3 クラスを初期化
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
  static get MATERIAL_PARAM() {
    return {
      color: 0xffffff, // マテリアルの基本色
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
   * 月と地球の間の距離
   */
  static get MOON_DISTANCE() {
    return 3.0;
  }
  /**
   * 人工衛星の移動速度
   */
  static get SATELLITE_SPEED() {
    return 0.05;
  }
  /**
   * 人工衛星の曲がる力
   */
  static get SATELLITE_TURN_SCALE() {
    return 0.1;
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

    this.sphereGeometry; // スフィアジオメトリ
    this.coneGeometry; // コーンジオメトリ
    this.earth; // 地球
    this.earthMaterial; // 地球用マテリアル
    this.earthTexture; // 地球用テクスチャ
    this.moon; // 月
    this.moonMaterial; // 月用マテリアル
    this.moonTexture; // 月用テクスチャ
    this.satellite; // 人工衛星
    this.satelliteMaterial; // 人工衛星用マテリアル
    this.satelliteDirection; // 人工衛星の進行方向

    this.isDown = false; // キーの押下状態を保持するフラグ

    // Clock オブジェクトの生成
    this.clock = new THREE.Clock();

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

    // マウスカーソルの動きを検出できるようにする
    window.addEventListener(
      "pointermove",
      (pointerEvent) => {
        // ポインター（マウスカーソル）のクライアント領域上の座標
        const pointerX = pointerEvent.clientX;
        const pointerY = pointerEvent.clientY;
        // 3D のワールド空間に合わせてスケールを揃える
        const scaleX = (pointerX / window.innerWidth) * 2.0 - 1.0;
        const scaleY = (pointerY / window.innerHeight) * 2.0 - 1.0;

        // ベクトルを単位化する
        const vector = new THREE.Vector2(scaleX, scaleY);
        vector.normalize();
        // 単位化したベクトルの値を月の座標に割り当てる
        this.moon.position.set(
          vector.x * App3.MOON_DISTANCE,
          0.0,
          vector.y * App3.MOON_DISTANCE
        );
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
   * アセット（素材）のロードを行う Promise
   */
  load() {
    return new Promise((resolve) => {
      // テクスチャ用のローダーのインスタンスを生成
      const loader = new THREE.TextureLoader();

      // 地球用画像の読み込みとテクスチャ生成
      const earthPath = "./earth.jpg";
      const moonPath = "./moon.jpg";
      loader.load(earthPath, (earthTexture) => {
        // 地球用
        this.earthTexture = earthTexture;
        loader.load(moonPath, (moonTexture) => {
          // 月用
          this.moonTexture = moonTexture;
          resolve();
        });
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

    // 球体のジオメトリを生成
    this.sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);

    // 地球のマテリアルとメッシュ
    this.earthMaterial = new THREE.MeshPhongMaterial(App3.MATERIAL_PARAM);
    this.earthMaterial.map = this.earthTexture;
    this.earth = new THREE.Mesh(this.sphereGeometry, this.earthMaterial);
    this.scene.add(this.earth);

    // 月のマテリアルとメッシュ
    this.moonMaterial = new THREE.MeshPhongMaterial(App3.MATERIAL_PARAM);
    this.moonMaterial.map = this.moonTexture;
    this.moon = new THREE.Mesh(this.sphereGeometry, this.moonMaterial);
    this.scene.add(this.moon);
    this.moon.scale.setScalar(0.27);
    this.moon.position.set(App3.MOON_DISTANCE, 0.0, 0.0);

    // コーンのジオメトリを生成 @@@
    this.coneGeometry = new THREE.ConeGeometry(0.2, 0.5, 32);
    // 人工衛星のマテリアルとメッシュ
    this.satelliteMaterial = new THREE.MeshPhongMaterial({ color: 0xff00dd });
    this.satellite = new THREE.Mesh(this.coneGeometry, this.satelliteMaterial);
    this.scene.add(this.satellite);
    this.satellite.scale.setScalar(0.5);
    this.satellite.position.set(0.0, App3.MOON_DISTANCE, 0.0); // +Y の方向に初期位置を設定 @@@
    // 進行方向の初期値も +Y 方向に @@@
    this.satelliteDirection = new THREE.Vector3(0.0, 1.0, 0.0).normalize();

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
      this.earth.rotation.y += 0.05;
      this.moon.rotation.y += 0.05;
    }

    // (A) 現在（前のフレームまで）の進行方向を変数に保持しておく @@@
    const previousDirection = this.satelliteDirection.clone();

    // (終点 - 視点) という計算を行うことで、２点間を結ぶベクトルを定義
    const subVector = new THREE.Vector3().subVectors(
      this.moon.position,
      this.satellite.position
    );
    // 長さに依存せず、向きだけを考えたい場合はベクトルを単位化する
    subVector.normalize();
    // 人工衛星の進行方向ベクトルに、向きベクトルを小さくスケールして加算する
    this.satelliteDirection.add(
      subVector.multiplyScalar(App3.SATELLITE_TURN_SCALE)
    );
    // (B) 加算したことでベクトルの長さが変化するので、単位化してから人工衛星の座標に加算する
    this.satelliteDirection.normalize();
    const direction = this.satelliteDirection.clone();
    this.satellite.position.add(direction.multiplyScalar(App3.SATELLITE_SPEED));

    // (C) 変換前と変換後の２つのベクトルから外積で法線ベクトルを求める @@@
    const normalAxis = new THREE.Vector3().crossVectors(
      previousDirection,
      this.satelliteDirection
    );
    normalAxis.normalize();
    // (D) 変換前と変換後のふたつのベクトルから内積でコサインを取り出す
    const cos = previousDirection.dot(this.satelliteDirection);
    // (D) コサインをラジアンに戻す
    const radians = Math.acos(cos);
    // 求めた法線ベクトルとラジアンからクォータニオンを定義
    const qtn = new THREE.Quaternion().setFromAxisAngle(normalAxis, radians);
    // 人工衛星の現在のクォータニオンに乗算する
    // ★乗算した分だけ、ぐいっと動く
    this.satellite.quaternion.premultiply(qtn);
    // this.satellite.quaternion.clone()

    // レンダラーで描画
    this.renderer.render(this.scene, this.camera);
  }
}
