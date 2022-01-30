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

export default class Sakura extends Base {
  constructor(canvas, ctx, img) {
    super();

    this.canvas = canvas;
    this.ctx = ctx;
    this.img = img;

    this.setup();
    this.setEvents();
  }

  setup() {
    // scale
    this.randomScale = m.randomInt(0.5, 2);
    //  y
    this.vy = this.randomScale / 0.5;
    // x
    this.radiusX = m.randomInt(-5, 5);
    this.degreeX = Math.random() * 360;
    this.degreeXV = m.randomInt(0.1, 1);
    // rotation
    this.rotation = Math.random() * 360;
    this.rotationV = m.randomInt(1, 2);
    // height
    this.degreeH = Math.random() * 360;
    this.degreeHV = 1;

    this.w = 15 * this.randomScale * gb.conf.devicePixelRatio;
    this.h = 18.5 * this.randomScale * gb.conf.devicePixelRatio;
    this.x = Math.random() * window.innerWidth * gb.conf.devicePixelRatio;
    this.y = Math.random() * window.innerHeight * gb.conf.devicePixelRatio;
  }

  display() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  draw() {
    // 蛇行
    this.vx = Math.sin(m.radian(this.degreeX)) * this.radiusX;
    this.x += this.vx;
    this.degreeX += this.degreeXV;

    // 落下（大きいほど早く落ちる）
    this.y += this.vy;

    // 画面外に出たら上に戻す
    if (this.y > window.innerHeight * gb.conf.devicePixelRatio + this.h) {
      this.y = 0 - this.h;
    }

    // 高さ（※x軸回転してる風に見せる）
    this.changedH = Math.cos(m.radian(this.degreeH)) * this.h;
    this.degreeH += this.degreeHV;

    // 回転
    this.rotation += this.rotationV;

    // 描画 method1
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(m.radian(this.rotation));
    this.ctx.drawImage(this.img, 0, 0, this.w, this.changedH);
    this.ctx.rotate(-m.radian(this.rotation));
    this.ctx.translate(-this.x, -this.y);

    // 描画 method2
    // this.ctx.save();
    // this.rotation += this.rotationV;
    // this.ctx.translate(this.x, this.y);
    // this.ctx.rotate(m.radian(this.rotation));
    // this.ctx.drawImage(this.img, 0, 0, this.w, this.h);
    // this.ctx.restore();
  }

  setEvents() {
    super.setEvents();
  }
}
