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
    this.parameters.radius = 5;
    this.parameters.branches = 3;
    this.parameters.spin = 1;
    this.parameters.randomness = 0.2;
    this.parameters.randomnessPower = 3;
    this.parameters.insideColor = "#ff6030";
    this.parameters.outsideColor = "#1b3984";

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
    const colors = new Float32Array(this.parameters.count * 3);

    const colorInside = new THREE.Color(this.parameters.insideColor);
    const colorOutside = new THREE.Color(this.parameters.outsideColor);

    for (let i = 0; i < this.parameters.count; i++) {
      const i3 = i * 3;

      // --------------------------
      // position
      // --------------------------
      const radius = Math.random() * this.parameters.radius;

      // i % this.parameters.branches : 0, 1, 2, 0, 1, 2, 0, 1, 2 ...
      // (i % this.parameters.branches) / this.parameters.branches) : 0, 0.33, 0.66, 0, 0.33, 0.66, 0, 0.33, 0.66 ...
      const branchAngle =
        ((i % this.parameters.branches) / this.parameters.branches) *
        Math.PI *
        2;

      // 中心座標から遠いほど多めにspin
      const spinAngle = radius * this.parameters.spin;

      // const randomX = (Math.random() - 0.5) * this.parameters.randomness;
      // const randomY = (Math.random() - 0.5) * this.parameters.randomness;
      // const randomZ = (Math.random() - 0.5) * this.parameters.randomness;

      // 乗算（pow）を利用してブランチの中心ほど密集してるようにする
      const randomX =
        Math.pow(Math.random(), this.parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomY =
        Math.pow(Math.random(), this.parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomZ =
        Math.pow(Math.random(), this.parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = 0 + randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // --------------------------
      // color
      // --------------------------
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / this.parameters.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    this.material = new THREE.PointsMaterial({
      size: this.parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
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
        this.generateGalaxy();
      });
    this.gui
      .add(this.parameters, "size")
      .min(0.001)
      .max(0.1)
      .step(0.001)
      .onFinishChange(() => {
        this.generateGalaxy();
      });
    this.gui
      .add(this.parameters, "radius")
      .min(0.01)
      .max(20)
      .step(0.01)
      .onFinishChange(() => {
        this.generateGalaxy();
      });
    this.gui
      .add(this.parameters, "branches")
      .min(2)
      .max(20)
      .step(1)
      .onFinishChange(() => {
        this.generateGalaxy();
      });
    this.gui
      .add(this.parameters, "spin")
      .min(-5)
      .max(5)
      .step(0.001)
      .onFinishChange(() => {
        this.generateGalaxy();
      });
    this.gui
      .add(this.parameters, "randomness")
      .min(0)
      .max(2)
      .step(0.001)
      .onFinishChange(() => {
        this.generateGalaxy();
      });
    this.gui
      .add(this.parameters, "randomnessPower")
      .min(1)
      .max(10)
      .step(0.001)
      .onFinishChange(() => {
        this.generateGalaxy();
      });
    this.gui.addColor(this.parameters, "insideColor").onFinishChange(() => {
      this.generateGalaxy();
    });
    this.gui.addColor(this.parameters, "outsideColor").onFinishChange(() => {
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
