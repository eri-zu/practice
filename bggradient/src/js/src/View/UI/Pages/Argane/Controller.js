//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import Fuwafuwa from "../../Common/Fuwafuwa/Controller";
import Parallax from "../../Common/Parallax/Controller";
import Renderer from "./Renderer";
import FeatureAccordion from "./FeatureAccordion/Controller";
import CommonSlider from "../../Common/CommonSlider/Controller";
import { LineupAccordion } from "./lineupAccordion";
import { AnchorScroll } from "./AnchorScroll";
import { goHash } from "../../Common/GoHash/goHash";
import LevelBar from "./LevelBar/Controller";
export default class Argane extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
  }

  setup() {
    goHash();
    this.renderer = new Renderer();
    this.renderer.show();

    gb.fuwafuwa = new Fuwafuwa();
    gb.parallax = new Parallax();
    new FeatureAccordion();
    new LevelBar();

    gb.userSlider = new CommonSlider(
      document.querySelector(".js-commonslider.-usercomment"),
      3,
      1
    );

    if (document.querySelector(".js-commonslider.-news")) {
      gb.userNews = new CommonSlider(
        document.querySelector(".js-commonslider.-news"),
        4,
        1
      );
    }

    gb.howSlider = new CommonSlider(
      document.querySelector(".js-commonslider.-howto"),
      3,
      1
    );

    const lineupAccordion = document.querySelectorAll(
      ".js-argane_oil_lineup_accordion"
    );
    lineupAccordion.forEach((el) => {
      new LineupAccordion(el);
    });

    document.querySelectorAll(".js-anchor-link-argane-oil").forEach((el) => {
      new AnchorScroll(el);
    });
  }

  show() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
