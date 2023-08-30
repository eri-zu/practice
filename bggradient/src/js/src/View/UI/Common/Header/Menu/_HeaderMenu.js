//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import gsap from "gsap";
import BtnController from "./BtnController";
import DrawerController from "./DrawerController";
import { addScrollLock, removeScrollLock } from "../../ScrollLock/ScrollLock";
import { UAParser } from "ua-parser-js";

export default class HeaderMenu extends Base {
  constructor(openbtn, closebtn, background) {
    super();

    this.openbtn = openbtn;
    this.closebtn = closebtn;
    this.background = background;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.drawer = document.querySelector(".js-drawer");
    this.menubg = document.querySelector(".js-menu_bg");

    this.btnController = new BtnController(this.openbtn, this.closebtn);
    this.drawerController = new DrawerController(this.drawer, this.menubg);

    this.isShow = false;
    this.isHeaderLock = false;
    this.isLeaveLock = false;
    this.clickLock = false;

    this.isREv = true;
  }

  show() {
    this.clickLock = true;

    this.isShow = true;
    this.isLeaveLock = true;
    this.isHeaderLock = true;

    if (this.tl) this.tl.kill();

    this.drawer.classList.add("isActive");
    this.background.classList.add("isActive");

    this.tl = gsap.timeline();

    this.tl
      .add(() => {
        this.menubg.classList.add("isActive");
        addScrollLock();
      })
      .add(this.btnController.setEnterOpen())
      // show
      .add(this.drawerController.show())
      .add(this.btnController.showClose(), 0.3)
      .add(() => {
        this.clickLock = false;
      }, "-=0.6");

    return this.tl;
  }

  hide() {
    this.clickLock = true;
    this.isShow = false;

    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();

    this.tl
      .add(() => {
        removeScrollLock();
      })
      // hide
      .add(this.btnController.hideClose())
      .add(this.drawerController.hide(), 0.1)
      .add(() => {
        this.menubg.classList.remove("isActive");
      })
      .add(this.btnController.onLeaveOpen(), "-=0.02")
      .add(() => {
        this.drawer.classList.remove("isActive");
        this.background.classList.remove("isActive");
        this.isHeaderLock = false;
        this.isLeaveLock = false;
        this.clickLock = false;
      });

    return this.tl;
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      this.drawerController.onResize(this.isShow);
    }
  }

  onEnterOpen() {
    if (this.tlOpen) this.tlOpen.kill();
    this.tlOpen = gsap.timeline();
    this.tlOpen.add(this.btnController.onEnterOpen());
  }

  onLeaveOpen() {
    if (this.tlOpen) this.tlOpen.kill();
    this.tlOpen = gsap.timeline();
    this.tlOpen.add(this.btnController.onLeaveOpen());
  }

  setEvents() {
    super.setEvents();

    // this.openbtn.addEventListener("click", (e) => {
    //   if (this.clickLock) return;
    //   this.show();
    // });

    // this.closebtn.addEventListener("click", (e) => {
    //   if (this.clickLock) return;
    //   this.hide();
    // });

    // this.background.addEventListener("click", (e) => {
    //   if (this.clickLock) return;
    //   this.hide();
    // });

    this.openbtn.addEventListener("mouseenter", (e) => {
      if (window.innerWidth <= 768) return;
      this.onEnterOpen();
    });

    this.openbtn.addEventListener("mouseleave", (e) => {
      if (window.innerWidth <= 768 || this.isLeaveLock) return;
      this.onLeaveOpen();
    });
  }
}
