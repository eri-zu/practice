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

  onEnter(hoveredItem) {
    // if (this.tl) this.tl.kill();
    // if (this.tl) this.tl.kill({ opacity: true }, this.$bg);

    let next = this.$item.index($(hoveredItem));
    let diff = next - this.current;
    this.current = this.current + diff;
    const $txt = $(hoveredItem).find("span");

    this.tl = gsap.timeline();

    this.tl
      // txt
      .to(
        $txt,
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

    // gsap.to($txt, 0.5, {
    //   opacity: 1,
    //   ease: "expo.out",
    // });

    return this.tl;
  }

  onLeave(hoverOutItem) {
    // if (this.tl) this.tl.kill();

    const $txt = $(hoverOutItem).find("span");

    this.tl = gsap.timeline();

    this.tl
      // txt
      .to(
        $txt,
        0.5,
        {
          opacity: 0.6,
          ease: "expo.out",
        },
        0
      )
      // bg
      .to(
        this.$bg,
        0.5,
        {
          opacity: 0,
          ease: "expo.out",
        },
        0
      );

    // gsap.to($txt, 0.5, {
    //   opacity: 0.6,
    //   ease: "expo.out",
    // });

    return this.tl;
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}

// animationやりきって欲しい => killしない
// animation中断して新しいanimationに切り替え => killする
