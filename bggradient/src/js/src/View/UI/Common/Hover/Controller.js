//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import RoundArrowBtn from "./RoundArrowBtn/RoundArrowBtn";

export default class Hover extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
  }

  ready() {
    this.hoverArray = [];

    document.querySelectorAll(".js-hover").forEach((el, i) => {
      let hoverObj;

      if (el.dataset.hover == "roundArrowBtn") {
        const hoverTarget = new RoundArrowBtn(el);

        hoverObj = {
          el: el,
          hoverIn: () => {
            if (window.innerWidth <= 768) return;
            hoverTarget.onEnter();
          },
          hoverOut: () => {
            if (window.innerWidth <= 768) return;
            hoverTarget.onLeave();
          },
        };

        this.hoverArray.push(hoverObj);
      }
    });
  }

  setEvents() {
    super.setEvents();

    this.hoverArray.forEach((item, i) => {
      item.el.addEventListener("mouseenter", item.hoverIn);
      item.el.addEventListener("mouseleave", item.hoverOut);
    });
  }
}
