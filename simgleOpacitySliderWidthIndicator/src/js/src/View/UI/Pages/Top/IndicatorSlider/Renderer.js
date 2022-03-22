//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";
import { Conf } from "@/Conf";

export default class Renderer extends Base {
  constructor($item, $indicator) {
    super();

    this.$item = $item;
    this.$indicator = $indicator;
    this.$txt = $(".js-slider_current");

    this.setup();
    this.setEvents();
  }

  setup() {}

  show(index) {
    const target = this.$item.eq(index);
    const tl = gsap.timeline();

    tl.to(target, 1, {
      opacity: 1,
      ease: "power3.out",
    });

    return tl;
  }

  hide(index) {
    const target = this.$item.eq(index);
    const tl = gsap.timeline();

    tl.to(target, 1, {
      opacity: 0,
      ease: "power3.out",
    });

    return tl;
  }

  // changeTxt(index) {
  //   this.$txt.get(0).innerText = `0${index + 1}`;
  // }

  changeIndicator(index) {
    const tl = gsap.timeline();

    tl
      // all
      .to(this.$indicator, 1, {
        scale: 1,
        backgroundColor: "#eee",
        ease: "expo.out",
      })
      // active
      .to(
        this.$indicator.eq(index),
        1,
        {
          scale: 1.5,
          backgroundColor: "#000",
          ease: "expo.out",
        },
        0
      );

    return tl;
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
