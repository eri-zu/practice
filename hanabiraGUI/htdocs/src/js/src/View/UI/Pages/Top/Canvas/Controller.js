//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Sakura from "./Sakura";
import * as dat from "lil-gui";

export default class Controller extends Base {
  constructor() {
    super();

    this.isREv = true;
    this.isUEv = true;

    this.gui = new dat.GUI();

    this.setup();
    this.setEvents();
  }

  setup() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    this.img = new Image();
    this.img.src = "./assets/resource/img/sakura.png";

    gb.guiParameter = {
      number: 100,
      scaleMin: 0.5,
      scaleMax: 2,
      vy: 1,
      degreeHV: 1,
      rotationV: 1.5,
      radiusXMin: -5,
      radiusXMax: 5,
    };

    this.gui
      .add(gb.guiParameter, "number")
      .min(1)
      .max(500)
      .step(1)
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
    this.gui
      .add(gb.guiParameter, "scaleMin")
      .min(0.1)
      .max(10)
      .step(0.1)
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
    this.gui
      .add(gb.guiParameter, "scaleMax")
      .min(0.1)
      .max(10)
      .step(0.1)
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
    this.gui
      .add(gb.guiParameter, "vy")
      .min(0.1)
      .max(50)
      .step(0.1)
      .name("speedY")
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
    this.gui
      .add(gb.guiParameter, "degreeHV")
      .min(0)
      .max(30)
      .step(0.1)
      .name("rotation3D")
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
    this.gui
      .add(gb.guiParameter, "rotationV")
      .min(0.1)
      .max(30)
      .step(0.1)
      .name("rotation2D")
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
    this.gui
      .add(gb.guiParameter, "radiusXMin")
      .min(-30)
      .max(30)
      .step(0.1)
      .name("rangeXMin")
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
    this.gui
      .add(gb.guiParameter, "radiusXMax")
      .min(-30)
      .max(30)
      .step(0.1)
      .name("rangeXMax")
      .onFinishChange(() => {
        this.ready();
        this.display();
      });
  }

  ready() {
    const len = gb.guiParameter.number;
    this.array = [];

    for (let i = 0; i < len; i++) {
      this.array.push(new Sakura(this.canvas, this.ctx, this.img));
    }
  }

  display() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].display();
    }
  }

  update() {
    // return;
    this.ctx.clearRect(
      0,
      0,
      window.innerWidth * gb.conf.devicePixelRatio,
      window.innerHeight * gb.conf.devicePixelRatio
    );

    if (this.array) {
      for (let i = 0; i < this.array.length; i++) {
        this.array[i].draw();
      }
    }
  }

  onResize() {
    this.canvas.width = window.innerWidth * gb.conf.devicePixelRatio;
    this.canvas.height = window.innerHeight * gb.conf.devicePixelRatio;

    for (let i = 0; i < this.array.length; i++) {
      this.array[i].onResize();
    }
  }

  setEvents() {
    super.setEvents();

    this.img.addEventListener("load", (e) => {
      this.ready();
      this.display();
    });
  }
}
