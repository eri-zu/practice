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

    this.setup();
    this.setEvents();
  }

  async setup() {
    this.texture = await this.loadTexture();

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.add();
  }

  async loadTexture() {
    const src = ["./assets/resource/img/8.jpg"];
    const textureLoader = new THREE.TextureLoader();

    const p = new Promise((resolve, reject) => {
      const texture = textureLoader.load(src[0], () => {
        resolve(texture);
      });
    });

    return await p;
  }

  setGeometry() {
    this.geometry = new THREE.PlaneGeometry(2, 2);
  }

  setMaterial() {
    this.material = new THREE.RawShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        uTexture: { value: this.texture },
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

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
