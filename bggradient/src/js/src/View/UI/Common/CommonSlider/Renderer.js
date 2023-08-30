//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class Controller {
  constructor(wrap, arrows, len, inAreaNum) {
    this.wrap = wrap;
    this.arrows = arrows;
    this.len = len;
    this.isAreaNum = inAreaNum;

    this.arrowpath = this.wrap.querySelectorAll(".js-commonslider_arrow path");
    this.inner = this.wrap.querySelector(".js-commonslider_inner");
    this.item = this.inner.querySelector(".js-commonslider_item");
    this.x = { value: 0 };
    this.diff = 0;

    this.v = 0;

    this.setup();
  }

  setup() {}

  get width() {
    const marginRight = parseInt(
      window.getComputedStyle(this.item).getPropertyValue("margin-right")
    );

    return this.item.clientWidth + marginRight;
  }

  update() {
    const x = this.x.value;

    this.v += (this.x.value - this.v) * 0.12;

    this.inner.style.transform = `translate3d(${this.v.toFixed(
      2
    )}px, 0px, 0px)`;
  }

  changePos(num) {
    const tl = gsap.timeline();

    tl.to(this.x, 0.5, {
      value: -1 * num * this.width,
      ease: "expo.out",
    });

    return tl;
  }
}
