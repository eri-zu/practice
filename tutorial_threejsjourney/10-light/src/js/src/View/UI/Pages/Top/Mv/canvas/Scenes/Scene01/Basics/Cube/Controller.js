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

    this.add();
  }

  ready() {
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.4;

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      material
    );
    this.sphere.position.x = -1.5;

    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 0.75, 0.75),
      material
    );

    this.torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.2, 32, 64),
      material
    );
    this.torus.position.x = 1.5;

    this.plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
    this.plane.position.y = -0.65;
    this.plane.rotation.x = -Math.PI * 0.5;
  }

  add() {
    this.scene.add(this.sphere, this.cube, this.torus, this.plane);
  }

  update() {
    // this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
    const elapsedTime = this.clock.getElapsedTime();

    this.sphere.rotation.x = 0.15 * elapsedTime;
    this.cube.rotation.x = 0.15 * elapsedTime;
    this.torus.rotation.x = 0.15 * elapsedTime;

    this.sphere.rotation.y = 0.1 * elapsedTime;
    this.cube.rotation.y = 0.1 * elapsedTime;
    this.torus.rotation.y = 0.1 * elapsedTime;
  }

  draw() {}

  timeline() {}

  onResize() {}
}
