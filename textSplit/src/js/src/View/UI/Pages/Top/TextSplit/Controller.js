//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Item from "./Item";

export default class Controller extends Base {
  constructor() {
    super();

    this.items = document.querySelector(".js-textsplit_txt");
    this.array = [];

    this.setup();
    this.setEvents();
  }

  setup() {
    for (let i = 0; i < this.items.length; i++) {
      const item = new Item(this.items[i]);
      this.array.push(item);
    }
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
