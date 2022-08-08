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
    this.add();
  }

  ready() {
    const geo = new THREE.PlaneGeometry(600, 300, 32, 32);

    this.material = new THREE.RawShaderMaterial({
      fragmentShader: fs,
      vertexShader: vs,
      uniforms: {
        uTrans: { value: this.target.value },
        uTexture0: { value: this.TEXTURES[0] },
        uTexture1: { value: this.TEXTURES[1] },
        uDisp: { value: this.TEXTURES[2] },
      },
      side: THREE.DoubleSide,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geo, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    this.material.uniforms.uTrans.value = this.target.value;
  }

  onResize() {}

  show() {
    const tl = gsap.timeline();

    tl.to(this.target, 5, {
      value: 1.5,
      ease: "expo.out",
    });
  }

  hide() {
    const tl = gsap.timeline();

    tl.to(this.target, 5, {
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
