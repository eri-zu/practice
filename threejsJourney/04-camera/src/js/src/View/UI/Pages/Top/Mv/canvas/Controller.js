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
  constructor($wrap = $("body"), id = "cv") {
    super();

    this.isUEv = true; // update
    this.isREv = true; // update

    this.$wrap = $wrap;
    this.id = id;

    this.setup();
    this.setEvents();
  }

  setup() {
    // canvas size
    this.w = gb.r.w;
    this.h = gb.r.h;

    this.isRetina = true;

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio); // retinaで綺麗に描画
    this.renderer.setSize(gb.r.w, gb.r.h);
    this.renderer.setClearColor(0x000000, 1.0);
    // this.renderer.setClearColor(0xffffff, 1.0);

    // append
    this.$wrap.prepend(this.renderer.domElement);

    // set style
    $(this.renderer.domElement)
      .css({ position: "absolute", top: 0, left: 0, "z-index": 1, opacity: 1 })
      .attr("id", this.id);

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

  onResize() {
    var w = gb.r.w;
    var h = gb.r.h;

    this.scene01.onResize();

    this.renderer.setSize(w, h);
    if (this.scene01.isEffectComposer) {
      this.scene01.composer.setSize(
        w * window.devicePixelRatio,
        h * window.devicePixelRatio
      );
    }
  }
}
