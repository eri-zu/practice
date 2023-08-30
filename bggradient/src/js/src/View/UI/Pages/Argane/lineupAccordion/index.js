import { gsap } from "gsap";

export class LineupAccordion {
  constructor(wrap) {
    this.wrap = wrap;
    this.btn = this.wrap.querySelector(".js-argane_oil_lineup_accordion_btn");
    this.contents = this.wrap.querySelector(
      ".js-argane_oil_lineup_accordion_contents"
    );
    this.icon = this.wrap.querySelector(".js-argane_oil_lineup_accordion_plus");
    this.path = this.icon.querySelector("path");
    this.isOpened = false;
    this.setEvents();
  }

  open() {
    this.isOpened = true;

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
      //
      .to(
        this.contents,
        1,
        {
          height: "auto",
          ease: "expo.out",
        },
        0
      );

    this.wrap.classList.add("active");
  }

  close() {
    this.isOpened = false;

    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl
      //
      .to(this.contents, 1, {
        height: 0,
        ease: "expo.out",
      })
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
      );

    this.wrap.classList.remove("active");
  }

  setEvents() {
    this.btn.addEventListener("click", (e) => {
      if (this.isOpened) this.close();
      else this.open();
    });
  }
}
