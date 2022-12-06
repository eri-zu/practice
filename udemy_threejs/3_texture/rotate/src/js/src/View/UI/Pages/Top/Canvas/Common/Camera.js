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

    this.isPerspective = false;
    this.isPixel = false;
    this.isControl = false;

    if (this.isPerspective) {
      this.fov = 75; // 視野角
      this.near = 1;
      this.far = 10000;
      this.z = 3;
    } else {
      this.width = 1;
      this.height = 1;
      this.near = 0.1;
      this.far = 100;
      this.z = 3;
    }

    this.setup();
    this.setEvents();
  }

  setup() {
    this.isPerspective
      ? this.setPerspectiveCamera()
      : this.setOrthographicCamera();

      this.onResize()

    if (this.isControl) this.setControls();
  }

  setPerspectiveCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );

    this.camera.position.set(0, 0, this.z);
    if (this.isPixel) this.camera.position.z = this.positionZ;

    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.camera);
  }

  setOrthographicCamera() {
    this.camera = new THREE.OrthographicCamera(
      -this.width,
      this.width,
      this.height,
      -this.height,
      this.near,
      this.far
    );
    this.camera.position.z = this.z;
    this.scene.add(this.camera);
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

    if (this.isPixel) this.camera.position.z = this.positionZ;

    if (!this.isPerspective) {
      if (this.aspect > 1) {
        this.width = 1;
        this.height = this.width * (gb.h / gb.w);
      } else {
        this.width = this.aspect;
        this.height = 1;
      }

      this.camera.left = -this.width;
      this.camera.right = this.width;
      this.camera.top = this.height;
      this.camera.bottom = -this.height;
    }

    this.camera.updateProjectionMatrix();
  }

  setEvents() {
    super.setEvents();
  }
}
