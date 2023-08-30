// = 020 ======================================================================
// 月の座標に、そのまま「マウスカーソル由来の座標」を設定することができましたが、
// この状態では「月と地球の間の距離」が一定にはなりません。
// 現実世界の月と地球のように、両者の距離関係が一定になるようにするためにはいっ
// たいどのような計算を行えばよいでしょうか。
// ここではベクトルの単位化（正規化）について考えてみましょう。ベクトルの単位化
// は非常に重要な概念なので、ぜひともしっかりと理解しておきたいところです。
//
// ※今回の処理結果は、その結果とまったく同じ状態を実現するために、まったく異な
//   るアプローチを取ることもできます。どんな方法だか想像できるでしょうか。
//   気持ちの余裕のある方は考えてみてもおもしろいかもしれません。
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

    this.sphereGeometry; // ジオメトリ
    this.earth; // 地球
    this.earthMaterial; // 地球用マテリアル
    this.earthTexture; // 地球用テクスチャ
    this.moon; // 月
    this.moonMaterial; // 月用マテリアル
    this.moonTexture; // 月用テクスチャ

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

        // ベクトルを単位化する @@@
        const vector = new THREE.Vector2(scaleX, scaleY);
        // 単位化 長さが1のベクトルになる
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

    // - ベクトルの単位化（または正規化とも呼ぶ） -----------------------------
    // ベクトルの単位化の方法は比較的単純な計算なので、暗記をオススメします。
    // XY、あるいは XYZ など、そのベクトルの次元が２次元でも３次元でも同様の計算
    // 方法で単位化を行うことができます。
    // 計算を行う上でまずベクトルの長さを得る必要があります。これには X などの要
    // 素をすべて２乗した上で足し合わせ、ルートを取ります。そして、各要素をベク
    // トルの長さで割ってやると単位化の完了です。単位化されたベクトルは必ず長さ
    // が 1.0 ぴったりとなります。
    // ※以下は２次元ベクトルでの実装例
    // ------------------------------------------------------------------------
    const length = (x, y) => {
      return Math.sqrt(x * x + y * y);
    };
    const normalize = (x, y) => {
      const len = length(x, y);
      if (len === 0.0) {
        // ゼロ除算になる場合はゼロベクトルを返す
        // ★0ベクトルは単位化できない
        return [0.0, 0.0];
      } else {
        // 長さがゼロでない場合は各要素を長さで割る
        return [x / len, y / len];
      }
    };

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

    // レンダラーで描画
    this.renderer.render(this.scene, this.camera);
  }
}
