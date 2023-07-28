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
    this.$img01 = this.$wrap.find('.pipe');

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
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'Pipes2');
    s01.cb = ()=>{

      log('box');
      
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