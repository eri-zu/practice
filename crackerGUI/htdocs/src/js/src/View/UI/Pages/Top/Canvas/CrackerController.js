//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Cracker from "./Cracker";
import * as dat from "lil-gui";

export default class CrackerController extends Base {
  constructor() {
    super();

    this.isREv = true; // resize
    this.isUEv = true; // update

    gb.gui = new dat.GUI();
    gb.parameters = {
      frequency: 0.02,
      spreadAngle: 45,
      centerAngleMin: -40,
      centerAngleMax: -140,
      power: 30, // 30
      weak: 0.95, // 0.95
      fallDownSpeed: 0.9,
    };

    gb.gui.add(gb.parameters, "frequency").min(0).max(0.2).step(0.001);
    gb.gui.add(gb.parameters, "spreadAngle").min(0).max(120).step(10);
    gb.gui.add(gb.parameters, "centerAngleMin").min(-180).max(0).step(10);
    gb.gui.add(gb.parameters, "centerAngleMax").min(-180).max(0).step(10);
    gb.gui.add(gb.parameters, "power").min(10).max(200).step(5);
    gb.gui.add(gb.parameters, "weak").min(0.1).max(0.99).step(0.01);
    gb.gui.add(gb.parameters, "fallDownSpeed").min(0.3).max(0.99).step(0.01);

    this.setup();
    this.setEvents();
  }

  setup() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    this.crackers = [];
  }

  update() {
    this.ctx.clearRect(
      0,
      0,
      window.innerWidth * gb.conf.devicePixelRatio,
      window.innerHeight * gb.conf.devicePixelRatio
    );

    // frequency（2%の確率で打ち上げ）
    if (Math.random() < gb.parameters.frequency) {
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
