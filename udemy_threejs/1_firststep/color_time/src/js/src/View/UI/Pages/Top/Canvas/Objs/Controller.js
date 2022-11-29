//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import Plane from "./Plane/Controller";

export default class Controller extends Base {
  constructor(scene) {
    super();

    this.scene = scene;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.plane = new Plane(this.scene);
  }

  add() {}

  update() {
    this.plane.update();
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
