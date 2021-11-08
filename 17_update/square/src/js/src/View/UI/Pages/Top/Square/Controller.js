//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import * as e from "@BALANCeLibs/Util/Ease.js";
import gsap from "gsap";

// pは現在の進捗率
const easeOut = (p) => {
  return p * (2 - p);
};

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
    this.$square = $(".js-square");
    this.$right = $(".js-square_right");
    this.$left = $(".js-square_left");

    this.isClicked = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.posX = 0; // 現在地
    this.targetX = 500; // 目標値
    this.frame = 0; // 進捗 0 〜 100
    this.startTime = new Date();
    this.duration = 2000;
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
    // lerp（ease.outの一種）
    // --------------------------
    if (this.posX <= window.innerWidth / 2 - this.$square.width() / 2) {
      // this.posX = m.lerp(this.posX, this.targetX, 0.01);
      this.posX += (this.targetX - this.posX) * 0.05;
      this.$square.css({ transform: `translateX(${this.posX}px)` });
    }

    // --------------------------
    // step5
    // easing
    // --------------------------
    // console.log(easeOut(0.25)); //進捗率25%
    // console.log(this.targetX * easeOut(0.25)); // targetXに対する進捗率25%の位置
    // 1sで60frame
    // if (this.frame <= 100) {
    //   this.frame++;
    //   this.posX = this.targetX * easeOut(this.frame / 100);
    //   this.$square.css({ transform: `translateX(${this.posX}px)` });
    // }

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
