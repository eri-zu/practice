//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import { lerp } from "@BALANCeLibs/Util/Math.js";
import * as easing from "@BALANCeLibs/Util/Ease.js";
import gsap from "gsap";

// t: current time
// b: beginning value
// c: change in value
// d: duration
const easeInOutQuad = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * (--t * (t - 2) - 1) + b;
};

export default class Controller extends Base {
  constructor() {
    super();

    this.isUEv = true;
    // this.$square = $(".js-square");
    this.square = document.querySelector(".js-square");
    this.$right = $(".js-square_right");
    this.$left = $(".js-square_left");

    this.isClicked = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.posX = 0; // 現在地
    this.initX = 0;
    this.targetX = 500; // 目標値
    this.t = 0; // 進捗 0 〜 100
    this.startTime = new Date(); // 開始時間
    this.duration = 2;
  }

  timeline() {}

  update() {
    // --------------------------
    // step1
    // targetXへ移動
    // --------------------------
    // this.$square.css({ transform: `translateX(${this.targetX}px)` });
    // --------------------------
    // step2
    // アニメーションで動かす
    // --------------------------
    // this.posX++;
    // this.$square.css({ transform: `translateX(${this.posX}px)` });
    // --------------------------
    // step3
    // 動かして端で止める
    // --------------------------
    // if (this.posX <= window.innerWidth / 2 - this.$square.width() / 2) {
    //   this.posX++;
    //   this.$square.css({ transform: `translateX(${this.posX}px)` });
    // }
    // --------------------------
    // step4
    // lerp（ease.outの一種..?）
    // --------------------------
    // if (this.posX <= window.innerWidth / 2 - this.$square.width() / 2) {
    //   // this.posX = m.lerp(this.posX, this.targetX, 0.01);
    //   this.posX += (this.targetX - this.posX) * 0.05;
    //   this.$square.css({ transform: `translateX(${this.posX}px)` });
    // }
    // --------------------------
    // step5
    // easing
    // --------------------------
    // ↓私の答え↓
    // let elapsedTime = new Date() - this.startTime; // 経過時間
    // let elapsedTimeRate = elapsedTime / this.duration; // 経過時間割合(=gsapのprogress)
    // let value = easing.inOutQuad(elapsedTimeRate); // （=gsapのvalue）

    // if (elapsedTimeRate <= 1) {
    //   this.posX = (this.targetX - this.posX) * value;
    //   this.$square.css({ transform: `translateX(${this.posX}px)` });
    // }

    // ↓岡村さんの修正↓
    this.t += 1 / 60; // 経過時間
    const elapsedTimeRate = this.t / this.duration;
    let value = easing.inOutQuad(elapsedTimeRate);

    if (elapsedTimeRate > 1) return;
    const currentPosX = lerp(this.initX, this.targetX, value);
    // const x = (1 - value) * this.posX + this.targetX * value;
    this.square.style.transform = `translateX(${currentPosX}px)`;

    // Robert Penner fomula
    // let time = new Date() - this.startTime;
    // if (time < this.duration) {
    //   let x = easeInOutQuad(
    //     time,
    //     this.posX,
    //     this.targetX - this.posX,
    //     this.duration
    //   );
    //   this.$square.css({ transform: `translateX(${x}px)` });
    // }
  }

  onResize() {}

  setEvents() {
    super.setEvents();

    // this.$right.on("click" + "." + this.name, () => {
    //   this.right();
    // });
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
