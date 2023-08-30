//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class ArganeImage {
  constructor(el) {
    this.el = el;
    this.imgs = document.querySelectorAll(".js-scrollshow_argane_lead_img");

    this.order = [2, 1, 3, 0, 4];
    // this.order = [0, 1, 2, 3, 4];

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

    this.order.forEach((el, i) => {
      tl.to(
        this.imgs[this.order[i]],
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0.25 * i
      );
    });
  }

  onScroll() {
    if (this.isShow) return;

    const delay = window.innerWidth >= 768 ? 0 : 0;

    if (this.top < window.scrollY + window.innerHeight - delay) {
      this.show();
    }
  }

  setEvents() {}
}
