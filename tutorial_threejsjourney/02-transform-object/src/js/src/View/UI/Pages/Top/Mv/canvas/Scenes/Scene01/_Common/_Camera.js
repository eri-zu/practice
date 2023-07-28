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

    this.fov = 75; //視野角
    this.aspect = gb.r.w / gb.r.h; // canvasの縦横比率
    // this.near = 1;
    // this.far = 50000;

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
    // ③cameraを作成
    // this.fov, this.aspectは必須parameter
    this.camera = new THREE.PerspectiveCamera(
      this.fov, //視野角
      this.aspect // canvasの縦横比率
    );
    // this.camera.position.z = 600;
    // this.camera.position.y = 0;

    // ピクセル等倍
    this.setCameraByPixel();

    this.updateFrustum();

    this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
    this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
    this.depth =
      this.frustum.planes[4].constant + this.frustum.planes[5].constant;
  }

  createForShader() {
    this.camera = new THREE.Camera();
    this.camera.position.z = 3;
  }

  createOrthographic() {
    var w = gb.renderer.domElement.width;
    var h = gb.renderer.domElement.height;

    this.camera = new THREE.OrthographicCamera(
      w / -4,
      w / 4,
      h / 4,
      h / -4,
      1,
      1000
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
    var fov = this.fov;
    var vFOV = fov * (Math.PI / 180); // convert to radians
    var vpHeight = gb.r.h; // viewport height;
    // var z = vpHeight / (2 * Math.tan(vFOV / 2));
    var z = 3;
    // this.z = z;
    this.camera.position.set(0, 0, z);
    // this.camera.position.z = 3;
    // this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // log("z", z);

    // var param = {
    //   "fov": 45,
    // };

    // var gui = new dat.GUI();

    // // 最初のset
    // this.camera.fov = param.fov;

    // gui.add(param, "fov", 0, 90, 0.1).onChange((v)=>{
    //   this.camera.fov = v;
    //   this.camera.updateProjectionMatrix();
    // });
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
    this.updateFrustum();

    this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
    this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
    this.depth =
      this.frustum.planes[4].constant + this.frustum.planes[5].constant;

    log(this.frustum);
  }
}
