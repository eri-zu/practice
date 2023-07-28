// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
// import Val from 'Util/Val.es6';

import Render from './Render.es6';

export default class Dom extends Base {

  constructor($target, pos) {

    super();

    this.$wrap = $('#header .sns .items');
    this.$item = this.$wrap.find('.item');
    this.$cover = $('#header .cover');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.r = new Render();    

  }

  update() {

  }
　
  draw() {
    
  }

  onEnter(that) {

    var index = this.$item.index(that);

    this.$cover.eq(index).addClass('active');

  }

  onLeave(that) {

    var index = this.$item.index(that);

    this.$cover.eq(index).removeClass('active');

  }

  setEvents() {

    var self = this;

    super.setEvents();

    this.$item.on('mouseenter touchstart', function(){self.onEnter.call(self,this)});
    this.$item.on('mouseleave touchend', function(){self.onLeave.call(self,this)});
    

  }

}