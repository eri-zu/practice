//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Header from './Header/Controller.es6';
import ToScroll from './ToScroll/Controller.es6';

import FakeScroll from './FakeScroll/Controller.es6';
import ItemParallax from './ItemParallax/Controller.es6';
import Parallax from './Parallax/Controller.es6';

import Slider from './Slider/Controller.es6';
import Stores from './Stores/Controller.es6';

import Pipes1 from './Pipes1/Controller.es6';
import Pipes2 from './Pipes2/Controller.es6';
import Sns_footer from './Sns_footer/Controller.es6';

import Sika from './Sika/Controller.es6';
import Balls from './Balls/Controller.es6';

import Mv from './_Mv/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.isREv = true;

    this.setup();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    $(window).scrollTop(0);
    $('#wrapper').scrollTop(0);


    this.ha = new Header();
    this.ts = new ToScroll();

    // if (gb.u.dv.isPC) this.fsl = new FakeScroll();
    // gb.moveItems = [];
    // gb.moveItemsIndex = 0;
    // $('.itemParallax').each((index, el)=>{
    //   // if (index>0) return;
    //   new ItemParallax($(el));
    // });
    new Parallax();

    // gb.stores = new Stores();

    new Pipes1();
    new Pipes2();
    // new Sns_footer();

    new Sika();
    new Balls();

    // gb.mv = new Mv();

    this.setup_op()
    
  }

  setup_op() {

    this.$wrap = $('.block01');
    this.$bg = $('.block01 .bg');
    this.$tit = $('.block01 .tit');
    this.$titfront_h = $('.block01 .tit .frontsvg .h path');
    this.$titbg_h = $('.block01 .tit .bgsvg .h path');
    this.$titfront_l = $('.block01 .tit .frontsvg .l path');
    this.$titbg_l = $('.block01 .tit .bgsvg .l path');
    this.$pipe = $('.block02 .pipe');

    this.$partsT = $('.block01 .partsT');
    this.$partsB = $('.block01 .partsB');



    TweenMax.set(this.$bg, {scale: 1.04});
    // TweenMax.set(this.$titfront_h, {opacity: 0});
    // TweenMax.set(this.$titbg_h, {opacity: 0});
    // TweenMax.set(this.$titfront_l, {opacity: 0});
    // TweenMax.set(this.$titbg_l, {opacity: 0});
    // TweenMax.set(this.$tit, {opacity: 1});
    TweenMax.set(this.$pipe.find('img'), {y: this.$pipe.height()});
    TweenMax.set(this.$pipe, {opacity: 1});

    if (gb.urlp.pattern==1) {
      // TweenMax.set(this.$tit, {scaleY: 0});
      TweenMax.set(this.$tit, {opacity: 0, x: 15});
      // if (gb.r.w<768) TweenMax.set(this.$tit, {opacity: 0, x: 0, y: 10});
      if (gb.r.w<768) TweenMax.set(this.$tit, {opacity: 0, x: 10});
      // TweenMax.set(this.$tit, {scaleY: 1});
    } else {
      TweenMax.set(this.$tit, {'perspective': '800px', opacity: 0});
      TweenMax.set(this.$tit.find('svg'), {rotationX: -90, 'transform-origin': '50% 50% 0px'});
    }
    
  }

  timeline() {

    var tl = new TimelineMax({delay: 1.0});
    // TweenMax.set(this.$wrap, {opacity: 1});

    tl
      .add(()=>{
        $(window).scrollTop(0);
        $('#wrapper').scrollTop(0);
      }, 0.0)
      .to(this.$wrap, 1.8, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 0.0)
      .to(this.$bg, 2.2, {
        scale: 1,
        ease: Power2.easeOut,
      }, 0.4)
      //   ease: Power2.easeInOut,
      // }, 0.0)

      // .add(()=>{


      //   // top
      //   var rate = gb.r.w / 375;
      //   var baseT = -528 - (- 658);
      //   if (gb.r.w>768) {

      //     rate = gb.r.w / gb.r.w;
      //     if (gb.r.w>=1700) rate = gb.r.w / 1700;
      //     if (gb.r.w<=1200) rate = gb.r.w / 1200;
          
      //     baseT = -740 - (- 940);
      //   }

      //   baseT *= rate;

      //   var tlt = new TimelineMax();
      //   tlt
      //     .to(this.$partsT.find('.partsInner'), 0.9, {
      //       opacity: 1,
      //       ease: Power2.easeInOut,
      //     }, 0.0)
      //     // 引く
      //     .to(this.$partsT.find('.partsInner'), 0.9, {
      //       y: - baseT * 0.2,
      //       // ease: Back.easeOut.config(1.7),
      //       ease: Power2.easeInOut,
      //       onStart: ()=>{
      //         // bane
      //         TweenMax.to(this.$partsT.find('.bane'), 0.9, {
      //             scaleY: 0.8,
      //             // ease: Back.easeOut.config(1.7)
      //             ease: Power2.easeInOut
      //         })
      //         // ban
      //         TweenMax.to(this.$partsT.find('.ban'), 0.9, {
      //             y: - baseT * 0.35,
      //             // ease: Back.easeOut.config(1.7)
      //             ease: Power2.easeInOut
      //         })
      //       }
      //     }, 0.0)
      //     .to(this.$partsT, .8, {
      //       y: baseT,
      //       ease: Expo.easeIn,
      //       onStart: ()=>{
      //         // bane
      //         TweenMax.to(this.$partsT.find('.bane'), .8, {
      //             scaleY: 1,
      //             ease: Expo.easeIn,
      //         })
      //         // ban
      //         TweenMax.to(this.$partsT.find('.ban'), .8, {
      //             y: 0,
      //             ease: Expo.easeIn,
      //         })
      //         // partsInner
      //         TweenMax.to(this.$partsT.find('.partsInner'), .8, {
      //             y: 0,
      //             ease: Expo.easeIn,
      //         })
      //       }
      //     }, '-=0.15')

      //     // hide
      //     .to(this.$partsT, .4, {
      //       y: - baseT * 0.1,
      //       opacity: 0,
      //       ease: Power3.easeOut,
      //     }, '+=0.05')

      //     .add(()=>{

      //       // tit scaleY
      //       if (gb.urlp.pattern==1) {
      //         TweenMax.to(this.$tit, 0.6, {
      //           scaleY: 1,
      //           ease: Elastic.easeOut.config(1, 0.7),
      //         })

      //       // tit rotateX
      //       } else {
              
      //         TweenMax.to(this.$tit.find('svg'), .7, {
      //           rotationX: 0,
      //           // ease: Elastic.easeOut.config(1, 0.7),
      //           ease: Expo.easeOut,
      //           onStart: ()=>{
      //             TweenMax.to(this.$tit, .7, {
      //                 opacity: 1,
      //                 ease: Expo.easeOut,
      //             })
      //           }
      //         })

      //       }

      //     }, 0.9 + 0.8 - 0.15 + 0.1);


      //   // // btm
      //   var baseB = 115 - 250;
      //   if (gb.r.w>768) {
      //     baseB = 191 - 401;
      //   }

      //   baseB *= rate;

      //   var tlb = new TimelineMax();
      //   tlb
      //     // 引く
      //     .to(this.$partsB.find('.partsInner'), 0.9, {
      //       opacity: 1,
      //       ease: Power2.easeInOut,
      //     }, 0.0)
      //     .to(this.$partsB.find('.partsInner'), 0.9, {
      //       y: - baseB * 0.2,
      //       // ease: Back.easeOut.config(1.7),
      //       ease: Power2.easeInOut,
      //       onStart: ()=>{
      //         // bane
      //         TweenMax.to(this.$partsB.find('.bane'), 0.9, {
      //             scaleY: 0.8,
      //             // ease: Back.easeOut.config(1.7)
      //             ease: Power2.easeInOut
      //         })
      //         // ban
      //         TweenMax.to(this.$partsB.find('.ban'), 0.9, {
      //             y: - baseB * 0.35,
      //             // ease: Back.easeOut.config(1.7)
      //             ease: Power2.easeInOut
      //         })
      //       }
      //     }, 0.0)
      //     .to(this.$partsB, .8, {
      //       y: baseB,
      //       ease: Expo.easeIn,
      //       onStart: ()=>{
      //         // bane
      //         TweenMax.to(this.$partsB.find('.bane'), .8, {
      //             scaleY: 1,
      //             ease: Expo.easeIn,
      //         })
      //         // ban
      //         TweenMax.to(this.$partsB.find('.ban'), .8, {
      //             y: 0,
      //             ease: Expo.easeIn,
      //         })
      //         // partsInner
      //         TweenMax.to(this.$partsB.find('.partsInner'), .8, {
      //             y: 0,
      //             ease: Expo.easeIn,
      //         })
      //       }
      //     }, '-=0.15')

      //     // hide
      //     .to(this.$partsB, .4, {
      //       y: - baseB * 0.1,
      //       opacity: 0,
      //       ease: Power3.easeOut,
      //     }, '+=0.05')


      // }, 1.3)

      .add(()=>{  

        var obj = {
          opacity: 1,
          x: 0,
          ease: Power2.easeOut,
        }
        if (gb.r.w<768) obj.y = 0;

        TweenMax.to(this.$tit, 2.0, obj)

      }, 1.2)

      // sns
      .add(()=>{

        this.ha.r.$wrap.css('opacity', 1);
        this.ha.r.show();

        if (!gb.u.dv.isIe()) {
          if (gb.u.dv.isPC) gb.u.o.enableScroll($(window));
          else gb.u.o.notMove(false, $('#inner'));
        }
        

      }, 1.75 + 1.0)
      .to(this.$pipe.find('img'), 1.2, {
        y: 0,
        ease: Expo.easeOut,
        onComplete: ()=>{

          new Slider();
          
        }
      }, 1.75 + 1.0)

  }

  // timeline() {

  //   var tl = new TimelineMax({delay: 1.0});

  //   tl
  //     // .to(this.$bg, 1.8, {
  //     //   opacity: 1,
  //     //   ease: Power2.easeInOut,
  //     // }, 0.0)
  //     // .to(this.$pipe, 1.8, {
  //     //   opacity: 1,
  //     //   ease: Power2.easeInOut,
  //     // }, 0.0)
  //     // .to(this.$tit, 1.8, {
  //     //   opacity: 1,
  //     //   ease: Power2.easeInOut,
  //     // }, 0.0)
  //     .to(this.$wrap, 1.8, {
  //       opacity: 1,
  //       ease: Power2.easeInOut,
  //     }, 0.0)

  //     // tit
  //     // .add(()=>{

  //     //   // happy
  //     //   for (var i = 0; i < this.$titfront_h.length; i++) {

  //     //     var $f = this.$titfront_h.eq(i);
  //     //     var $b = this.$titbg_h.eq(i);
  //     //     var $t = $f.add($b);
  //     //     var delay = i * 0.07;

  //     //     var cb = ($t, $f, $b, delay, index)=>{

  //     //       var tl = new TimelineMax();

  //     //       tl
  //     //         .add(()=>{

  //     //           var l = $t.get(0).getBBox();
  //     //           TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
  //     //           $t.css({ transform: 'rotate(' + -45 + 'deg)' })
  //     //           // $t.css({ transform: 'rotate(' + -90 + 'deg)' })
  //     //           // TweenMax.set($t, {rotationZ: -90});

  //     //           TweenMax.to($t, 1.1, {
  //     //             opacity: 1,
  //     //             ease: Power2.easeInOut,
  //     //             delay: delay
  //     //           })
  //     //           TweenMax.to($f, 0.8, {
  //     //             fill: '#D7BC6E',
  //     //             ease: Power2.easeOut,
  //     //             delay: 0.8 + delay,
  //     //             onComplete: ($t)=>{

  //     //               // rotate
  //     //               // var l = $t.get(0).getBBox();
  //     //               // TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
  //     //               // $t.addClass('spin');

  //     //               // TweenMax.set($t, {rotationZ: '50% 50%'});
  //     //               // TweenMax.set($t, {transformOrigin: '50% 50%'});

  //     //             },
  //     //             onCompleteParams: [$t]
  //     //           })

  //     //         }, 0.0)
  //     //         .add(()=>{

  //     //           $t.addClass('spin');

  //     //         }, delay + 0.4)

  //     //     }

  //     //     cb($t, $f, $b, delay, i);

  //     //   }

  //     //   // lumine
  //     //   for (var i = 0; i < this.$titfront_l.length; i++) {

  //     //     var $f = this.$titfront_l.eq(i);
  //     //     var $b = this.$titbg_l.eq(i);
  //     //     var $t = $f.add($b);
  //     //     var delay = 1.6 + i * 0.04;

  //     //     var cb = ($t, $f, $b, delay, index)=>{

  //     //       var tl = new TimelineMax();

  //     //       tl
  //     //         .add(()=>{

  //     //           var l = $t.get(0).getBBox();
  //     //           TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
  //     //           $t.css({ transform: 'rotate(' + -45 + 'deg)' })
  //     //           // $t.css({ transform: 'rotate(' + -90 + 'deg)' })
  //     //           // TweenMax.set($t, {rotationZ: -90});

  //     //           TweenMax.to($t, 1.1, {
  //     //             opacity: 1,
  //     //             ease: Power2.easeInOut,
  //     //             delay: delay
  //     //           })
  //     //           TweenMax.to($f, 0.8, {
  //     //             fill: '#D7BC6E',
  //     //             ease: Power2.easeOut,
  //     //             delay: 0.8 + delay,
  //     //             onComplete: ($t)=>{

  //     //               // rotate
  //     //               // var l = $t.get(0).getBBox();
  //     //               // TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
  //     //               // $t.addClass('spin');

  //     //               // TweenMax.set($t, {rotationZ: '50% 50%'});
  //     //               // TweenMax.set($t, {transformOrigin: '50% 50%'});

  //     //             },
  //     //             onCompleteParams: [$t]
  //     //           })

  //     //         }, 0.0)
  //     //         .add(()=>{

  //     //           $t.addClass('spin');

  //     //         }, delay + 0.4)

  //     //     }

  //     //     cb($t, $f, $b, delay, i);

  //     //   }

  //     // }, 0.6)
  //     // sns
  //     .add(()=>{

  //       this.ha.r.$wrap.css('opacity', 1);
  //       this.ha.r.show();

  //       if (!gb.u.dv.isIe()) {
  //         if (gb.u.dv.isPC) gb.u.o.enableScroll($(window));
  //         else gb.u.o.notMove(false, $('#inner'));
  //       }
        

  //     }, 2.0)
  //     .to(this.$pipe.find('img'), 1.2, {
  //       y: 0,
  //       ease: Expo.easeOut,
  //       onComplete: ()=>{

  //         new Slider();
          
  //       }
  //     }, 2.0)

  // }

  update() {

 
  }


  setEvents() {

    super.setEvents();

  }

}