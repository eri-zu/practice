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
import Firework from "./Firework";

export default class Controller extends Base {
  constructor() {
    super();

    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    // backgroundcolor
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.isREv = true;
    this.isUEv = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
  }

  ready() {
    this.fireworks = [];
  }

  update() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // リセット
    // 透明度0.25で余韻が残るように
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (Math.random() < 0.03) {
      // 10%の確率でpush
      this.fireworks.push(new Firework(this.canvas, this.ctx));
    }

    for (let i = this.fireworks.length - 1; i >= 0; i--) {
      this.fireworks[i].update();
      this.fireworks[i].show();

      if (this.fireworks[i].done()) this.fireworks.splice(i, 1);

      console.log(this.fireworks.length);
    }
  }

  onResize() {
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    // for (let i = 0; i < this.array.length; i++) {
    //   this.array[i].onResize();
    // }
  }

  setEvents() {
    super.setEvents();
  }
}
