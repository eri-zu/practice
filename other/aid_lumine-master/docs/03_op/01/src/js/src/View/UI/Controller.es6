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
    // this.ts = new ToScroll();
    // new Slider();

    // // if (gb.u.dv.isPC) this.fsl = new FakeScroll();
    // gb.moveItems = [];
    // gb.moveItemsIndex = 0;
    // $('.itemParallax').each((index, el)=>{
    //   // if (index>0) return;
    //   new ItemParallax($(el));
    // });
    // new Parallax();

    // gb.stores = new Stores();

    // new Pipes1();
    // new Pipes2();
    // new Sns_footer();

    gb.mv = new Mv();

    this.setup_op()
    
  }

  setup_op() {

    this.$bg = $('.block01 .bg');
    this.$tit = $('.block01 .tit');
    this.$titfront_h = $('.block01 .tit .frontsvg .h path');
    this.$titbg_h = $('.block01 .tit .bgsvg .h path');
    this.$titfront_l = $('.block01 .tit .frontsvg .l path');
    this.$titbg_l = $('.block01 .tit .bgsvg .l path');
    this.$pipe = $('.block02 .pipe');

    TweenMax.set(this.$bg, {opacity: 0});
    TweenMax.set(this.$titfront_h, {opacity: 0});
    TweenMax.set(this.$titbg_h, {opacity: 0});
    TweenMax.set(this.$titfront_l, {opacity: 0});
    TweenMax.set(this.$titbg_l, {opacity: 0});
    TweenMax.set(this.$tit, {opacity: 1});
    TweenMax.set(this.$pipe, {opacity: 0});

    
  }

  timeline() {

    var tl = new TimelineMax({delay: 1.0});

    tl
      .to(this.$bg, 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 0.0)
      .to(this.$pipe, 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 0.0)

      // tit
      .add(()=>{

        // happy
        for (var i = 0; i < this.$titfront_h.length; i++) {

          var $f = this.$titfront_h.eq(i);
          var $b = this.$titbg_h.eq(i);
          var $t = $f.add($b);
          var delay = i * 0.07;

          var cb = ($t, $f, $b, delay, index)=>{

            var tl = new TimelineMax();

            tl
              .add(()=>{

                var l = $t.get(0).getBBox();
                TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
                $t.css({ transform: 'rotate(' + -45 + 'deg)' })
                // $t.css({ transform: 'rotate(' + -90 + 'deg)' })
                // TweenMax.set($t, {rotationZ: -90});

                TweenMax.to($t, 1.1, {
                  opacity: 1,
                  ease: Power2.easeInOut,
                  delay: delay
                })
                TweenMax.to($f, 0.8, {
                  fill: '#D7BC6E',
                  ease: Power2.easeOut,
                  delay: 0.8 + delay,
                  onComplete: ($t)=>{

                    // rotate
                    // var l = $t.get(0).getBBox();
                    // TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
                    // $t.addClass('spin');

                    // TweenMax.set($t, {rotationZ: '50% 50%'});
                    // TweenMax.set($t, {transformOrigin: '50% 50%'});

                  },
                  onCompleteParams: [$t]
                })

              }, 0.0)
              .add(()=>{

                $t.addClass('spin');

              }, delay + 0.4)

          }

          cb($t, $f, $b, delay, i);

        }

        // lumine
        for (var i = 0; i < this.$titfront_l.length; i++) {

          var $f = this.$titfront_l.eq(i);
          var $b = this.$titbg_l.eq(i);
          var $t = $f.add($b);
          var delay = 1.6 + i * 0.04;

          var cb = ($t, $f, $b, delay, index)=>{

            var tl = new TimelineMax();

            tl
              .add(()=>{

                var l = $t.get(0).getBBox();
                TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
                $t.css({ transform: 'rotate(' + -45 + 'deg)' })
                // $t.css({ transform: 'rotate(' + -90 + 'deg)' })
                // TweenMax.set($t, {rotationZ: -90});

                TweenMax.to($t, 1.1, {
                  opacity: 1,
                  ease: Power2.easeInOut,
                  delay: delay
                })
                TweenMax.to($f, 0.8, {
                  fill: '#D7BC6E',
                  ease: Power2.easeOut,
                  delay: 0.8 + delay,
                  onComplete: ($t)=>{

                    // rotate
                    // var l = $t.get(0).getBBox();
                    // TweenMax.set($t, {'transform-origin': (l.x + l.width/2) +'px '+ (l.y + l.height/2) +'px'});
                    // $t.addClass('spin');

                    // TweenMax.set($t, {rotationZ: '50% 50%'});
                    // TweenMax.set($t, {transformOrigin: '50% 50%'});

                  },
                  onCompleteParams: [$t]
                })

              }, 0.0)
              .add(()=>{

                $t.addClass('spin');

              }, delay + 0.4)

          }

          cb($t, $f, $b, delay, i);

        }

      }, 0.6)
      // sns
      .add(()=>{

        this.ha.r.show();

      }, 3.5)

  }

  update() {

 
  }


  setEvents() {

    super.setEvents();

  }

}