//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class ArganeCare {
  constructor(el) {
    this.el = el;
    this.isShow = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.top = this.el.getBoundingClientRect().top + window.scrollY;

    // this.txtarea = this.el.querySelector(".js-scroll_arganecare_item_txtarea");
    this.title = this.el.querySelector(".js-scroll_arganecare_item_title");
    this.txt = this.el.querySelector(".js-scroll_arganecare_item_txt");
    this.img = this.el.querySelector(".js-scroll_arganecare_item_img");
  }

  show() {
    this.isShow = true;

    const alldelay = this.el.classList.contains("-item01") ? 0 : 0.3;
    const delay = this.el.classList.contains("-item01") ? 0 : 0.4;
    const delay2 = this.el.classList.contains("-item01") ? 0.2 : 0;

    const tl = gsap.timeline();

    tl
      //
      .to(
        this.title,
        1.2,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0 + delay2 + alldelay
      )
      //
      .to(
        this.txt,
        1.2,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0.2 + delay2 + alldelay
      )
      // img
      .to(
        this.img,
        1.0,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0 + delay + alldelay
      );
  }

  onScroll() {
    if (this.isShow) return;

    const delay = window.innerWidth >= 768 ? 100 : 50;

    if (this.top < window.scrollY + window.innerHeight - delay) {
      this.show();
    }
  }

  setEvents() {}
}
