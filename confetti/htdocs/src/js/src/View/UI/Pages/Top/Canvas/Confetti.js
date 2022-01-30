//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";

import gsap from "gsap";
import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";
import { Conf } from "@/Conf";

export default class Confetti extends Base {
  constructor(canvas, ctx) {
    super();

    this.canvas = canvas;
    this.ctx = ctx;

    this.setup();
    this.setEvents();
  }

  setup() {
    // 大きさランダム係数
    this.randomScale = {
      w: m.randomInt(8, 10),
      h: m.randomInt(8, 15),
    };

    // 位置y
    this.vy = m.randomInt(5, 10);

    // 位置x
    this.radiusX = m.randomInt(-5, 5);
    this.degreeX = Math.random() * 360;
    this.degreeXV = m.randomInt(0.1, 1);

    // 回転
    this.rotation = Math.random() * 360;
    this.rotationV = 3;

    // 高さ
    this.degreeH = Math.random() * 360;
    this.degreeHV = 3;

    this.colors = [
      ["#df0049", "#660671"],
      ["#00e857", "#005291"],
      ["#2bebbc", "#05798a"],
      ["#ffd200", "#b06c00"],
    ];

    this.frontColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))][0];
    this.backColor =
      this.colors[Math.round(Math.random() * (this.colors.length - 1))][1];

    this.init();
  }

  init() {
    this.per = Math.min(1, window.innerWidth / 1280);

    this.size = {
      w: this.randomScale.w * gb.conf.devicePixelRatio * this.per,
      h: this.randomScale.h * gb.conf.devicePixelRatio * this.per,
    };

    this.position = {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
    };
  }

  display() {
    this.ctx.fillStyle = this.frontColor;
    this.ctx.beginPath();
    this.ctx.rect(this.position.x, this.position.y, this.size.w, this.size.h);
    this.ctx.fill();
  }

  draw() {
    // 蛇行
    this.vx = Math.sin(m.radian(this.degreeX)) * this.radiusX;
    this.position.x += this.vx;
    this.degreeX += this.degreeXV;

    // // 落下
    this.vy *= 0.9999; // 空気抵抗
    this.position.y += this.vy;

    // // 高さ（※高さ変えてx軸に沿って回転してる風に見せる）
    this.changedH = Math.cos(m.radian(this.degreeH)) * this.size.h;
    this.degreeH += this.degreeHV;

    // // 回転
    this.rotation += this.rotationV;

    // 描画 method1
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.rotate(m.radian(this.rotation));
    this.ctx.fillStyle = this.changedH > 0 ? this.frontColor : this.backColor; // ひっくり返ったら色変える
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.size.w, this.changedH);
    this.ctx.fill();
    this.ctx.rotate(-m.radian(this.rotation));
    this.ctx.translate(-this.position.x, -this.position.y);

    // reset
    if (this.position.y > this.canvas.height + this.size.h) {
      this.reset();
    }
  }

  reset() {
    this.position.y = 0 - this.size.h; // 画面外に出たら上に戻す
    this.vy = m.randomInt(5, 10);
  }

  onResize() {
    this.init();
  }

  setEvents() {
    super.setEvents();
  }
}
