//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Renderer from "./Renderer.js";

export default class Controller extends Base {
  constructor() {
    super();

    this.isREv = true;

    this.$modal = $(".js-modal");
    this.$contents = $(".js-modal_contents");
    this.$openbtn = $(".js-modal_openbtn");
    this.$closebtn = this.$modal.find(".js-modal_closebtn");

    this.disableScroll = (e) => {
      e.preventDefault();
    };

    this.setup();
    this.setEvents();
  }

  setup() {
    this.r = new Renderer();
    this.r.layout();
  }

  show() {
    this.$modal.css("pointer-events", "auto");
    const tl = gsap.timeline();
    tl
      // スクロール禁止
      .add(() => {
        this.st = $(window).scrollTop(); // スクロール量保存
        $(window).scrollTop(this.st); // スクロールトップ移動
        this.scrollStop(); // スクロール禁止
      })
      // show
      .add(this.r.show());
  }

  hide() {
    this.$modal.css("pointer-events", "none");

    const tl = gsap.timeline();
    tl
      // スクロール禁止解除
      .add(() => {
        this.cancelScrollStop();
      })
      .add(this.r.hide());
  }

  scrollStop() {
    // スクロール禁止
    const events = ["touchmove", "wheel"];

    events.forEach((event, i) => {
      document
        .getElementById("wrapper")
        .addEventListener(event, this.disableScroll, {
          passive: false,
        });
    });
  }

  cancelScrollStop() {
    // スクロール禁止解除
    const events = ["touchmove", "wheel"];

    events.forEach((event, i) => {
      document
        .getElementById("wrapper")
        .removeEventListener(event, this.disableScroll, {
          passive: false,
        });
    });
  }

  onResize() {
    this.r.onResize();
  }

  setEvents() {
    super.setEvents();

    this.$openbtn.on("click" + "." + this.name, () => {
      this.show();
    });

    this.$closebtn.on("click" + "." + this.name, () => {
      this.hide();
    });

    this.$closebtn.on("mouseenter" + "." + this.name, () => {
      this.r.onEnter();
    });

    this.$closebtn.on("mouseleave" + "." + this.name, () => {
      this.r.onLeave();
    });
  }
}
