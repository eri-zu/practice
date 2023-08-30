//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";

export default class Item extends Base {
  constructor(item) {
    super();

    this.item = item;
    this.contents = this.item.querySelector(".js-accordion_contents");

    this.btn = this.item.querySelector(".js-accordion_btn");

    if (this.btn.classList.contains("-buy")) {
      this.btnpath = this.item.querySelectorAll(".js-accordion_btnicon path");
      this.btntxt = this.item.querySelector(".js-accordion_txt");
    } else {
      this.btnarrow = this.item.querySelector(".js-accordion_btnarrow");
    }

    this.isShow = false;

    this.easing = window.innerWidth > 768 ? "power3.out" : "power4.out";

    this.setup();
    this.setEvents();
  }

  setup() {}

  activateBtn() {
    const tl = gsap.timeline();

    if (this.btn.classList.contains("-buy")) {
      tl
        // bg
        .to(this.btn, 0.5, {
          backgroundColor: "#fff",
          ease: "expo.out",
        })
        .to(
          this.btntxt,
          0.5,
          {
            color: "#E363B0",
            ease: "expo.out",
          },
          0
        );
      this.btnpath.forEach((el, i) => {
        tl.to(
          el,
          0.5,
          {
            fill: "#E363B0",
            ease: "expo.out",
          },
          0
        );
      });
    } else {
      tl
        // bg
        .to(
          this.btnarrow,
          0.5,
          {
            rotateX: 180,
            // startAt: {
            //   rotateX: 0,
            // },
            ease: "power2.out",
          },
          0
        );
    }

    return tl;
  }

  deActivateBtn() {
    const tl = gsap.timeline();

    if (this.btn.classList.contains("-buy")) {
      tl
        // bg
        .to(this.btn, 0.5, {
          backgroundColor: "#E363B0",
          ease: "expo.out",
        })
        .to(
          this.btntxt,
          0.5,
          {
            color: "#fff",
            ease: "expo.out",
          },
          0
        );
      this.btnpath.forEach((el, i) => {
        tl.to(
          el,
          0.5,
          {
            fill: "#fff",
            ease: "expo.out",
          },
          0
        );
      });
    } else {
      tl
        // bg
        .to(
          this.btnarrow,
          0.5,
          {
            rotateX: 0,
            // startAt: {
            //   rotateX: 180,
            // },
            ease: "power2.out",
          },
          0
        );
    }

    return tl;
  }

  show() {
    this.isShow = true;

    this.contents.classList.add("isActive");

    this.tl = gsap.timeline();

    this.tl
      .add(this.activateBtn())
      // to
      .to(
        this.contents,
        0.5,
        {
          opacity: 1,
          y: 0,
          z: 0,
          // ease: gb.conf.customOut,
          ease: this.easing,
        },
        0
      );

    return this.tl;
  }

  hide() {
    this.isShow = false;

    this.contents.classList.remove("isActive");
    this.tl = gsap.timeline();

    this.tl
      .add(this.deActivateBtn())
      // to
      .to(
        this.contents,
        0.4,
        {
          opacity: 0,
          y: 10,
          z: 0,
          // ease: gb.conf.customOut,
          ease: this.easing,
        },
        0
      );

    return this.tl;
  }

  toggleShow() {
    if (!this.isShow) {
      this.show();
    } else {
      this.hide();
    }
  }

  setEvents() {
    super.setEvents();

    // this.item.addEventListener("mouseenter", (e) => {
    //   if (window.innerWidth <= 768) return;
    //   this.show();
    // });

    // this.item.addEventListener("mouseleave", (e) => {
    //   if (window.innerWidth <= 768) return;
    //   this.hide();
    // });
  }
}
