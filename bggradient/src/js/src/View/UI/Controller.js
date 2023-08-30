//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Pages from "./Pages/Controller";
import { ProductSlider } from "./Common/ProductSlider";
import { MovieModal } from "./Common/MovieModal";
import { SmoothScroll } from "./Common/SmoothScroll";

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();

    // this.timeline();
  }

  setup() {
    new Pages();

    const sliders = document.querySelectorAll(".js-products-sliders-wrap");
    sliders.forEach((el) => {
      new ProductSlider(el);
    });

    new MovieModal();
    new SmoothScroll();

    const wrapper = document.querySelector(".newsarea__wrapper");
    if (wrapper) {
      if (wrapper.querySelector(".newsarea")) {
        wrapper.classList.add("active");
      } else {
        wrapper.classList.remove("active");
      }
    }
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();

    // $(window).on('loadingEnd', this.timeline.bind(this));
    // $(window).on("loadingEnd", this.setup.bind(this));
  }
}
