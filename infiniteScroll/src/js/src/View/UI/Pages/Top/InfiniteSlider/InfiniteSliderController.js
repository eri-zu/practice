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
    this.len = this.items.length;

    this.isUEv = true; // update（request animation frame）

    this.scroller = new VirtualScroll();

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    this.currentPos = 0; // 現在座標x
    this.targetPos = 0; // 目標座標x
    this.itemWidth = this.items[0].clientWidth; // 画像幅
    this.margin = parseInt(window.getComputedStyle(this.items[0]).marginRight); // 画像margin
    // this.totalWidth = (this.itemWidth + this.margin) * this.len; // 全画像の一番右端座標
  }

  update() {
    this.currentPos += (this.targetPos - this.currentPos) * 0.12;

    // 最後のitemの左上座標を監視
    this.lastItemX = this.items[this.len - 1].getBoundingClientRect().left;

    this.items.forEach((el, i) => {
      // 各item左上座標
      const left = el.getBoundingClientRect().left;
      // el.style.transform = `translateX(${this.currentPos}px)`;

      if (left < 0 - this.itemWidth) {
        // 画面左外に出たら最後のitemを基準に右横にセット
        console.log("画面外");
        el.style.left = `${
          this.lastItemX +
          (this.margin + this.itemWidth) * (i + 1) -
          this.scrollY
        }px`;
      } else {
        console.log("画面内");
        el.style.transform = `translateX(${this.currentPos}px)`;
      }
    });
  }

  onResize() {}

  setEvents() {
    super.setEvents();

    this.scroller.on((event) => {
      this.scrollY = this.targetPos = event.y; // スクロール量取得
    });
  }
}
