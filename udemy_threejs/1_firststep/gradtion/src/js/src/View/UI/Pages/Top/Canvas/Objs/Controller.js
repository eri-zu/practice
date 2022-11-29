//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
// import Box from "./Box/Controller";
import Plane from "./Plane/Controller";

export default class Controller extends Base {
  constructor(scene) {
    super();

    this.scene = scene;

    this.setup();
    this.setEvents();
  }

  setup() {
    // this.box = new Box(this.scene);
    this.plane = new Plane(this.scene);
  }

  add() {}

  update() {
    // this.box.update();
    this.plane.update();
  }

  onResize() {
    this.plane.onResize();
  }

  setEvents() {
    super.setEvents();
  }
}
