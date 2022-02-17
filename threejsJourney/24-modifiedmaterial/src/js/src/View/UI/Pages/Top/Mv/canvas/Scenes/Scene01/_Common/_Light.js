//--------------------------------------------------
//
//  Light
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";

export default class Light extends Base {
  constructor(scene) {
    super();

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
    // directional light
    this.directionalLight = new THREE.DirectionalLight("#ffffff", 3);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.set(1024, 1024); // デフォルトは124
    this.directionalLight.shadow.camera.far = 15;
    this.directionalLight.shadow.normalBias = 0.05; // 表面に影ニキビができてたら適用
    this.directionalLight.position.set(0.25, 2, -2.25);

    // ambient
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1);

    // point
    this.pointLight01 = new THREE.PointLight(0x00ff00, 30, 500, 10);
    this.pointLight02 = new THREE.PointLight(0x0000ff, 30, 500, 10);
    this.pointLight03 = new THREE.PointLight(0xff0000, 30, 500, 10);

    this.pointLight01.position.set(0, 200, 100);
    this.pointLight02.position.set(100, 200, 100);
    this.pointLight03.position.set(-100, -200, -100);

    // spot
    this.spotLight = new THREE.SpotLight(0xfffffff);
    this.spotLight.position.set(0, 0, (gb.camera.z / 5) * 3);

    this.spotLight.intensity = 1.5;
    this.spotLight.distance = 0.0;
    this.spotLight.angle = 0.3;
    this.spotLight.penumbra = 0.5;
    this.spotLight.decay = 1.0;

    // spot light target
    var target = new THREE.Object3D();
    this.scene.add(target);
    this.spotLight.target = target;

    // shadow
    // this.spotLight.castShadow = true;
    // this.spotLight.shadow.mapSize.width = 1024;
    // this.spotLight.shadow.mapSize.height = 1024;
    // this.spotLight.shadow.camera.near = 500;
    // this.spotLight.shadow.camera.far = 4000;
    // this.spotLight.shadow.camera.fov = 30;
  }

  add() {
    this.scene.add(this.directionalLight);
    this.scene.add(this.directionalLightCameraHelper);

    // this.scene.add(this.ambientLight);

    // this.scene.add(this.pointLight01);
    // this.scene.add(this.pointLight02);
    // this.scene.add(this.pointLight03);
    // this.scene.add(this.pointLight01, this.pointLight02, this.pointLight03);

    // this.scene.add(this.spotLight);
  }

  addHelper() {
    // directional
    // var dll = new THREE.DirectionalLightHelper(this.directionalLight, 20, '#ff0000');
    // this.scene.add(dll);
    // point
    // var sphereSize = 10;
    // var pll01 = new THREE.PointLightHelper( this.pointLight01, sphereSize );
    // this.scene.add(pll01);
    // var pll02 = new THREE.PointLightHelper( this.pointLight02, sphereSize );
    // this.scene.add(pll02);
    // var pll03 = new THREE.PointLightHelper( this.pointLight03, sphereSize );
    // this.scene.add(pll03);
    // spot
    // this.slh = new THREE.SpotLightHelper(this.spotLight, '#ffffff');
    // this.scene.add(this.slh);
  }

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
  }
}
