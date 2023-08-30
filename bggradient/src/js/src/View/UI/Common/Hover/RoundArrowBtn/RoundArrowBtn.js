//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class RoundArrowBtn {
  constructor(el) {
    this.el = el;
    // this.circle = this.el.querySelector(".js-hover_roundArrowBtn_circle");
    this.bg = this.el.querySelector(".js-hover_roundArrowBtn_bg");
    this.arrow = this.el.querySelector(".js-hover_roundArrowBtn_btnarrow svg");

    this.setup();
    this.setEvents();
  }

  setup() {}

  onEnter() {
    this.tl = gsap.timeline();

    this.tl
      // circle
      .to(
        this.bg,
        0.8,
        {
          scale: 1.1,
          ease: "expo.out",
        },
        0
      )
      .to(
        this.arrow,
        0.25,
        {
          opacity: 0,
          x: "75%",
          ease: "power2.out",
        },
        0
      )
      .set(this.arrow, { x: "-75%" }, 0.25)
      .to(
        this.arrow,
        0.25,
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
        },
        0.25
      );
  }

  onLeave() {
    this.tl = gsap.timeline();

    this.tl
      // circle
      .to(this.bg, 1, {
        scale: 1,
        ease: "expo.out",
      });
  }

  setEvents() {}
}
