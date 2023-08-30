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

// const gui = new GUI();
export default class Controller extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.target = { value: 0.0 };

    this.setup();
    this.setEvents();
  }

  async setup() {
    this.textures = await this.loadTexture();

    this.ready();
    this.setImage();
    this.add();

    // this.show();
  }

  async loadTexture() {
    const textureLoader = new THREE.TextureLoader();
    const path = "/acidheat_treatment/images/";

    const texturePromise = [];
    for (let i = 0; i < 2; i++) {
      const p = new Promise((resolve, reject) => {
        const texture = textureLoader.load(
          `${path}bg_gradient${i + 1}.jpg`,
          () => {
            resolve(texture);
          }
        );
      });

      texturePromise.push(p);
    }

    return await Promise.all(texturePromise);
  }

  ready() {
    this.geometry = new THREE.PlaneGeometry(
      gb.gradientWrapW,
      gb.gradientWrapH,
      1,
      1
    );

    this.material = new THREE.RawShaderMaterial({
      fragmentShader: fs,
      vertexShader: vs,
      uniforms: {
        uTexture0: { value: this.textures[0] },
        uTexture1: { value: this.textures[1] },
        uResolution: { value: new THREE.Vector4() },
        uTime: { value: this.target.value },
        // uTransition: { value: 0.5 },
        uTransition: { value: 0.5 },
        uTimeSpeed: { value: 0.017 },
        uTimeSpeed2: { value: 0.02 },
        uShadeAmount: { value: 0.19 },
        // vertexGradient: { value: 0.0 },
      },
      // side: THREE.DoubleSide,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    // gui
    //   .add(this.material.uniforms.uTimeSpeed, "value", 0, 0.03)
    //   .name("uTimeSpeed");
    // gui
    //   .add(this.material.uniforms.uTimeSpeed2, "value", 0, 0.05)
    //   .name("uTimeSpeed2");
    // gui
    //   .add(this.material.uniforms.uShadeAmount, "value", 0, 2.0)
    //   .name("uShadeAmount");
  }

  setImage() {
    this.canvasAspect = gb.gradientWrapH / gb.gradientWrapW;
    this.imgAspect =
      this.textures[0].image.height / this.textures[0].image.width;

    let aspect1;
    let aspect2;

    if (this.canvasAspect > this.imgAspect) {
      aspect1 = (gb.gradientWrapW / gb.gradientWrapH) * this.imgAspect;
      aspect2 = 1;
    } else {
      aspect1 = 1;
      aspect2 = gb.gradientWrapH / gb.gradientWrapW / this.imgAspect;
    }

    this.material.uniforms.uResolution.value.x = gb.gradientWrapW;
    this.material.uniforms.uResolution.value.y = gb.gradientWrapH;
    this.material.uniforms.uResolution.value.z = aspect1;
    this.material.uniforms.uResolution.value.w = aspect2;
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    if (this.material) {
      this.target.value++;
      this.material.uniforms.uTime.value = this.target.value;
    }
  }

  show() {
    const tl = gsap.timeline();

    tl.to(this.material.uniforms.uTransition, 5, {
      value: 0.5,
      ease: "expo.out",
      // ease: "power2.inOut",
    });
  }

  setEvents() {
    super.setEvents();
  }
}
