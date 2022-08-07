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
        uTexture: { value: this.TEXTURES[0] },
      },
      side: THREE.DoubleSide,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geo, this.material);
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
