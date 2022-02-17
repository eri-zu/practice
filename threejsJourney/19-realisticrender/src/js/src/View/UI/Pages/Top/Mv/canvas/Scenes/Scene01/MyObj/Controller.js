//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.debugObject = {};
    this.debugObject.envMapIntensity = 1;

    gb.gui
      .add(this.debugObject, "envMapIntensity")
      .min(0)
      .max(10)
      .step(0.001)
      .onChange(this.updateAllMaterials.bind(this));

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.prepareLoader();
    this.loadModel();
    this.loadEnvironmentMap();
    this.ready();
    this.add();
  }

  prepareLoader() {
    this.gltfLoader = new GLTFLoader();
    this.cubeTextureLoader = new THREE.CubeTextureLoader();
  }

  loadModel() {
    this.gltfLoader.load(
      "./assets/resource/models/FlightHelmet/glTF/FlightHelmet.gltf",
      (gltf) => {
        gltf.scene.scale.set(10, 10, 10); // 小さすぎたので
        gltf.scene.position.set(0, -4, 0); // ちょっと下に
        gltf.scene.rotation.y = Math.PI * 0.5; // 正面向かせる

        this.scene.add(gltf.scene);

        gb.gui
          .add(gltf.scene.rotation, "y")
          .min(-Math.PI)
          .max(Math.PI)
          .step(0.001)
          .name("rotation");

        this.updateAllMaterials();
      }
    );
  }

  loadEnvironmentMap() {
    this.environmentMap = this.cubeTextureLoader.load([
      "./assets/resource/textures/environmentMaps/0/nx.jpg",
      "./assets/resource/textures/environmentMaps/0/px.jpg",
      "./assets/resource/textures/environmentMaps/0/ny.jpg",
      "./assets/resource/textures/environmentMaps/0/py.jpg",
      "./assets/resource/textures/environmentMaps/0/nz.jpg",
      "./assets/resource/textures/environmentMaps/0/pz.jpg",
    ]);

    this.environmentMap.encoding = THREE.sRGBEncoding;
    this.scene.background = this.environmentMap; // 背景をenvironmentMapに書き換える
    this.scene.environment = this.environmentMap;
  }

  updateAllMaterials() {
    // scene.traverseはsceneに配置されたすべて子要素や、入れ子になっている孫要素などを引数として受け取る

    this.scene.traverse((child) => {
      // 関数に内容が全てのchildに適用される
      console.log(child); // scene, objectsD, Group, mesh, mesh, mesh, mesh, mesh

      // childがTHREE.Meshでインスタンス化されたもので、かつ、
      // childのmaterialがmeshstandardMaterialからインスタンス化されたものであるとき
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        console.log(child); // mesh, mesh, mesh, mesh, mesh
        // child.material.envMap = this.environmentMap;
        child.material.envMapIntensity = this.debugObject.envMapIntensity;
        child.material.needsUpdate = true;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  ready() {}

  add() {}

  update() {
    this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
