//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.isUEv = true;

    this.clock = new THREE.Clock();
    this.previousTime = 0;
    this.mixer = null;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();
    // this.loadGLTF();
    this.loadDracoGLTF();
    this.add();
  }

  ready() {
    this.floor = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({
        color: "#444444",
        metalness: 0,
        roughness: 0.5,
      })
    );

    this.floor.receiveShadow = true;
    this.floor.rotation.x = -Math.PI * 0.5;
  }

  loadGLTF() {
    // ローダー用意
    this.gltfLoader = new GLTFLoader();

    this.gltfLoader.load(
      "../../assets/resource/models/Duck/gLTF/Duck.gltf",
      // "../../assets/resource/models/FlightHelmet/gLTF/FlightHelmet.gltf",

      (gltf) => {
        console.log("success");
        console.log(gltf);

        // duckの場合はこれでok
        // this.scene.add(gltf.scene.children[0]);

        // ヘルメットの場合
        // × chilrenは6個あるのでだめ
        // this.scene.add(gltf.scene.children[0]);

        // × 一つ取り出すと、最初のシーンから削除されてしまい、最初のシーンの個数が減ってしまう
        // 2番目の要素が詰めて、1番目にいく
        // でもループは2つ目の要素を取りに行くので配列に何か残ってしまう
        // for (const child of gltf.scene.children) {
        //   this.scene.add(child);
        // }

        // 解決策1 : while使う
        // while (gltf.scene.children.length > 0) {
        //   this.scene.add(gltf.scene.children[0]);
        // }

        // 解決策2
        // const children = [...gltf.scene.children];
        // console.log(children);
        // for (const child of children) {
        //   this.scene.add(child);
        // }

        this.scene.add(gltf.scene.children[0]);
      },
      () => {
        console.log("progress");
      },
      () => {
        console.log("error");
      }
    );
  }

  loadDracoGLTF() {
    const dracoLoader = new DRACOLoader();

    // decorderをセットしてあげることにより早くなる（web workerみたいな？別スレッド）
    // three.jsではデフォルトで用意されてる
    // dracoデコーダーフォルダをmodelと同じところにおく
    dracoLoader.setDecoderPath("../../assets/resource/draco/");

    this.gltfLoader = new GLTFLoader();
    this.gltfLoader.setDRACOLoader(dracoLoader);

    this.gltfLoader.load(
      // "../../assets/resource/models/Duck/glTF-Draco/Duck.gltf",
      "../../assets/resource/models/Fox/glTF/Fox.gltf",

      (gltf) => {
        console.log("success");
        this.mixer = new THREE.AnimationMixer(gltf.scene); // アニメーションのプレーヤー
        const action = this.mixer.clipAction(gltf.animations[1]); // 渡されたクリップのアニメアクションを返す

        action.play();

        console.log(gltf);
        console.log(action);

        gltf.scene.scale.set(0.025, 0.025, 0.025);
        this.scene.add(gltf.scene);
      },
      () => {
        console.log("progress");
      },
      () => {
        console.log("error");
      }
    );
  }

  add() {
    this.scene.add(this.floor);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    const deltaTime = elapsedTime - this.previousTime;
    this.previousTime = elapsedTime;

    /**
     * update mixer
     */
    if (this.mixer) this.mixer.update(deltaTime);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
