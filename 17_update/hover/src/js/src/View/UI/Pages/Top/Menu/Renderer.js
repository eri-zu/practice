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

    this.isUEv = true;

    this.$bg = $(".js-menu_hover_bg");
    this.$item = $(".js-menu_item");

    this.current = 0;
    this.target = { value: 0 };

    this.setup();
    this.setEvents();
  }

  setup() {
    this.isHover = false;
    this.bgOpacity = 0.6;
    this.targetBgOpacity = 0.6;
  }

  update() {
    // if(this.isHover) {
    // }

    const op = m.lerp(this.targetBgOpacity, this.bgOpacity, 0.01);

    console.log(op, "op");

    this.$bg.css("opacity", op);
  }

  onEnter(hoveredItem) {
    // hoveredItem.tl = gsap.timeline();

    console.log(hoveredItem.tl);

    this.isHover = true;

    this.targetBgOpacity = 1;

    if (hoveredItem.tl) hoveredItem.tl.kill();

    // if (this.tl) this.tl.kill();
    // if (this.tl) this.tl.kill({ opacity: true }, this.$bg);

    let next = this.$item.index($(hoveredItem));
    let diff = next - this.current;
    this.current = this.current + diff;
    const $txt = $(hoveredItem).find("span");

    hoveredItem.tl = gsap.timeline();

    hoveredItem.tl
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
      // bg opacity
      .to(
        this.$bg,
        0.5,
        {
          opacity: 1,
          ease: "expo.out",
        },
        0
      );
    // bg posY
    // .to(
    //   this.target,
    //   0.5,
    //   {
    //     value: this.current,
    //     ease: "expo.out",
    //     onUpdate: () => {
    //       let y = 100 * this.target.value;
    //       this.$bg.css({ transform: `translateY(${y}%)` });
    //     },
    //   },
    //   0
    // );

    // gsap.to($txt, 0.5, {
    //   opacity: 1,
    //   ease: "expo.out",
    // });

    // return hoveredItem.tl;
  }

  onLeave(hoverOutItem) {
    // if(hoverOutItem.tl)
    console.log(hoverOutItem.tl, "tl leave");

    this.isHover = false;

    this.targetBgOpacity = 0.6;

    if (hoverOutItem.tl) hoverOutItem.tl.kill();
    // if (this.tl) this.tl.kill();

    const $txt = $(hoverOutItem).find("span");

    hoverOutItem.tl = gsap.timeline();

    hoverOutItem.tl
      // txt
      .to(
        $txt,
        10,
        {
          opacity: 0.6,
          ease: "expo.out",
        },
        0
      )
      // bg opacity
      .to(
        this.$bg,
        10,
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

    // return this.tl;
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}

// animationやりきって欲しい => killしない
// animation中断して新しいanimationに切り替え => killする
