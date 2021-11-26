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

    this.$item = $(".js-menu_item");
    this.bar = document.querySelector(".js-menu_bar");
    this.isEnter = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    this.posLeft = [];
    const marginL = parseInt(this.$item.eq(1).css("margin-left"));

    this.$item.each((i, el) => {
      const p =
        i == 0 ? $(el).position().left : $(el).position().left + marginL;
      this.posLeft.push(p);
    });

    this.initPos = 0;
    this.currentPos = 0;
    this.targetPos = 0;
    this.t = 0;
    this.duration = 2;
  }

  onEnter($target) {
    this.isEnter = true;

    const index = this.$item.index($target);
    this.targetPos = this.posLeft[index];
  }

  onLeave($target) {
    this.t = 0;
    this.isEnter = false;
  }

  update() {
    if (!this.isEnter) return;

    this.t += 1 / 60;
    const elapsedTimeRate = this.t / this.duration; // 経過時間割合
    let val = easing.outCubic(elapsedTimeRate);

    if (elapsedTimeRate > 1) return;
    this.currentPos = lerp(this.currentPos, this.targetPos, val);
    this.bar.style.transform = `translateX(${this.currentPos}px)`;
  }

  setEvents() {
    super.setEvents();

    this.$item.on("mouseenter" + "." + this.name, (e) => {
      this.onEnter($(e.currentTarget));
    });

    this.$item.on("mouseleave" + "." + this.name, (e) => {
      this.onLeave($(e.currentTarget));
    });
  }

  removeEvents() {}
}
