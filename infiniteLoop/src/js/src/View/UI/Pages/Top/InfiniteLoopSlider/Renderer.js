//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Renderer extends Base {
  constructor($item) {
    super();

    this.isRev = true;

    this.$item = $item;
    this.len = this.$item.length;
    this.inner = document.querySelector(".js-slider__inner");

    this.currentPosX = 0;
    this.speed = 5;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    this.itemWidth = this.$item.eq(0).width();
    this.margin = parseInt(this.$item.eq(0).css("margin-right"));
    this.wrapperWidth = (this.itemWidth + this.margin) * this.len;
    this.resetPoint = this.wrapperWidth / 2;
  }

  onResize() {
    this.setParameter();
  }

  update() {
    this.currentPosX += this.speed;
    this.inner.style.transform = `translateX(${-this.currentPosX}px)`;

    if (this.currentPosX > this.resetPoint) {
      this.currentPosX = 0;
    }
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
