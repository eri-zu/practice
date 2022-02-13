//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import TrackballControls from "three-trackballcontrols";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Scene extends Base {
  constructor(isControl = false, renderer, camera) {
    super();

    this.renderer = renderer;
    this.camera = camera;
    this.isControl = isControl;

    this.setup();
    this.setEvents();
  }

  setup() {
    if (this.isControl) {
      // this.controls = new TrackballControls(
      //   this.camera,
      //   this.renderer.domElement
      // );
      // this.setting();
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // this.setting();
    }
  }

  setting() {
    this.controls.rotateSpeed = 3.0; //回転させるときの速さ
    this.controls.zoomSpeed = 1.2; //ズームするときの速さ
    this.controls.panSpeed = 0.3; //パンするときの速さ

    this.controls.staticMoving = false;
    this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;

    this.controls.noRotate = false; //trueで回転操作を不可にする
    this.controls.noZoom = false; //trueでズーム操作を不可にする
    this.controls.noPan = true; //trueでパンの操作を不可にする

    this.controls.minDistance = 0; //近づける距離の最小値
    this.controls.maxDistance = Infinity; //遠ざかれる距離の最大値
    // this.controls.maxDistance = 100; //遠ざかれる距離の最大値
  }

  setEvents() {}
}
