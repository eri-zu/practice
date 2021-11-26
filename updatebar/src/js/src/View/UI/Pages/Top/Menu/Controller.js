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

    this.$item = $(".js-menu_item");
    this.$bar = $(".js-menu_bar");

    this.setup();
    this.setEvents();
  }

  setup() {}

  onEnter() {}

  onLeave() {}

  setEvents() {
    super.setEvents();

    this.$item.on("mouseenter" + "." + this.name, (e) => {
      this.onEnter($(e.currentTarget));
    });

    this.$item.on("mouseleave" + "." + this.name, (e) => {
      this.onLeave($(e.currentTarget));
    });
  }

  removeEvents() {}
}
