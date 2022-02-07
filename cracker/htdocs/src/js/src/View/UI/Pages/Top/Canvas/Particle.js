//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";

export default class Confetti extends Base {
  constructor(x, y, canvas, ctx) {
    super();

    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.explode = false;
    this.life = 1;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.init();

    // 位置x
    this.radiusX = m.randomInt(-8, 8);
    this.degreeX = Math.random() * 360;
    this.degreeXV = m.randomInt(0.1, 1);

    // 位置y
    this.vy = m.randomInt(-20, -40);
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
      // x: m.randomInt(this.canvas.width / 2 - 100, this.canvas.width / 2 + 100),
      // y: m.randomInt(this.canvas.height - 100, this.canvas.height),
      x: this.x,
      y: this.y,
    };
  }

  display() {
    // this.ctx.fillStyle = this.frontColor;
    // this.ctx.beginPath();
    // this.ctx.rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
    // this.ctx.fill();
  }

  draw() {
    // 蛇行（爆発後は蛇行なし）
    if (!this.explode) {
      this.vx = Math.sin(m.radian(this.degreeX)) * this.radiusX;
      this.pos.x += this.vx;
      this.degreeX += this.degreeXV;
    }

    // 落下
    if (this.explode) this.vy *= 0.9; // スローダウンで落ちる
    this.vy += this.gravity;
    this.pos.y += this.vy;

    // 高さ（※高さ変えてx軸に沿って回転してる風に見せる）
    this.changedH = Math.cos(m.radian(this.degreeH)) * this.size.h;
    this.degreeH += this.degreeHV;

    // 回転
    this.rotation += this.rotationV;

    // life（爆発してたら減っていく）
    if (this.explode) this.life -= 0.01;

    // 描画 method1
    this.ctx.translate(this.pos.x, this.pos.y);
    this.ctx.rotate(m.radian(this.rotation));
    this.ctx.fillStyle = this.explode
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
      this.explode = true;
    }

    // reset
    if (this.pos.y > this.canvas.height + this.size.h) return;
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
