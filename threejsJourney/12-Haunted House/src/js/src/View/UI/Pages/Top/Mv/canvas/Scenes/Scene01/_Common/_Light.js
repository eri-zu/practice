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

    this.isUEv = true;

    this.scene = scene;

    this.gui = new dat.GUI();

    this.clock = new THREE.Clock();

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
    this.ambientLight = new THREE.AmbientLight(0xb9d5ff, 0.12);
    this.gui.add(this.ambientLight, "intensity").min(0).max(1).step(0.001);

    // directional light
    this.moonLight = new THREE.DirectionalLight(0xb9d5ff, 0.12);
    this.moonLight.position.set(4, 5, -2);
    this.moonLight.castShadow = true;
    this.moonLight.shadow.mapSize.width = 256;
    this.moonLight.shadow.mapSize.height = 256;
    this.moonLight.shadow.camera.far = 15;
    this.gui.add(this.moonLight, "intensity").min(0).max(1).step(0.001);
    this.gui.add(this.moonLight.position, "x").min(-5).max(5).step(0.001);
    this.gui.add(this.moonLight.position, "y").min(-5).max(5).step(0.001);
    this.gui.add(this.moonLight.position, "z").min(-5).max(5).step(0.001);

    // door light
    this.doorLight = new THREE.PointLight("#ff7d46", 1, 7);
    this.doorLight.position.set(0, 2.2, 2.7);
    this.doorLight.castShadow = true;
    this.doorLight.shadow.mapSize.width = 256;
    this.doorLight.shadow.mapSize.height = 256;
    this.doorLight.shadow.camera.far = 7;

    // ghost
    this.ghost1 = new THREE.PointLight("#ff00ff", 2, 3);
    this.ghost1.castShadow = true;
    this.ghost2 = new THREE.PointLight("#00ffff", 2, 3);
    this.ghost2.castShadow = true;
    this.ghost3 = new THREE.PointLight("#ffff00", 2, 3);
    this.ghost3.castShadow = true;

    this.ghost1.shadow.mapSize.width = 256;
    this.ghost1.shadow.mapSize.height = 256;
    this.ghost1.shadow.camera.far = 7;
    this.ghost2.shadow.mapSize.width = 256;
    this.ghost2.shadow.mapSize.height = 256;
    this.ghost2.shadow.camera.far = 7;
    this.ghost3.shadow.mapSize.width = 256;
    this.ghost3.shadow.mapSize.height = 256;
    this.ghost3.shadow.camera.far = 7;
  }

  add() {
    this.scene.add(this.ambientLight);
    this.scene.add(this.moonLight);
    this.scene.add(this.doorLight);
    this.scene.add(this.ghost1);
    this.scene.add(this.ghost2);
    this.scene.add(this.ghost3);
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
    // if (this.slh) this.slh.update();
    this.elapsedTime = this.clock.getElapsedTime();

    this.ghost1Angle = this.elapsedTime * 0.5;
    this.ghost1.position.x = Math.cos(this.ghost1Angle) * 4;
    this.ghost1.position.z = Math.sin(this.ghost1Angle) * 4;
    this.ghost1.position.y = Math.sin(this.elapsedTime * 3);

    this.ghost2Angle = -this.elapsedTime * 0.32;
    this.ghost2.position.x = Math.cos(this.ghost2Angle) * 5;
    this.ghost2.position.z = Math.sin(this.ghost2Angle) * 5;
    this.ghost2.position.y =
      Math.sin(this.ghost2Angle * 4) + Math.sin(this.elapsedTime * 2.5);

    this.ghost3Angle = -this.elapsedTime * 0.18;
    this.ghost3.position.x =
      Math.cos(this.ghost3Angle) * (7 + Math.sin(this.elapsedTime * 0.32));
    this.ghost3.position.z =
      Math.sin(this.ghost3Angle) * (7 + Math.sin(this.elapsedTime * 0.5));
    this.ghost3.position.y =
      Math.sin(this.ghost3Angle * 5) + Math.sin(this.elapsedTime * 2);
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
