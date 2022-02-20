//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Renderer from "./Renderer";

export default class InfiniteLoopSlider extends Base {
  constructor() {
    super();

    this.$item = $(".js-slider_item");

    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.renderer = new Renderer(this.$item);
  }

  timeline() {}

  update() {
    this.renderer.update();
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
