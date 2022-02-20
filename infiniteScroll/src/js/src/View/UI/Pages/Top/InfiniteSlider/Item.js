//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Item extends Base {
  constructor(item, i, len) {
    super();

    this.item = item;
    this.i = i;
    this.len = len;
    this.easing = 0.12;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.initPos = this.item.getBoundingClientRect().left;
    this.currentPos = 0;
    this.targetPos = 0;
    this.itemWidth = this.item.clientWidth; // 画像幅
    this.margin = parseInt(window.getComputedStyle(this.item).marginRight); // 画像margin
  }

  update(deltaY, lastItemX) {
    let left = this.item.getBoundingClientRect().left;

    if (left + this.itemWidth < 0) {
      // itemの右端が画面右に隠れたら
      // this.currentPos = lastItemX + this.margin;

      // transformなので、initPosを引いておく
      // 結局 this.currentPos = lastItemX + this.margin;と同じこと
      this.currentPos =
        lastItemX +
        this.margin * (this.i + 1) +
        this.itemWidth * this.i -
        this.initPos;

      this.move(deltaY);
    } else {
      this.move(deltaY);
    }
  }

  move(deltaY) {
    this.targetPos = this.currentPos + deltaY;
    this.currentPos =
      this.currentPos + (this.targetPos - this.currentPos) * this.easing;
    this.item.style.transform = `translateX(${this.currentPos}px)`;
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
