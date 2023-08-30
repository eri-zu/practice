//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";

export default class DrawerController extends Base {
  constructor(drawer, menubg) {
    super();

    this.drawer = drawer;
    this.menubg = menubg;

    this.logo = document.querySelector(".js-drawer_logo");
    this.yitems = document.querySelectorAll(".js-drawer_yitem");
    this.yitem2 = document.querySelector(".js-drawer_yitem2");
    this.banners = document.querySelectorAll(".js-drawer_banner");
    this.yitem3 = document.querySelector(".js-drawer_yitem3");
    this.scaleItems = document.querySelectorAll(".js-drawer_scaleitem");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    const drawerSize = {
      w: this.drawer.clientWidth,
      h: this.drawer.clientHeight,
    };

    const icon = {
      w: window.innerWidth > 768 ? 25 : 22.5,
      h: window.innerWidth > 768 ? 25 : 22.5,
      right: window.innerWidth > 768 ? 25 : 20,
      top: window.innerWidth > 768 ? 20 : 20,
    };

    const buffa = window.innerWidth > 768 ? 2.5 : 5;

    const iconCenter = {
      x: icon.right + icon.w * 0.5 + buffa,
      y: icon.top + icon.h * 0.5,
    };

    this.bgSize = {
      w: (drawerSize.w - iconCenter.x) * 2,
      h: (drawerSize.h - iconCenter.y) * 2,
    };

    this.borderRadius = window.innerWidth > 768 ? 60 : 50;
  }

  show() {
    const tl = gsap.timeline();

    const delay = window.innerWidth > 768 ? 0.1 : 0.05;

    tl
      // bg
      .to(
        this.menubg,
        0.75,
        {
          width: this.bgSize.w,
          height: this.bgSize.h,
          borderRadius: this.borderRadius,
          // ease: "expo.out",
          ease: gb.conf.customOut,
        },
        0
      );
    this.yitems.forEach((el, i) => {
      tl.to(
        el,
        1,
        {
          y: 0,
          z: 0,
          startAt: {
            y: "100%",
            z: 0,
            opacity: 1,
          },
          ease: "expo.out",
        },
        delay + 0.3 + 0.03 * i
      );
    });
    tl.to(
      this.yitem2,
      1,
      {
        y: 0,
        z: 0,
        startAt: {
          y: "100%",
          z: 0,
          opacity: 1,
        },
        ease: "expo.out",
      },
      delay + 0.3 + 0.03 * this.yitems.length + 0.03
    );
    this.banners.forEach((el, i) => {
      tl.to(
        el,
        1,
        {
          opacity: 1,
          ease: "power2.out",
        },
        delay + 0.3 + 0.03 * this.yitems.length + 0.03 + 0.03 + 0.03 * i
      );
    });
    tl.to(
      this.yitem3,
      1,
      {
        startAt: {
          y: "100%",
          z: 0,
          opacity: 1,
        },
        y: 0,
        z: 0,
        ease: "expo.out",
      },
      delay +
        0.3 +
        0.03 * this.yitems.length +
        0.03 +
        0.03 +
        0.03 * this.banners.length +
        0.03
    );
    this.scaleItems.forEach((el, i) => {
      tl.to(
        el,
        1,
        {
          startAt: {
            scale: 0,
            opacity: 1,
          },
          scale: 1,
          ease: "expo.out",
        },
        delay +
          0.3 +
          0.03 * this.yitems.length +
          0.03 +
          0.03 +
          0.03 * this.banners.length +
          0.03 +
          0.03 +
          0.03 * i
      );
    });

    return tl;
  }

  reset() {}

  hide() {
    const tl = gsap.timeline();

    this.yitems.forEach((el, i) => {
      tl.to(
        el,
        0.3,
        {
          // y: "100%",
          // z: 0,
          opacity: 0,
          ease: "expo.out",
        },
        0
      );
    });
    tl.to(
      this.yitem2,
      0.3,
      {
        // y: "100%",
        // z: 0,
        opacity: 0,
        ease: "expo.out",
      },
      0
    );
    this.banners.forEach((el, i) => {
      tl.to(
        el,
        0.3,
        {
          opacity: 0,
          ease: "expo.out",
        },
        0
      );
    });
    tl.to(
      this.yitem3,
      0.3,
      {
        // y: "100%",
        // z: 0,
        opacity: 0,
        ease: "expo.out",
      },
      0
    );
    this.scaleItems.forEach((el, i) => {
      tl.to(
        el,
        0.3,
        {
          // scale: 0,
          opacity: 0,
          ease: "expo.out",
        },
        0
      );
    });
    // bg
    tl.to(
      this.menubg,
      0.45,
      {
        width: 25,
        height: 25,
        borderRadius: 4,
        // ease: "expo.out",
        ease: gb.conf.customOut,
      },
      0.05
    );

    return tl;
  }

  onResize(isShow) {
    this.setParameter();

    if (isShow) {
      this.menubg.style.width = `${this.bgSize.w}px`;
      this.menubg.style.height = `${this.bgSize.h}px`;
    }
  }

  setEvents() {
    super.setEvents();
  }
}
