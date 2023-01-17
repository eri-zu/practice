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

    this.isREv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
    this.getHeight();
    this.setTop();
  }

  setParameter() {
    this.upperNum = window.innerWidth >= 768 ? 5 : 4;
    this.heightArray = [];
    this.h0 = 0;
    this.h00 = 0;
    this.h1 = 0;
    this.h2 = 0;
    this.h3 = 0;
    this.h4 = 0;
  }

  getHeight() {
    this.items.forEach((el, i) => {
      this.heightArray.push(el.offsetHeight);
    });
  }

  defaultHeight(i) {
    let h;

    if (i < this.upperNum) {
      h = 0;
    } else {
      if (window.innerWidth >= 768) {
        if (i % 4 == 1 || i % 4 == 2) {
          h = this.heightArray[0] + this.heightArray[2] + this.heightArray[4]; // 左
        } else {
          h = this.heightArray[1] + this.heightArray[3]; // 右
        }
      } else {
        h =
          this.heightArray[0] +
          this.heightArray[1] +
          this.heightArray[2] +
          this.heightArray[3];
      }
    }

    return h;
  }

  setTop() {
    let h = 0;

    this.items.forEach((el, i) => {
      if (window.innerWidth >= 768) {
        // 上位5位
        if (i < this.upperNum) {
          if (i % 2 == 0) {
            this.h0 += this.heightArray[i];
            h = this.h0;
          } else {
            this.h00 += this.heightArray[i];
            h = this.h00;
          }
        }
        // 上位5位以下
        else {
          if (i % 4 == 1) {
            this.h1 += this.heightArray[i];
            h = this.h1;
          }
          if (i % 4 == 2) {
            this.h2 += this.heightArray[i];
            h = this.h2;
          }
          if (i % 4 == 3) {
            this.h3 += this.heightArray[i];
            h = this.h3;
          }
          if (i % 4 == 0) {
            this.h4 += this.heightArray[i];
            h = this.h4;
          }
        }
      } else {
        // 上位5位
        if (i < this.upperNum) {
          this.h0 += this.heightArray[i];
          h = this.h0;
        }

        // 上位5位以下
        else {
          if (i % 2 == 0) {
            this.h1 += this.heightArray[i];
            h = this.h1;
          } else {
            this.h2 += this.heightArray[i];
            h = this.h2;
          }
        }
      }

      el.style.top = `${this.defaultHeight(i) + h - this.heightArray[i]}px`;
    });
  }

  setWrapHeight() {}

  onResize() {
    this.setParameter();
    this.getHeight();
    this.setTop();
  }

  setEvents() {
    super.setEvents();
  }
}
