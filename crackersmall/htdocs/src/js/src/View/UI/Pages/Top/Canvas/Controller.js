//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Cracker from "./Cracker";
export default class CrackerController extends Base {
  constructor() {
    super();

    this.wrap = document.querySelector(".crakerarea");

    this.isREv = true; // resize
    this.isUEv = true; // update

    this.setup();
    this.setEvents();
  }

  setup() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = gb.w = this.wrap.clientWidth * gb.conf.devicePixelRatio;
    this.canvas.height = gb.h =
      this.wrap.clientHeight * gb.conf.devicePixelRatio;

    this.crackers = [];
  }

  update() {
    this.ctx.clearRect(
      0,
      0,
      gb.w * gb.conf.devicePixelRatio,
      gb.h * gb.conf.devicePixelRatio
    );

    // frequency（2%の確率で打ち上げ）
    // if (Math.random() < 0.02) {
    //   this.crackers.push(
    //     new Cracker(
    //       this.canvas.width / 2 +
    //         m.randomInt(
    //           -300 * gb.conf.devicePixelRatio,
    //           300 * gb.conf.devicePixelRatio
    //         ),
    //       this.canvas.height / 2,
    //       this.canvas,
    //       this.ctx
    //     )
    //   );
    // }

    for (let i = this.crackers.length - 1; i >= 0; i--) {
      this.crackers[i].update();
      if (this.crackers[i].done()) this.crackers.splice(i, 1);
    }
  }

  onResize() {
    this.canvas.width = gb.w = this.wrap.clientWidth * gb.conf.devicePixelRatio;
    this.canvas.height = gb.h =
      this.wrap.clientHeight * gb.conf.devicePixelRatio;

    for (let i = 0; i < this.crackers.length; i++) {
      this.crackers[i].onResize();
    }
  }

  setEvents() {
    super.setEvents();

    this.wrap.addEventListener("click", (e) => {
      const posX = e.offsetX * gb.conf.devicePixelRatio;
      const posY = e.offsetY * gb.conf.devicePixelRatio;

      this.crackers.push(new Cracker(posX, posY, this.canvas, this.ctx));
    });

    // this.wrap.addEventListener("click", (e) => {
    //   this.crackers.push(
    //     new Cracker(gb.w / 2, gb.h / 2, this.canvas, this.ctx)
    //   );
    // });
  }
}
