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

    this.x = 0;
    this.y = 0;
    this.areaW = areaWidth;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    const baseW = this.areaW * 0.045;
    const w = m.randomInt(1, 3) * baseW;

    this.w = 10;
    this.x = m.randomInt(10, 60);
    this.y = m.randomInt(10, 60);
    this.directionX = Math.random() < 0.5 ? -1 : 1;
    this.directionY = Math.random() < 0.5 ? -1 : 1;

    this.el.style.width = `${w}px`;
    this.el.style.height = `${w}px`;
  }

  ready(centerX, centerY) {
    this.el.style.setProperty("--left", `${centerX}px`);
    this.el.style.setProperty("--top", `${centerY}px`);
  }

  show(centerX, centerY) {
    this.ready(centerX, centerY);

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
