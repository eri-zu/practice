//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Render from './Render.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.$target = $('.slider .indicator');
    this.$item = this.$target.find('.item');

    this.index = 0;
    this.pre = 0;
    this.len = this.$item.length;

    this.setup()
    this.setEvents();

  }

  setup() {

    // this.isUEv = true;

    TweenMax.set(this.$item, {scaleX: 0, 'transform-origin': '0% 50%'});
    TweenMax.set(this.$item.find('.bar'), {scaleX: 0, 'transform-origin': '0% 50%'});
    TweenMax.set(this.$target, {opacity: 1});

    this.dur = 3;
    this.frame = 60;


    // this.show();

    // this.timeline();

  }

  // update() {

  //   var scaleX = gb.up.frame / this.frame;

  //   if (scaleX<=2) {
  //     TweenMax.set(this.$item.find('.bar').eq(0), {scaleX: scaleX});
  //   } else if (scaleX<=4) {
  //     TweenMax.set(this.$item.find('.bar').eq(1), {scaleX: scaleX - 2});
  //   } else if (scaleX<=6) {
  //     TweenMax.set(this.$item.find('.bar').eq(2), {scaleX: scaleX - 4});
  //   } else {
  //     TweenMax.set(this.$item.find('.bar').eq(2), {scaleX: scaleX - 4});
  //   }

  // }

  show() {

    var tl = new TimelineMax();

    tl
      .to(this.$item, 1.2, {
        scaleX: 1,
        ease: Expo.easeOut,
      }, 0.0)
   
  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .to(this.$item.find('.bar').eq(this.index), this.dur, {
        scaleX: 1,
        ease: Power0.easeNone,
        onComplete: ()=>{

          
          this.pre = this.index;
          this.index++;
          if (this.index>this.len-1) {
            this.reset();
            this.index=0;
          } else {
            this.timeline();
          }
          
          $(window).trigger('sliderChange', [this.index, this.pre]);

        }
      })

  }

  reset() {

    var tl = new TimelineMax();

    tl
      .to(this.$item.find('.bar'), .8, {
        scaleX: 0,
        ease: Power2.easeInOut,
        onComplete: ()=>{
          this.timeline();
        }
      })

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}