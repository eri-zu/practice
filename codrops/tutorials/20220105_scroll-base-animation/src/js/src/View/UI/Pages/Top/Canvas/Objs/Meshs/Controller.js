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
  constructor(scene, objectDistance) {
    super();

    this.scene = scene;
    this.clock = new THREE.Clock();

    this.prev = 0;
    this.objectDistance = objectDistance;
    this.currentSection = 0;

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
    this.geometry1 = new THREE.TorusGeometry(1, 0.4, 16, 60);
    this.geometry2 = new THREE.ConeGeometry(1, 2, 32);
    this.geometry3 = new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16);
    // this.geometry3 = new THREE.BoxGeometry(2, 2, 2);
  }

  setMaterial() {
    this.material = new THREE.MeshToonMaterial({ color: "#ffeded" });
  }

  setMesh() {
    this.mesh1 = new THREE.Mesh(this.geometry1, this.material);
    this.mesh2 = new THREE.Mesh(this.geometry2, this.material);
    this.mesh3 = new THREE.Mesh(this.geometry3, this.material);
    this.meshes = [this.mesh1, this.mesh2, this.mesh3];

    // this.mesh1.position.y = 2;
    // this.mesh1.scale.set(0.5, 0.5, 0.5);
    // this.mesh2.visible = false;
    // this.mesh3.position.y = -2;
    // this.mesh3.scale.set(0.5, 0.5, 0.5);

    this.mesh1.position.x = 2;
    this.mesh1.position.y = -1 * this.objectDistance * 0;
    this.mesh2.position.x = -2;
    this.mesh2.position.y = -1 * this.objectDistance * 1;
    this.mesh3.position.x = 2;
    this.mesh3.position.y = -1 * this.objectDistance * 2;
  }

  add() {
    this.scene.add(this.mesh1, this.mesh2, this.mesh3);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    const deltaTime = elapsedTime - this.prev;
    this.prev = elapsedTime;

    for (const mesh of this.meshes) {
      // mesh.rotation.x = elapsedTime * 0.1;
      // mesh.rotation.y = elapsedTime * 0.12;
      // ↓scrollのrotateとconflictしないようにするため、相対値に変更
      mesh.rotation.x += 0.1 * 0.016;
      mesh.rotation.y += 0.12 * 0.016;
    }
  }

  onScroll() {
    // windowの高さ分スクロールしたら新しいsection
    this.newSection = Math.round(window.scrollY / gb.h);

    if (this.currentSection !== this.newSection) {
      this.currentSection = this.newSection;
      this.rotate();
    }
  }

  rotate() {
    const tl = gsap.timeline();

    tl.to(this.meshes[this.currentSection].rotation, 0.5, {
      x: "+=6",
      y: "+=3",
      ease: "power2.inOut",
    });
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
