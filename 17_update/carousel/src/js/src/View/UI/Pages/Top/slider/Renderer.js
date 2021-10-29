//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Renderer from "./Renderer";

export default class Controller extends Base {
  constructor() {
    super();

    this.$rect = $(".js-slider");
    this.$inner = $(".js-slider_inner");
    this.$item = $(".js-slider_item");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    this.marginL = parseInt(this.$item.eq(1).css("margin-left"));
    this.w = this.$item.eq(1).width();
    this.moveDist = this.marginL + this.w;
  }

  right(diff = 1) {
    const tl = gsap.timeline();

    tl.to(this.$inner, 1, {
      x: `-=${this.moveDist * diff}`,
      ease: "expo.out",
    });
  }

  left(diff = 1) {
    const tl = gsap.timeline();

    tl.to(this.$inner, 1, {
      x: `+=${this.moveDist * diff}`,
      ease: "expo.out",
    });
  }

  move(current, nextIndex) {
    const diff = Math.abs(nextIndex - current);

    if (nextIndex > current) {
      this.right(diff);
    } else {
      this.left(diff);
    }
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
