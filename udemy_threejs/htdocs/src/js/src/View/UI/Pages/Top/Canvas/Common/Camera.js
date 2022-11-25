//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class CameraController extends Base {
  constructor(scene) {
    super();

    this.canvas = document.querySelector("canvas");
    this.scene = scene;

    this.aspect = gb.w / gb.h;
    this.fov = 75; // 視野角
    this.near = 1;
    this.far = 50000;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setCamera();
    this.setControls();
  }

  setCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );

    this.camera.position.set(0, 0, 3);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.camera);
  }

  setControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
  }

  update() {
    this.controls.update();
  }

  onResize() {
    this.aspect = gb.w / gb.h;
    this.camera.updateProjectionMatrix();
  }

  setEvents() {
    super.setEvents();
  }
}
