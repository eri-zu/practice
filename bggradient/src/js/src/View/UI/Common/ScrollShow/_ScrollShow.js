//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import AcidCare from "./AcidCare";
import AcidLead from "./AcidLead";
import AcidImage from "./AcidImage";
import AcidBg from "./AcidBg";

import ArganeCare from "./ArganeCare";
import ArganeLead from "./ArganeLead";
import ArganeImage from "./ArganeImage";
import TopServiceItem from "./TopSeriesItem";
import { UAParser } from "ua-parser-js";
export default class ScrollShow extends Base {
  constructor() {
    super();

    this.isSEv = true;
    this.isREv = true;

    this.acidCares = document.querySelectorAll(
      ".js-scroll[data-scroll='acid_care']"
    );
    this.acidLeads = document.querySelectorAll(
      ".js-scroll[data-scroll='acid_lead']"
    );
    this.acidImages = document.querySelectorAll(
      ".js-scroll[data-scroll='acid_image']"
    );
    this.acidBg = document.querySelectorAll(
      ".js-scroll[data-scroll='acid_leadbg']"
    );

    this.arganeCares = document.querySelectorAll(
      ".js-scroll[data-scroll='arganecare_item']"
    );
    this.arganeLeads = document.querySelectorAll(
      ".js-scroll[data-scroll='argane_lead']"
    );
    this.arganeLeadImg = document.querySelectorAll(
      ".js-scroll[data-scroll='argane_leadimg']"
    );

    this.topSeries = document.querySelectorAll(
      ".js-scroll[data-scroll='top_series']"
    );

    this.arrayAcidCares = [];
    this.arrayAcidLeads = [];
    this.arrayAcidImages = [];
    this.arrayAcidBgs = [];

    this.arrayArganeCares = [];
    this.arrayArganeLeads = [];
    this.arrayArganeLeadImg = [];

    this.arrayTopSeries = [];

    this.setup();
    this.setEvents();
  }

  setup() {
    this.acidCares.forEach((el, i) => {
      const item = new AcidCare(el);
      this.arrayAcidCares.push(item);
    });
    this.acidLeads.forEach((el, i) => {
      const item = new AcidLead(el);
      this.arrayAcidLeads.push(item);
    });
    this.acidImages.forEach((el, i) => {
      const item = new AcidImage(el);
      this.arrayAcidImages.push(item);
    });
    this.acidBg.forEach((el, i) => {
      const item = new AcidBg(el);
      this.arrayAcidBgs.push(item);
    });
    this.arganeCares.forEach((el, i) => {
      const item = new ArganeCare(el);
      this.arrayArganeCares.push(item);
    });
    this.arganeLeads.forEach((el, i) => {
      const item = new ArganeLead(el);
      this.arrayArganeLeads.push(item);
    });
    this.arganeLeadImg.forEach((el, i) => {
      const item = new ArganeImage(el);
      this.arrayArganeLeadImg.push(item);
    });
    this.topSeries.forEach((el, i) => {
      const item = new TopServiceItem(el);
      this.arrayTopSeries.push(item);
    });
  }

  onScroll() {
    this.arrayAcidCares.forEach((el, i) => {
      el.onScroll();
    });
    this.arrayAcidLeads.forEach((el, i) => {
      el.onScroll();
    });
    this.arrayAcidImages.forEach((el, i) => {
      el.onScroll();
    });
    this.arrayAcidBgs.forEach((el, i) => {
      el.onScroll();
    });

    this.arrayArganeCares.forEach((el, i) => {
      el.onScroll();
    });
    this.arrayArganeLeads.forEach((el, i) => {
      el.onScroll();
    });
    this.arrayArganeLeadImg.forEach((el, i) => {
      el.onScroll();
    });

    this.arrayTopSeries.forEach((el, i) => {
      el.onScroll();
    });
  }

  onResize() {
    if (UAParser().device.type !== "mobile") {
      this.arrayTopSeries.forEach((el, i) => {
        el.onResize();
      });
    }
  }

  setEvents() {
    super.setEvents();
  }
}
