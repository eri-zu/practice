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
    this.far = 10000;
    this.isPixel = true;
    this.isControl = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setPerspectiveCamera();
    if (this.isControl) this.setControls();
  }

  setPerspectiveCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );

    this.camera.position.set(0, 0, 3);
    if (this.isPixel) this.camera.position.z = this.positionZ;

    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.camera);
  }

  setOrthographicCamera() {
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
  }

  get positionZ() {
    // ラジアンに
    this.fovRad = m.radian(this.fov / 2);
    // dist : windowサイズがぴったりおさまるカメラ距離
    const z = gb.h / 2 / Math.tan(this.fovRad);

    return z;
  }

  setControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true; // 慣性
  }

  update() {
    if (this.controls) this.controls.update();
  }

  onResize() {
    this.aspect = gb.w / gb.h;
    this.camera.updateProjectionMatrix();
    if (this.isPixel) this.camera.position.z = this.positionZ;
  }

  setEvents() {
    super.setEvents();
  }
}
