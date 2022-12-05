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
  constructor(scene) {
    super();

    this.scene = scene;

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
    this.geometry = new THREE.BoxGeometry(100, 100, 100);
  }

  setMaterial() {
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.mesh.rotation.z += 0.01;
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
