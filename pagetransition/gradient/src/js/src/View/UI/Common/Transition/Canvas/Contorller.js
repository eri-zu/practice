//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";
import { UAParser } from "ua-parser-js";

export default class Controller extends Base {
  constructor() {
    super();

    this.wrap = document.querySelector(".canvaswrap");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.isUEv = true;
    this.isREv = true;
    this.isUpdate = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setSize();
    this.ready();
  }

  setSize() {
    this.canvas.width = gb.w = this.wrap.clientWidth * window.devicePixelRatio;
    this.canvas.height = gb.h =
      this.wrap.clientHeight * window.devicePixelRatio;

    this.canvas.style.width = `${this.wrap.clientWidth}px`;
    this.canvas.style.height = `${this.wrap.clientHeight}px`;
  }

  ready() {
    // color
    this.opArray = [];

    for (let i = 0; i < 11; i++) {
      this.opArray.push({ value: 1 });
    }

    this.colorArray = [];
  }

  update() {
    if (!this.isUpdate) return;

    // clear
    this.ctx.clearRect(0, 0, gb.w, gb.h);

    // color
    this.colorArray = [
      `rgba(9, 48, 87, ${this.opArray[0].value}`,
      `rgba(9, 48, 87, ${this.opArray[1].value}`,
      `rgba(9, 48, 87, ${this.opArray[2].value}`,
      `rgba(9, 48, 87, ${this.opArray[3].value}`,
      `rgba(9, 48, 87, ${this.opArray[4].value}`,
      `rgba(9, 48, 87, ${this.opArray[5].value}`,
      `rgba(9, 48, 87, ${this.opArray[6].value}`,
      `rgba(9, 48, 87, ${this.opArray[7].value}`,
      `rgba(9, 48, 87, ${this.opArray[8].value}`,
      `rgba(9, 48, 87, ${this.opArray[9].value}`,
      `rgba(9, 48, 87, ${this.opArray[10].value}`,
    ];

    // rect
    const grad = this.ctx.createLinearGradient(0, 0, 0, gb.h); // createLinearGradient(x0, y0, x1, y1)
    grad.addColorStop(0.0, this.colorArray[0]);
    grad.addColorStop(0.1, this.colorArray[1]);
    grad.addColorStop(0.2, this.colorArray[2]);
    grad.addColorStop(0.3, this.colorArray[3]);
    grad.addColorStop(0.4, this.colorArray[4]);
    grad.addColorStop(0.5, this.colorArray[5]);
    grad.addColorStop(0.6, this.colorArray[6]);
    grad.addColorStop(0.7, this.colorArray[7]);
    grad.addColorStop(0.8, this.colorArray[8]);
    grad.addColorStop(0.9, this.colorArray[9]);
    grad.addColorStop(1.0, this.colorArray[10]);
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, gb.w, gb.h);
  }

  show() {
    this.wrap.classList.add("isActive");

    this.isUpdate = true;

    const tl = gsap.timeline();

    const duration = 0.35;

    this.opArray.forEach((el, i) => {
      tl.to(
        el,
        duration,
        {
          value: 1,
          ease: "expo.out",
        },
        (duration / 12) * i
      );
    });

    return tl;
  }

  hide() {
    this.isUpdate = true;
    this.wrap.classList.add("isStartAnimation");

    const tl = gsap.timeline();

    const duration = 0.45;

    this.opArray.forEach((el, i) => {
      tl.to(
        el,
        duration,
        {
          value: 0.01,
          ease: gb.conf.customInOut,
        },
        (duration / 12) * i
      );
    });
    tl.add(() => {
      this.isUpdate = false;
      this.wrap.classList.remove("isActive");
    });

    return tl;
  }

  onResize() {
    if (UAParser().device.type !== "mobile") this.setSize();
  }

  setEvents() {
    super.setEvents();
  }
}
