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

    this.scene = scene;

    this.gui = new dat.GUI();

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
    // ambient
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.gui.add(this.ambientLight, "intensity").min(0).max(1).step(0.001);

    // directional light
    this.moonLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.moonLight.position.set(4, 5, -2);
    this.gui.add(this.moonLight, "intensity").min(0).max(1).step(0.001);
    this.gui.add(this.moonLight.position, "x").min(-5).max(5).step(0.001);
    this.gui.add(this.moonLight.position, "y").min(-5).max(5).step(0.001);
    this.gui.add(this.moonLight.position, "z").min(-5).max(5).step(0.001);
  }

  add() {
    this.scene.add(this.ambientLight);
    this.scene.add(this.moonLight);
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
