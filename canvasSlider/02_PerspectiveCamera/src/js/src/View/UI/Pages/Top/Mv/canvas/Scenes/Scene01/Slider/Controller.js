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
import Order from "./Order";
import Renderer from "./Renderer";

export default class Slider extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.aspect =
      this.renderer.domElement.width / this.renderer.domElement.height;

    this.len = 5;

    this.isUEv = true;
    this.frame = 0;

    this.setup();
    this.setEvents();
  }

  async setup() {
    const textures = await this.loadTexture();
    this.createRect(textures);

    this.order = new Order(this.len);
    this.renderer = new Renderer(this.items);
  }

  // async loadTexture() {
  // ------------------------------------------------------------
  // 単体
  // ------------------------------------------------------------
  //   const textureLoader = new THREE.TextureLoader();
  //   const path = "./assets/resource/img/1.jpg";

  //   const p = new Promise((resolve) => {
  //     const texture = textureLoader.load(path, () => {
  //       // load成功時の処理
  //       resolve(texture);
  //     });
  //   });

  //   return await p;
  // }

  async loadTexture() {
    const textureLoader = new THREE.TextureLoader();
    const path = "./assets/resource/img/";

    const texturePromise = [];

    for (let i = 1; i <= this.len; i++) {
      const src = path + i + ".jpg";

      const p = new Promise((resolve) => {
        const texture = textureLoader.load(src, () => {
          // load成功時の処理
          resolve(texture);
        });
      });

      texturePromise.push(p);
    }

    return await Promise.all(texturePromise);
  }

  createRect(textures) {
    // new Rect(this.scene, this.camera, this.renderer, TEXTURE);

    this.items = [];

    for (let i = 0; i < textures.length; i++) {
      const item = new Item(
        this.scene,
        this.camera,
        this.renderer,
        textures[i],
        i
      );

      this.items.push(item);
    }
  }

  change() {
    if (tl) tl.kill();
    this.order.right();

    const tl = gsap.timeline();

    tl
      // hide
      .add(this.renderer.hide(this.order.prev))
      // show
      .add(this.renderer.show(this.order.current), 0);

    return tl;
  }

  autoswitch() {
    this.change();
  }

  update() {
    this.frame++;

    // 540frameで一周
    this.frame = this.frame > 540 ? 0 : this.frame;

    // 3s毎に切り替え
    if (this.frame % 180 == 0 && this.frame > 0) {
      this.autoswitch();
    }
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
