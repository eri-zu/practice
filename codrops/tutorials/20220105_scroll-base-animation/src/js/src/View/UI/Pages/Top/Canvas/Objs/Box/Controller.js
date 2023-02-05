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
  constructor(scene, camera) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.clock = new THREE.Clock();

    this.scrollY = 0;
    this.mouse = { x: 0, y: 0 };
    this.prev = 0;
    this.isMEv = true;
    this.isSEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setCamera();
    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.add();
  }

  setCamera() {
    this.cameraGroup = new THREE.Group();
    this.cameraGroup.add(this.camera);
  }

  setGeometry() {
    this.geometry1 = new THREE.TorusGeometry(1, 0.4, 16, 60);
    this.geometry2 = new THREE.ConeGeometry(1, 2, 32);
    // this.geometry3 = new THREE.BoxGeometry(2, 2, 2);
    this.geometry3 = new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16);
  }

  setMaterial() {
    this.material = new THREE.MeshToonMaterial({ color: "#ffeded" });
  }

  setMesh() {
    this.mesh1 = new THREE.Mesh(this.geometry1, this.material);
    this.mesh2 = new THREE.Mesh(this.geometry2, this.material);
    this.mesh3 = new THREE.Mesh(this.geometry3, this.material);

    this.meshes = [this.mesh1, this.mesh2, this.mesh3];

    this.objectDistance = 4;

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
    this.scene.add(this.cameraGroup);
    this.scene.add(this.mesh1, this.mesh2, this.mesh3);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    const deltaTime = elapsedTime - this.prev;
    this.prev = elapsedTime;

    for (const mesh of this.meshes) {
      mesh.rotation.x = elapsedTime * 0.1;
      mesh.rotation.y = elapsedTime * 0.12;
    }

    // this.camera.position.y = -1 * this.scrollY;
    // ↓早すぎ
    // ↓window.innerHeight分スクロールしたら、4（1セクションの高さ）進んで欲しいので
    this.camera.position.y = -1 * ((this.scrollY / gb.h) * this.objectDistance);

    // parallax
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
  }

  onScroll() {
    this.scrollY = window.scrollY;
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

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
