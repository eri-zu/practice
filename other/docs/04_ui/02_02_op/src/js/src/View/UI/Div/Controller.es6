// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Dom extends Base {

  constructor($target) {

    super();

    this.$target = $target;

    this.setup();
    this.setEvents();

  }

  setup() {



  }

  update() {


  }
　
  draw() {


  }

  show(dur=1.2) {

    TweenMax.to(this.$target, dur, {
      opacity: 1,
      ease: Power2.easeInOut,
    })

  }

  hide() {

  }

  setEvents() {

    super.setEvents();
    

  }

}