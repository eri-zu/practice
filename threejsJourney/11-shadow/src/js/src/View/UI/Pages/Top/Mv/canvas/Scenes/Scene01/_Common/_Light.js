//--------------------------------------------------
//
//  Light
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import * as dat from "lil-gui";

export default class Light extends Base {
  constructor(scene) {
    super();

    this.gui = new dat.GUI();

    this.scene = scene;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();

    this.add();
    // this.addHelper();

    this.loopStart = true;

    // this.param();
  }

  ready() {
    // ambient 環境光源
    // 部屋の電気みたいな 空間全体に均等に光を当てる
    // AmbientLight( color : Integer, intensity : Float )
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.gui.add(this.ambientLight, "intensity").min(0).max(1).step(0.001);

    // directional light 並行光源 (太陽の光とか)
    // 光源からの距離に関係なく等しい力 光の方向は同じ
    // DirectionalLight( color : Integer, intensity : Float )
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    this.directionalLight.position.set(2, 2, -1);

    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.width = 1024;
    this.directionalLight.shadow.mapSize.height = 1024;
    this.directionalLight.shadow.camera.near = 1; // 映し出す範囲巨大なので小さく
    this.directionalLight.shadow.camera.far = 6;
    this.directionalLight.shadow.camera.top = 2;
    this.directionalLight.shadow.camera.right = 2; // 投影する四角の範囲
    this.directionalLight.shadow.camera.bottom = -2;
    this.directionalLight.shadow.camera.left = -2;
    this.directionalLight.shadow.radius = 10;

    this.directionalLighCameratHelper = new THREE.CameraHelper(
      this.directionalLight.shadow.camera
    );
    this.directionalLighCameratHelper.visible = false;

    this.gui.add(this.directionalLight, "intensity").min(0).max(1).step(0.001);
    this.gui
      .add(this.directionalLight.position, "x")
      .min(-5)
      .max(5)
      .step(0.001);
    this.gui
      .add(this.directionalLight.position, "y")
      .min(-5)
      .max(5)
      .step(0.001);
    this.gui
      .add(this.directionalLight.position, "z")
      .min(-5)
      .max(5)
      .step(0.001);

    // spotLight
    // color: the color
    // intensity: the strength
    // distance: the distance at which the intensity drops to 0
    // angle: how large is the beam
    // penumbra: ライトのエッジのボケ
    // decay: how fast the light dims
    this.spotLight = new THREE.SpotLight(0xffffff, 0.3, 10, Math.PI * 0.3);
    this.spotLight.position.set(0, 2, 2);
    this.spotLight.castShadow = true;
    this.spotLight.shadow.mapSize.width = 1024;
    this.spotLight.shadow.mapSize.height = 1024;
    this.spotLight.shadow.camera.fov = 30;
    this.spotLight.shadow.camera.near = 1;
    this.spotLight.shadow.camera.far = 6;

    this.spotLightCameraHelper = new THREE.CameraHelper(
      this.spotLight.shadow.camera
    );
    // this.spotLightCameraHelper.visible = false;

    // point 点光源
    // 裸電球みたいな
    // PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
    // 距離によって光がどのように弱くなるか、distanceとdecayで調整することも可能
    // 全方向(6面)に照らすので、castShadowを使うとパフォーマンスissue起こる
    // camerahelperは6つrenderしたものの、最後にrenderしたものになる（つまりした方向）
    this.pointLight = new THREE.PointLight(0xffffff, 0.3);
    this.pointLight.position.set(-1, 1, 0);
    this.pointLight.castShadow = true;
    this.pointLight.shadow.camera.width = 1024;
    this.pointLight.shadow.camera.height = 1024;
    this.pointLight.shadow.camera.near = 0.1;
    this.pointLight.shadow.camera.far = 5;

    this.pointLightCameraHelper = new THREE.CameraHelper(
      this.pointLight.shadow.camera
    );
    // this.pointLightCameraHelper = false;
  }

  add() {
    this.scene.add(this.ambientLight);

    this.scene.add(this.directionalLight);
    this.scene.add(this.directionalLighCameratHelper);

    this.scene.add(this.spotLight);
    this.scene.add(this.spotLight.target); // spotlightはこのtargetをずっとをみてる
    this.scene.add(this.spotLightCameraHelper);

    this.scene.add(this.pointLight);
    this.scene.add(this.pointLightCameraHelper);
  }

  addHelper() {}

  updateRotate() {
    var rotateX = gb.in.u.radian(gb.in.up.frame / 1);
    var rotateY = gb.in.u.radian(gb.in.up.frame / 1);
    var rotateZ = gb.in.u.radian(gb.in.up.frame / 1);
    // var rotateY = 0;
    // var rotateZ = 0;

    this.scene.rotation.set(rotateX, rotateY, rotateZ);
  }

  update() {
    if (this.slh) this.slh.update();
  }

  param() {
    this.param_spot = {
      color: "#ffffff",
      x: 0.0,
      y: 0.0,
      z: 300.0,
      angle: Math.PI / 3,
      intensity: 1.0,
      distance: 0.0,
      decay: 1.0,
      penumbra: 0.0,
    };

    var gui = new dat.GUI();

    // init
    this.spotLight.position.set(
      this.param_spot.x,
      this.param_spot.y,
      this.param_spot.z
    );
    this.spotLight.color = new THREE.Color(this.param_spot.color);
    this.spotLight.angle = this.param_spot.angle;
    this.spotLight.intensity = this.param_spot.intensity;
    this.spotLight.distance = this.param_spot.distance;
    this.spotLight.decay = this.param_spot.decay;
    this.spotLight.penumbra = this.param_spot.penumbra;

    gui.addColor(this.param_spot, "color").onChange((v) => {
      this.spotLight.color.setHex(v);
    });
    gui.add(this.param_spot, "x", -200, 200, 1).onChange((v) => {
      this.spotLight.position.x = v;
    });
    gui.add(this.param_spot, "y", -200, 200, 1).onChange((v) => {
      this.spotLight.position.y = v;
    });
    gui.add(this.param_spot, "z", -1000, 1000, 1).onChange((v) => {
      this.spotLight.position.z = v;
    });
    gui.add(this.param_spot, "angle", 0, Math.PI / 2, 0.01).onChange((v) => {
      this.spotLight.angle = v;
    });
    gui.add(this.param_spot, "intensity", 0, 10, 0.1).onChange((v) => {
      this.spotLight.intensity = v;
    });
    gui.add(this.param_spot, "distance", 0, 1000, 1.0).onChange((v) => {
      this.spotLight.distance = v;
    });
    gui.add(this.param_spot, "decay", 0, 10, 0.1).onChange((v) => {
      this.spotLight.decay = v;
    });
    gui.add(this.param_spot, "penumbra", 0, 2, 0.01).onChange((v) => {
      this.spotLight.penumbra = v;
    });
  }
}
