//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import HeaderAccordion from "./Accordion/Accordion";
import HeaderMenu from "./Menu/_HeaderMenu";
// import { addScrollLock, removeScrollLock } from "../ScrollLock/ScrollLock";
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

    this.isHeaderLock = false;

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
    if (gb.acidmv) gb.acidmv.isUpdate = false;
    if (gb.acidproduct) gb.acidproduct.isUpdate = false;
    if (gb.acidgradient) gb.acidgradient.isUpdate = false;
  }

  startUpdate() {
    if (gb.fuwafuwa) gb.fuwafuwa.isUpdate = true;
    if (gb.parallax) gb.parallax.isUpdate = true;
    if (gb.userSlider) gb.userSlider.isUpdate = true;
    if (gb.userNews) gb.userNews.isUpdate = true;
    if (gb.howSlider) gb.howSlider.isUpdate = true;
    if (gb.acidmv) gb.acidmv.isUpdate = true;
    if (gb.acidproduct) gb.acidproduct.isUpdate = true;
    if (gb.acidgradient) gb.acidgradient.isUpdate = true;
  }

  showAccordion(clickedIndex, otherIndex) {
    this.stopUpdate();
    // addScrollLock();

    this.background.classList.add("isActive");

    this.isHeaderLock = true;

    this.headerAccordion.arrayItem[clickedIndex].show();
    this.headerAccordion.arrayItem[otherIndex].hide();
  }

  hideAccordion(clickedIndex) {
    // removeScrollLock();

    this.background.classList.remove("isActive");

    const tl = gsap.timeline();

    tl
      // hide
      .add(this.headerAccordion.arrayItem[clickedIndex].hide())
      // update
      .add(() => {
        this.startUpdate();
        this.isHeaderLock = false;
      });
  }

  hideAllAccordion() {}

  showMenu() {
    if (gb.menu.clickLock) return;

    this.stopUpdate();

    this.headerAccordion.arrayItem.forEach((el, i) => {
      el.hide();
    });

    gb.menu.show();
  }

  hideMenu() {
    if (gb.menu.clickLock) return;

    const tl = gsap.timeline();

    tl
      //
      .add(gb.menu.hide())
      //
      .add(() => {
        this.startUpdate();
      });
  }

  onClickBg() {
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
              // removeScrollLock();
            });
        }
      });
    }
  }

  setEvents() {
    super.setEvents();

    // global buy
    this.accordionBtns.forEach((el, clickedIndex) => {
      el.addEventListener("click", (e) => {
        const otherIndex = clickedIndex == 0 ? 1 : 0;

        // const statusArray = [];

        // this.headerAccordion.arrayItem.forEach((el, i) => {
        //   statusArray.push(el.isShow);

        //   if (statusArray.some((value) => value == true)) {
        //     console.log("aaa");
        //   }
        // });

        if (!this.headerAccordion.arrayItem[clickedIndex].isShow) {
          this.showAccordion(clickedIndex, otherIndex);
        } else {
          this.hideAccordion(clickedIndex);
        }
      });
    });

    // buy close
    this.accordionClose.addEventListener("click", (e) => {
      this.hideAccordion(1);
    });

    // menu open
    this.openbtn.addEventListener("click", (e) => {
      this.showMenu();
    });

    // menu close
    this.closebtn.addEventListener("click", (e) => {
      this.hideMenu();
    });

    // menu background
    this.background.addEventListener("click", (e) => {
      this.onClickBg();
    });
  }
}
