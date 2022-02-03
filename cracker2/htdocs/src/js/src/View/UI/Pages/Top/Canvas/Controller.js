//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Confetti from "./Confetti";
import gsap from "gsap";
import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";
import { Conf } from "@/Conf";
import Particle from "./Particle";

export default class Controller extends Base {
  constructor() {
    super();

    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    this.isREv = true;
    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
  }

  ready() {
    this.firework = new Particle(
      m.randomInt(0, this.canvas.width),
      m.randomInt(0, this.canvas.height),
      this.canvas,
      this.ctx
    );
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.firework.update();

    // if (this.array) {
    //   for (let i = 0; i < this.array.length; i++) {
    //     this.array[i].draw();
    //   }
    // }
  }

  onResize() {
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    for (let i = 0; i < this.array.length; i++) {
      this.array[i].onResize();
    }
  }

  setEvents() {
    super.setEvents();
  }
}
