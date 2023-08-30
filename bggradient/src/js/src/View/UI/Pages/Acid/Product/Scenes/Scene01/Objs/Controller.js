//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import Mv from "./_Mv/Controller";

export default class Controller extends Base {
  constructor(scene, camera, renderer, wrap) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.wrap = wrap;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.mv = new Mv(this.scene, this.camera, this.renderer, this.wrap);
  }

  timeline() {}

  update() {
    this.mv.update();
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
