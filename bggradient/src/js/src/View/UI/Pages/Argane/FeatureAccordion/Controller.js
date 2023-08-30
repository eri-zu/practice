//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";

export default class FeatureAccordion extends Base {
  constructor() {
    super();

    this.wrap = document.querySelector(".js-argane_accordion");
    this.btn = document.querySelector(".js-argane_accordion_btn");
    this.icon = document.querySelector(".js-argane_accordion_icon");
    this.path = document.querySelector(".js-argane_accordion_icon path");
    this.contents = document.querySelector(".js-argane_accordion_contents");

    this.isShow = false;

    this.setup();
    this.setEvents();
  }

  setup() {}

  show() {
    this.isShow = true;

    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl
      // icon
      .to(
        this.icon,
        0.5,
        {
          rotation: "+=90",
          startAt: {
            rotation: 0,
          },
          z: 0,
          ease: gb.conf.customOut,
        },
        0
      )
      .set(
        this.path,

        {
          opacity: 0,
        },
        0
      )
      // contents
      .to(
        this.contents,
        2,
        {
          height: "auto",
          ease: gb.conf.customOut,
        },
        0
      );

    return this.tl;
  }

  hide() {
    this.isShow = false;

    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl

      // icon
      .to(
        this.icon,
        0.5,
        {
          rotation: "+=90",
          startAt: {
            rotation: 90,
          },
          z: 0,
          ease: gb.conf.customOut,
        },
        0
      )
      .set(
        this.path,

        {
          opacity: 1,
        },
        0
      )
      .to(
        this.contents,
        0.6,
        {
          height: 0,
          ease: gb.conf.customOut,
        },
        0
      );

    return this.tl;
  }

  toggle() {
    if (!this.isShow) {
      this.show();
    } else {
      this.hide();
    }
  }

  onResize() {}

  setEvents() {
    super.setEvents();

    this.btn.addEventListener("click", (e) => {
      this.toggle();
    });
  }
}
