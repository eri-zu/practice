//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Particle from "./Particle";

export default class Controller extends Base {
  constructor(ctx) {
    super();

    this.ctx = ctx;

    this.done = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.createParticle();
  }

  createParticle() {
    this.particles = [];

    for (let i = 0; i < 14; i++) {
      const p = new Particle(i, this.ctx);
      this.particles.push(p);
    }
  }

  show(centerX, centerY) {
    const tl = gsap.timeline();

    this.particles.forEach((el, i) => {
      tl
        // show
        .add(el.show(centerX, centerY), 0)
        // 消す
        .add(() => {
          this.particles.splice(i, 1);
          this.done = true;
        });
    });

    return tl;
  }

  update() {
    console.log(this.particles.length);
    if (this.particles) {
      this.particles.forEach((el, i) => {
        el.update();
      });
    }
  }

  setEvents() {
    super.setEvents();
  }
}
