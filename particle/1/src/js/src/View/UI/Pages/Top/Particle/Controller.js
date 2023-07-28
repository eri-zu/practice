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

    this.setup();
    this.setEvents();
  }

  setup() {
    this.createParticle();
    this.ready();
  }

  createParticle() {
    const dom =
      "<div class='particle js-particle_item'><img src='./assets/resource/img/particle1.png' /></div>";

    for (let i = 0; i < this.num; i++) {
      this.particlewrap.innerHTML += dom;
    }
  }

  ready() {
    const areaWidth = this.area.clientWidth;

    this.particles = [];

    document.querySelectorAll(".js-particle_item").forEach((el, i) => {
      const p = new Particle(el, i, areaWidth);
      this.particles.push(p);
    });
  }

  show(centerX, centerY) {
    this.particles.forEach((el, i) => {
      el.show(centerX, centerY);
    });
  }

  setEvents() {
    super.setEvents();

    this.area.addEventListener("click", (e) => {
      const centerX = e.offsetX;
      const centerY = e.offsetY;

      this.show(centerX, centerY);
    });
  }
}
