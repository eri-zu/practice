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

    TweenMax.set(this.$span, {opacity: 0});

  }

  update() {

  }

  show(delay) {

    TweenMax.to(this.$span, 1.2, {
      opacity: 1,
      ease: Power2.easeInOut,
      onStart:()=>{
      },
      delay: delay
    })

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}