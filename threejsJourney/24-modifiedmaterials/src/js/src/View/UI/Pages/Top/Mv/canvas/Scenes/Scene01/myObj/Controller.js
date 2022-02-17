//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import * as dat from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.gui = new dat.GUI();
    this.clock = new THREE.Clock();

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.textureLoader = new THREE.TextureLoader();
    this.gltfLoader = new GLTFLoader();
    this.cubeTextureLoader = new THREE.CubeTextureLoader(); // 環境マップ

    this.ready();
    this.add();
  }

  ready() {
    /**
     * environment map
     */
    this.environmentMap = this.cubeTextureLoader.load([
      "./assets/resource/textures/environmentMaps/0/px.jpg",
      "./assets/resource/textures/environmentMaps/0/nx.jpg",
      "./assets/resource/textures/environmentMaps/0/py.jpg",
      "./assets/resource/textures/environmentMaps/0/ny.jpg",
      "./assets/resource/textures/environmentMaps/0/pz.jpg",
      "./assets/resource/textures/environmentMaps/0/nz.jpg",
    ]);

    this.environmentMap.encoding = THREE.sRGBEncoding;
    this.scene.background = this.environmentMap;
    this.scene.environment = this.environmentMap;

    /**
     * material
     */
    this.mapTexture = this.textureLoader.load(
      "./assets/resource/models/LeePerrySmith/color.jpg"
    );
    this.mapTexture.encoding = THREE.sRGBEncoding;

    this.normalTexture = this.textureLoader.load(
      "./assets/resource/models/LeePerrySmith/normal.jpg"
    );

    const material = new THREE.MeshStandardMaterial({
      map: this.mapTexture,
      normalMap: this.normalTexture,
    });

    material.onBeforeCompile(() => {
      console.log("hello");
    });

    /**
     * model
     */
    this.gltfLoader.load(
      "./assets/resource/models/LeePerrySmith/LeePerrySmith.glb",
      (gltf) => {
        // Model
        const mesh = gltf.scene.children[0];
        mesh.rotation.y = Math.PI * 0.5;
        mesh.material = material;
        this.scene.add(mesh);

        // Update materials
        this.updateAllMaterials();
      }
    );
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

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    this.elpsedTime = this.clock.getElapsedTime();
  }

  draw() {}

  timeline() {}

  onResize() {}
}
