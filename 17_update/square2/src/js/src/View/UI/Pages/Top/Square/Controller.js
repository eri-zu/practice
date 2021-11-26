//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import { lerp } from "@BALANCeLibs/Util/Math.js";
import * as easing from "@BALANCeLibs/Util/Ease.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor() {
    super();

    this.isUEv = true;
    this.square = document.querySelector(".js-square");
    this.$right = $(".js-square_right");
    this.$left = $(".js-square_left");

    this.isClicked = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    this.initPos = 0; // 初期pos
    this.targetPos = 100; // 目標pos
    this.t = 0;
    this.duration = 2;
  }

  timeline() {}

  update() {
    if (!this.isClicked) return;

    this.t += 1 / 60; // 経過時間
    const elapsedTimeRate = this.t / this.duration; // 経過時間割合
    let value = easing.inOutQuad(elapsedTimeRate); // easingかけた値 0 ~ 1

    // if (elapsedTimeRate > 1) return;
    const currentPos = lerp(this.initPos, this.targetPos, value);
    this.square.style.transform = `translateX(${currentPos}px)`;
  }

  onResize() {}

  onClick() {
    this.t = 0;
    this.targetPos += 100;
  }

  setEvents() {
    super.setEvents();

    this.$right.on("click" + "." + this.name, () => {
      this.isClicked = true;
      // this.onClick();
      // this.t = 0;
    });
  }
}

// easing
// duration targetPos initPos
// だけど
// マウスストーカーとかスムーススクロール
// easing無理→durationわからんから
// だから
//  val01 + (val02 - val01) * val; で
// valを固定ちでやっちゃう
// 時間と目標値がわかってたらvalをeasingで出せるけどね
// 無理だから
