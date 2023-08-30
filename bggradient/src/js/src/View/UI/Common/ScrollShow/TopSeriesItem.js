//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import gsap from "gsap";

export default class TopServiceItem {
  constructor(el, i) {
    this.el = el;
    this.imgwrap = this.el.querySelector(".js-scrollshow_topseries_imgs");
    this.bg = this.el.querySelector(".js-scrollshow_topseries_bg");
    this.btnbg = this.el.querySelector(".js-scrollshow_topseries_btnbg");
    this.btnarrow = this.el.querySelector(".js-hover_roundArrowBtn_btnarrow");

    // console.log(this.txts.length);

    this.i = i;

    this.isShow = false;
    this.move = { x: 0, y: 0 };

    this.setup();
    this.setEvents();
  }

  setup() {
    this.getDom();
    this.top = this.el.getBoundingClientRect().top + window.scrollY;

    this.calcDist();
    this.setInitPos();
  }

  getDom() {
    this.txts =
      window.innerWidth > 768
        ? this.el.querySelectorAll(".js-scrollshow_topseries_txt.-pc")
        : this.el.querySelectorAll(".js-scrollshow_topseries_txt.-sp");
  }

  onScroll() {
    if (this.isShow) return;

    const buffa = window.innerWidth > 768 ? 100 : window.innerHeight / 3;

    if (
      this.top <
      window.scrollY +
        window.innerHeight -
        this.el.clientHeight * 0.5 -
        window.innerHeight * 0.5 +
        buffa
    ) {
      this.show();
    }
  }

  calcDist() {
    const originalPos = {
      x:
        this.imgwrap.getBoundingClientRect().left +
        this.imgwrap.clientWidth * 0.5,
    };

    const currentPos = {
      x: this.el.getBoundingClientRect().left + this.el.clientWidth * 0.5,
    };

    this.move.x = originalPos.x - currentPos.x;
  }

  setInitPos() {
    this.imgwrap.classList.add("isReady");

    if (window.innerWidth > 768) {
      gsap.set(this.imgwrap, {
        x: "-50%",
        y: "-50%",
      });
    }
  }

  show() {
    console.log("show");
    this.isShow = true;

    const delay = 0;
    const bgDuration = window.innerWidth > 768 ? 0.9 : 1.1;
    const targetRadis = window.innerWidth > 768 ? 20 : 10;

    const tl = gsap.timeline();

    // tl.set(this.imgwrap, {
    //   x: "-50%",
    //   y: "-50%",
    // })
    tl
      // bg
      .to(
        this.bg,
        bgDuration,
        {
          // width: "100%",
          // height: "100%",
          scale: 1,
          z: 0,
          borderRadius: targetRadis,
          ease: "expo.out",
        },
        0
      );
    if (window.innerWidth > 768) {
      // img
      // tl.set(this.imgwrap, {
      //   x: "-50%",
      //   y: "-50%",
      // })
      tl.to(
        this.imgwrap,
        1.2,
        {
          x: `+=${this.move.x}`,
          z: 0,
          ease: gb.conf.customInOut,
        },
        delay
      );
    }
    this.txts.forEach((el, i) => {
      tl
        // txt
        .to(
          el,
          0.9,
          {
            opacity: 1,
            ease: "power2.inOut",
          },
          delay + 0.25 + 0.05 * i
        );
    });
    // btn
    tl
      //
      .to(
        this.btnbg,
        1,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        delay + 0.23 + 0.05 * this.txts.length + 0.05
      )
      //
      .to(
        this.btnbg,
        1,
        {
          scale: 1,
          ease: "power2.out",
        },
        delay + 0.23 + 0.05 * this.txts.length + 0.05 + 0.2
      )
      .to(
        this.btnarrow,
        0.6,
        {
          x: 0,
          z: 0,
          opacity: 1,
          ease: "power2.out",
        },
        delay + 0.23 + 0.05 * this.txts.length + 0.05 + 0.2 + 0.3
      );
  }

  onResize() {
    this.reset();
  }

  reset() {
    this.getDom();

    this.txts.forEach((el, i) => {
      el.style.opacity = 1;
    });

    if (window.innerWidth >= 768) {
      this.imgwrap.classList.add("isReset");
      this.bg.style.borderRadius = "20px";
      this.imgwrap.style.transform = `translate3d(0%, -50%, 0px)`;
    } else {
      this.imgwrap.style.transform = `translate3d(0px, 0px, 0px)`;
      this.bg.style.borderRadius = "10px";
    }
  }

  setEvents() {}
}
