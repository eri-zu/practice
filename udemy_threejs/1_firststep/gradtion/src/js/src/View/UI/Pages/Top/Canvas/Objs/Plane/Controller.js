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
import fs1 from "./shader/fragment1.glsl";
import fs2 from "./shader/fragment2.glsl";
import fs3 from "./shader/fragment3.glsl";
import fs4 from "./shader/fragment4.glsl";
import fs5 from "./shader/fragment5.glsl";
import fs6 from "./shader/fragment6.glsl";

export default class Controller extends Base {
  constructor(scene) {
    super();

    this.scene = scene;

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
      fragmentShader: fs5,
      uniforms: {
        uColor: { value: new THREE.Color(0xff0000) },
        uResoltion: { value: { x: gb.w, y: gb.h } },
      },
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {}

  onResize() {
    this.material.uniforms.uResoltion.value.x = gb.w;
    this.material.uniforms.uResoltion.value.h = gb.g;
  }

  setEvents() {
    super.setEvents();
  }
}
