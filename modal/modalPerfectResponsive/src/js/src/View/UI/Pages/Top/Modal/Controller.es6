//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor() {
    super();

    this.isREv = true;

    this.$modal = $(".js-modal");
    this.$contents = $(".js-modal_contents");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.getAspect();
  }

  getAspect() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;

    this.windowratio = this.w / this.h;
    this.modalratio = 1200 / 600;

    if (this.windowratio > this.modalratio) {
      // height基準 ※めっちゃ横長
      this.$modal.addClass("base_hight");
      this.$modal.removeClass("base_width");
    } else {
      // width基準
      this.$modal.addClass("base_width");
      this.$modal.removeClass("base_hight");
    }
  }

  onResize() {
    this.getAspect();
  }

  setEvents() {
    super.setEvents();
  }
}
