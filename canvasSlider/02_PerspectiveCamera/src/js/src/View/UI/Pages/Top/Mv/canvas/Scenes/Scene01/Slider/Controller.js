//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";
import Rect from "./Rect/Controller";

export default class Slider extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.aspect =
      this.renderer.domElement.width / this.renderer.domElement.height;

    this.setup();
    this.setEvents();
  }

  async setup() {
    const texture = await this.loadTexture();
    this.createRect(texture);
  }

  async loadTexture() {
    const textureLoader = new THREE.TextureLoader();
    const path = "./assets/resource/img/1.jpg";

    const p = new Promise((resolve) => {
      const texture = textureLoader.load(path, () => {
        // load成功時の処理
        resolve(texture);
      });
    });

    return await p;
  }

  createRect(TEXTURE) {
    new Rect(this.scene, this.camera, this.renderer, TEXTURE);
  }

  // async loadTexture() {
  //   const textureLoader = new THREE.TextureLoader();
  //   const path = "./assets/resource/img/";

  //   const texturePromise = [];

  //   for (let i = 1; i <= 5; i++) {
  //     const src = path + i + ".jpg";
  //     const p = new Promise((resolve) => {
  //       const texture = textureLoader.load(src, () => {
  //         // load成功時の処理
  //         resolve(texture);
  //       });
  //     });

  //     texturePromise.push(p);
  //   }

  //   const textures = await Promise.all(texturePromise);

  //   for (let i = 0; i < textures.length; i++) {
  //     new Rect(this.scene, this.camera, this.renderer, textures[i]);
  //   }
  // }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
