//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import Scene01 from "./Scenes/Scene01/Scene.js";
// import Scene02 from './Scenes/Scene02/Scene.js';
import * as THREE from "three";

export default class Content extends Base {
  constructor($wrap = $(".canvaswrap"), id = "cv") {
    super();

    this.isUEv = true; // update
    this.isREv = true; // update

    this.$wrap = $wrap;

    this.setup();
    this.setEvents();
  }

  setup() {
    // canvas size
    this.wrap = document.querySelector(".canvaswrap");
    this.w = gb.r.w = this.wrap.clientWidth;
    this.h = gb.r.h = this.wrap.clientHeight;

    this.isRetina = true;

    // renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.w, this.h);
    this.renderer.setClearColor(0x000000, 0);

    // append
    this.wrap.append(this.renderer.domElement);

    // obj
    this.add();

    this.loopStart = true;
  }

  add() {
    this.scene01 = new Scene01(this.renderer);
    // this.scene02 = new Scene02(this.renderer);
  }

  update() {
    this.scene01.update();
    // this.scene02.update();
  }

  draw() {
    this.scene01.draw();
    // this.scene02.draw();
  }

  timeline() {}
}
