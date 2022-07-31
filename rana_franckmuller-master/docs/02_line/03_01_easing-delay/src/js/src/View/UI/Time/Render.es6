//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Render extends Base {

  constructor() {

    super();
    
    this.$target = $('.box');
    this.$hour = this.$target.find('.hour');
    this.$minute = this.$target.find('.minute');
    this.$second = this.$target.find('.second');

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$hour, {'transform-origin': '0% 50%'});
    TweenMax.set(this.$minute, {'transform-origin': '0% 50%'});
    TweenMax.set(this.$second, {'transform-origin': '0% 50%'});

  }

  update(t) {

    var kakudo = 360;
    var zure = - 90;

    var rotH = t.h % 12 / 12 * kakudo;
    var rotM = t.m / 60 * kakudo;
    var rotS = t.s / 60 * kakudo;

    TweenMax.set(this.$hour, {rotationZ: rotH + zure});
    TweenMax.set(this.$minute, {rotationZ: rotM + zure});
    TweenMax.set(this.$second, {rotationZ: rotS + zure});

  }

  onResize() {


  }

}
