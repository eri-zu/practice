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
    // 大きさランダム係数
    this.randomScale = m.randomInt(0.5, 2);

    // 位置y（大きいほど早く落ちる）
    this.vy = this.randomScale / 0.5;

    // 位置x
    this.radiusX = m.randomInt(-5, 5);
    this.degreeX = Math.random() * 360;
    this.degreeXV = m.randomInt(0.1, 1);

    // 回転
    this.rotation = Math.random() * 360;
    this.rotationV = m.randomInt(1, 2);

    // 高さ
    this.degreeH = Math.random() * 360;
    this.degreeHV = 1;

    this.init();
  }

  init() {
    this.per = Math.min(1, window.innerWidth / 1280);

    this.size = {
      w: 15 * this.randomScale * gb.conf.devicePixelRatio * this.per,
      h: 18.5 * this.randomScale * gb.conf.devicePixelRatio * this.per,
    };

    this.position = {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
    };
  }

  display() {
    this.ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }

  draw() {
    // 蛇行
    this.vx = Math.sin(m.radian(this.degreeX)) * this.radiusX;
    this.position.x += this.vx;
    this.degreeX += this.degreeXV;

    // 落下
    this.vy *= 0.9999; // 空気抵抗
    this.position.y += this.vy;

    // 高さ（※高さ変えてx軸に沿って回転してる風に見せる）
    this.changedH = Math.cos(m.radian(this.degreeH)) * this.size.h;
    this.degreeH += this.degreeHV;

    // 回転
    this.rotation += this.rotationV;

    // 描画 method1
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.rotate(m.radian(this.rotation));
    this.ctx.drawImage(this.img, 0, 0, this.size.w, this.changedH);
    this.ctx.rotate(-m.radian(this.rotation));
    this.ctx.translate(-this.position.x, -this.position.y);

    // 描画 method2
    // this.ctx.save();
    // this.rotation += this.rotationV;
    // this.ctx.translate(this.position.x, this.position.y);
    // this.ctx.rotate(m.radian(this.rotation));
    // this.ctx.drawImage(this.img, 0, 0, this.size.w, this.size.h);
    // this.ctx.restore();

    // reset
    if (this.position.y > this.canvas.height + this.size.h) {
      this.reset();
    }
  }

  reset() {
    this.position.y = 0 - this.size.h; // 画面外に出たら上に戻す
    this.vy = this.randomScale / 0.5; // 空気抵抗
  }

  onResize() {
    this.init();
  }

  setEvents() {
    super.setEvents();
  }
}
