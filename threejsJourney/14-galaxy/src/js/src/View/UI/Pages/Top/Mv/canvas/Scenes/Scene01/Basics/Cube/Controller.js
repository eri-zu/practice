//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import * as dat from "lil-gui";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.gui = new dat.GUI();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();

    this.generateGalaxy();
    this.debug();
  }

  ready() {
    this.parameters = {};
    this.parameters.count = 100000;
    this.parameters.size = 0.01;

    this.geometry = null;
    this.material = null;
    this.points = null;
  }

  generateGalaxy() {
    // destroy old galaxy
    if (this.points !== null) {
      this.geometry.dispose();
      this.material.dispose();
      this.scene.remove(this.points);
    }

    this.geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(this.parameters.count * 3);

    for (let i = 0; i < this.parameters.count; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 3;
      positions[i3 + 1] = (Math.random() - 0.5) * 3;
      positions[i3 + 2] = (Math.random() - 0.5) * 3;
    }

    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    this.material = new THREE.PointsMaterial({
      size: this.parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);

    this.add();
  }

  debug() {
    // --------------------------
    // debug
    // --------------------------

    this.gui
      .add(this.parameters, "count")
      .min(100)
      .max(1000000)
      .step(100)
      .onFinishChange(() => {
        console.log("aaaaaa");
        this.generateGalaxy();
      });
    this.gui
      .add(this.parameters, "size")
      .min(0.001)
      .max(0.1)
      .step(0.001)
      .onFinishChange(() => {
        console.log("aaaaaa");
        this.generateGalaxy();
      });
  }

  add() {
    this.scene.add(this.points);
  }

  update() {
    this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
