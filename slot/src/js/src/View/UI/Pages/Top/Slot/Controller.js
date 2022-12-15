//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import _Renderer from "./_Renderer";

export default class Controller {
  constructor() {
    this.startbtn = document.querySelector(".js-slot_startbtn");
    this.stopbtn = document.querySelector(".js-slot_stopbtn");

    this.setup();
    this.setEvents();
  }

  setup() {
    this.renderer = new _Renderer();
  }

  setEvents() {
    this.startbtn.addEventListener("click", (e) => {
      this.renderer.start();
    });

    this.stopbtn.addEventListener("click", (e) => {
      this.renderer.stop();
    });
  }
}
