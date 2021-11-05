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

    this.current = 0;

    this.setup();
    this.setEvents();
  }

  setup() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
