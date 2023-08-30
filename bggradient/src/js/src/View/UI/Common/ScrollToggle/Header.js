//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class ScrollToggleHeader {
  constructor(header) {
    this.current = 0;
    this.header = header;
    this.isDown = true;

    this.setup();
    this.setEvents();
  }

  setup() {}

  show() {
    if (this.isDown) return;
    this.isDown = true;

    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();

    this.tl.to(this.header, 0.7, {
      y: 0,
      z: 0,
      ease: "expo.out",
      // ease: gb.conf.customInOut,
    });
  }

  hide() {
    if (!this.isDown) return;
    this.isDown = false;

    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();

    this.tl.to(this.header, 0.7, {
      y: "-100%",
      z: 0,
      // ease: "expo.out",
      ease: gb.conf.customInOut,
      // ease: "power4.inOut",
    });
  }

  onScroll() {
    if (gb.menu.isHeaderLock || gb.header.isHeaderLock) return;

    let prev = window.scrollY;

    if (this.current - prev < -10) {
      this.hide();
    } else if (this.current - prev > 10) {
      this.show();
    }

    this.current = prev;
  }

  setEvents() {}
}
