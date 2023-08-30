//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import BgGradient from "./BgGradient/Controller";
import Product from "./Product/Controller";
import Mv from "./Mv/Controller";
import CommonSlider from "../../Common/CommonSlider/Controller";
import $ from "jquery";
import { GL } from "./gl";

export default class Acid extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    // gb.acidmv = new Mv();

    // new CommonSlider(
    //   document.querySelector(".js-commonslider.-usercomment"),
    //   3,
    //   1
    // );

    // if(document.querySelector(".js-commonslider.-news")) {
    //   new CommonSlider(document.querySelector(".js-commonslider.-news"), 4, 1);
    // }

    // new CommonSlider(document.querySelector(".js-commonslider.-howto"), 3, 1);

    // $(window).on("isOpeningDone", () => {
    //   gb.acidproduct = new Product();
    //   gb.acidgradient = new BgGradient();
    // });

    // gb.acidgradient = new BgGradient();
    new GL(document.querySelector(".js-acid__lineup-canvaswrap"));
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
