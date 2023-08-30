//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import Top from "./Top/Controller";
import Acid from "./Acid/Controller";
import Argane from "./Argane/Controller";
import ScrollToggle from "../Common/ScrollToggle/ScrollToggle";
import ScrollShow from "../Common/ScrollShow/_ScrollShow";
import Hover from "../Common/Hover/Controller";
import Header from "../Common/Header/Controller";
import Styling from "./Styling/Controller";
import Haircolor from "./HairColor/Controller";

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    // gb.scrollshow = new ScrollShow();
    // gb.header = new Header();

    if (document.getElementById("top")) {
      this.top = new Top();
      new Hover();
    }

    if (document.getElementById("acidheat_treatment")) {
      this.acid = new Acid();
    }

    if (document.getElementById("arganrich_oil")) {
      this.argane = new Argane();
    }

    if (document.getElementById("styling")) {
      this.styling = new Styling();
    }

    if (document.getElementById("haircolor")) {
      this.haricolor = new Haircolor();
    }

    gb.scrollToggle = new ScrollToggle();
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
