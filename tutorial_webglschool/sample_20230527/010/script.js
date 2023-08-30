
// = 010 ======================================================================
// 3DCG は、現実世界の奥行きのある世界を「計算を駆使して」シミュレートします。
// 当然、計算方法が変化すれば描画される結果が変わってくるわけですが……
// たとえばカメラの種類も、この計算方法に大きく影響する要因の１つです。カメラは
// これまで一貫して PerspectiveCamera を使ってきましたが、three.js にはその他に
// も OrthographicCamera という種類のカメラがあります。
// このカメラを利用する場合、プログラマが指定するパラメータもまったく違ったもの
// になりますし、描画される際の計算方法が変化することで描画結果も変化します。
// 両者の違いについて把握しておきましょう。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from '../lib/three.module.js';
import { OrbitControls } from '../lib/OrbitControls.js';

// DOM がパースされたことを検出するイベントで App3 クラスをインスタンス化する
window.addEventListener('DOMContentLoaded', () => {
  const app = new App3();
  app.init();
  app.render();
}, false);

/**
 * three.js を効率よく扱うために自家製の制御クラスを定義
 */
class App3 {
  /**
   * カメラで撮影する範囲を表す定数 @@@
   */
  static get CAMERA_SCALE() {return 5.0;}
  /**
   * カメラ定義のための定数 @@@
   */
  static get CAMERA_PARAM() {
    // 平行投影（正射影）変換用のパラメータを計算する
    const aspect = window.innerWidth / window.innerHeight; // アスペクト比
    const scale = App3.CAMERA_SCALE;                       // 切り取る空間の広さ（スケール）
    const horizontal = scale * aspect;                     // 横方向のスケール
    const vertiacal = scale;                               // 縦方向のスケール
    return {
      left: -horizontal,  // 切り取る空間の左端までの距離
      right: horizontal,  // 切り取る空間の右端までの距離
      top: vertiacal,     // 切り取る空間の上端までの距離
      bottom: -vertiacal, // 切り取る空間の下端までの距離
      near: 0.1,
      far: 50.0,
      x: 0.0,
      y: 5.0,
      z: 20.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    };
  }
  /**
   * レンダラー定義のための定数
   */
  static get RENDERER_PARAM() {
    return {
      clearColor: 0x666666,
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
      intensity: 1.0,  // 光の強度
      x: 1.0,          // 光の向きを表すベクトルの X 要素
      y: 1.0,          // 光の向きを表すベクトルの Y 要素
      z: 1.0           // 光の向きを表すベクトルの Z 要素
    };
  }
  /**
   * アンビエントライト定義のための定数
   */
  static get AMBIENT_LIGHT_PARAM() {
    return {
      color: 0xffffff, // 光の色
      intensity: 0.2,  // 光の強度
    };
  }
  /**
   * マテリアル定義のための定数
   */
  static get MATERIAL_PARAM() {
    return {
      color: 0x3399ff, // マテリアルの基本色
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
    this.material;         // マテリアル
    this.torusGeometry;    // トーラスジオメトリ
    this.torusArray;       // トーラスメッシュの配列
    this.controls;         // オービットコントロール
    this.axesHelper;       // 軸ヘルパー

    this.isDown = false; // キーの押下状態を保持するフラグ

    // 再帰呼び出しのための this 固定
    this.render = this.render.bind(this);

    // キーの押下や離す操作を検出できるようにする
    window.addEventListener('keydown', (keyEvent) => {
      switch (keyEvent.key) {
        case ' ':
          this.isDown = true;
          break;
        default:
      }
    }, false);
    window.addEventListener('keyup', (keyEvent) => {
      this.isDown = false;
    }, false);

    // リサイズイベントも専用に変更する @@@
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      // OrthographicCamera 用のパラメータを求める
      const aspect = window.innerWidth / window.innerHeight;
      const scale = App3.CAMERA_SCALE;
      const horizontal = scale * aspect;
      const vertiacal = scale;
      this.camera.left = -horizontal;
      this.camera.right = horizontal;
      this.camera.top = vertiacal;
      this.camera.bottom = -vertiacal;
      this.camera.updateProjectionMatrix();
    }, false);
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

    // カメラ @@@
    this.camera = new THREE.OrthographicCamera(
        App3.CAMERA_PARAM.left,
        App3.CAMERA_PARAM.right,
        App3.CAMERA_PARAM.top,
        App3.CAMERA_PARAM.bottom,
        App3.CAMERA_PARAM.near,
        App3.CAMERA_PARAM.far
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

    // マテリアル
    this.material = new THREE.MeshPhongMaterial(App3.MATERIAL_PARAM);

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
      // シーンに追加する
      this.scene.add(torus);
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
      this.torusArray.forEach((torus) => {
        torus.rotation.y += 0.05;
      });
    }

    // レンダラーで描画
    this.renderer.render(this.scene, this.camera);
  }
}

