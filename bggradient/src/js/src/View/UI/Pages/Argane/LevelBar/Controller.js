//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import { UAParser } from "ua-parser-js";

export default class LevelBar extends Base {
  constructor() {
    super();

    const wrap = document.querySelector(".js-argane_levelbar_wrap");
    this.contents = wrap.querySelector(".js-argane_levelbar_contents");
    this.items = wrap.querySelectorAll(".js-argane_levelbar_item");
    this.bar = wrap.querySelector(".js-argane_levelbar_bar");
    this.area = wrap.querySelector(".js-argane_levelbar_area");
    this.len = this.items.length;

    this.isREv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.calcPoint();

    this.bar.style.setProperty("--position-left", "0%");
  }

  timeline() {}

  update() {}

  calcPoint() {
    const itemW = this.items[0].getBoundingClientRect().width;
    const margin = 15;
    const w = itemW + margin;
    const areaW = this.area.getBoundingClientRect().width;

    const buffa = areaW * 0.5;
    this.point1 = w - areaW * 0.5;
    this.point2 = w * 2 - areaW + buffa;
    this.point3 = this.point2 + w;
    this.point4 = this.point2 + w * 2;
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      this.calcPoint();
      this.contents.scrollLeft = 0;
      this.bar.style.setProperty("--position-left", "0%");
    }
  }

  onScroll() {
    const scrollX = this.contents.scrollLeft;

    if (scrollX <= this.point1) {
      this.bar.style.setProperty("--position-left", "0%");
    } else if (scrollX > this.point1 && scrollX <= this.point2) {
      this.bar.style.setProperty("--position-left", "25%");
    } else if (scrollX >= this.point2 && scrollX < this.point3) {
      this.bar.style.setProperty("--position-left", "50%");
    } else if (scrollX >= this.point3 && scrollX < this.point4) {
      this.bar.style.setProperty("--position-left", "75%");
    } else {
      this.bar.style.setProperty("--position-left", "100%");
    }
  }

  setEvents() {
    super.setEvents();

    this.contents.addEventListener("scroll", (e) => {
      this.onScroll();
    });
  }
}
