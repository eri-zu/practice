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
    this.randomScale = Math.random() + 0.5; // 0.5 - 1.5
    this.vy = this.randomScale / 0.5; // 1 - 3

    this.xRadius = Math.random() * 50 + 50; // 50 - 100
    this.xAngle = Math.random() * 360; // 0 - 350
    this.xAngleV = Math.random() + 1; // 1 - 2

    this.rotation = Math.random() * 360;
    this.rotationV = Math.random() + 1; // 1 - 2

    this.w = 15 * this.randomScale * gb.conf.devicePixelRatio;
    this.h = 18.5 * this.randomScale * gb.conf.devicePixelRatio;
    this.baseX = Math.random() * window.innerWidth * gb.conf.devicePixelRatio;
    this.posY = Math.random() * window.innerHeight * gb.conf.devicePixelRatio;
  }

  display() {
    this.ctx.drawImage(this.img, this.baseX, this.posY, this.w, this.h);
  }

  draw() {
    // 横にゆらゆら
    this.posX = this.baseX + Math.sin(m.radian(this.xAngle)) * this.xRadius;
    this.xAngle += this.xAngleV;

    // 落ちていく（大きいほど早く落ちる）
    this.posY += this.vy;

    // 画面外に出たら上に戻す
    if (this.posY > window.innerHeight * gb.conf.devicePixelRatio) {
      this.posY = 0 - this.h;
    }

    // 描画 method1
    this.rotation += this.rotationV;
    this.ctx.translate(this.posX, this.posY);
    this.ctx.rotate(m.radian(this.rotation));
    this.ctx.drawImage(this.img, 0, 0, this.w, this.h);
    this.ctx.rotate(-m.radian(this.rotation));
    this.ctx.translate(-this.posX, -this.posY);

    // 描画 method2
    // this.ctx.save();
    // this.rotation += this.rotationV;
    // this.ctx.translate(this.posX, this.posY);
    // this.ctx.rotate(m.radian(this.rotation));
    // this.ctx.drawImage(this.img, 0, 0, this.w, this.h);
    // this.ctx.restore();
  }

  setEvents() {
    super.setEvents();
  }
}
