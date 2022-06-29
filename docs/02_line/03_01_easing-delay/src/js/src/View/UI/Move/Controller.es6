// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';

export default class Dom extends Base {

  constructor($target, easev) {

    super();

    this.$target = $target;
    this.easev = easev;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.x = 0;
    this.y = 0;
    this.ease = this.easev;

    this.basex = this.$target.offset().left + this.$target.width() / 2;
    this.basey = this.$target.offset().top + this.$target.height() / 2;

  }

  update() {

    var mx = gb.m.x;
    var my = gb.m.y;

    var tarx = 0;
    var tary = 0;

    // mousemove
    tarx += (mx - this.basex);
    tary += (my - this.basey);

    this.x += (tarx - this.x) * this.ease;
    this.y += (tary - this.y) * this.ease;


  }
　
  draw() {

    TweenMax.set(this.$target, {x: this.x, y: this.y, z: 0});

  }

  timeline() {


  }

  setEvents() {

    super.setEvents();
    

  }

}