//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";
import CameraController from "./Common/Camera";
import LightController from "./Common/Light";
import Objs from "./Objs/Controller";
import Font from "./Font/Controller";
export default class Controller extends Base {
  constructor() {
    super();

    this.wrap = document.querySelector(".canvaswrap");

    this.isREv = true;
    this.isUEv = true;

    new Font();

    return;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.w = gb.w = this.wrap.clientWidth;
    this.h = gb.h = this.wrap.clientHeight;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // 背景透明
    });
    this.wrap.appendChild(this.renderer.domElement);
    this.renderer.setSize(gb.w, gb.h);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();
    this.cameraController = new CameraController(this.scene);
    this.lightController = new LightController(this.scene);
    this.Objs = new Objs(this.scene);

    this.renderer.render(this.scene, this.cameraController.camera);
  }

  onResize() {
    this.w = gb.w = this.wrap.clientWidth;
    this.h = gb.h = this.wrap.clientHeight;

    this.cameraController.onResize();
    this.Objs.onResize();
    this.renderer.setSize(gb.w, gb.h);
  }

  update() {
    this.cameraController.update();
    this.Objs.update();

    this.renderer.render(this.scene, this.cameraController.camera);
  }

  setEvents() {
    super.setEvents();
  }
}
