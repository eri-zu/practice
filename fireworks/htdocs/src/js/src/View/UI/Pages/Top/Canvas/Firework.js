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
  constructor(canvas, ctx) {
    super();

    this.canvas = canvas;
    this.ctx = ctx;

    this.exploded = false;

    this.particles = [];

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
  }

  ready() {
    this.firework = new Particle(
      m.randomInt(0, this.canvas.width),
      this.canvas.height,
      this.canvas,
      this.ctx,
      true
    );
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(this.firework.gravity);
      this.firework.update();

      // 最上部に到達したら爆発
      if (this.firework.vel.y >= 0) {
        this.exploded = true;

        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(this.firework.gravity);
      this.particles[i].update();

      if (this.particles[i].done()) this.particles.splice(i, 1);
    }
  }

  explode() {
    // 爆発するとき、particleを100個作る
    for (let i = 0; i < 100; i++) {
      const p = new Particle(
        this.firework.pos.x,
        this.firework.pos.y,
        this.canvas,
        this.ctx,
        false
      );
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) this.firework.show();

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }

  done() {
    if (this.exploded && this.particles.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
