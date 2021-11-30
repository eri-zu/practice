//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import gsap from "gsap";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.isUEv = true;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();
    this.add();

    // this.time = Date.now();
    this.clock = new THREE.Clock();

    this.move();
  }

  move() {
    gsap.to(this.mesh.position, 1, {
      x: 2,
      ease: "expo.out",
    });
  }

  ready() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    // this.mesh.position.x -= 0.01;

    // ①フレームレートにかかわらず同じスピードで処理させる
    // const currentTime = Date.now();
    // const deltaTime = currentTime - this.time; // アニメーションが描画されて、次のアニメーションが描画されるまでの時間（16くらいの値）
    // this.time = currentTime;

    // this.mesh.rotation.x += 0.001 * deltaTime;

    // ②フレームレートにかかわらず同じスピードで処理させる
    const elapsedTime = this.clock.getElapsedTime();
    console.log(elapsedTime); // 0スタート second
    // this.mesh.rotation.x = elapsedTime;
    // this.mesh.position.x = Math.cos(elapsedTime);
    // this.mesh.position.y = Math.sin(elapsedTime);
    // this.camera.position.x = Math.cos(elapsedTime);
    // this.camera.position.y = Math.sin(elapsedTime);
    // this.camera.lookAt(this.mesh.position);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
