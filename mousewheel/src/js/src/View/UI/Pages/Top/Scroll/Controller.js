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

    this.inner = document.querySelector(".js-list_inner");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.x = 0;
    this.max = this.inner.scrollWidth - this.inner.clientWidth; // 最大移動距離

    this.scroller = new VirtualScroll({
      el: this.inner,
      mouseMultiplie: true,
    });
  }

  update() {}

  setEvents() {
    super.setEvents();

    this.scroller.on((event) => {
      // event.y : total distance scrolled
      // deltaY : distance scolled

      this.x += event.deltaY;

      if (this.x >= this.max) {
        this.x = this.max;
      } else if (this.x < 0) {
        this.x = 0;
      }

      this.inner.style.transform = `translateX(${-this.x}px)`;
    });
  }
}
