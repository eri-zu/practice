//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class AcidCare {
  constructor(el) {
    this.el = el;
    this.isShow = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.delay = window.innerWidth >= 768 ? 100 : window.innerHeight * 0.4;

    this.top = this.el.getBoundingClientRect().top + window.scrollY;

    this.items = this.el.querySelectorAll(".js-scroll_acid_care_item");
    this.circle = document.querySelector(".js-scroll_acid_care_circle");
    this.copys = this.el.querySelectorAll(".js-scroll_acid_care_copy");
    this.notion = document.querySelector(".js-scroll_acid_care_notion");
    this.crossbar = this.el.querySelectorAll(".js-scroll_acid_care_barin");
  }

  show() {
    this.isShow = true;

    const tl = gsap.timeline();

    // item
    this.items.forEach((el, i) => {
      tl.to(
        el,
        1.5,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0
      ).to(
        el,
        1.8,
        {
          x: 0,
          y: 0,
          z: 0,
          ease: gb.conf.customOut,
        },
        0
      );
    });
    this.crossbar.forEach((el, i) => {
      tl.to(
        el,
        1,
        {
          scaleX: 1,
          ease: "power2.out",
        },
        0.8
      );
    });
    tl
      // // circle scale
      // .to(
      //   this.circle,
      //   2,
      //   {
      //     scale: 1,
      //     ease: "power2.inOut",
      //     // ease: "expo.out",
      //   },
      //   0.3
      // )
      // circle scale
      .to(
        this.circle,
        2,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0.2
      );
    this.copys.forEach((el, i) => {
      // copy
      tl.to(
        el,
        1.2,
        {
          opacity: 1,
          y: 0,
          z: 0,
          ease: "power4.out",
        },
        0.2 + 0.9 + i * 0.05
      );
    });
    tl.to(
      this.notion,
      1.2,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      0.2 + 0.9 + 0.05
    );
  }

  onScroll() {
    if (this.isShow) return;

    if (this.top < window.scrollY + window.innerHeight - this.delay) {
      this.show();
    }
  }

  setEvents() {}
}
