//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";
import { Conf } from "@/Conf";

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();

    // this.timeline();
  }

  setup() {
    this.pageShow();
  }

  pageShow() {
    setTimeout(() => {
      gb.transition.hide();
    }, 1000);
  }
  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
