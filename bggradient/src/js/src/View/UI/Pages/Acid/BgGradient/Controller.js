//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import Scene01 from "./Scenes/Scene01/Controller";
import { UAParser } from "ua-parser-js";

export default class BgGradient extends Base {
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
    this.wrap = document.querySelector(".js-acid__lineup-canvaswrap");
    this.w = gb.gradientWrapW = this.wrap.clientWidth;
    this.h = gb.gradientWrapH = this.wrap.clientHeight;

    // renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.w, this.h);
    this.renderer.setClearColor(0x000000, 1);

    this.wrap.append(this.renderer.domElement);

    this.add();

    this.isView = false;

    const intersectionObserver = new IntersectionObserver(
      this.onView.bind(this)
    );
    intersectionObserver.observe(this.wrap);

    // this.loopStart = true;

    this.area = document.querySelector(".js-acid_lineuparea");

    this.calc();
  }

  fixed() {
    this.wrap.classList.add("isFixed");
  }

  cancelFixed() {
    this.wrap.classList.remove("isFixed");
  }

  calc() {
    this.top = this.area.getBoundingClientRect().top + window.scrollY;
    this.bottom =
      this.area.getBoundingClientRect().bottom +
      window.scrollY +
      window.innerHeight;
  }

  onView(e) {
    const [data] = e;

    this.isView = data.isIntersecting;
  }

  add() {
    this.scene01 = new Scene01(this.renderer);
  }

  update() {
    if (this.isView && this.isUpdate) {
      this.scene01.update();
    }

    if (
      window.scrollY > this.top &&
      window.scrollY < this.bottom - window.innerHeight + 100
    ) {
      this.fixed();
    } else {
      this.cancelFixed();
    }
  }

  draw() {
    this.scene01.draw();
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      this.w = gb.gradientWrapW = this.wrap.clientWidth;
      this.h = gb.gradientWrapH = this.wrap.clientHeight;

      this.renderer.setSize(this.w, this.h);
    }
  }

  setEvents() {
    super.setEvents();
  }
}
