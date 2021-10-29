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

  right() {
    if (this.o.next > this.len - 1) return;
    if (this.tl) this.tl.kill();

    this.o.right();
    this.tl = gsap.timeline();

    this.tl
      // nav
      .add(this.r.changeNav(this.o.current))
      // inner
      .add(this.r.right(), 0);
  }

  left() {
    if (this.o.prev < 0) return;
    if (this.tl) this.tl.kill();

    this.o.left();
    this.tl = gsap.timeline();

    this.tl
      // nav
      .add(this.r.changeNav(this.o.current))
      // inner
      .add(this.r.left(), 0);
  }

  move(current, index) {
    if (this.tl) this.tl.kill();

    this.o.move(index);
    this.tl = gsap.timeline();

    this.tl
      // nav
      .add(this.r.changeNav(this.o.current))
      // inner
      .add(this.r.move(current, index), 0);
  }

  setEvents() {
    super.setEvents();

    // right
    this.$right.on("click" + "." + this.name, () => {
      this.right();
    });

    // left
    this.$left.on("click" + "." + this.name, () => {
      this.left();
    });

    // inidicator
    this.$indicator.on("click" + "." + this.name, (e) => {
      const current = this.o.current;
      const index = $(e.currentTarget).index();
      this.move(current, index);
    });
  }
}
