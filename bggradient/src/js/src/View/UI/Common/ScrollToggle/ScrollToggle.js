//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";

import ScrollToggleHeader from "./Header";

export default class ScrollToggle extends Base {
  constructor() {
    super();

    this.headerDOM = document.getElementById("header");

    // this.isREv = true;
    this.isSEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.header = new ScrollToggleHeader(this.headerDOM);
  }

  onScroll() {
    this.header.onScroll();
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
