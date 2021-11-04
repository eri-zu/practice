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

    this.$bg = $(".js-menu_hover_bg");
    this.$item = $(".js-menu_item");

    this.current = 0;
    this.target = { value: 0 };

    this.setup();
    this.setEvents();
  }

  setup() {}

  onEnter(target) {
    if (this.tl) this.tl.kill();

    const $target = $(target);
    let next = this.$item.index($target);
    let diff = next - this.current;
    this.current = this.current + diff;

    this.tl = gsap.timeline();

    this.tl
      // link
      .to(
        this.$item.eq(next),
        0.5,
        {
          opacity: 1,
          ease: "expo.out",
        },
        0
      )
      // opacity
      .to(
        this.$bg,
        0.5,
        {
          opacity: 1,
          ease: "expo.out",
        },
        0
      )
      // posY
      .to(
        this.target,
        0.5,
        {
          value: this.current,
          ease: "expo.out",
          onUpdate: () => {
            let y = 100 * this.target.value;
            this.$bg.css({ transform: `translateY(${y}%)` });
          },
        },
        0
      );

    return this.tl;
  }

  onLeave() {
    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();

    this.tl
      // bg
      .to(this.$bg, 1, {
        opacity: 0,
        ease: "expo.out",
      });

    return this.tl;
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
