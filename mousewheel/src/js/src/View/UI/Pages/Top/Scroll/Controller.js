//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import VirtualScroll from "virtual-scroll";

export default class Controller extends Base {
  constructor() {
    super();

    this.isUEv = true;
    this.isScrollBarScroll = false;

    this.inner = document.querySelector(".js-list_inner");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.x = 0;
    this.v = 0;
    this.max = this.inner.scrollWidth - this.inner.clientWidth; // 最大移動距離

    this.virtualScroll = new VirtualScroll({
      el: this.inner,
      useTouch: false,
    });
  }

  update() {
    const ease = this.isScrollBarScroll ? 1 : 0.12;

    this.v += (this.x - this.v) * ease; // easing
    this.inner.scrollLeft = this.v; // x方向スクロール量
  }

  onMouseDown() {
    this.isScrollBarScroll = true;
  }

  onMouseUp() {
    this.isScrollBarScroll = false;
  }

  onScroll(e) {
    // scrollbar使うとき、this.xの値
    if (this.isScrollBarScroll) {
      this.x = this.inner.scrollLeft;
    }
  }

  setEvents() {
    super.setEvents();

    // virtual scroll使うとき
    this.virtualScroll.on((e) => {
      // onScroll発火しないように
      this.isScrollBarScroll = false;

      // virtual scroll使うとき、this.xの値
      // e.x : total distance scrolled on the x axis
      // e.y : total distance scrolled on the y axis
      // deltaY : distance scolled
      this.x += e.deltaY; // 縦mousewheel
      this.x -= e.deltaX * 0.5; // 横mousewheel

      // 端で止める
      if (this.x >= this.max) {
        this.x = this.max;
      } else if (this.x < -10) {
        this.x = -10;
      }
    });

    // スクロールバーを使うとき
    this.inner.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.inner.addEventListener("mouseup", this.onMouseUp.bind(this));
    this.inner.addEventListener("scroll", this.onScroll.bind(this));
  }

  removeEvents() {
    super.offU();
    this.virtualScroll.destroy();
    this.inner.removeEventListener("mousedown", this.onMouseDown.bind(this));
    this.inner.removeEventListener("mouseup", this.onMouseUp.bind(this));
    this.inner.removeEventListener("scroll", this.onScroll.bind(this));
  }
}
