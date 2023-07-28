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

    this.$wrap = $('.block05');
    this.$img01 = this.$wrap.find('.img01');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.r = new Render();

    // ready
    // TweenMax.set(this.$img01, {opacity: 0});

    // titあたり
    // tit
    this.adjustH = 200;
    var $t = this.$img01;
    var targetST = $t.offset().top - gb.r.h + this.adjustH;
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'Pipes1');
    s01.cb = ()=>{

      log('conveyer');
      
      s01.removeEvents();

    };


  }

  update() {


  }
　
  draw() {


  }

  hide() {    

  }

  setEvents() {

    super.setEvents();

  }

}