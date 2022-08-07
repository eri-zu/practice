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
    const TEXTURES = await this.loadTexture();
    this.ready(TEXTURES);
  }

  async loadTexture() {
    const textureLoader = new THREE.TextureLoader();

    const texturePromsise = [];

    const src = [
      "./assets/resource/img/1.jpg",
      "./assets/resource/img/2.jpg",
      "./assets/resource/img/3.jpg",
    ];

    for (let i = 0; i < src.length; i++) {
      const p = new Promise((resolve, reject) => {
        const texture = textureLoader.load(src[i], () => {
          resolve(texture);
        });
      });

      texturePromsise.push(p);
    }

    return await Promise.all(texturePromsise);
  }

  ready(TEXTURES) {
    new Item(this.scene, TEXTURES);
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
