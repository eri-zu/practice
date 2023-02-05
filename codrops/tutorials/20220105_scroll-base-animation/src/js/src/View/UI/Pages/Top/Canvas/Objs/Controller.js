//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Meshes from "./Meshs/Controller";
import Particle from "./Particle/Controller";
import * as THREE from "three";
// import Plane from "./Plane/Controller";

export default class Controller extends Base {
  constructor(scene, camera) {
    super();

    this.scene = scene;
    this.camera = camera;

    this.clock = new THREE.Clock();
    this.mouse = { x: 0, y: 0 };
    this.prev = 0;
    this.objectDistance = 4;
    this.len = 3;
    this.scrollY = 0;

    this.isSEv = true;
    this.isMEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setCamera();
    this.add();

    this.meshes = new Meshes(this.scene, this.objectDistance);
    this.particle = new Particle(this.scene, this.objectDistance);
    // this.plane = new Plane(this.scene);
  }

  setCamera() {
    this.cameraGroup = new THREE.Group();
    this.cameraGroup.add(this.camera);
  }

  add() {
    this.scene.add(this.cameraGroup);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    const deltaTime = elapsedTime - this.prev;
    this.prev = elapsedTime;

    // ------------------------------------------------------------
    // camera
    // ------------------------------------------------------------
    // this.camera.position.y = -1 * this.scrollY;
    // ↓早すぎ
    // ↓window.innerHeight分スクロールしたら、4（1セクションの高さ）進んで欲しいので
    this.camera.position.y = -1 * ((this.scrollY / gb.h) * this.objectDistance);

    // ------------------------------------------------------------
    // parallax
    // ------------------------------------------------------------

    // const parallaxX = this.mouse.x;
    // const parallaxY = -this.mouse.y;
    // ↓parallaxの効果弱く
    const parallaxX = this.mouse.x * 0.5;
    const parallaxY = -this.mouse.y * 0.5;

    // this.cameraGroup.position.x = parallaxX;
    // this.cameraGroup.position.y = parallaxY;
    // ↓easing
    // this.cameraGroup.position.x +=
    //   (parallaxX - this.cameraGroup.position.x) * 0.01;
    // this.cameraGroup.position.y +=
    //   (parallaxY - this.cameraGroup.position.y) * 0.01;
    // ↓
    this.cameraGroup.position.x +=
      (parallaxX - this.cameraGroup.position.x) * 5 * deltaTime;
    this.cameraGroup.position.y +=
      (parallaxY - this.cameraGroup.position.y) * 5 * deltaTime;

    // ------------------------------------------------------------
    // mesh
    // ------------------------------------------------------------

    this.meshes.update();
  }

  onMouseMove(e) {
    // this.mouse.x = e.clientX;
    // this.mouse.y = e.clientY;

    // ↓webGL座標に変換
    // this.mouse.x = e.clientX / gb.w;
    // this.mouse.y = e.clientY / gb.h;

    // ↓0 - 1を-0.5 - 0.5の範囲に変換
    this.mouse.x = e.clientX / gb.w - 0.5;
    this.mouse.y = e.clientY / gb.h - 0.5;
  }

  onScroll() {
    this.scrollY = window.scrollY;

    // ------------------------------------------------------------
    // mesh
    // ------------------------------------------------------------
    this.meshes.onScroll();
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
