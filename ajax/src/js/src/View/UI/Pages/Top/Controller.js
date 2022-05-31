//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";

import gsap from "gsap";
import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";

import { Conf } from "@/Conf";

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {}

  timeline() {
    let $wrapp = $(".wrapper");

    $("button").on("click", () => {
      $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        type: "GET",
      }).done((res) => {
        console.log("何回？");
        console.log(res, "res");

        let img = new Image();
        img.src = res.message;
        console.log(img);

        $wrapp.find("img").remove();
        $wrapp.text("Ajax(非同期中)");
        console.log($wrapp, "#wrapp!!!!!");

        img.addEventListener("load", () => {
          console.log("load");
          $wrapp.text("");
          $wrapp.append(img);
        });
      });
    });
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
