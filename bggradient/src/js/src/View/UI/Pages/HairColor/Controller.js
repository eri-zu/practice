//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import CommonSlider from "../../Common/CommonSlider/Controller";

export default class Haircolor extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    if (document.querySelector(".js-commonslider.-news")) {
      new CommonSlider(document.querySelector(".js-commonslider.-news"), 4, 1);
    }
    new CommonSlider(document.querySelector(".js-commonslider.-howto"), 3, 1);
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
