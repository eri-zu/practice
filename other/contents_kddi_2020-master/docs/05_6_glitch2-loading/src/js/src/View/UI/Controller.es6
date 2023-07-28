//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";
import * as m from "Util/Math/index.es6";

import MVController from "./MV/Controller.es6";

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();

    // this.timeline();
  }

  setup() {
    let h = 0;
    if (window.innerWidth > 1024) h = window.innerHeight;
    else if (gb.conf.BUILT_IN) h = $(".mv").height();
    else h = window.innerHeight;
    $(".section01").height(h);
  }

  timeline() {}

  update() {
    if (!this.mv) return;
    this.mv.render();
  }

  onResize() {}

  setEvents() {
    super.setEvents();
    $(window).on("loadEnd", e => {
      this.mv = new MVController();
    });
  }
}
