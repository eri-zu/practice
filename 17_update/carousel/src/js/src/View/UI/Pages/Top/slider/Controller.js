//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Order from "./Order";
import Renderer from "./Renderer";

export default class Controller extends Base {
  constructor() {
    super();

    this.$inner = $(".js-slider_inner");
    this.$item = $(".js-slider_item");
    this.$right = $(".js-slider_right");
    this.$left = $(".js-slider_left");
    this.$indicator = $(".js-slider_indicator");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.len = this.$item.length;
    this.r = new Renderer();
    this.o = new Order(this.len);
  }

  setEvents() {
    super.setEvents();

    this.$right.on("click" + "." + this.name, () => {
      this.o.right();
      this.r.right();
    });
    this.$left.on("click" + "." + this.name, () => {
      this.o.left();
      this.r.left();
    });

    this.$indicator.on("click" + "." + this.name, (e) => {
      const current = this.o.current;
      const nextIndex = $(e.currentTarget).index();
      this.o.move(nextIndex);
      this.r.move(current, nextIndex);
    });
  }
}
