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

    this.aspect = gb.r.w / gb.r.h;

    // console.log(this.aspect, "this.aspect");

    // this.isUEv = true;

    this.clock = new THREE.Clock();

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();

    this.cursor = {
      x: 0,
      y: 0,
    };

    // const axesHelper = new THREE.AxesHelper(5);
    // this.scene.add(axesHelper);

    this.add();
  }

  ready() {
    var geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(geometry, material);

    // this.camera.lookAt(this.mesh.position);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    console.log("update");
    // this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
    const elapsedTime = this.clock.getElapsedTime();

    // マウスの動きに合わせてカメラ動かす
    // this.camera.position.x = this.cursor.x * 1;
    // this.camera.position.y = this.cursor.y * 1;

    // 裏面も見えるように、cameraを平面上で円形運動→カメラをz軸上で動かさないとだめ
    // ※近すぎるので2倍して遠ざける
    // this.camera.position.x = Math.sin(this.cursor.x * Math.PI * 2) * 2;
    // this.camera.position.z = Math.cos(this.cursor.x * Math.PI * 2) * 2;
    // this.camera.position.y = this.cursor.y * 2;
    // this.camera.lookAt(this.mesh.position);

    // console.log(
    //   this.cursor.x,
    //   "this.cursor.x",
    //   this.cursor.x * Math.PI * 2,
    //   "this.cursor.x * Math.PI * 2",
    //   this.camera.position.x,
    //   "this.camera.position.x"
    // );

    // this.mesh.rotation.y = elapsedTime;
  }

  // draw() {}

  timeline() {}

  onResize() {}

  setEvents() {
    super.setEvents();

    // window.addEventListener("mousemove", (e) => {
    //   // マウスの位置を絶対値(px)ではなく、0から1の値に変換
    //   // さらにそれを-0.5 ~ 0.5 の範囲に変換
    //   // three.jsでは上がyの値は+になるので、invertする必要ある
    //   this.cursor.x = e.clientX / gb.r.w - 0.5;
    //   this.cursor.y = -(e.clientY / gb.r.h - 0.5);
    // });
  }
}
