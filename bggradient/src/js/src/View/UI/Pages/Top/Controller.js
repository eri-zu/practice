//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import CommonSlider from "../../Common/CommonSlider/Controller";
import { GL } from "./gl";
import gsap from "gsap";
import { goHash } from "../../Common/GoHash/goHash";
export default class Controller extends Base {
  constructor() {
    super();

    this.header = document.getElementById("header");
    this.logocover = document.querySelector(".js-logo_cover");
    this.otherarea = document.querySelector(".js-top_otherarea");

    this.setup();
    this.setEvents();
  }

  setup() {
    goHash();

    gb.gl = new GL(document.querySelector(".section-top-kv-canvas"));

    if (document.querySelector(".js-commonslider.-news")) {
      new CommonSlider(document.querySelector(".js-commonslider.-news"), 4, 1);
    }

    this.show();
  }

  show() {
    const tl = gsap.timeline();

    const delay = !gb.gl.isLoaded ? 0.1 : 0;

    tl
      // canvas
      .add(gb.gl.show(), delay)
      // logocover
      .to(
        this.logocover,
        1.4,
        {
          x: "101%",
          ease: gb.conf.customInOut,
        },
        delay + 1.2
      )
      // header
      .to(
        this.header,
        1.3,
        {
          y: 0,
          z: 0,
          ease: gb.conf.customInOut,
        },
        delay + 1.2
      );
    tl.to(
      this.otherarea,
      1.2,
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      delay + 1.2
    );
  }

  setEvents() {
    super.setEvents();
  }
}
