// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scroll from './Scroll.es6';
import Render from './Render.es6';

// import * as a from 'Util/Array/index.es6';

export default class Dom extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $('.block06');
    this.$sns = this.$wrap.find('.sns');

    this.$item = this.$sns.find('.item');
    this.$cover = this.$sns.find('.cover');

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    // TweenMax.set(this.$sns, {opacity: 0});

    // titあたり
    // tit
    this.adjustH = 200;
    var $t = this.$sns;
    var targetST = $t.offset().top - gb.r.h + this.adjustH;
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'Sns_footer');
    s01.cb = ()=>{

      log('sns_footer');
      
      s01.removeEvents();

    };


  }

  update() {


  }
　
  draw() {


  }

  hide() {    

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