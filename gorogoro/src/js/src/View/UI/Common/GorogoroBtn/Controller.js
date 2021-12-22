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

    this.isUEv = true;
    this.isREv = true;

    this.btn = document.querySelector(".js-gorogorobtn");
    this.currentPosX = 0;
    this.currentRotation = 0;

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

    this.targetPosX = 0;
    this.targetRotation = 0;
  }

  update() {
    // 目標値算出
    this.calcTarget();

    // easing
    this.currentPosX += (this.targetPosX - this.currentPosX) * 0.12;
    this.currentRotation += (this.targetRotation - this.currentRotation) * 0.12;

    // 動かす
    gsap.set(this.btn, {
      x: this.currentPosX,
      rotation: this.currentRotation,
    });
  }

  onResize() {
    this.setParameter();
    this.calcTarget();
  }

  calcTarget() {
    this.st = window.scrollY;

    // スクロール量をxとrotationに変換
    // this.st : 0 〜 this.maxSt
    // x : 0 〜 maxDist
    // rotation : 0 〜 360 * 4回転
    this.targetPosX = m.map(this.st, 0, this.maxDist, 0, this.maxSt);
    this.targetRotation = m.map(this.st, 0, this.maxRotation, 0, this.maxSt);
  }

  setEvents() {
    super.setEvents();
  }
}
