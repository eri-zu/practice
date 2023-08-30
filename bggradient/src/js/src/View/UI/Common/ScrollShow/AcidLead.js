//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class AcidLead {
  constructor(el) {
    this.el = el;

    this.isShow = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.top = this.el.getBoundingClientRect().top + window.scrollY;
  }

  show() {
    this.isShow = true;

    const tl = gsap.timeline();

    tl
      // title
      .to(
        this.el,
        1,
        {
          opacity: 1,
          // ease: gb.conf.customInOutOP,
          ease: "power2.inOut",
        },
        0
      );
    // .to(
    //   this.el,
    //   1,
    //   {
    //     y: 0,
    //     z: 0,
    //     ease: gb.conf.customOutOP,
    //   },
    //   0
    // );
  }

  onScroll() {
    if (this.isShow) return;

    const delay = window.innerWidth >= 768 ? 10 : 50;

    if (this.top < window.scrollY + window.innerHeight - delay) {
      this.show();
    }
  }

  setEvents() {}
}
