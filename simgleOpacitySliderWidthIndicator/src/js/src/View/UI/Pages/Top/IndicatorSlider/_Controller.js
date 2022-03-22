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
import Order from "./Order";
import Renderer from "./Renderer";

export default class IndicatorSlider extends Base {
  constructor() {
    super();

    this.isUEv = true;

    this.$item = $(".js-slider_item");
    this.$indicatorwrap = $(".js-slider_indicator_wrap");

    this.len = this.$item.length;
    this.frame = 0;

    this.setup();
    if (this.len > 1) this.setEvents();
  }

  setup() {
    this.ready();
  }

  ready() {
    // indicator用意（数わからんとき）
    if (this.len > 1) {
      let $indicator = null;

      for (let i = 0; i < this.len; i++) {
        $indicator = $(
          '<li class="slider__indicator-item js-slider_indicator_item"></li>'
        );
        this.$indicatorwrap.append($indicator);
      }

      this.$indicator = $(".js-slider_indicator_item");

      this.order = new Order(this.len);
      this.renderer = new Renderer(this.$item, this.$indicator);
    }
  }

  change() {
    if (this.tl) this.tl.kill();
    this.order.right();

    this.tl = gsap.timeline();

    this.tl
      // img hide
      .add(this.renderer.hide(this.order.prev))
      // img show
      .add(this.renderer.show(this.order.current), 0)
      // indicator
      .add(this.renderer.changeIndicator(this.order.current), 0);

    return this.tl;
  }

  onClick(target) {
    // autoswitchリセット
    if (this.tl) this.tl.kill();
    this.frame = 0;

    const index = this.$indicator.index($(target));
    this.order.jump(index);

    this.tl = gsap.timeline();

    this.tl
      // img hide
      .add(this.renderer.hide(this.order.prev))
      // img show
      .add(this.renderer.show(this.order.current), 0)
      // indicator
      .add(this.renderer.changeIndicator(this.order.current), 0);

    return this.tl;
  }

  autoswitch() {
    this.change();
  }

  update() {
    this.frame++;

    // 540frameで一周
    this.frame = this.frame > 540 ? 0 : this.frame;

    // 3s毎に切り替え
    if (this.frame % 180 == 0 && this.frame > 0) {
      console.log(this.frame, "切り替え");
      this.autoswitch();
    }
  }

  updateBar() {}

  onResize() {}

  setEvents() {
    super.setEvents();

    this.$indicator.on("click" + "." + this.name, (e) => {
      this.onClick(e.currentTarget);
    });
  }
}
