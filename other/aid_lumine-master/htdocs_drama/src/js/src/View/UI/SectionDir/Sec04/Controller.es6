// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scroll from './Scroll.es6';

// import * as a from 'Util/Array/index.es6';

export default class Dom extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $wrap;
    this.$titWrap = $wrap.find('.titWrap');
    this.$tit = $wrap.find('.titWrap .tit');
    this.$text = $wrap.find('.titWrap .text');

    this.$box = $wrap.find('.scrollBox');
    // this.$box1 = $wrap.find('.scrollBox1');
    // this.$box2 = $wrap.find('.scrollBox2');

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    // TweenMax.set(this.$tit, {opacity: 0, x: 20});
    // TweenMax.set(this.$text, {opacity: 0, x: 20});

    TweenMax.set(this.$box, {opacity: 0, y: 20});
    // TweenMax.set(this.$box1, {opacity: 0, y: 20});
    // TweenMax.set(this.$box2, {opacity: 0, y: 20});

    // tit
    // this.adjustH = 100;
    // var $t = this.$titWrap;
    // var targetST = $t.offset().top - gb.r.h + this.adjustH;
    // var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec04'+0);
    // s01.cb = ()=>{

    //   TweenMax.to(this.$tit, 3.0, {
    //     x: 0,
    //     opacity: 1,
    //     ease: Power4.easeOut,
    //   })
    //   TweenMax.to(this.$text, 3.0, {
    //     x: 0,
    //     opacity: 1,
    //     delay: 0.2,
    //     ease: Power4.easeOut,
    //   })
      
    //   s01.removeEvents();

    // };

    // scrollBox
    // this.adjustH = 100;
    // var $t = this.$box1;
    // var targetST = $t.offset().top - gb.r.h + this.adjustH;
    // var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec04'+1);
    // s02.cb = ()=>{

    //   TweenMax.to(this.$box1, 3.0, {
    //     y: 0,
    //     opacity: 1,
    //     ease: Power4.easeOut,
    //   })
      
    //   s02.removeEvents();

    // };

    // // scrollBox
    // this.adjustH = 100;
    // var $t = this.$box2;
    // var targetST = $t.offset().top - gb.r.h + this.adjustH;
    // var s03 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec04'+2);
    // s03.cb = ()=>{

    //   TweenMax.to(this.$box2, 3.0, {
    //     y: 0,
    //     opacity: 1,
    //     ease: Power4.easeOut,
    //   })
      
    //   s03.removeEvents();

    // };

    // scrollBox
    this.$box.each((index, el)=>{

      this.adjustH = 200;
      var $t = $(el);
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var t = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec04_box'+index);
      t.$t = $(el);
      t.index = index;
      t.cb = ()=>{

        var de = 0;
        // if (t.index==3) de = .5;

        TweenMax.to(t.$t, 3.0, {
          y: 0,
          opacity: 1,
          delay: de,
          ease: Power4.easeOut,
        })
        
        t.removeEvents();

      };
      
    });


  }

  update() {


  }
　
  draw() {


  }

  hide() {    

  }

  setEvents() {

    var self = this;

    super.setEvents();


  }

}