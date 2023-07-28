//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Top from "./Top/Controller";
import About from "./About/Controller";
import Works from "./Works/Controller";

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    if (document.querySelector(".id_top")) new Top();
    if (document.querySelector(".id_about")) new About();
    if (document.querySelector(".id_works")) new Works();
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}