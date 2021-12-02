//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import { ConeBufferGeometry } from "three";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.loadTexture();
    this.ready();
    this.add();
  }

  loadTexture() {
    // ★one texture loader can load multiple img
    const loadingManager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(loadingManager);

    loadingManager.onStart = () => {
      console.log("loading start");
    };
    loadingManager.onLoad = () => {
      console.log("loading finished");
    };
    loadingManager.onProgress = () => {
      console.log("loading progress");
    };
    loadingManager.onError = () => {
      console.log("loading progress");
    };

    this.colorTexture = textureLoader.load(
      "./assets/resource/textures/minecraft.png"
    );
    // this.alphaTexture = textureLoader.load(
    //   "./assets/resource/textures/door/alpha.jpg"
    // );
    // this.heightTexture = textureLoader.load(
    //   "./assets/resource/textures/door/height.jpg"
    // );
    // this.normalTexture = textureLoader.load(
    //   "./assets/resource/textures/door/normal.jpg"
    // );
    // this.ambientOcclusionTexture = textureLoader.load(
    //   "./assets/resource/textures/door/ambientOcclusion.jpg"
    // );
    // this.metalnessTexture = textureLoader.load(
    //   "./assets/resource/textures/door/metalness.jpg"
    // );
    // this.roughnessTexture = textureLoader.load(
    //   "./assets/resource/textures/door/roughness.jpg"
    // );

    // repeat
    // this.colorTexture.repeat.x = 2;
    // this.colorTexture.repeat.y = 3;
    // this.colorTexture.wrapS = THREE.RepeatWrapping; // x axis repeat
    // this.colorTexture.wrapT = THREE.RepeatWrapping; // y axis repeat

    // // offset
    // this.colorTexture.offset.x = 0.5;

    // rotation
    // this.colorTexture.rotation = Math.PI * 0.25;
    // this.colorTexture.center.x = 0.5; // transform origin 左下(0, 0)から真ん中へ
    // this.colorTexture.center.y = 0.5;

    // filter
    // surface will be sharp
    // surface is blur
    // That is due to the filtering and the mipmapping
    // defalt filter is  THREE.LinearMipmapLinearFilter
    this.colorTexture.magFilter = THREE.NearestFilter;

    // this.texture = new THREE.Texture(image);

    // image.addEventListener("load", (e) => {
    //   // Specifies that the material needs to be recompiled.
    //   this.texture.needsUpdate = true;
    // });

    // image.src = "./assets/resource/textures/door/color.jpg";
  }

  ready() {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    // this.geometry = new THREE.ConeGeometry(1, 1, 32);
    // this.geometry = new THREE.TorusGeometry(1, 0.35, 32, 100);

    // console.log(this.geometry.attributes, "this.geometry.arrtibute");
    // {position: Float32BufferAttribute, normal: Float32BufferAttribute, uv: Float32BufferAttribute}normal: Float32BufferAttribute {name: '', array: Float32Array(72), itemSize: 3, count: 24, normalized: false, …}

    this.material = new THREE.MeshBasicMaterial({ map: this.colorTexture });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
