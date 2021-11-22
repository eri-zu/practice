//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor() {
    super();

    this.isREv = true;

    this.$modal = $(".js-modal");
    this.$contents = this.$modal.find(".js-modal_contents");
    this.$bg = this.$modal.find(".js-modal_bg");
    this.$closebtn = this.$modal.find(".js-modal_closebtn");
    this.$closebtnbarwrap = this.$closebtn.find(".js-modal_closebtn_barwrap");
    this.$closebtnbar = this.$closebtn.find(".js-modal_closebtn_bar");

    this.setup();
    this.setEvents();
  }

  setup() {
    // レイアウト用
    gsap.set(this.$closebtnbarwrap.eq(0), {
      y: 4,
      rotation: 45,
      transformOrigin: "50% 50%",
    });
    gsap.set(this.$closebtnbarwrap.eq(2), {
      y: -4,
      rotation: -45,
      transformOrigin: "50% 50%",
    });
  }

  layout() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;

    this.windowratio = this.w / this.h;
    this.modalratio = 1200 / 600;

    if (this.windowratio > this.modalratio) {
      // height基準 ※めっちゃ横長
      this.$modal.addClass("base_hight");
      this.$modal.removeClass("base_width");
    } else {
      // width基準
      this.$modal.addClass("base_width");
      this.$modal.removeClass("base_hight");
    }
  }

  show() {
    const tl = gsap.timeline();

    tl
      // bg
      .to(this.$bg, 1, {
        opacity: 0.7,
        ease: "power2.inOut",
      })
      // contents
      .to(
        this.$contents,
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0.3
      );

    return tl;
  }

  hide() {
    const tl = gsap.timeline();

    tl
      // contents
      .to(this.$contents, 0.5, {
        opacity: 0,
        ease: "expo.out",
      })
      // bg
      .to(
        this.$bg,
        0.5,
        {
          opacity: 0,
          ease: "expo.out",
        },
        0.2
      );

    return tl;
  }

  onEnter() {
    if (tl) tl.kill();
    const tl = gsap.timeline();

    this.$closebtnbarwrap.each((i, el) => {
      tl.to(
        $(el),
        1,
        {
          rotation: "+=180",
          startAt: {
            rotation: i == 0 ? 45 : -45,
          },
          ease: "expo.out",
        },
        0
      );
    });
  }

  onLeave() {
    this.onEnter();
  }

  onResize() {
    this.layout();
  }
}
