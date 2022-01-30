//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Sakura from "./Sakura";
import gsap from "gsap";
import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";
import { Conf } from "@/Conf";

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

    this.img = new Image();
    this.img.src = "./assets/resource/img/sakura.png";
  }

  ready() {
    const len = 100;
    this.array = [];

    for (let i = 0; i < len; i++) {
      this.array.push(new Sakura(this.canvas, this.ctx, this.img));
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
  }

  setEvents() {
    super.setEvents();

    this.img.addEventListener("load", (e) => {
      this.ready();
      this.display();
    });
  }
}
