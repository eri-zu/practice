import { Swiper } from "./swiper";

export class ProductSlider {
  constructor(wrap) {
    this.wrap = wrap;
    this.sliders = wrap.querySelectorAll(".js-products-slider-item");
    this.btns = wrap.querySelectorAll(".js-products-slider-btn");
    this.index = wrap.querySelectorAll(".js-products-slider-index");
    if (this.sliders.length > 1) this.swiper = new Swiper(this.wrap);
    this.current = 0;
    this.setEvents();
  }

  setEvents() {
    this.btns.forEach((el) => {
      const direction = el.dataset.direction;
      el.addEventListener("click", () => {
        const value = direction === "left" ? -1 : 1;
        let index = this.current + value;

        if (index < 0) {
          index = this.sliders.length - 1;
        } else if (index > this.sliders.length - 1) {
          index = 0;
        }
        this.change(index);
      });
    });

    this.index.forEach((el) => {
      const index = el.dataset.index - 0;
      el.addEventListener("click", () => {
        this.change(index);
      });
    });

    if (this.swiper)
      this.swiper.onSwipe((direction) => {
        console.log("swipe");
        const value = direction === "left" ? -1 : 1;
        let index = this.current + value;

        if (index < 0) {
          index = this.sliders.length - 1;
        } else if (index > this.sliders.length - 1) {
          index = 0;
        }
        this.change(index);
      });
  }

  change(index) {
    this.current = index;

    this.sliders.forEach((el, i) => {
      if (i !== index) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
    });

    this.index.forEach((el, i) => {
      if (i !== index) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
    });
  }
}
