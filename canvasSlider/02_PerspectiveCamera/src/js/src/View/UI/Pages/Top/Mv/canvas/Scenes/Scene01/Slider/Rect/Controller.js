//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";

export default class Rect extends Base {
  constructor(scene, camera, renderer, texture) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.texture = texture;

    this.setup(this.texture);
    this.setEvents();
  }

  setup(texture) {
    this.ready(texture);
    this.add();
  }

  ready(texture) {
    // geometry
    const geometry = new THREE.PlaneGeometry(600, 300);

    // material
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: texture,
    });

    // mesh
    this.mesh = new THREE.Mesh(geometry, material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
