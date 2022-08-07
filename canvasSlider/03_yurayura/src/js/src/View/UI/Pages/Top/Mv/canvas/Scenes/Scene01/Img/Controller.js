//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";
import Item from "./Item/Controller";

export default class Slider extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();
  }

  async setup() {
    const TEXTURE = await this.loadTexture();
    this.ready(TEXTURE);
  }

  async loadTexture() {
    const textureLoader = new THREE.TextureLoader();
    const path = "./assets/resource/img/1.jpg";

    const p = new Promise((resolve) => {
      const texture = textureLoader.load(path, () => {
        resolve(texture);
      });
    });

    return await p;
  }

  ready(TEXTURE) {
    new Item(TEXTURE, this.scene);
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
