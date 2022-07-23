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

    this.circle = document.querySelector(".js-circle");

    this.x = 0;
    this.y = 0;
    this.r = 50;
    this.speed = 1;
    this.degree = 0;
    this.radian = 0;

    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  }

  timeline() {}

  update() {
    const st = window.scrollY;

    // this.degree = m.map(st, -90, 0, 0, this.maxScroll);
    // this.degree = m.map(st, 0, 90, 0, this.maxScroll);
    this.degree = m.map(st, -90, -180, 0, this.maxScroll);
    // this.degree = m.map(st, 180, 90, 0, this.maxScroll);

    // this.degree = m.map(st, -90, 0, 0, this.maxScroll);
    // this.degree = m.map(st, 180, 90, 0, this.maxScroll);
    // this.degree = m.map(st, -90, -180, 0, this.maxScroll);
    // this.degree = m.map(st, 0, 90, 0, this.maxScroll);

    this.radian = m.radian(this.degree);

    this.x = Math.cos(this.radian) * 50;
    this.y = Math.sin(this.radian) * 50;
    this.circle.style.transform = `translate3d(${this.x}px, ${this.y}px, 0px)`;
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
