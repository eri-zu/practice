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

  show() {

    TweenMax.to(this.$target, 1.2, {
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