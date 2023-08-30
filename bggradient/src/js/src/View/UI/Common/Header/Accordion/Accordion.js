//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import Item from "./Item";

export default class HeaderAccordion extends Base {
  constructor(items) {
    super();

    this.items = items;
    this.arrayItem = [];

    this.setup();
    this.setEvents();
  }

  setup() {
    this.items.forEach((el, i) => {
      const item = new Item(el);
      this.arrayItem.push(item);
    });
  }

  setEvents() {
    super.setEvents();
  }
}
