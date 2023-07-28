//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Render extends Base {

  constructor($wrap, len) {

    super();

    this.$wrap = $wrap;
    this.$img = this.$wrap.find('.imgs .img');
    this.$text = this.$wrap.find('.texts .textItem');

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$img, {opacity: 0});
    TweenMax.set(this.$img.eq(0), {opacity: 1});

    TweenMax.set(this.$text, {opacity: 0});
    TweenMax.set(this.$text.eq(0), {opacity: 1});

  }

  next(current, next, prev) {

    // img
    TweenMax.killTweensOf(this.$img.eq(current));
    TweenMax.killTweensOf(this.$img.eq(prev));

    var tlimg = new TimelineMax();

    var x = 100;

    tlimg
      // ready
      .set(this.$img.eq(current), {
        x: x,
        opacity: 0,
        zIndex: 2,
      }, 0.0)
      .set(this.$img.eq(prev), {
        zIndex: 1,
      }, 0.0)

      // draw

      // current
      .to(this.$img.eq(prev), 2.0, {
        // x: -x,
        opacity: 0,
        ease: Power2.easeInOut,
      }, 0.0)
      // next
      .to(this.$img.eq(current), 2.0, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
      }, 0.9)


    // text
    TweenMax.killTweensOf(this.$text.eq(current));
    TweenMax.killTweensOf(this.$text.eq(prev));

    var tltext = new TimelineMax();

    var x = 100;

    tltext
      // ready
      .set(this.$text.eq(current), {
        x: x,
        opacity: 0,
        zIndex: 2,
      }, 0.0)
      .set(this.$text.eq(prev), {
        zIndex: 1,
      }, 0.0)

      // draw

      // current
      .to(this.$text.eq(prev), 2.0, {
        // x: -x,
        opacity: 0,
        ease: Power2.easeInOut,
      }, 0.0)
      // next
      .to(this.$text.eq(current), 2.0, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
      }, 0.9)

  }

  prev(current, next, prev) {

    // img
    TweenMax.killTweensOf(this.$img.eq(current));
    TweenMax.killTweensOf(this.$img.eq(next));

    var tlimg = new TimelineMax();

    var x = -100;

    tlimg
      // ready
      .set(this.$img.eq(current), {
        x: x,
        opacity: 0,
        zIndex: 2,
      }, 0.0)
      .set(this.$img.eq(next), {
        zIndex: 1,
      }, 0.0)

      // draw

      // current
      .to(this.$img.eq(next), 2.0, {
        // x: -x,
        opacity: 0,
        ease: Power2.easeInOut,
      }, 0.0)
      // next
      .to(this.$img.eq(current), 2.0, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
      }, 0.9)


    // text
    TweenMax.killTweensOf(this.$text.eq(current));
    TweenMax.killTweensOf(this.$text.eq(next));

    var tltext = new TimelineMax();

    var x = -100;

    tltext
      // ready
      .set(this.$text.eq(current), {
        x: x,
        opacity: 0,
        zIndex: 2,
      }, 0.0)
      .set(this.$text.eq(next), {
        zIndex: 1,
      }, 0.0)

      // draw

      // current
      .to(this.$text.eq(next), 2.0, {
        // x: -x,
        opacity: 0,
        ease: Power2.easeInOut,
      }, 0.0)
      // next
      .to(this.$text.eq(current), 2.0, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
      }, 0.9)


  }

  onResize() {


  }

}
