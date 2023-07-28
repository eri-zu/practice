//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIController extends Base {

  constructor($span, index) {

    super();

    this.$span = $span;
    this.index = index;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.w = this.$span.width();
    this.h = this.$span.height();

    TweenMax.set(this.$span, {
      x: this.h / 2,
      opacity: 0,
    });

  }

  show(delay) {

    TweenMax.set(this.$span, {x: this.h / 2,opacity: 0,});
    TweenMax.set(this.$span.parent(), {x: this.h / 5});
    TweenMax.to(this.$span, 1.2, {
      x: 0,
      z: 0,
      opacity: 1,
      ease: Power3.easeOut,
      delay: delay
    })
    TweenMax.to(this.$span.parent(), 1.2, {
      x: 0,
      ease: Power1.easeOut,
      delay: delay
    })

  }

  hide(delay) {

    TweenMax.to(this.$span, .7, {
      x: -this.h / 2,
      z: 0,
      opacity: 0,
      ease: Power3.easeOut,
      delay: delay
    })
    TweenMax.to(this.$span.parent(), 1.2, {
      x: -this.h / 5,
      ease: Power1.easeOut,
      delay: delay
    })

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}