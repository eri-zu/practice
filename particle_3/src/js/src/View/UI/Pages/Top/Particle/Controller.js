//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Particle from "./Particle";

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
    this.createParticle();
  }

  ready() {
    this.canvas.width = this.w =
      this.wrap.clientWidth * window.devicePixelRatio;
    this.canvas.height = this.h =
      this.wrap.clientHeight * window.devicePixelRatio;
  }

  createParticle() {
    this.particles = [];

    for (let i = 0; i < 14; i++) {
      const p = new Particle(i, this.ctx);
      this.particles.push(p);
    }
  }

  show(centerX, centerY) {
    const tl = gsap.timeline();

    this.particles.forEach((el, i) => {
      tl.add(el.show(centerX, centerY), 0);
    });
    tl.add(() => {
      this.isUpdate = false;
    });
  }

  update() {
    if (!this.isUpdate) return;

    this.ctx.clearRect(0, 0, this.w, this.h);

    this.particles.forEach((el, i) => {
      el.update();
    });
  }

  setEvents() {
    super.setEvents();

    this.wrap.addEventListener("click", (e) => {
      this.isUpdate = true;
      const centerX = e.offsetX * window.devicePixelRatio;
      const centerY = e.offsetY * window.devicePixelRatio;

      this.show(centerX, centerY);
    });
  }
}
