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
import VirtualScroll from "virtual-scroll";

const lerp = (x, y, p) => {
  return x + (y - x) * p;
};

export default class InfiniteSliderController extends Base {
  constructor() {
    super();

    this.items = document.querySelectorAll(".js-slider_item");
    this.wrapper = this.items[0].parentNode;
    this.len = this.items.length;

    this.isUEv = true; // update（request animation frame）

    this.scroller = new VirtualScroll();

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
    this.wrapper.insertBefore(this.items[this.len - 1], this.items[0]);
  }

  setParameter() {
    this.currentPos = 0; // 現在座標x
    this.targetPos = 0; // 目標座標x
    const margin = parseInt(window.getComputedStyle(this.items[0]).marginRight); // 画像margin
    this.itemWidth = this.items[0].clientWidth + margin; // 画像幅
    this.offsetX = this.itemWidth + 30;
    this.scrollY = this.offsetX;
  }

  update() {
    const wrapperWidth = this.len * this.itemWidth;
    this.currentPos = this.scrollY % wrapperWidth;

    this.items.forEach((el, i) => {
      el.style.left = 0;
      let pos = this.scrollY + this.itemWidth * i;
      if (pos >= 0) {
        el.style.transform = `translateX(${
          (pos % wrapperWidth) - this.itemWidth
        }px)`;
      } else {
        el.style.transform = `translateX(${
          (pos % wrapperWidth) + wrapperWidth - this.itemWidth
        }px)`;
      }
    });
    // this.wrapper.style.transform = `translateX(${this.currentPos}px)`;
  }

  onResize() {}

  setEvents() {
    super.setEvents();

    /**
     * VirtualScrollというライブラリを使って簡単にスクロール量取得してます。
     * https://www.npmjs.com/package/virtual-scroll
     */

    this.scroller.on((event) => {
      this.scrollY = event.y * 0.12 + this.offsetX; // スクロール量取得
    });
  }
}
