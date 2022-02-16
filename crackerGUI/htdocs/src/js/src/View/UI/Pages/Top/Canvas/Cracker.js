//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Particle from "./Particle";
import * as dat from "lil-gui";

export default class Cracker extends Base {
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
  }

  ready() {
    const len = gb.parameters.amount;
    this.particles = [];

    // 飛ばす方向（軸） -90で真上  度
    // const direction = -120 + Math.random() * 90; // -30 〜 -120
    const direction = m.randomInt(
      gb.parameters.centerAngleMax,
      gb.parameters.centerAngleMin
    );

    // 広がり 度
    const angle = gb.parameters.spreadAngle;

    for (let i = 0; i < len; i++) {
      this.particles.push(
        new Particle(this.x, this.y, this.canvas, this.ctx, direction, angle)
      );
    }
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
