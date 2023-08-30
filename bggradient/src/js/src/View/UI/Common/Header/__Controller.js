//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import HeaderAccordion from "./Accordion/Accordion";
import HeaderMenu from "./Menu/_HeaderMenu";
import { addScrollLock, removeScrollLock } from "../ScrollLock/ScrollLock";
import gsap from "gsap";

export default class HeaderController extends Base {
  constructor() {
    super();

    this.items = document.querySelectorAll(".js-accordion");
    this.accordionBtns = document.querySelectorAll(".js-accordion_btn");
    this.accordionClose = document.querySelector(".js-accordion_close");
    this.openbtn = document.querySelector(".js-menu_open");
    this.closebtn = document.querySelector(".js-menu_close");
    this.background = document.querySelector(".js-drawer_background");

    this.setup();
    this.setEvents();
  }

  setup() {
    gb.menu = new HeaderMenu(this.openbtn, this.closebtn, this.background);
    this.headerAccordion = new HeaderAccordion(this.items);
  }

  stopUpdate() {
    if (gb.fuwafuwa) gb.fuwafuwa.isUpdate = false;
    if (gb.parallax) gb.parallax.isUpdate = false;
    if (gb.userSlider) gb.userSlider.isUpdate = false;
    if (gb.userNews) gb.userNews.isUpdate = false;
    if (gb.howSlider) gb.howSlider.isUpdate = false;
    // if (gb.gl) gb.gl.isUpdate = false;
  }

  startUpdate() {
    if (gb.fuwafuwa) gb.fuwafuwa.isUpdate = true;
    if (gb.parallax) gb.parallax.isUpdate = true;
    if (gb.userSlider && gb.userSlider.inArea) gb.userSlider.isUpdate = true;
    if (gb.userNews && gb.userSlider.inArea) gb.userNews.isUpdate = true;
    if (gb.howSlider && gb.userSlider.inArea) gb.howSlider.isUpdate = true;
    // if (gb.gl) {
    //   gb.gl.isUpdate = true;
    //   console.log(gb.gl.isUpdate);
    // }
  }

  setEvents() {
    super.setEvents();

    // global buy
    this.accordionBtns.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        const index = i == 0 ? 1 : 0;
        if (!this.headerAccordion.arrayItem[i].isShow) {
          this.stopUpdate();
          addScrollLock();
          this.background.classList.add("isActive");
          this.headerAccordion.arrayItem[i].show();
          this.headerAccordion.arrayItem[index].hide();
        } else {
          removeScrollLock();

          this.background.classList.remove("isActive");

          const tl = gsap.timeline();

          tl
            // hide
            .add(this.headerAccordion.arrayItem[i].hide())
            // update
            .add(() => {
              this.startUpdate();
            });
        }
      });
    });

    // buy close
    this.accordionClose.addEventListener("click", (e) => {
      removeScrollLock();

      this.background.classList.remove("isActive");

      const tl = gsap.timeline();

      tl
        //
        .add(this.headerAccordion.arrayItem[1].hide())
        //
        .add(() => {
          this.startUpdate();
        });
    });

    // menu open
    this.openbtn.addEventListener("click", (e) => {
      if (gb.menu.clickLock) return;

      this.stopUpdate();

      this.headerAccordion.arrayItem.forEach((el, i) => {
        el.hide();
      });

      gb.menu.show();
    });

    // menu close
    this.closebtn.addEventListener("click", (e) => {
      if (gb.menu.clickLock) return;

      const tl = gsap.timeline();

      tl
        //
        .add(gb.menu.hide())
        //
        .add(() => {
          this.startUpdate();
        });
    });

    // menu background
    this.background.addEventListener("click", (e) => {
      if (gb.menu.clickLock) return;

      const tl = gsap.timeline();
      if (gb.menu.isShow) {
        tl.add(gb.menu.hide());
      } else {
        const statusArray = [];

        this.headerAccordion.arrayItem.forEach((el, i) => {
          statusArray.push(el.isShow);
          if (statusArray.some((value) => value == true)) {
            this.background.classList.remove("isActive");

            tl
              //
              .add(this.headerAccordion.arrayItem[i].hide())
              .add(() => {
                this.startUpdate();
                removeScrollLock();
              });
          }
        });
      }
    });
  }
}
