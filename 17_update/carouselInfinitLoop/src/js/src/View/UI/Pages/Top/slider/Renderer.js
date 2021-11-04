//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor(len) {
    super();

    this.len = len;

    this.$rect = $(".js-slider");
    this.$inner = $(".js-slider_inner");
    this.$item = $(".js-slider_item");
    this.$indicator = $(".js-slider_indicator");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    this.marginL = parseInt(this.$item.eq(1).css("margin-left"));
    this.w = this.$item.eq(1).width();
    this.moveDist = this.marginL + this.w;

    this.target = { value: 0 };
    this.activeIndex = 0; // 表示してる画像のindex番号
  }

  right(diff = 1) {
    const tl = gsap.timeline();

    this.activeIndex = this.activeIndex + diff;

    // 端の処理
    if (this.activeIndex > this.len - 1) {
      this.activeIndex = 0;
      this.target.value = 1;
    }

    tl.to(this.target, 1, {
      value: -this.activeIndex,
      ease: "expo.out",
      onUpdate: () => {
        let x = this.moveDist * this.target.value;
        this.$inner.css({ transform: `translateX(${x}px)` });
      },
    });

    return tl;
  }

  left(diff = -1) {
    const tl = gsap.timeline();

    this.activeIndex = this.activeIndex + diff;

    // 端の処理
    if (this.activeIndex < -(this.len - 1)) {
      this.activeIndex = 0;
      this.target.value = -1;
    }

    tl.to(this.target, 1, {
      value: -this.activeIndex,
      ease: "expo.out",
      onUpdate: () => {
        let x = this.moveDist * this.target.value;
        this.$inner.css({ transform: `translateX(${x}px)` });
      },
    });

    return tl;
  }

  move(current, nextIndex) {
    const diff = nextIndex - current;

    if (nextIndex > current) {
      return this.right(diff);
    } else {
      return this.left(diff);
    }
  }

  changeNav(index) {
    // クラス
    this.$indicator.removeClass("is-acitve");
    this.$indicator.eq(index).addClass("is-active");

    // 描画
    const tl = gsap.timeline();

    tl
      // all
      .to(this.$indicator, 1, {
        scale: 1,
        backgroundColor: "#eee",
        ease: "expo.out",
      })
      // active
      .to(
        this.$indicator.eq(index),
        1,
        {
          scale: 1.2,
          backgroundColor: "#000",
          ease: "expo.out",
        },
        0
      );

    return tl;
  }

  reset() {
    gsap.set(this.$inner, {
      x: 0,
    });

    this.changeNav(0);
  }

  onResize() {
    this.reset();
    this.setParameter();
  }

  setEvents() {
    super.setEvents();
  }
}
