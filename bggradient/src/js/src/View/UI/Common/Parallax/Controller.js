//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import Item from "./Item";

export default class Parallax extends Base {
  constructor() {
    super();

    this.wraps = document.querySelectorAll(".js-parallax_wrap");
    this.array = [];

    this.isUEv = true;
    this.isUpdate = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.wraps.forEach((el, i) => {
      const item = new Item(el, i);
      this.array.push(item);
    });
  }

  timeline() {}

  update() {
    if (!this.isUpdate) return;

    this.array.forEach((el, i) => {
      el.update();
    });
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
