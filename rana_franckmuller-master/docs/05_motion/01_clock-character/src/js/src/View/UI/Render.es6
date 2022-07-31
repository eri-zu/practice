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

    this.isUpdate = true;
    this.rot = 0;

  }

  update() {

    if (!this.isUpdate) return;
    if (gb.up.frame%60==0) {

      this.rot += 25;

    }

    TweenMax.set(this.$span, {rotation: this.rot});

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}