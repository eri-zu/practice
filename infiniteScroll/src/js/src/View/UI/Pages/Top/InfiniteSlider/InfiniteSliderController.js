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
import Item from "./Item";

const lerp = (x, y, p) => {
  return x + (y - x) * p;
};

export default class InfiniteSliderController extends Base {
  constructor() {
    super();

    this.items = document.querySelectorAll(".js-slider_item");
    this.itemArray = [];
    this.len = this.items.length;
    this.deltaY = 0;
    this.isScroll = false;

    this.isUEv = true; // update（request animation frame）

    this.scroller = new VirtualScroll();

    this.setup();
    this.setEvents();
  }

  setup() {
    for (let i = 0; i < this.items.length; i++) {
      const item = new Item(this.items[i], i, this.len);
      this.itemArray.push(item);
    }
  }

  setParameter() {}

  update() {
    let deltaY = this.isScroll ? this.deltaY : 0;

    this.itemArray.forEach((el, i) => {
      el.update(deltaY, this.lastItemX);
    });

    // 最後尾の右端を監視
    this.lastItemX =
      this.items[this.len - 1].getBoundingClientRect().left + 400;

    // スクロール量0にリセット
    this.isScroll = false;
  }

  onResize() {}

  setEvents() {
    super.setEvents();

    this.scroller.on((event) => {
      // スクロール量とる
      if (event.deltaY > 0) return;

      this.isScroll = true;
      this.deltaY = event.deltaY;
    });
  }
}
