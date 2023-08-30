//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Renderer {
  constructor() {
    this.oils = document.querySelectorAll(".js-argane_show_oil");
    this.txts = document.querySelectorAll(".js-argane_show_txt");
    this.kv = document.querySelector(".js-argane_show_kv");

    this.setEvents();
  }

  show() {
    const tl = gsap.timeline();

    tl
      //
      .to(
        this.kv,
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        0
      );
    this.oils.forEach((el, i) => {
      tl
        //
        .to(
          el,
          4,
          {
            startAt: {
              x: 30 * m.random(1, 2) * m.randomInt(-1, 1),
              y: 30 * m.random(1, 2) * m.randomInt(-1, 1),
            },
            x: 0,
            y: 0,
            ease: "power2.out",
          },
          0
        )
        //
        .to(
          el,
          1,
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
          },
          0.5 + i * 0.02
        );
    });
    tl
      //
      .to(
        this.copy,
        2,
        {
          y: 0,
          opacity: 1,
          ease: "expo.out",
        },
        1
      );
    this.txts.forEach((el, i) => {
      tl
        //
        .to(
          el,
          2,
          {
            opacity: 1,
            ease: "power2.out",
          },
          1 + 0.3
        );
    });
    tl.add(() => {
      gb.scrollshow.arrayArganeLeads.forEach((el, i) => {
        el.onScroll();
      });
    }, 1.4);
  }

  setEvents() {}
}
