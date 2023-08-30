//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class ArganeLead {
  constructor(el) {
    this.el = el;
    // this.titles = this.el.querySelectorAll(".js-scrollshow_argane_lead_title");
    // this.txts = this.el.querySelectorAll(".js-scrollshow_argane_lead_txt");

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
          ease: gb.conf.customInOutOP,
        },
        0
      )
      .to(
        this.el,
        1,
        {
          y: 0,
          z: 0,
          ease: gb.conf.customOutOP,
        },
        0
      );

    // this.titles.forEach((el, i) => {
    //   tl
    //     // title
    //     .to(
    //       el,
    //       1,
    //       {
    //         opacity: 1,
    //         ease: gb.conf.customInOutOP,
    //       },
    //       0 + 0.1 * i
    //     )
    //     .to(
    //       el,
    //       1,
    //       {
    //         y: 0,
    //         z: 0,
    //         ease: gb.conf.customOutOP,
    //       },
    //       0 + 0.1 * i
    //     );
    // });
    // this.txts.forEach((el, i) => {
    //   tl

    //     // title
    //     .to(
    //       el,
    //       1,
    //       {
    //         opacity: 1,
    //         ease: gb.conf.customInOutOP,
    //       },
    //       0.3 + 0.1 * i
    //     )
    //     .to(
    //       el,
    //       1,
    //       {
    //         y: 0,
    //         z: 0,
    //         ease: gb.conf.customOutOP,
    //       },
    //       0.3 + 0.1 * i
    //     );
    // });
  }

  onScroll() {
    if (this.isShow) return;

    const delay = window.innerWidth >= 768 ? 10 : 0;

    if (this.top < window.scrollY + window.innerHeight - delay) {
      this.show();
    }
  }

  setEvents() {}
}
