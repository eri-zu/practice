//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";
import vs from "./shader/vertex.glsl";
import fs from "./shader/fragment.glsl";

export default class Controller extends Base {
  constructor(scene) {
    super();

    this.scene = scene;

    this.isMEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.add();
  }

  setGeometry() {
    this.geometry = new THREE.PlaneGeometry(2, 2);
  }

  setMaterial() {
    this.material = new THREE.RawShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        uColor: { value: new THREE.Color(0xff0000) },
        uMouse: { value: { x: 0.0, y: 0.0 } },
        uResolution: { value: { x: gb.w, y: gb.h } },
      },
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  onMouseMove(e) {
    this.material.uniforms.uMouse.value.x = e.touches
      ? e.touches[0].clientX
      : e.clientX;

    this.material.uniforms.uMouse.value.y = e.touches
      ? e.touches[0].clientY
      : e.clientY;
  }

  update() {}

  onResize() {
    this.material.uniforms.uResolution.value.x = gb.w;
    this.material.uniforms.uResolution.value.y = gb.h;
  }

  setEvents() {
    super.setEvents();
  }
}
