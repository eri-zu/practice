//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor() {
    super();

    this.wrap = document.querySelector(".js-grid_wrap");
    this.items = document.querySelectorAll(".js-grid_item");

    this.widthArray = [];
    this.heightArray = [];

    this.h = 0;
    this.h2 = 0;
    this.h3 = 0;
    this.h4 = 0;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.getWidth();
    this.getHeight();
    this.setLeft();
    this.setTop();
  }

  getWidth() {
    this.items.forEach((el, i) => {
      this.widthArray.push(el.offsetWidth);
    });
  }

  getHeight() {
    this.items.forEach((el, i) => {
      this.heightArray.push(el.offsetHeight);
    });
  }

  get defaultLeftHeight() {
    return this.heightArray[0] + this.heightArray[2] + this.heightArray[4];
  }

  get defaultRightHeight() {
    return this.heightArray[1] + this.heightArray[3];
  }

  setLeft() {
    this.items.forEach((el, i) => {
      if (i <= 4) {
        // 上位5位
        i % 2 == 0 ? (el.style.left = 0) : (el.style.right = 0);
      } else {
        // 5位以下
        if (i % 4 == 1) {
          el.style.left = 0;
        } else if (i % 4 == 2) {
          el.style.right = "50%";
        } else if (i % 4 == 3) {
          el.style.left = "50%";
        } else if (i % 4 == 0) {
          el.style.right = 0;
        }
      }
    });
  }

  setTop() {
    this.items.forEach((el, i) => {
      if (i <= 4) {
        // 上位5位
        if (i <= 1) {
          el.style.top = 0;
        } else if (i == 4) {
          el.style.top = `${this.heightArray[i - 2] + this.heightArray[0]}px`;
        } else {
          el.style.top = `${this.heightArray[i - 2]}px`;
        }
      } else {
        if (i % 4 == 1) {
          this.h += this.heightArray[i];
          el.style.top = `${
            this.defaultLeftHeight + this.h - this.heightArray[i]
          }px`;
        }
        if (i % 4 == 2) {
          this.h2 += this.heightArray[i];
          el.style.top = `${
            this.defaultLeftHeight + this.h2 - this.heightArray[i]
          }px`;
        }
        if (i % 4 == 3) {
          this.h3 += this.heightArray[i];
          el.style.top = `${
            this.defaultRightHeight + this.h3 - this.heightArray[i]
          }px`;
        }
        if (i % 4 == 0) {
          this.h4 += this.heightArray[i];
          el.style.top = `${
            this.defaultRightHeight + this.h4 - this.heightArray[i]
          }px`;
        }
      }
    });
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
