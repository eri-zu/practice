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
import * as dat from "lil-gui";

export default class Controller extends Base {
  constructor() {
    super();

    this.isREv = true;
    this.isUEv = true;

    this.gui = new dat.GUI();

    this.setup();
    this.setEvents();
  }

  setup() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    this.parameter = {
      number: 600,
    };

    this.gui
      .add(this.parameter, "number")
      .min(0)
      .max(500)
      .step(5)
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
  }

  ready() {
    const len = this.parameter.number;
    this.array = [];

    for (let i = 0; i < len; i++) {
      this.array.push(new Confetti(this.canvas, this.ctx));
    }
  }

  display() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].display();
    }
  }

  update() {
    // return;
    this.ctx.clearRect(
      0,
      0,
      window.innerWidth * gb.conf.devicePixelRatio,
      window.innerHeight * gb.conf.devicePixelRatio
    );

    if (this.array) {
      for (let i = 0; i < this.array.length; i++) {
        this.array[i].draw();
      }
    }
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

    this.ready();
    this.display();
  }
}
