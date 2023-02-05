//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import Box from "./Box/Controller";
// import Plane from "./Plane/Controller";

export default class Controller extends Base {
  constructor(scene, camera) {
    super();

    this.scene = scene;
    this.camera = camera;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.box = new Box(this.scene, this.camera);
    // this.plane = new Plane(this.scene);
  }

  add() {}

  update() {
    this.box.update();
    // this.plane.update();
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
