//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import * as dat from "lil-gui";
import gsap from "gsap";

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
    const gui = new dat.GUI();

    this.ready();

    this.parameters = {
      color: 0xff0000,
      spin: () => {
        gsap.to(this.mesh.rotation, 1, {
          y: this.mesh.rotation.y + Math.PI * 2,
        });
      },
    };

    // gui.add(this.mesh.position, "y", -3, 3, 0.01);
    gui.add(this.mesh.position, "y").min(-3).max(3).step(0.01);
    gui.add(this.mesh, "visible");
    gui.add(this.material, "wireframe");
    gui.addColor(this.parameters, "color").onChange(() => {
      this.material.color.set(this.parameters.color);
    });
    gui.add(this.parameters, "spin");

    this.add();
  }

  ready() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });
    this.mesh = new THREE.Mesh(geometry, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
