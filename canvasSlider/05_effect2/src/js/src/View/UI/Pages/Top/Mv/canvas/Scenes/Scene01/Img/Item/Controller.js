//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";
import vs from "./vertex.glsl";
import fs from "./fragment.glsl";
import GUI from "lil-gui";

export default class Controller extends Base {
  constructor(scene, TEXTURES) {
    super();

    this.scene = scene;
    this.TEXTURES = TEXTURES;

    this.target = { value: 0 };

    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
    this.setImage();
    this.add();

    // const gui = new GUI();
    // gui.add(this.target, "value", 0, 1.5, 0.1);
  }

  ready() {
    const geo = new THREE.PlaneGeometry(600, 300, 32, 32);

    this.material = new THREE.RawShaderMaterial({
      fragmentShader: fs,
      vertexShader: vs,
      uniforms: {
        uProgress: { value: this.target.value },
        uTexture0: { value: this.TEXTURES[0] },
        uTexture1: { value: this.TEXTURES[1] },
        uResolution: { value: new THREE.Vector4() },
      },
      side: THREE.DoubleSide,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geo, this.material);
  }

  setImage() {
    this.canvasAspect = gb.canvas_h / gb.canvas_w;
    this.imgAspect =
      this.TEXTURES[0].image.height / this.TEXTURES[0].image.width;

    let aspect1;
    let aspect2;

    if (this.canvasAspect > this.imgAspect) {
      console.log("a");
      aspect1 = (gb.canvas_w / gb.canvas_h) * this.imgAspect;
      aspect2 = 1;
    } else {
      aspect1 = 1;
      aspect2 = gb.canvas_h / gb.canvas_w / this.imgAspect;
    }

    this.material.uniforms.uResolution.value.x = gb.canvas_w;
    this.material.uniforms.uResolution.value.y = gb.canvas_h;
    this.material.uniforms.uResolution.value.z = aspect1;
    this.material.uniforms.uResolution.value.w = aspect2;
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    this.material.uniforms.uProgress.value = this.target.value;
  }

  onResize() {}

  show() {
    const tl = gsap.timeline();

    tl.to(this.target, 10, {
      value: 1,
      ease: "expo.out",
    });
  }

  hide() {
    const tl = gsap.timeline();

    tl.to(this.target, 10, {
      value: 0,
      ease: "expo.out",
    });
  }

  setEvents() {
    super.setEvents();

    gb.renderer.domElement.addEventListener("mouseenter", (e) => {
      console.log("mouseenter");
      this.show();
    });

    gb.renderer.domElement.addEventListener("mouseleave", (e) => {
      console.log("mouseleave");
      this.hide();
    });
  }
}
