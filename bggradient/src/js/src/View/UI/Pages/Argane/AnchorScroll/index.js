import gsap from "gsap";
export class AnchorScroll {
  constructor(el) {
    this.el = el;

    const data = el.dataset.query;
    this.target = document.getElementById(data);
    this.setEvents();
  }

  setEvents() {
    this.el.addEventListener("click", () => {
      this.toScroll();
    });
  }

  toScroll() {
    const y = this.target.getBoundingClientRect().top;

    const v = {
      s: window.scrollY,
    };

    gsap.to(v, 1, {
      s: y + window.scrollY - 80,
      ease: "expo.out",
      onUpdate() {
        window.scrollTo(0, v.s);
      },
    });
  }
}
