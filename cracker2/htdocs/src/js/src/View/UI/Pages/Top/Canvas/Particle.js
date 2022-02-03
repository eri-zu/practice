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
  constructor(x, y, canvas, ctx) {
    super();

    this.canvas = canvas;
    this.ctx = ctx;

    this.pos = new Vector2(x, y);
    this.vel = new Vector2(0, -10); // 上に上がる
    this.acc = new Vector2(0, 0);
    this.gravity = new Vector2(0, 0.2);

    this.setup();
    this.setEvents();
  }

  setup() {}

  show() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#000";
    this.ctx.arc(this.pos.x, this.pos.y, 10, 0, m.radian(360));
    this.ctx.fill();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.applyForce(this.gravity); // 重力
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.multiplyScalar(0); // リセット

    this.show(); // 描画
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
