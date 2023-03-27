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
    this.setParameter();
  }

  setParameter() {
    const baseW = this.areaW * 0.03;
    const w = m.randomInt(1, 3) * baseW;

    this.x = m.randomInt(10, 60);
    this.y = m.randomInt(10, 60);
    this.directionX = Math.random() < 0.5 ? -1 : 1;
    this.directionY = Math.random() < 0.5 ? -1 : 1;

    this.el.style.width = `${w}px`;
    this.el.style.height = `${w}px`;
  }

  ready(centerX, centerY) {
    // setPos
    this.el.style.setProperty("--left", `${centerX}px`);
    this.el.style.setProperty("--top", `${centerY}px`);

    gsap.set(this.el, {
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
    });

    // this.el.style.transform = "translate(0px, 0px) scale(1, 1)";
  }

  show(centerX, centerY) {
    this.ready(centerX, centerY);

    const tl = gsap.timeline();

    tl
      // op
      .to(this.el, 0.1, {
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
          ease: "power2.out",
        },
        0
      )
      .to(
        this.el,
        0.4,
        {
          scale: 0,
          opacity: 0,
        },
        0.4 + this.i * 0.02
      );

    return tl;
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
