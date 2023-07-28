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
    this.$titWrap1 = $wrap.find('.titWrap1');
    this.$tit1 = this.$titWrap1.find('.tit');
    this.$text1 = this.$titWrap1.find('.text');

    this.$titWrap2 = $wrap.find('.titWrap2');
    this.$tit2 = this.$titWrap2.find('.tit');
    this.$text2 = this.$titWrap2.find('.text');

    this.$box = $wrap.find('.scrollBox');
    // this.$box1 = $wrap.find('.scrollBox1');
    // this.$box2 = $wrap.find('.scrollBox2');

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    TweenMax.set(this.$tit1, {opacity: 0, x: 20});
    TweenMax.set(this.$text1, {opacity: 0, x: 20});
    TweenMax.set(this.$tit2, {opacity: 0, x: 20});
    TweenMax.set(this.$text2, {opacity: 0, x: 20});

    TweenMax.set(this.$box, {opacity: 0, y: 20});
    // TweenMax.set(this.$box1, {opacity: 0, y: 20});
    // TweenMax.set(this.$box2, {opacity: 0, y: 20});

    // tit
    this.adjustH = 100;
    var $t = this.$titWrap1;
    var targetST = $t.offset().top - gb.r.h + this.adjustH;
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec06'+0);
    s01.cb = ()=>{

      TweenMax.to(this.$tit1, 3.0, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
      })
      TweenMax.to(this.$text1, 3.0, {
        x: 0,
        opacity: 1,
        delay: 0.2,
        ease: Power4.easeOut,
      })
      
      s01.removeEvents();

    };

    // tit
    this.adjustH = 100;
    var $t = this.$titWrap2;
    var targetST = $t.offset().top - gb.r.h + this.adjustH;
    var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec06'+1);
    s02.cb = ()=>{

      TweenMax.to(this.$tit2, 3.0, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
      })
      TweenMax.to(this.$text2, 3.0, {
        x: 0,
        opacity: 1,
        delay: 0.2,
        ease: Power4.easeOut,
      })
      
      s02.removeEvents();

    };

    // scrollBox
    // this.adjustH = 100;
    // var $t = this.$box1;
    // var targetST = $t.offset().top - gb.r.h + this.adjustH;
    // var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec06'+1);
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
    // var s03 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec06'+2);
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
      var t = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec06_box'+index);
      t.$t = $(el);
      t.index = index;
      t.cb = ()=>{

        var de = 0;
        if (t.index==1) de = .2;
        // if (t.index==6) de = .2;
        // if (t.index==7) de = .2;

        TweenMax.to(t.$t, 3.0, {
          y: 0,
          opacity: 1,
          delay: de,
          ease: Power4.easeOut,
          onComplete: ()=>{
            // TweenMax.set(t.$t, {clearProps: 'all'});
          }
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