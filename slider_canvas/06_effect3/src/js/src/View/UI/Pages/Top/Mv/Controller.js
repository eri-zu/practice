//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";

// canvas
import Canvas from "./canvas/Controller.js";

// dom

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    new Canvas();
  }

  update() {}

  timeline() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
