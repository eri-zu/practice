//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class Controller {
  constructor(inner) {
    this.inner = inner;
    this.list = this.inner.querySelector(".js-list");

    this.x = 0;
    this.speed = 0.8;

    this.setup();
  }

  setup() {
    this.calcWidth();
  }

  calcWidth() {
    this.w = this.list.clientWidth;
  }

  update() {
    this.x += this.speed;

    if (this.x > this.w) {
      this.x = 0;
    }

    const x = -1 * this.x;

    this.inner.style.transform = `translate3d(${x.toFixed(0)}px, 0px, 0px)`;
  }

  onResize() {
    this.calcWidth();
  }
}
