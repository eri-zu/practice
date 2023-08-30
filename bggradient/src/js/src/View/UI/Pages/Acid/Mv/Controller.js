//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import Scene01 from "./Scenes/Scene01/Controller";
import { UAParser } from "ua-parser-js";

export default class Controller extends Base {
  constructor() {
    super();

    this.isUEv = true;
    this.isREv = true;
    this.isRetina = true;
    this.isUpdate = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    // canvaswrap
    this.wrap = document.querySelector(".js-acid__kv-canvaswrap");
    this.w = gb.mvWrapW = this.wrap.getBoundingClientRect().width;
    this.h = gb.mvWrapH = this.wrap.getBoundingClientRect().height;

    // renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.w, this.h);
    this.renderer.setClearColor(0x000000, 0);

    this.wrap.append(this.renderer.domElement);

    this.add();

    this.isView = false;

    const intersectionObserver = new IntersectionObserver(
      this.onView.bind(this)
    );
    intersectionObserver.observe(this.wrap);
    // this.loopStart = true;
  }

  onView(e) {
    const [data] = e;
    this.isView = data.isIntersecting;
  }

  add() {
    this.scene01 = new Scene01(this.renderer, this.wrap);
  }

  update() {
    if (this.isView && this.isUpdate) {
      this.scene01.update();
    }
    // this.scene01.update();
  }

  draw() {
    this.scene01.draw();
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      this.w = gb.mvWrapW = this.wrap.getBoundingClientRect().width;
      this.h = gb.mvWrapH = this.wrap.getBoundingClientRect().height;

      this.renderer.setSize(this.w, this.h);
    }
  }

  setEvents() {
    super.setEvents();
  }
}
