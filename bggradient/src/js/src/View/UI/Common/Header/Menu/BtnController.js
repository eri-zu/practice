//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";

export default class BtnController extends Base {
  constructor(openbtn, closebtn) {
    super();

    this.openbtn = openbtn;
    this.openicon = this.openbtn.querySelector(".js-menu_open_icon");
    this.closebtn = closebtn;

    this.barIns = this.closebtn.querySelectorAll(".js-menu_close_barin");

    this.setup();
    this.setEvents();
  }

  setup() {}

  onEnterOpen() {
    const tl = gsap.timeline();

    tl
      // rotate
      .to(this.openicon, 0.35, {
        rotate: "+=90",
        backgroundColor: "#E363B0",
        ease: "power2.out",
        startAt: {
          rotate: 0,
        },
      });

    return tl;
  }

  setEnterOpen() {
    const tl = gsap.timeline();

    tl
      // rotate
      .set(this.openicon, {
        rotate: 180,
        backgroundColor: "#E363B0",
      });

    return tl;
  }

  onLeaveOpen() {
    const tl = gsap.timeline();

    tl
      // rotate
      .to(this.openicon, 0.35, {
        rotate: "+=90",
        backgroundColor: "#fff",
        ease: "power2.out",
        startAt: {
          rotate: 90,
        },
      });

    return tl;
  }

  onEnterClose() {}

  onLeaveClose() {}

  showClose() {
    const tl = gsap.timeline();

    this.barIns.forEach((el, i) => {
      // rotate
      tl.set(
        el,
        {
          transformOrigin: i == 0 ? "0% 50%" : "100% 50%",
        },
        0
      ).to(
        el,
        0.4,
        {
          scaleX: 1,
          ease: "expo.out",
        },
        i * 0.1
      );
    });

    return tl;
  }

  hideClose() {
    const tl = gsap.timeline();

    this.barIns.forEach((el, i) => {
      // rotate
      tl
        // set
        .set(
          el,
          {
            transformOrigin: i == 0 ? "100% 100%" : "0% 100%",
          },
          0
        )
        // to
        .to(
          el,
          0.4,
          {
            scaleX: 0,
            ease: "expo.out",
          },
          i * 0.1
        );
    });
    return tl;
  }

  setEvents() {
    super.setEvents();
  }
}
