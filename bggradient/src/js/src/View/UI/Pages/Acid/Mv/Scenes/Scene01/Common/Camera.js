//--------------------------------------------------
//
//  Camera
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
export default class Camera extends Base {
  constructor(scene) {
    super();

    this.camera;
    this.name = "Camera";

    this.scene = scene;

    this.fov = 60;
    this.aspect = gb.mvWrapW / gb.mvWrapH;
    this.near = 0.1;
    this.far = 1000;

    // console.log(this.w, this.h);

    this.setup();
    this.create();
    // this.createForShader();
    // this.createOrthographic();
    // this.setTrackballControll();
    this.setEvents();
    this.onResize();

    this.loopStart = true;
  }

  setup() {}

  create() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
    // this.camera.position.z = 600;
    // this.camera.position.y = 0;

    // ピクセル等倍
    this.setCameraByPixel();

    // this.updateFrustum();

    // this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
    // this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
    // this.depth =
    //   this.frustum.planes[4].constant + this.frustum.planes[5].constant;
  }

  createForShader() {
    this.camera = new THREE.Camera();
    this.camera.position.z = 1;
  }

  createOrthographic() {
    var w = gb.renderer.domElement.width;
    var h = gb.renderer.domElement.height;

    this.camera = new THREE.OrthographicCamera(
      -1 * this.aspect, // left
      1 * this.aspect, // right
      1, // top
      -1, // bottom
      this.near,
      this.far
    );
    this.camera.position.z = 1;
  }

  setTrackballControll() {
    // controls
    // gb.in.controls = this.controls = new THREE.TrackballControls(this.camera);
    // this.controls.zoomSpeed = 0.8;
    // this.controls.rotateSpeed = 3;
  }

  update() {
    this.updateControll();
  }

  updateFrustum() {
    this.frustum = new THREE.Frustum();
    this.cameraViewProjectionMatrix = new THREE.Matrix4();

    this.camera.updateMatrixWorld(); // make sure the camera matrix is updated
    this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld);
    this.cameraViewProjectionMatrix.multiplyMatrices(
      this.camera.projectionMatrix,
      this.camera.matrixWorldInverse
    );
    this.frustum.setFromMatrix(this.cameraViewProjectionMatrix);
  }

  updateControll() {
    // this.camera.position.x = Math.sin(this.rad) * 200;
    // this.camera.position.z = Math.cos(this.rad) * 200;

    // this.rad += Math.PI / 20;

    // this.camera.position.x += ( - gb.in.m.cx * 0.01 * this.val - this.camera.position.x ) * 0.08;
    // this.camera.position.y += ( - gb.in.m.cy * 0.01 * this.val - this.camera.position.y ) * 0.08;
    this.camera.lookAt(this.scene.position);
  }

  setCameraByPixel() {
    const fovRad = (this.fov / 2) * (Math.PI / 180);
    const dist = gb.mvWrapH / 2 / Math.tan(fovRad);
    this.camera.position.z = dist;

    // const vFov = this.fov * (Math.PI / 180);
    // const z = this.h / (2 * Math.tan(vFov * 0.5));
    // this.camera.position.set(0, 0, z);
    // this.camera.lookAt(new THREE.Vector3());
  }

  // オブジェクト
  tweenPos(time, target) {
    var tX = target.x || 0;
    var tY = target.y || 0;
    var tZ = target.z || 0;
    var delay = target.delay || 0;
    var e = target.ease || Power2.easeOut;

    var t = time || 1.0;

    TweenMax.to(this.camera.position, t, {
      x: tX,
      y: tY,
      z: tZ,
      delay: delay,
      ease: e,
    });
  }

  onResize() {
    this.setCameraByPixel();

    // frustum
    // this.updateFrustum();

    // this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
    // this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
    // this.depth =
    //   this.frustum.planes[4].constant + this.frustum.planes[5].constant;
  }
}
