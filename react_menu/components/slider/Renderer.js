// import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";
// import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";
// import { Conf } from "@/Conf";

export default class Renderer {
  constructor(wrap, len) {
    this.wrap = wrap;
    this.len = len;
    this.inner = wrap.querySelector(".js-slider_inner");
    this.item = wrap.querySelectorAll(".js-slider_item");

    // this.easing = CustomEase.create("custom", "M0,0 C0.4,0 0,1 1,1 ");
    this.easing = "expo.out";
    this.totalnum = 0;
    this.y = 0;
    this.target = { value: 0 };

    this.setup();
  }

  setup() {
    this.calc();
  }

  calc() {
    this.calcWidth();
    this.maxmove = this.w * this.len;
  }

  calcWidth() {
    this.marginLeft = parseInt(
      window.getComputedStyle(this.item[1]).marginLeft
    );
    this.w = this.item[0].clientWidth + this.marginLeft;

    return this.w;
  }

  updatePos() {
    let x = this.w * this.target.value;

    if (x < -this.maxmove) {
      // nextのreset
      x = x + this.maxmove;
    } else if (x > this.maxmove) {
      // prevのreset
      x = x - this.maxmove;
    }

    this.inner.style.transform = `translate3d(${x}px, 0px, 0px)`;
  }

  changePos(number) {
    if (number == "reset") {
      this.totalnum = 0;
    } else {
      this.totalnum = this.totalnum + number; // 何コマ進むか
    }

    if (this.totalnum < -(this.len - 1)) {
      // nextのreset
      this.totalnum = 0;
      this.target.value = this.target.value + this.len;
    } else if (this.totalnum > this.len - 1) {
      // prevのreset
      this.totalnum = 0;
      this.target.value = this.target.value - this.len;
    }

    const tl = gsap.timeline();

    if (number == "reset") {
      tl.set(this.target, {
        value: this.totalnum,
        ease: this.easing,
      });
    } else {
      tl.to(this.target, 1, {
        value: this.totalnum,
        ease: this.easing,
      });
    }

    return tl;
  }

  onEnterArrow(target, direction) {
    // const arrow = target.querySelector("svg");
    // const x = direction == "right" ? 3 : -3;
    // const tl = gsap.timeline();
    // tl.to(arrow, 1, {
    //   x: x,
    //   ease: "expo.out",
    // });
  }

  onLeaveArrow(target) {
    // const arrow = target.querySelector("svg");
    // const tl = gsap.timeline();
    // tl.to(arrow, 1, {
    //   x: 0,
    //   ease: "expo.out",
    // });
  }
}
