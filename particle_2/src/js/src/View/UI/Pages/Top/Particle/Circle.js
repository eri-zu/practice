//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor(circle) {
    super();

    this.circle = circle;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    this.w = this.circle.offsetWidth;
    this.h = this.circle.offsetHeight;
  }

  ready(centerX, centerY) {
    this.circle.style.setProperty("--left", `${centerX - this.w * 0.5}px`);
    this.circle.style.setProperty("--top", `${centerY - this.h * 0.5}px`);

    gsap.set(this.circle, {
      scale: 0.8,
    });
  }

  show(centerX, centerY) {
    this.ready(centerX, centerY);

    const tl = gsap.timeline();

    tl
      // show
      .to(this.circle, 0.6, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
      })
      .to(
        this.circle,
        0.9,
        {
          opacity: 0,
          ease: "expo.out",
        },
        "+=0.1"
      );

    return tl;
  }

  setEvents() {
    super.setEvents();
  }
}
