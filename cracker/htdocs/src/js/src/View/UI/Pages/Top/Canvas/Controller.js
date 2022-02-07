//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Cracker from "./Cracker";
export default class Controller extends Base {
  constructor() {
    super();

    this.isREv = true;
    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    this.crackers = [];
    // this.display();
  }

  display() {
    // this.crackers.push(
    //   new Cracker(
    //     this.canvas.width / 2 + m.randomInt(-350, 350),
    //     this.canvas.height / 2,
    //     this.canvas,
    //     this.ctx
    //   )
    // );
    // for (let i = 0; i < this.crackers.length; i++) {
    //   this.crackers[i].display();
    // }
  }

  update() {
    this.ctx.clearRect(
      0,
      0,
      window.innerWidth * gb.conf.devicePixelRatio,
      window.innerHeight * gb.conf.devicePixelRatio
    );

    if (Math.random() < 0.02) {
      // frequency（2%の確率で打ち上げ）
      this.crackers.push(
        new Cracker(
          this.canvas.width / 2 +
            m.randomInt(
              -300 * gb.conf.devicePixelRatio,
              300 * gb.conf.devicePixelRatio
            ),
          this.canvas.height / 2,
          this.canvas,
          this.ctx
        )
      );
    }

    for (let i = this.crackers.length - 1; i >= 0; i--) {
      this.crackers[i].update();
      if (this.crackers[i].done()) this.crackers.splice(i, 1);
    }
  }

  onResize() {
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    for (let i = 0; i < this.crackers.length; i++) {
      this.crackers[i].onResize();
    }
  }

  setEvents() {
    super.setEvents();
  }
}
