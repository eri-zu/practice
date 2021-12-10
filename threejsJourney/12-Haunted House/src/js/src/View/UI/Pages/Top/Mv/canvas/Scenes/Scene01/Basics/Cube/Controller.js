//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();

    this.add();
  }

  ready() {
    // sphere
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshStandardMaterial({ roughness: 0.7 })
    );
    this.sphere.position.y = 1;

    // floor
    this.floor = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({ color: "#a9c388" })
    );
    this.floor.rotation.x = -Math.PI * 0.5;
    this.floor.position.y = 0;
  }

  add() {
    this.scene.add(this.sphere, this.floor);
  }

  update() {
    this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
