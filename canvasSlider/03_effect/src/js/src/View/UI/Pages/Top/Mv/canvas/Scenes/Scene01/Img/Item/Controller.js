//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";

export default class Controller extends Base {
  constructor(TEXTURE, scene) {
    super();

    this.TEXTURE = TEXTURE;
    this.scene = scene;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
    this.add();
  }

  ready() {
    const geometry = new THREE.PlaneGeometry(600, 300);

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: this.TEXTURE,
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
