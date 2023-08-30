
// = 026 ======================================================================
// 3DCG にはポイントスプライトというテクニックがあります。
// これはポリゴンではなく点で頂点を描画する際、その点の１つ１つにテクスチャを貼
// り付けたもののことを言い、頂点を節約しながらテクスチャを用いた表現を行うこと
// ができます。
// ポイントスプライトはどこまで行っても結局は点であるため、常にカメラに対して正
// 対したように描かれます。このような振る舞いは CG 用語ではビルボードなどと言わ
// れることがありますが、ポリゴンをビルボードとして描画することに比べると、ポイ
// ントスプライトはより手軽にビルボードを実現できる手段だと言えます。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from '../lib/three.module.js';
import { OrbitControls } from '../lib/OrbitControls.js';

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
      clearColor: 0x000000, // パーティクルが目立つように背景は黒に
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  /**
   * マテリアル定義のための定数（点群用）
   */
  static get MATERIAL_PARAM() {
    return {
      color: 0xffcc00,       // 頂点の色
      size: 0.5,             // 頂点の基本となるサイズ
      sizeAttenuation: true, // 遠近感を出すかどうかの真偽値
    };
  }

  /**
   * コンストラクタ
   * @constructor
   */
  constructor() {
    this.renderer;   // レンダラ
    this.scene;      // シーン
    this.camera;     // カメラ
    this.points;     // 点群
    this.geometry;   // ジオメトリ
    this.material;   // マテリアル
    this.controls;   // オービットコントロール
    this.axesHelper; // 軸ヘルパー
    this.texture;    // テクスチャ

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
      // 読み込む画像のパス
      const imagePath = './star.png';
      const loader = new THREE.TextureLoader();
      loader.load(imagePath, (texture) => {
        this.texture = texture;
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

    // 点を描画する際は、それ専用のマテリアルを利用することができる
    this.material = new THREE.PointsMaterial(App3.MATERIAL_PARAM);
    // 点用のマテリアルに対してテクスチャを設定すると簡易的なビルボードになる @@@
    // ※点は点でしかないので面とは異なり傾いたりしないため、ビルボードとみなせる
    this.material.map = this.texture;

    // パーティクルの定義
    this.geometry = new THREE.BufferGeometry(); // 特定の形状を持たないジオメトリ
    const COUNT = 200;   // パーティクルのカウント数
    const WIDTH = 10.0;  // どの程度の範囲に配置するかの幅
    const vertices = []; // まず頂点情報を格納する単なる配列（Array）
    for (let i = 0; i <= COUNT; ++i) {
      // 範囲内にランダムに頂点を配置 @@@
      vertices.push(
        Math.random() * WIDTH - (WIDTH * 0.5),
        Math.random() * WIDTH - (WIDTH * 0.5),
        Math.random() * WIDTH - (WIDTH * 0.5),
      );
    }
    const stride = 3;
    const attribute = new THREE.BufferAttribute(new Float32Array(vertices), stride);
    this.geometry.setAttribute('position', attribute);

    // パーティクルを格納したジオメトリとマテリアルからポイントオブジェクトを生成
    this.points = new THREE.Points(this.geometry, this.material);
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

