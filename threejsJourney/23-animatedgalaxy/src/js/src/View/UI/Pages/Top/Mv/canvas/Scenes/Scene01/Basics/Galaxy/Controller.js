//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import * as dat from "lil-gui";
import GalaxyVertexShader from "./shaders/galaxy/vertex.glsl";
import GalaxyFragmentShader from "./shaders/galaxy/fragment.glsl";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.gui = new dat.GUI();

    this.isUEv = true;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.clock = new THREE.Clock();

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
    this.parameters.count = 200000;
    this.parameters.size = 0.005;
    this.parameters.radius = 5;
    this.parameters.branches = 3;
    this.parameters.spin = 1;
    this.parameters.randomness = 0.5;
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
    const scales = new Float32Array(this.parameters.count * 1);
    const randomness = new Float32Array(this.parameters.count * 3);

    const colorInside = new THREE.Color(this.parameters.insideColor);
    const colorOutside = new THREE.Color(this.parameters.outsideColor);

    for (let i = 0; i < this.parameters.count; i++) {
      const i3 = i * 3;

      // --------------------------
      // position
      // --------------------------
      // galaxy 半径
      const radius = Math.random() * this.parameters.radius; // 0 - 5 半径

      // 線の数
      // i % this.parameters.branches : 0, 1, 2, 0, 1, 2, 0, 1, 2 ... （indexみたいな）
      // (i % this.parameters.branches) / this.parameters.branches) : 0, 0.33, 0.66, 0, 0.33, 0.66, 0, 0.33, 0.66 ...
      const branchAngle =
        ((i % this.parameters.branches) / this.parameters.branches) *
        Math.PI *
        2;

      // const randomX = (Math.random() - 0.5) * this.parameters.randomness;
      // const randomY = (Math.random() - 0.5) * this.parameters.randomness;
      // const randomZ = (Math.random() - 0.5) * this.parameters.randomness;
      // ↓
      // 乗算（pow）を利用してブランチの中心ほど密集してるようにする
      // Math.pow(Math.random(), this.parameters.randomnessPower) : 真ん中に密集させる
      // * (Math.random() < 0.5 ? 1 : -1) : 値がpositiveだけだったので、negativeも織り交ぜる
      // const randomX =
      //   Math.pow(Math.random(), this.parameters.randomnessPower) *
      //   (Math.random() < 0.5 ? 1 : -1) *
      //   this.parameters.randomness *
      //   radius;
      // const randomY =
      //   Math.pow(Math.random(), this.parameters.randomnessPower) *
      //   (Math.random() < 0.5 ? 1 : -1) *
      //   this.parameters.randomness *
      //   radius;
      // const randomZ =
      //   Math.pow(Math.random(), this.parameters.randomnessPower) *
      //   (Math.random() < 0.5 ? 1 : -1) *
      //   this.parameters.randomness *
      //   radius;

      // ランダムはvertex.glslで加えるので一旦トリ
      positions[i3] = Math.cos(branchAngle) * radius;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = Math.sin(branchAngle) * radius;

      /**
       * randomness
       */
      const randomX =
        Math.pow(Math.random(), this.parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        this.parameters.randomness *
        radius;
      const randomY =
        Math.pow(Math.random(), this.parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        this.parameters.randomness *
        radius;
      const randomZ =
        Math.pow(Math.random(), this.parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        this.parameters.randomness *
        radius;

      randomness[i3] = randomX;
      randomness[i3 + 1] = randomY;
      randomness[i3 + 2] = randomZ;

      /**
       * color
       */
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / this.parameters.radius); // radius / this.parameters.radiusが0だと全てcolorInside, 1だと全てcolorOutsideになる

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      /**
       * scale
       */
      scales[i] = Math.random();
    }

    /**
     * setAttribute
     */
    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1)); // vertexに送る
    this.geometry.setAttribute(
      "aRandomness",
      new THREE.BufferAttribute(randomness, 3)
    );

    this.material = new THREE.ShaderMaterial({
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      vertexShader: GalaxyVertexShader,
      fragmentShader: GalaxyFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 30 * this.renderer.getPixelRatio() },
      },
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
    this.elapsedTime = this.clock.getElapsedTime();
    this.material.uniforms.uTime.value = this.elapsedTime;
  }

  draw() {}

  timeline() {}

  onResize() {}
}
