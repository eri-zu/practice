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
    this.$indicator = $(".js-slider_indicator_item");
    this.len = this.$item.length;

    this.frame = 0;
    this.isUpdate = true;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.order = new Order(this.len);
    this.renderer = new Renderer(this.$item, this.$indicator);
  }

  right() {
    if (this.tl) this.tl.kill();
    this.order.right();

    this.tl = gsap.timeline();

    this.tl
      // img hide
      .add(this.renderer.hide())
      // img show
      .add(this.renderer.show(this.order.current), 0)
      // indicator
      .add(this.renderer.changeIndicator(this.order.current), 0);

    return this.tl;
  }

  onClick(target) {
    // 全部止める
    if (this.tl) this.tl.kill();
    // this.isUpdate = false;
    this.frame = 0;

    const index = this.$indicator.index($(target));
    this.order.jump(index);

    this.tl = gsap.timeline();

    this.tl
      // img hide
      .add(this.renderer.hide())
      // img show
      .add(this.renderer.show(this.order.current), 0)
      // indicator
      .add(this.renderer.changeIndicator(this.order.current), 0);
    // autoswitch再開
    // .add(this.autoswitch());

    return this.tl;
  }

  autoswitch() {
    this.right();
  }

  update() {
    if (!this.isUpdate) return;
    this.frame++;

    // 540frameで一周
    this.frame = this.frame > 540 ? 0 : this.frame;

    // 3s毎に切り替え
    if (this.frame % 180 == 0 && this.frame > 0) this.autoswitch();
  }

  onResize() {}

  setEvents() {
    super.setEvents();

    this.$indicator.on("click" + "." + this.name, (e) => {
      this.onClick(e.currentTarget);
    });
  }
}
