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
  constructor(items) {
    super();

    this.items = items;

    this.setup();
    this.setEvents();
  }

  setup() {}

  show(index) {
    const tl = gsap.timeline();

    tl.to(this.items[index].material, 1, {
      opacity: 1,
      ease: "power3.out",
    });

    return tl;
  }

  hide(index) {
    console.log(index, "hide");
    const tl = gsap.timeline();

    tl.to(this.items[index].material, 1, {
      opacity: 0,
      ease: "power3.out",
    });

    return tl;
  }

  changeTxt() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
