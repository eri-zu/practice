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
    this.ready();
    this.loadModel();
    this.loadEnvironmentMap();
    this.add();
  }

  updateAllMaterials() {
    this.scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.material.envMapIntensity = 1;
        child.material.needsUpdate = true;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  prepareLoader() {
    this.textureLoader = new THREE.TextureLoader();
    this.gltfLoader = new GLTFLoader();
    this.cubeTextureLoader = new THREE.CubeTextureLoader();
  }

  ready() {
    /**
     * texture
     */
    this.mapTexture = this.textureLoader.load(
      "./assets/resource/models/LeePerrySmith/color.jpg"
    );
    this.mapTexture.encoding = THREE.sRGBEncoding;

    this.normalTexture = this.textureLoader.load(
      "./assets/resource/models/LeePerrySmith/normal.jpg"
    );

    /**
     * material
     */
    this.material = new THREE.MeshStandardMaterial({
      map: this.mapTexture,
      normalMap: this.normalTexture,
    });
  }

  loadModel() {
    this.gltfLoader.load(
      "./assets/resource/models/LeePerrySmith/LeePerrySmith.glb",
      (gltf) => {
        const mesh = gltf.scene.children[0];
        mesh.rotation.y = Math.PI * 0.5;
        mesh.material = this.material;
        this.scene.add(mesh);

        // 全てのmaterialにenvmap適用
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

  add() {}

  draw() {}

  timeline() {}

  onResize() {}
}
