//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

export default class Controller extends Base {
  constructor() {
    super();

    this.wrap = document.querySelector(".js-slot_wheel");
    this.wheel = this.wrap.querySelector(".js-slot_wheel_inner");

    this.speed = { value: 0 };
    this.num = { value: 0 };
    this.picHight = 40;
    this.len = 7;

    this.isUEv = true;

    this.setEvents();
  }

  update() {
    this.num.value += this.speed.value;
    const y = -1 * ((this.num.value * this.picHight) % 280); // ループするように, キリよく止まるように

    this.wheel.style.transform = `translate3d(0px, ${y}px, 0px)`;
  }

  start() {
    this.tl = gsap.timeline();

    this.tl.to(this.speed, 5, {
      value: 0.4,
      ease: "expo.out",
    });
  }

  stop() {
    if (this.tl) this.tl.kill();

    // 現在何周目か
    const lap = Math.ceil((this.num.value * this.picHight) / 280) + 1;

    this.tl = gsap.timeline();

    this.tl
      // 加算を止める
      .set(this.speed, {
        value: 0,
      })
      .to(this.num, 4, {
        value: lap * this.len + randomInt(0, this.len),
        ease: "power3.out",
      });
  }

  setEvents() {
    super.setEvents();
  }
}
