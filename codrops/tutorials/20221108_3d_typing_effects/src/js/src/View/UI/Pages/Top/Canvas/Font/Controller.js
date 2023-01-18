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

    this.setup();
    this.setEvents();
  }

  setup() {
    this.fontset();
    this.style();
  }

  fontset() {
    // setting
    const fontName = "Verdana";
    const textureFontSize = 100;

    // string to show
    this.string = "Some text" + "\n" + "to sample" + "\n" + "with Canvas";

    // create canvas to sample text
    const textCanvas = document.createElement("canvas");
    const textCtx = textCanvas.getContext("2d");
    document.body.appendChild(textCanvas);
  }

  style() {
    // parse txt
    const lines = this.string.split(`\n`);
    const linesLength = [...lines].sort((a, b) => b.length - a.length);

    console.log(linesLength);
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
