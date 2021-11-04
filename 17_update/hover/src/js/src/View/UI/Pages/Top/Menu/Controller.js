//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Renderer from "./Renderer";

export default class Controller extends Base {
  constructor() {
    super();

    this.$menu = $(".js-menu");
    this.$item = $(".js-menu_item");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.r = new Renderer();
  }

  setEvents() {
    super.setEvents();

    this.$item.on("mouseenter" + "." + this.name, (e) => {
      console.log("enter");
      this.r.onEnter(e.currentTarget);
    });

    this.$item.on("mouseleave" + "." + this.name, () => {
      console.log("leave");
      this.r.onLeave();
    });
  }
}
