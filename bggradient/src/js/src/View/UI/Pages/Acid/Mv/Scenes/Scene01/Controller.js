//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
// import Scene from "./Common/Scene";
import Camera from "./Common/Camera";
import Objs from "./Objs/Controller";
import * as THREE from "three";
// import Control from "./Common/Control";

export default class Controller extends Base {
  constructor(renderer, wrap) {
    super();

    this.renderer = renderer;
    this.wrap = wrap;
    this.isControl = false;
    // this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    // scene
    this.scene = new THREE.Scene();

    // camera
    this.cameraController = new Camera(this.scene);
    this.camera = this.cameraController.camera;

    // objs
    this.objs = new Objs(this.scene, this.camera, this.renderer, this.wrap);

    // helper
    // const axesHelper = new THREE.AxesHelper(5);
    // this.scene.add(axesHelper);

    // control
    // this.controll = new Control(this.isControl, this.renderer, this.camera);
  }

  update() {
    this.objs.update();
    // if (this.controll.isControl) this.controll.controls.update();
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
