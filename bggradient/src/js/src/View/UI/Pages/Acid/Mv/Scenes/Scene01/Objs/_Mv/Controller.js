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
import gsap from "gsap";
import { UAParser } from "ua-parser-js";
import $ from "jquery";
// const gui = new GUI();

export default class Controller extends Base {
  constructor(scene, camera, renderer, wrap) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.wrap = wrap;
    this.cover = document.querySelector(".js-acid__kv-cover");
    // this.txt = document.querySelector(".js-acid_kv_txt");
    this.logos = document.querySelectorAll(".js-acid_kv_logo");

    this.target = { value: 0.0 };
    this.textureIndex = window.innerWidth > 768 ? 0 : 2;

    // this.isUEv = true;
    this.isREv = true;

    this.isUpdate = false;

    this.setup();
    this.setEvents();
  }

  async setup() {
    this.textures = await this.loadTexture();

    this.ready();
    this.setImage();
    this.add();

    this.show();
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      setTimeout(() => {
        this.textureIndex = window.innerWidth > 768 ? 0 : 2;
        this.material.uniforms.uTexture0.value =
          this.textures[this.textureIndex];
        this.material.uniforms.uTexture1.value =
          this.textures[this.textureIndex + 1];
        this.setImage();
      }, 50);
    }
  }

  async loadTexture() {
    const textureLoader = new THREE.TextureLoader();

    const path = [
      "/acidheat_treatment/images/img_kv1.png",
      "/acidheat_treatment/images/img_kv2.png",
      "/acidheat_treatment/images/img_kv1_sp.png",
      "/acidheat_treatment/images/img_kv2_sp.png",
    ];

    const texturePromise = [];
    for (let i = 0; i < 4; i++) {
      const p = new Promise((resolve, reject) => {
        const texture = textureLoader.load(`${path[i]}`, () => {
          resolve(texture);
        });
      });

      texturePromise.push(p);
    }

    return await Promise.all(texturePromise);
  }

  ready() {
    this.geometry = new THREE.PlaneGeometry(gb.mvWrapW, gb.mvWrapH, 1, 1);

    this.material = new THREE.RawShaderMaterial({
      fragmentShader: fs,
      vertexShader: vs,
      uniforms: {
        uTexture0: { value: this.textures[this.textureIndex] },
        uTexture1: { value: this.textures[this.textureIndex + 1] },
        uResolution: { value: new THREE.Vector4() },
        uTime: { value: this.target.value },
        // uTransition: { value: 0.5 },
        uTransition: { value: 0 },
        uTimeSpeed: { value: 0.023 },
        uShadeAmount: { value: 0.01 },
        uRainbowAlpha: { value: 0.0 },
        uRainbowStrength: { value: 1.068 },
        // vertexGradient: { value: 0.0 },
      },
      side: THREE.DoubleSide,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    // gui
    //   .add(this.material.uniforms.uTimeSpeed, "value", 0, 0.03)
    //   .name("time speed");
    // gui
    //   .add(this.material.uniforms.uShadeAmount, "value", 0, 1.0)
    //   .name("brightness");
    // gui
    //   .add(this.material.uniforms.uRainbowStrength, "value", 1.0, 5.0)
    //   .name("rainbowStrength");
  }

  setImage() {
    this.canvasAspect = gb.mvWrapH / gb.mvWrapW;
    this.imgAspect =
      this.textures[this.textureIndex].image.height /
      this.textures[this.textureIndex].image.width;

    let aspect1;
    let aspect2;

    if (this.canvasAspect > this.imgAspect) {
      aspect1 = (gb.mvWrapW / gb.mvWrapH) * this.imgAspect;
      aspect2 = 1;
    } else {
      aspect1 = 1;
      aspect2 = gb.mvWrapH / gb.mvWrapW / this.imgAspect;
    }

    this.material.uniforms.uResolution.value.x = gb.mvWrapW;
    this.material.uniforms.uResolution.value.y = gb.mvWrapH;
    this.material.uniforms.uResolution.value.z = aspect1;
    this.material.uniforms.uResolution.value.w = aspect2;
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    if (!this.isUpdate) return;

    if (this.material) {
      this.target.value++;
      this.material.uniforms.uTime.value = this.target.value;
    }
  }

  show() {
    const tl = gsap.timeline();

    tl
      // cover
      .to(
        this.cover,
        1.8,
        {
          opacity: 0,
          ease: "pwoer2.inOut",
        },
        0
      )
      // 全体show
      .to(
        this.material.uniforms.uTransition,
        4.8,
        {
          value: 0.5,
          ease: "expo.out",
          // ease: "power2.inOut",
        },
        0.3
      )
      // 虹
      .to(
        this.material.uniforms.uRainbowAlpha,
        5.3,
        {
          value: 1.0,
          // ease: customInOut,
          ease: "expo.inOut",
        },
        0
      )
      // 光 & 虹動き
      .add(() => {
        this.isUpdate = true;
      }, 3.6);
    // logo
    this.logos.forEach((el, i) => {
      tl.to(
        el,
        1.5,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        1.8 + 0.4
      );
    });
    // lead
    tl.add(() => {
      gb.scrollshow.arrayAcidLeads.forEach((el, i) => {
        el.onScroll();
      });
    }, 1.8 + 0.4 + 0.1 + 0.4)
      // update
      .add(() => {
        $(window).trigger("isOpeningDone");
      });
  }

  setEvents() {
    super.setEvents();
  }
}
