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
import { UAParser } from "ua-parser-js";
export default class Controller extends Base {
  constructor() {
    super();

    this.isREv = true;

    this.$inner = $(".js-slider_inner");
    this.$right = $(".js-slider_right");
    this.$left = $(".js-slider_left");
    this.$indicator = $(".js-slider_indicator");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.len = this.$indicator.length;
    this.r = new Renderer(this.len);
    this.o = new Order(this.len);
  }

  right() {
    // if (this.o.next > this.len - 1) return;

    clearTimeout(this.timer);
    if (this.tl) this.tl.kill();

    this.o.right();

    this.tl = gsap.timeline();

    this.tl
      // nav
      .add(this.r.changeNav(this.o.current))
      // inner
      .add(this.r.right(), 0)
      // autoSwitch
      .add(this.autoSwitch());

    return this.tl;
  }

  left() {
    // if (this.o.prev < 0) return;

    clearTimeout(this.timer);
    if (this.tl) this.tl.kill();

    this.o.left();

    this.tl = gsap.timeline();

    this.tl
      // nav
      .add(this.r.changeNav(this.o.current))
      // inner
      .add(this.r.left(), 0)
      // autoSwitch
      .add(this.autoSwitch());

    return this.tl;
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

    return this.tl;
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      this.o.onResize();
      this.r.onResize();
    } else {
      return;
    }
  }

  autoSwitch() {
    this.timer = setInterval(() => {
      this.tl = gsap.timeline();

      this.o.right();

      this.tl = gsap.timeline();

      this.tl
        // nav
        .add(this.r.changeNav(this.o.current))
        // inner
        .add(this.r.right(), 0);

      return this.tl;
    }, 6000);
  }

  setEvents() {
    super.setEvents();

    this.autoSwitch();

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
