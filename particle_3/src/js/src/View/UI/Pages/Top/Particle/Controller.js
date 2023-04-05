//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";

import Cracker from "./Cracker";

export default class Controller extends Base {
  constructor() {
    super();

    this.wrap = document.querySelector(".js-wrap");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.isUpdate = false;
    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
  }

  ready() {
    this.crackers = [];

    this.canvas.width = this.w =
      this.wrap.clientWidth * window.devicePixelRatio;
    this.canvas.height = this.h =
      this.wrap.clientHeight * window.devicePixelRatio;
  }

  createCracker(centerX, centerY) {
    const cracker = new Cracker(this.ctx);
    this.crackers.push(cracker);

    cracker.show(centerX, centerY);
  }

  update() {
    console.log(this.crackers.length);
    this.ctx.clearRect(0, 0, this.w, this.h);

    if (this.crackers) {
      this.crackers.forEach((el, i) => {
        el.update();

        if (el.done) this.crackers.splice(i, 1);
      });
    }
  }

  setEvents() {
    super.setEvents();

    this.wrap.addEventListener("click", (e) => {
      // const centerX = e.offsetX * window.devicePixelRatio;
      // const centerY = e.offsetY * window.devicePixelRatio;

      this.createCracker(100, 100);
      this.createCracker(500, 500);
    });
  }
}
