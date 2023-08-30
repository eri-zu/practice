//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class AcidBg {
  constructor(el) {
    this.el = el;

    this.bg = this.el.querySelector(".js-scrollshow_acid_bg");

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

    tl.add(() => {
      this.bg.classList.add("isAnimate");
    })
      // title
      .to(
        this.bg,
        0.8,
        {
          y: 0,
          z: 0,
          ease: gb.conf.customOut,
        },
        0
      );
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
