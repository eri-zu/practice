//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor(item) {
    super();

    this.item = item;

    this.setup();
    this.setEvents();
  }

  setup() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
