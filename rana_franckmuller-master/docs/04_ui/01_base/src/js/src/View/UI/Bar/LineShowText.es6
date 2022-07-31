//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

import BarWrap from './BarWrap.es6';

export default class SpanText {

  constructor($wrap, index, delay) {

    this.$wrap = $wrap
    this.$target = $wrap.find('.text');

    this.index = index;

    this.setup();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    TweenMax.set(this.$target, {x: -35, opacity: 0});

    this.b = new BarWrap(this.$wrap, this.index)

  }

  reset() {


  }

  show (delay) {

    this.timeline(delay);

  }

  hide () {
    
  }

  timeline(delay=0.0) {

    // this.show();

    var tl = new TimelineMax({delay: delay});

    tl
      .add(()=>{

        this.b.show();

      })
      .to(this.$target, 0.6, {
        x: 0,
        opacity: 1,
        ease: Expo.easeOut,
      }, 0.78);
    

  }

  setEvents() {

  


  }

}