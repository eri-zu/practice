import { gsap } from "gsap";

export class SmoothScroll {
  constructor() {
    this.btns = document.querySelectorAll(".js-smooth-scroll");
    this.setEvents();
  }

  setEvents() {
    this.btns.forEach((btn) => {
      const scrollto = btn.dataset.scrollTo;
      const el = document.querySelector(scrollto);
      if (el) {
        btn.addEventListener("click", () => {
          this.smoothScroll(el);
        });
      }
    });
  }

  smoothScroll(toEl) {
    const y = toEl.getBoundingClientRect().top;
    const sy = window.scrollY;
    const v = {
      s: sy,
    };
    console.log(sy);
    gsap.to(v, {
      s: y + sy,
      onUpdate() {
        window.scrollTo(0, v.s);
      },
    });
  }
}
