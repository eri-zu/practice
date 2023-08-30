//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import CommonSlider from "../../Common/CommonSlider/Controller";
import { BuynowBtn } from "./BuynowBtn";

export default class Styling extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    // new CommonSlider(document.querySelector(".js-commonslider.-howto"), 3, 1);

    if (document.querySelector(".js-commonslider.-news")) {
      new CommonSlider(document.querySelector(".js-commonslider.-news"), 4, 1);
    }

    document.querySelectorAll(".js-commonslider.-howto").forEach((el) => {
      new CommonSlider(el, 3, 1);
    });

    document.querySelectorAll(".js-buynow").forEach((el) => {
      new BuynowBtn(el);
    });
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("js-buynow-btn")) {
        return;
      }
      if (e.target.classList.contains("js-buynow-contents")) {
        return;
      }
      let count = 0;
      let parent = e.target.parentNode;
      while (count < 4) {
        if (!parent.classList.contains("js-buynow-btn"))
          parent = parent.parentNode;
        else {
          count = 5;
        }
        ++count;
      }

      if (parent.classList.contains("js-buynow-btn")) return;

      const el = document.querySelector(".js-buynow-contents.active");
      if (!el) return;

      count = 0;
      parent = e.target.parentNode;
      while (count < 4) {
        if (!parent.classList.contains("js-buynow-contents"))
          parent = parent.parentNode;
        else {
          count = 5;
        }
        ++count;
      }

      if (parent.classList.contains("js-buynow-contents")) {
        return;
      }

      //それ以外
      el.classList.remove("active");
      document
        .querySelector(".js-buynow-btn.active")
        .classList.remove("active");
    });
  }
}
