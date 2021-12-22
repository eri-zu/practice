//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor() {
    super();

    this.isSEv = true;
    this.isUEv = true;

    this.$btn = $(".js-gorogorobtn");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.posX = 0;
    this.rotaton = 0;
    this.maxSt = document.body.clientHeight - window.innerHeight; // 最大スクロール量
    this.maxDist = window.innerWidth - this.$btn.width(); // 最大移動距離
    this.maxRotation = 360 * 4; // 最大回転数

    // console.log(this.maxSt, this.maxDist, this.maxRotation);
  }

  timeline() {}

  update() {
    // console.log("aaaa");
    // this.posX += 0.1 * 2;
    // this.rotaton += 0.1 * 2;
    // gsap.set(this.$btn, {
    //   x: this.posX,
    //   rotation: this.rotaton,
    // });
  }

  onResize() {}

  move(st) {
    // スクロール量をxとrotationに変換
    // this.st : 0 〜 this.maxSt
    // x : 0 〜 maxDist
    // rotation : 0 〜 360 * 4回転

    this.posX = m.map(st, 0, this.maxDist, 0, this.maxSt);
    this.rotation = m.map(st, 0, this.maxRotation, 0, this.maxSt);

    // this.$btn.get(0).style.transform = `translateX(${this.posX})px`;

    gsap.set(this.$btn, {
      x: this.posX,
      rotation: this.rotation,
    });

    console.log(this.posX);
    console.log(this.rotation);
  }

  onScroll() {
    this.st = window.scrollY;

    this.move(this.st);
  }

  setEvents() {
    super.setEvents();
  }
}
