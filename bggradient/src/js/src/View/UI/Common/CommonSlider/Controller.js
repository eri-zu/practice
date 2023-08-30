//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";
import Renderer from "./Renderer";
import Swipe from "./Swipe";
import { UAParser } from "ua-parser-js";

export default class CommonSlider extends Base {
  constructor(wrap, inAreaNumPC, inAreaNumSP) {
    super();

    this.wrap = wrap;
    this.items = this.wrap.querySelectorAll(".js-commonslider_item");
    this.arrows = this.wrap.querySelectorAll(".js-commonslider_arrow");

    this.len = this.items.length;
    this.prev = 0;
    this.current = 0;
    this.frame = 0;
    this.inAreaNum = window.innerWidth > 768 ? inAreaNumPC : inAreaNumSP;

    this.isUEv = true;
    this.isREv = true;
    this.isUpdate = true;
    // this.inArea = false;
    this.isView = false;

    const intersectionObserver = new IntersectionObserver(
      this.onView.bind(this)
    );
    intersectionObserver.observe(this.wrap);

    this.setup();
    this.setEvents();
  }

  setup() {
    this.renderer = new Renderer(
      this.wrap,
      this.arrows,
      this.len,
      this.inAreaNum
    );

    // const wrapper = document.getElementById("wrapper");
    this.swipe = new Swipe(this.wrap, this.wrap);

    this.top = this.wrap.getBoundingClientRect().top + window.scrollY;
    // this.bottom = this.wrap.getBoundingClientRect().bottom + window.scrollY;
    this.bottom = this.top + this.wrap.clientHeight + window.innerHeight;

    this.disableArrow();

    if (UAParser().device.type !== "mobile") {
      this.judgeOverflow();
    }
  }

  onView(e) {
    const [data] = e;
    this.isView = data.isIntersecting;
  }

  disableArrow() {
    this.arrows.forEach((el, i) => {
      if (window.innerWidth > 768 && this.len <= this.inAreaNum) {
        el.classList.add("isDisable");
      } else {
        el.classList.remove("isDisable");
      }
    });
  }

  order(num) {
    this.prev = this.current;
    this.current += num;

    if (this.current < 0) {
      this.current = 0;
    } else if (this.current > this.len - 1) {
      this.current = this.len - 1;
    }
  }

  onChange(num) {
    if (this.tl) this.tl.kill();

    this.frame = 0;
    this.order(num);

    this.tl = gsap.timeline();

    this.tl
      .add(() => {
        this.changeArrow();
      })
      // pos
      .add(this.renderer.changePos(this.current), 0);
  }

  changeArrow() {
    this.arrows.forEach((el, i) => {
      el.classList.add("isActive");
    });

    if (this.current == 0) {
      this.arrows[0].classList.remove("isActive");
    } else if (this.current == this.len - this.inAreaNum) {
      this.arrows[1].classList.remove("isActive");
    }
  }

  update() {
    // if (!this.isUpdate) return;

    // const frameRate = Math.min(d / ((1 / 60) * 1000), 1);
    // this.frame += frameRate;

    if (this.isView && this.isUpdate) {
      this.renderer.update();
    }
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      this.top = this.wrap.getBoundingClientRect().top + window.scrollY;
      this.bottom = this.wrap.getBoundingClientRect().bottom + window.scrollY;
      this.reset();
      this.disableArrow();

      this.wrap.scrollLeft = 0;

      this.judgeOverflow();
    }
  }

  judgeOverflow() {
    if (window.innerWidth <= 768) {
      this.wrap.classList.add("isOverflow");
    } else {
      this.wrap.classList.remove("isOverflow");
    }
  }

  reset() {
    this.onChange(-this.current);
  }

  setEvents() {
    super.setEvents();

    this.arrows[0].addEventListener("click", (e) => {
      this.onChange(-1);
    });
    this.arrows[1].addEventListener("click", (e) => {
      this.onChange(1);
    });

    // ------------------------------------------------------------
    // swipe
    // ------------------------------------------------------------

    this.swipe.onStart = () => {};
    this.swipe.onMove = () => {};
    this.swipe.onEnd = () => {};
    this.swipe.onSwipe = (sign) => {
      this.frame = 0;
      if (sign > 0) this.onChange(1);
      else this.onChange(-1);
    };
  }
}
