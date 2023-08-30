// = 024 ======================================================================
// 3D プログラミングをしていると、マウスカーソルでクリックしてオブジェクトを選択
// するなどの「マウスを利用した 3D 空間への干渉」を行いたくなる場面に比較的よく
// 出くわします。
// 本来、このような「三次元空間への干渉」はそこそこしっかり数学を活用しないと実
// 現が難しいものですが、three.js には Raycaster と呼ばれる仕組みがあり、これを
// 用いることで数学の知識があまりなくても、比較的容易に三次元空間への干渉処理を
// 実装することができます。
// ここでは、クリックという操作を契機に、マウスカーソルで指し示したオブジェクト
// の色を変化させてみましょう。
// ============================================================================

// 必要なモジュールを読み込み
import * as THREE from "../lib/three.module.js";
import { OrbitControls } from "../lib/OrbitControls.js";

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
   * マテリアル定義のための定数
   */
  static get MATERIAL_PARAM() {
    return {
      color: 0xffffff,
    };
  }
  /**
   * レイが交差した際のマテリアル定義のための定数 @@@
   */
  static get INTERSECTION_MATERIAL_PARAM() {
    return {
      color: 0x00ff00,
    };
  }
  /**
   * フォグの定義のための定数
   */
  static get FOG_PARAM() {
    return {
      fogColor: 0xffffff,
      fogNear: 10.0,
      fogFar: 20.0,
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
    this.hitMaterial; // レイが交差した場合用のマテリアル @@@
    this.torusGeometry; // トーラスジオメトリ
    this.torusArray; // トーラスメッシュの配列
    this.controls; // オービットコントロール
    this.axesHelper; // 軸ヘルパー
    this.group; // グループ
    this.texture; // テクスチャ

    // Raycaster のインスタンスを生成する @@@
    this.raycaster = new THREE.Raycaster();
    // マウスのクリックイベントの定義 @@@
    window.addEventListener(
      "click",
      (mouseEvent) => {
        // スクリーン空間の座標系をレイキャスター用に正規化する（-1.0 ~ 1.0 の範囲）
        const x = (mouseEvent.clientX / window.innerWidth) * 2.0 - 1.0;
        const y = (mouseEvent.clientY / window.innerHeight) * 2.0 - 1.0;
        // スクリーン空間は上下が反転している点に注意（Y だけ符号を反転させる）
        const v = new THREE.Vector2(x, -y);
        // レイキャスターに正規化済みマウス座標とカメラを指定する
        this.raycaster.setFromCamera(v, this.camera);
        // scene に含まれるすべてのオブジェクトを対象にレイキャストする
        // intersectObjects(Array)とintersectObject(mesh)がある
        const intersects = this.raycaster.intersectObjects(this.torusArray);
        // レイが交差しなかった場合を考慮し一度マテリアルをリセットしておく（Rayを飛ばしたタイミングで一度リセット）
        this.torusArray.forEach((mesh) => {
          mesh.material = this.material;
        });

        // - intersectObjects でレイキャストした結果は配列 ----------------------
        // 名前が似ているので紛らわしいのですが Raycaster には intersectObject と
        // intersectObjects があります。複数形の s がついているかどうかの違いがあ
        // り、複数形の場合は引数と戻り値のいずれも配列になります。
        // この配列の長さが 0 である場合はカーソル位置に向かって放ったレイは、どの
        // オブジェクトとも交差しなかったと判断できます。また、複数のオブジェクト
        // とレイが交差した場合も、three.js 側で並び替えてくれるので 0 番目の要素
        // を参照すれば必ず見た目上の最も手前にあるオブジェクトを参照できます。
        // 戻り値の中身は object というプロパティを経由することで対象の Mesh など
        // のオブジェクトを参照できる他、交点の座標などもわかります。
        // ----------------------------------------------------------------------
        if (intersects.length > 0) {
          // rayを飛ばした時、2つ以上同時に交差する可能性がある
          // この場合、戻り値の配列が、手前から順番に並んだ状態になる
          intersects[0].object.material = this.hitMaterial;
        }

        // - Raycaster は CPU 上で動作する --------------------------------------
        // WebGL は描画処理に GPU を活用することで高速に動作します。
        // しかし JavaScript は CPU 上で動作するプログラムであり、Raycaster が内部
        // で行っている処理はあくまでも CPU 上で行われます。
        // 原理的には「メッシュを構成するポリゴンとレイが衝突するか」を JavaScript
        // でループして判定していますので、シーン内のメッシュの量やポリゴンの量が
        // 増えると、それに比例して Raycaster のコストも増加します。
        // ----------------------------------------------------------------------
      },
      false
    );

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
   * アセット（素材）のロードを行う Promise
   */
  load() {
    return new Promise((resolve) => {
      // 読み込む画像のパス
      const imagePath = "./sample.jpg";
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
    this.material.map = this.texture;
    // 交差時に表示するためのマテリアルを定義 @@@
    this.hitMaterial = new THREE.MeshPhongMaterial(
      App3.INTERSECTION_MATERIAL_PARAM
    );
    this.hitMaterial.map = this.texture;

    // グループ
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // トーラスメッシュ
    const TORUS_COUNT = 10;
    const TRANSFORM_SCALE = 5.0;
    this.torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 8, 16);
    this.torusArray = [];
    for (let i = 0; i < TORUS_COUNT; ++i) {
      const torus = new THREE.Mesh(this.torusGeometry, this.material);
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
    requestAnimationFrame(this.render);
    this.controls.update();
    if (this.isDown === true) {
      this.group.rotation.y += 0.05;
    }
    this.renderer.render(this.scene, this.camera);
  }
}
