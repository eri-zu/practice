//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import fs from "./glsl/pattern1.fs";
import vs from "./glsl/pattern1.vs";
// import GUI from "lil-gui";
// import gsap from "gsap";
import { UAParser } from "ua-parser-js";

// const gui = new GUI();
export default class Controller extends Base {
  constructor(scene, camera, renderer, wrap) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.wrap = wrap;

    this.target = { value: 0.0 };
    this.textureIndex = window.innerWidth > 768 ? 0 : 1;

    this.isREv = true;
    // this.isUpdate = true;
    // this.isStart = false;

    this.setup();
    this.setEvents();
  }

  async setup() {
    this.textures = await this.loadTexture();

    this.ready();
    this.setImage();
    this.add();
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      setTimeout(() => {
        this.textureIndex = window.innerWidth > 768 ? 0 : 1;
        this.material.uniforms.uTexture0.value =
          this.textures[this.textureIndex];
        this.setImage();
      }, 50);
    }
  }

  async loadTexture() {
    const textureLoader = new THREE.TextureLoader();
    const src = [
      "/acidheat_treatment/images/img_product.png",
      "/acidheat_treatment/images/img_product_sp.png",
    ];

    const texturePromise = [];
    for (let i = 0; i < 2; i++) {
      const p = new Promise((resolve, reject) => {
        const texture = textureLoader.load(src[i], () => {
          resolve(texture);
        });
      });

      texturePromise.push(p);
    }

    return await Promise.all(texturePromise);
  }

  ready() {
    this.geometry = new THREE.PlaneGeometry(
      gb.productWrapW,
      gb.productWrapH,
      1,
      1
    );

    this.material = new THREE.RawShaderMaterial({
      fragmentShader: fs,
      vertexShader: vs,
      uniforms: {
        uTexture0: { value: this.textures[this.textureIndex] },
        // uTexture1: { value: this.textures[1] },
        uResolution: { value: new THREE.Vector4() },
        uTime: { value: this.target.value },
        // uTimeSpeed: { value: 1 / 30 },
        uTimeSpeed: { value: 0.017 },
        uShadeAmount: { value: 0.15 },
        // uAccel: { value: 0.02 },
      },
      // side: THREE.DoubleSide,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    // gui
    //   .add(this.material.uniforms.uTransition, "value", 0, 1.0)
    //   .name("uTransition");
    // gui
    //   .add(this.material.uniforms.uTimeSpeed, "value", 0, 0.1)
    //   .name("uTimeSpeed");
    // gui
    //   .add(this.material.uniforms.uShadeAmount, "value", 0, 2.0)
    //   .name("uShadeAmount");
  }

  setImage() {
    this.canvasAspect = gb.productWrapH / gb.productWrapW;
    this.imgAspect = 1.01;

    let aspect1;
    let aspect2;

    if (this.canvasAspect > this.imgAspect) {
      aspect1 = (gb.productWrapW / gb.productWrapH) * this.imgAspect;
      aspect2 = 1;
    } else {
      aspect1 = 1;
      aspect2 = gb.productWrapH / gb.productWrapW / this.imgAspect;
    }

    this.material.uniforms.uResolution.value.x = gb.productWrapW;
    this.material.uniforms.uResolution.value.y = gb.productWrapH;
    this.material.uniforms.uResolution.value.z = aspect1;
    this.material.uniforms.uResolution.value.w = aspect2;
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    // if (!this.isUpdate) return;

    console.log("updateeeeee");

    if (this.material) {
      this.target.value++;
      this.material.uniforms.uTime.value = this.target.value;
    }
  }

  // onScroll() {
  //   if (this.isStart) return;
  //   if (this.top < window.scrollY + window.innerHeight) {
  //     this.start();
  //   }
  // }

  // start() {
  //   this.isStart = true;
  //   this.isUpdate = true;
  // }

  setEvents() {
    super.setEvents();
  }
}
