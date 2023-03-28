//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

const src = "./assets/resource/img/particle0.png";

export default class Controller extends Base {
  constructor(i, ctx) {
    super();

    this.i = i;
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
    this.setParameter();
  }

  ready() {
    this.img = new Image();
    this.img.src = src;
  }

  setParameter() {
    const baseW = 5 * window.devicePixelRatio;
    this.w = m.randomInt(1, 3) * baseW;
    this.h = this.w * (this.img.naturalHeight / this.img.naturalWidth);

    this.x = m.randomInt(10, 60) * window.devicePixelRatio;
    this.y = m.randomInt(10, 60) * window.devicePixelRatio;
    this.directionX = Math.random() < 0.5 ? -1 : 1;
    this.directionY = Math.random() < 0.5 ? -1 : 1;

    this.position = { x: 0, y: 0 };
    this.alpha = { value: 1 };
    this.scale = { x: 1, y: 1 };
  }

  update() {
    this.ctx.save();
    this.ctx.globalAlpha = this.alpha.value;
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.scale(this.scale.x, this.scale.y);
    this.ctx.translate(-this.position.x, -this.position.y);
    this.ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.w,
      this.h
    );
    this.ctx.restore();
  }

  show(centerX, centerY) {
    this.setParameter();

    this.position.x = centerX;
    this.position.y = centerY;

    this.scale = { x: 1, y: 1 };

    const tl = gsap.timeline();

    tl
      // op
      .to(this.alpha, 0.1, {
        value: 1,
      })
      // pos
      .to(
        this.position,
        0.8,
        {
          x: `+=${this.x * this.directionX}`,
          y: `+=${this.y * this.directionY}`,
          ease: "power2.out",
        },
        0
      )
      .to(
        this.alpha,
        0.5,
        {
          value: 0,
        },
        0.8 * this.i * 0.02
      )
      .to(
        this.scale,
        0.5,
        {
          x: 0,
        },
        0.8 * this.i * 0.02
      )
      .to(
        this.scale,
        0.5,
        {
          y: 0,
        },
        0.8 * this.i * 0.02
      );

    return tl;
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
