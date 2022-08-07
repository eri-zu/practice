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
  constructor(TEXTURE, scene) {
    super();

    this.TEXTURE = TEXTURE;
    this.scene = scene;

    this.clock = new THREE.Clock();

    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
    this.add();
  }

  ready() {
    this.wrap = new THREE.Group();

    const geometry = new THREE.PlaneGeometry(600, 300, 32, 32);

    this.material = new THREE.RawShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        uTexture: { value: this.TEXTURE },
        uTime: { value: 0 },
        uFrequency: { value: new THREE.Vector2(5, 2) },
      },
      side: THREE.DoubleSide,
      // wireframe: true,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.position.set(0, 0, 0);
    // this.mesh.position.z = -100; // ちょっと距離取らないと見切れるので
  }

  add() {
    this.wrap.add(this.mesh);
    this.scene.add(this.wrap);

    // gsap.set(this.wrap.rotation, {
    //   y: (-Math.PI * 2) / 120,
    //   x: (-Math.PI * 2) / 100,
    // });
  }

  update() {
    const elpasedTime = this.clock.getElapsedTime();
    this.material.uniforms.uTime.value = elpasedTime;
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
