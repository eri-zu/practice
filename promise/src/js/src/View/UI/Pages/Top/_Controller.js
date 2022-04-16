//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";

import gsap from "gsap";
import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";

import { Conf } from "@/Conf";

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();

    // this.timeline();
  }

  setup() {
const demo01 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1番");
      resolve();
    }, 5000);
  });
};
const demo02 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2番");
      resolve();
    }, 4000);
  });
};
const demo03 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3番");
      resolve();
    }, 3000);
  });
};
const demo04 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4番");
      resolve();
    }, 1000);
  });
};

demo01()
  .then(demo02)
  .then(demo03)
  .then(demo04)
  .then(() => {
    console.log("5番");
  });
  }

  timeline() {
    // gsap.to($(".demoSvg svg line"), 1, {
    //   drawSVG: "0 0",
    //   ease: CustomEase.create(
    //     "custom",
    //     "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1"
    //   ),
    // });
    // Conf.isFirst = false;
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
