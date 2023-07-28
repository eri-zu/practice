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
      "../../assets/resource/models/hamburger.glb",
      // "../../assets/resource/models/FlightHelmet/gLTF/FlightHelmet.gltf",

      (gltf) => {
        console.log("success");
        console.log(gltf);

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

  loadDracoGLTF() {
    const dracoLoader = new DRACOLoader();

    // decorderをセットしてあげることにより早くなる（web workerみたいな？別スレッド）
    // three.jsではデフォルトで用意されてる
    // dracoデコーダーフォルダをmodelと同じところにおく
    dracoLoader.setDecoderPath("../../assets/resource/draco/");

    this.gltfLoader = new GLTFLoader();
    this.gltfLoader.setDRACOLoader(dracoLoader);

    let mixer = null;

    this.gltfLoader.load(
      "../../assets/resource/models/hamburger.glb",

      (gltf) => {
        console.log("success");
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
    // const elapsedTime = this.clock.getElapsedTime();
    // const deltaTime = elapsedTime - this.previousTime;
    // this.previousTime = elapsedTime;
    // /**
    //  * update mixer
    //  */
    // if (this.mixer) this.mixer.update(deltaTime);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
