//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";
import Canvas from "./Canvas/Contorller";
export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    this.canvas = new Canvas();
  }

  show() {
    const tl = gsap.timeline();
    tl.add(this.canvas.show());

    return tl;
  }

  hide() {
    const tl = gsap.timeline();

    tl.add(this.canvas.hide());

    return tl;
  }

  onClick(target) {
    const href = target.getAttribute("href");

    const tl = gsap.timeline();

    tl
      //show
      .add(this.show())
      //
      .add(() => {
        window.location = href;
      });

    return tl;
  }

  setEvents() {
    super.setEvents();

    const links = document.querySelectorAll("a");

    links.forEach((link, i) => {
      link.addEventListener("click", (e) => {
        const target = e.currentTarget;

        if (target.dataset.transition !== "none") {
          e.preventDefault();
          this.onClick(target);
        }
      });
    });
  }
}
