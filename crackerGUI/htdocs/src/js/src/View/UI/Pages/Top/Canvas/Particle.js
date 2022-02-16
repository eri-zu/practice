//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";

export default class Particle extends Base {
  constructor(x, y, canvas, ctx, direction, angle) {
    super();

    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = ctx;
    this.startFallDown = false; // 落下開始
    this.life = 1;

    const forcePower = Math.random() * gb.parameters.power + 5; // 打ち上げる力
    direction -= angle / 2; // 円錐型の開始の角度
    direction += Math.random() * angle; // 広がりの中で様々な角度

    this.forceVec = {
      x: Math.cos(m.radian(direction)) * forcePower,
      y: Math.sin(m.radian(direction)) * forcePower,
    };

    this.setup();
    this.setEvents();
  }

  setup() {
    this.init();

    // 位置x
    this.radiusX = m.randomInt(-8, 8);
    this.degreeX = Math.random() * 360;
    this.degreeXV = 0; //m.randomInt(0.1, 1);

    // 位置y
    this.vy = m.randomInt(-20, -40); // 全体的に上にあげる力
    this.gravity = 0.8;

    // 回転
    this.rotation = Math.random() * 360;
    this.rotationV = 3;

    // 高さ
    this.degreeH = Math.random() * 360;
    this.degreeHV = 3;

    // 色
    this.colors = {
      r: [223, 0, 235, 255, 102, 0, 5],
      g: [0, 232, 188, 210, 6, 82, 121],
      b: [73, 87, 43, 0, 113, 145, 138],
    };
    this.colorindex = Math.round(Math.random() * (this.colors.r.length - 1));
    this.color = `rgba(${this.colors.r[this.colorindex]}, ${
      this.colors.g[this.colorindex]
    }, ${this.colors.b[this.colorindex]}, 1)`;
  }

  init() {
    this.per = Math.min(1, window.innerWidth / 1280);

    this.size = {
      w: m.randomInt(8, 10) * gb.conf.devicePixelRatio * this.per,
      h: m.randomInt(8, 15) * gb.conf.devicePixelRatio * this.per,
    };

    this.pos = {
      x: this.x,
      y: this.y,
    };
  }

  draw() {
    // 落下
    this.vy *= gb.parameters.fallDownSpeed; // スローダウンで落ちる
    this.vy += this.gravity;
    this.pos.y += this.vy + this.forceVec.y;
    this.pos.x += this.forceVec.x;

    this.forceVec.x *= gb.parameters.weak;
    this.forceVec.y *= gb.parameters.weak;

    // 高さ（※高さ変えて奥向きに回転してる風に見せる）
    this.changedH = Math.cos(m.radian(this.degreeH)) * this.size.h;
    this.degreeH += this.degreeHV;

    // 回転
    this.rotation += this.rotationV;

    // life（爆発後から減っていく）
    if (this.startFallDown) this.life -= 0.01;

    // 描画 method1
    this.ctx.translate(this.pos.x, this.pos.y);
    this.ctx.rotate(m.radian(this.rotation));
    this.ctx.fillStyle = this.startFallDown
      ? `rgba(${this.colors.r[this.colorindex]}, ${
          this.colors.g[this.colorindex]
        }, ${this.colors.b[this.colorindex]}, ${this.life})`
      : this.color;
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.size.w, this.changedH);
    this.ctx.fill();
    this.ctx.rotate(-m.radian(this.rotation));
    this.ctx.translate(-this.pos.x, -this.pos.y);

    // exlode
    if (this.vy >= 0) {
      this.startFallDown = true;
    }
  }

  done() {
    return this.life <= 0 ? true : false;
  }

  onResize() {
    this.init();
  }

  setEvents() {
    super.setEvents();
  }
}
