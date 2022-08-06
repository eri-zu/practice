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

    console.log(this.TEXTURE);

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
    this.add();
  }

  ready() {
    this.wrap = new THREE.Group();

    const geometry = new THREE.PlaneGeometry(600, 300);

    // const material = new THREE.MeshBasicMaterial({
    //   color: 0xffffff,
    //   map: this.TEXTURE,
    // });

    const material = new THREE.RawShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        uTexture: { value: this.TEXTURE },
      },
      side: THREE.DoubleSide,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.z = -100; // ちょっと距離取らないと見切れるので
  }

  add() {
    this.wrap.add(this.mesh);
    this.scene.add(this.wrap);

    console.log(-Math.PI * 2);

    gsap.set(this.wrap.rotation, {
      y: (-Math.PI * 2) / 120,
      x: (-Math.PI * 2) / 100,
    });
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
