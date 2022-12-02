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
    this.clock = new THREE.Clock();

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
    // this.material = new THREE.MeshBasicMaterial({
    //   color: 0x000000,
    //   side: THREE.DoubleSide,
    // });

    this.material = new THREE.RawShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        uTime: { value: 0.0 },
      },
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    this.material.uniforms.uTime.value = elapsedTime;
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
