// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Dom extends Base {

  constructor() {

    super();

    this.setup();
    this.setEvents();

  }

  setup() {

    this.startRotate = -30;

    this.$wrap = $('.section.about');

  }

  update() {


  }
　
  draw() {


  }

  show() {

  }

  hide() {

  }

  setEvents() {

    super.setEvents();
    

  }

}