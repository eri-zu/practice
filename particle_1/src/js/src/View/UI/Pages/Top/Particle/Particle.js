//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor(el, i, areaWidth) {
    super();

    this.el = el;
    this.i = i;

    this.frame = 0;
    this.x = 0;
    this.y = 0;
    this.areaW = areaWidth;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
  }

  ready() {
    this.w = 10;
    this.x = m.randomInt(10, 60);
    this.y = m.randomInt(10, 60);
    this.directionX = Math.random() < 0.5 ? -1 : 1;
    this.directionY = Math.random() < 0.5 ? -1 : 1;

    const randomNum = m.randomInt(1, 3);
    if (randomNum == 1) {
      this.w = this.areaW * 0.045;
    } else if (randomNum == 2) {
      this.w = this.areaW * 0.045 * 2;
    } else {
      this.w = this.areaW * 0.045 * 3;
    }

    this.el.style.width = `${this.w}px`;
    this.el.style.height = `${this.w}px`;
  }

  timeline() {}

  update() {
    // this.x++;
    // this.y++;
    // this.el.style.transform = `translate3d(${this.x}px, ${this.y}px, 0px)`;
  }

  show() {
    const tl = gsap.timeline();

    tl
      // op
      .to(this.el, 0.2, {
        opacity: 1,
      })
      // pos
      .to(
        this.el,
        0.8,
        {
          x: this.x * this.directionX,
          y: this.y * this.directionY,
          z: 0,
          // ease: "expo.out",
        },
        0
      )
      .to(
        this.el,
        0.5,
        {
          scale: 0,
          opacity: 0,
        },
        0.5 + this.i * 0.015
      );
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
