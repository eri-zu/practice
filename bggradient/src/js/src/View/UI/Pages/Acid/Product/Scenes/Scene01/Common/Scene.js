//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";

export default class Controller extends Base {
  constructor() {
    super();

    this.scene;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.scene = new THREE.Scene();
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
