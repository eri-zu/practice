//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";

import _Scene from "./_Common/_Scene.js";
import _Camera from "./_Common/_Camera.js";
import _Light from "./_Common/_Light.js";
import Objects from "./Objects.js";
import * as THREE from "three";
import Effect from "./Effect.js";
import Control from "./Control.js";

export default class Scene extends Base {
  constructor(renderer) {
    super();

    this.isUEv = true; // update

    this.renderer = renderer;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.isEffect = false;
    this.isGUI = false;
    // this.isControl = true;
    this.isControl = false; // zoom????

    // objÉú³É
    this.add();
  }

  add() {
    // scene
    this.scene = new _Scene();
    this.scene = this.scene.scene;
    // this.scene.fog = new THREE.FogExp2( 0x000000, 0.0004 );

    // helper
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);

    // camera
    this.cameraC = gb.camera = new _Camera(this.scene);
    this.camera = gb.camera.camera;

    // light
    this.light = new _Light(this.scene);

    // objects
    this.obj = new Objects(this.scene, this.camera, this.renderer);

    // effect
    this.e = new Effect(
      this.isEffect,
      this.isGUI,
      this.renderer,
      this.scene,
      this.camera
    );

    // control
    this.c = new Control(this.isControl, this.renderer, this.camera);
  }

  update() {
    if (this.c.isControl) this.c.controls.update();
  }

  draw() {
    if (this.e.isEffect) {
      this.e.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  show() {}

  hide() {}

  state() {}

  onResize() {
    var w = gb.r.w * window.devicePixelRatio;
    var h = gb.r.h * window.devicePixelRatio;

    gb.camera.onResize();

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  setEvents() {}
}
