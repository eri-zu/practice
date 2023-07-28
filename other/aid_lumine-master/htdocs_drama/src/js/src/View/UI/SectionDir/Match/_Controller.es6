// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scroll from './Scroll.es6';

// import * as a from 'Util/Array/index.es6';

export default class Dom extends Base {

  constructor() {

    super();

    this.$wrap = $('.matches.notMv');
    this.$m = this.$wrap.children('.itemW').find('.co');

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    this.$m.each((index, el)=>{

      var $t = $(el);

      TweenMax.set($t, {
        rotationZ: (Math.random() - .5) * 360,
        x: (Math.random() - .5) * 200,
        y: (Math.random() - .5) * 200,
        'transform-origin': '50% 100%'
      });

    });


    // match
    this.$m.each((index, el)=>{

      this.adjustH = 200;
      var $t = $(el);
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var t = new Scroll(targetST, true, ()=>{}, ()=>{}, 'secMatch'+index);
      t.$t = $(el);
      t.index = index;
      t.cb = ()=>{

        var de = 0;

        TweenMax.to(t.$t, 2.0, {
          y: 0,
          x: 0,
          ease: Expo.easeOut,
        })
        TweenMax.to(t.$t.parent(), 2.0, {
          opacity: 1,
          ease: Expo.easeOut,
        })
        TweenMax.to(t.$t, 2.0, {
          rotationZ: 0,
          delay: de,
          ease: Expo.easeOut,
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