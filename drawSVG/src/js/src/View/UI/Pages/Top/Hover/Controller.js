//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import { Conf } from "@/Conf";

export default class Controller extends Base {
  constructor() {
    super();

    this.name = "Hover";

    this.$btn = $(".js-btn");
    this.$circle = this.$btn.find(".js-btn_circle");

    this.setup();
    this.setEvents();
  }

  setup() {
    gsap.set(this.$circle, {
      rotation: -90,
      transformOrigin: "50% 50%",
      drawSVG: "0% 0%", // 線なし
    });
  }

  timeline() {}

  onEnter() {
    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl.to(this.$circle, 1, {
      drawSVG: "100% 0%",
      startAt: {
        drawSVG: "0% 0%",
      },
      ease: "expo.out",
    });
  }

  onLeave() {
    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl.to(this.$circle, 1, {
      drawSVG: "100% 100%", // 線なし
      ease: "expo.out",
    });
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();

    this.$btn.on("mouseenter" + "." + this.name, () => {
      this.onEnter();
    });
    this.$btn.on("mouseleave" + "." + this.name, () => {
      this.onLeave();
    });
  }
}
