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
    this.isREv = true;

    this.btn = document.querySelector(".js-gorogorobtn");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    this.maxSt = document.body.clientHeight - window.innerHeight; // 最大スクロール量
    this.maxDist = window.innerWidth - this.btn.clientWidth; // 最大移動距離
    this.maxRotation = 360 * 4; // 最大回転数

    this.targetposX = 0;
    this.targetrotation = 0;
  }

  timeline() {}

  update() {}

  onResize() {
    this.setParameter();
    this.onScroll();
  }

  move(st) {
    // スクロール量をxとrotationに変換
    // this.st : 0 〜 this.maxSt
    // x : 0 〜 maxDist
    // rotation : 0 〜 360 * 4回転
    this.targetposX = m.map(st, 0, this.maxDist, 0, this.maxSt);
    this.targetrotation = m.map(st, 0, this.maxRotation, 0, this.maxSt);

    gsap.set(this.btn, {
      x: this.targetposX,
      rotation: this.targetrotation,
    });
  }

  onScroll() {
    this.st = window.scrollY;
    this.move(this.st);
  }

  setEvents() {
    super.setEvents();
  }
}
