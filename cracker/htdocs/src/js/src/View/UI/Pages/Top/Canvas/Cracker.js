//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Particle from "./Particle";

export default class Controller extends Base {
  constructor(x, y, canvas, ctx) {
    super();

    this.canvas = canvas;
    this.ctx = ctx;

    this.x = x;
    this.y = y;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
    // this.display();
  }

  ready() {
    const len = 50;
    this.particles = [];

    for (let i = 0; i < len; i++) {
      this.particles.push(new Particle(this.x, this.y, this.canvas, this.ctx));
    }
  }

  display() {
    // for (let i = 0; i < this.particles.length; i++) {
    //   this.particles[i].display();
    // }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].draw();

      if (this.particles[i].done()) this.particles.splice(i, 1);
    }
  }

  done() {
    return this.particles.length <= 0 ? true : false;
  }

  setEvents() {
    super.setEvents();
  }
}
