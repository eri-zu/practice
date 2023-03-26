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

    this.area = document.querySelector(".js-particle_area");
    this.particlewrap = document.querySelector(".js-particle_wrap");

    this.num = 15;

    this.isUEv = true;
    this.isUpdate = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();
  }

  ready() {
    const dom =
      "<div class='particle js-particle_item'><img src='./assets/resource/img/particle1.png' /></div>";
    for (let i = 0; i < this.num; i++) {
      this.particlewrap.innerHTML += dom;
    }

    this.particles = [];

    document.querySelectorAll(".js-particle_item").forEach((el, i) => {
      const p = new Particle(el);
      this.particles.push(p);
    });
  }

  timeline() {}

  update() {
    if (!this.isUpdate) return;

    this.particles.forEach((el, i) => {
      el.update();
    });
  }

  show() {
    // this.isUpdate = true;

    this.particles.forEach((el, i) => {
      el.show();
    });
  }

  setEvents() {
    super.setEvents();

    this.area.addEventListener("click", (e) => {
      this.show();
    });
  }
}
