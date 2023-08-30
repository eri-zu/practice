//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import * as m from "@BALANCeLibs/Util/Math.js";

export default class Controller {
  constructor(wrap, i) {
    this.wrap = wrap;
    this.i = i;
    this.target = this.wrap.querySelector(".js-parallax_item");

    this.buffa = 100;

    this.prev = 0;
    this.current = 0;
    this.v = 0;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.top =
      this.wrap.getBoundingClientRect().top -
      window.innerHeight +
      window.scrollY;
    // 0;

    if (this.top < 0) this.top = 0;

    this.bottom = this.wrap.getBoundingClientRect().bottom + window.scrollY;

    this.randomNum = m.random(1.2, 2);
    this.maxMoveY = 15 * this.randomNum;
  }

  update() {
    const y = m.map(window.scrollY, 0, this.maxMoveY, this.top, this.bottom);

    // updateの中で
    this.v += (y - this.v) * 0.05;
    this.target.style.transform = `translate3d(0px, ${-1 * this.v}%, 0px)`;
  }

  onResize() {}

  setEvents() {}
}
