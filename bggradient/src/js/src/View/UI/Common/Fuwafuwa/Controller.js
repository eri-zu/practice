//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import Item from "./Item";
import * as m from "@BALANCeLibs/Util/Math.js";

export default class Fuwafuwa extends Base {
  constructor() {
    super();

    this.items = document.querySelectorAll(".js-fuwafuwa");
    this.array = [];
    this.yArray = [];

    this.isUEv = true;
    this.isUpdate = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.items.forEach((el, i) => {
      this.yArray.push(el.clientHeight);
    });

    this.items.forEach((el, i) => {
      const randomStrengthY = m.map(
        el.clientHeight,
        1.5,
        4.8,
        Math.min(...this.yArray),
        Math.max(...this.yArray) * 0.5
      );

      const strength = window.innerWidth > 768 ? 1 : 0.75;

      const item = new Item(el, i, randomStrengthY * strength);
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
