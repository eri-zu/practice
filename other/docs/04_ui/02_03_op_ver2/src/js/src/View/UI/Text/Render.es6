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

    TweenMax.set(this.$span, {
      x: 8,
      opacity: 0,
    });

  }

  show(delay) {

    TweenMax.set(this.$span, {x: 8,opacity: 0,});
    TweenMax.to(this.$span, 1.2, {
      x: 0,
      z: 0,
      opacity: 1,
      ease: Power1.easeOut,
      delay: delay
    })

  }

  hide(delay) {

    TweenMax.to(this.$span, .7, {
      x: -8,
      z: 0,
      opacity: 0,
      ease: Power3.easeOut,
      delay: delay
    })

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}