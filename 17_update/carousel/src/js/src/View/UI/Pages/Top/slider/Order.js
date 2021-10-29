//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Renderer from "./Renderer";

export default class Controller extends Base {
  constructor(len) {
    super();

    this.len = len;
    this.current = 0;

    this.setup();
    this.setEvents();
  }

  setup() {}

  right() {
    this.current++;

    if (this.current > this.len - 1) {
      this.current = this.len - 1;
    }
  }

  left() {
    this.current--;

    if (this.current < 0) {
      this.current = 0;
    }
  }

  move(nextIndex) {
    this.current = nextIndex;
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
