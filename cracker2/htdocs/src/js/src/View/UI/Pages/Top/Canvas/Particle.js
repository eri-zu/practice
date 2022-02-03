//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

import Vector2 from "./Vector2";

export default class Controller extends Base {
  constructor(x, y, canvas, ctx, firework) {
    super();

    this.canvas = canvas;
    this.ctx = ctx;
    this.firework = firework;
    this.lifespan = 1;

    this.pos = new Vector2(x, y);
    if (this.firework) {
      // 上に上がる
      this.vel = new Vector2(0, m.randomInt(-25, -8));
    } else {
      // 円形
      const angle = m.radian(m.randomInt(0, 360));
      const radius = 1;

      this.vel = new Vector2(
        radius * Math.cos(angle) * m.randomInt(5, 20),
        radius * Math.sin(angle) * m.randomInt(5, 20)
      );
    }
    this.acc = new Vector2(0, 0);
    this.gravity = new Vector2(0, 0.2); // 重力

    this.setup();
    this.setEvents();
  }

  setup() {}

  show() {
    if (!this.firework) {
      this.ctx.beginPath();
      this.ctx.fillStyle = `rgba(255, 255, 255, ${this.lifespan})`;
      this.ctx.arc(this.pos.x, this.pos.y, 10, 0, m.radian(360));
      this.ctx.fill();
    } else {
      this.ctx.beginPath();
      this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
      this.ctx.arc(this.pos.x, this.pos.y, 10, 0, m.radian(360));
      this.ctx.fill();
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    // 打ち上がった花火はスローダウンで落ちていく
    if (!this.firework) {
      this.vel.multiplyScalar(0.96);
      this.lifespan -= 0.01;
    }
    this.vel.add(this.acc); // velはどんどん減少
    this.pos.add(this.vel);
    this.acc.multiplyScalar(0); // リセット
  }

  done() {
    if (this.lifespan < 0) {
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
