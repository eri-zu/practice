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

    this.wrap = document.querySelector(".js-slot_wheel");
    this.wheel = this.wrap.querySelector(".js-slot_wheel_inner");

    this.num = { value: 0 };
    this.speed = { value: 0 };
    this.picHight = 40;
    this.len = 7; // 7種類

    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {}

  update() {
    this.num.value += this.speed.value;
    const y = -1 * ((this.num.value * this.picHight) % 280); // ループするように, キリよく止まるように

    // 7 * 40でリセット
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

    // 何周目か
    const lap = Math.ceil((this.num.value * this.picHight) / 280) + 1;

    console.log(lap, "lap", lap * this.len, "lap * 7");

    this.tl = gsap.timeline();

    this.tl
      // 加算を止める
      .set(this.speed, {
        value: 0,
      })
      // 一番上まで回してから好きなところで止める
      .to(this.num, 4, {
        value: lap * this.len + m.randomInt(0, this.len),
        ease: "power3.out",
      });
  }

  setEvents() {
    super.setEvents();
  }
}
