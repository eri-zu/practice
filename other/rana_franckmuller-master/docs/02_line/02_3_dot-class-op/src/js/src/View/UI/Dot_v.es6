//--------------------------------------------------
//
//  Dot
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Dot extends Base {

  constructor($target) {

    super();

    this.$target = $target;

    this.setup()
    this.setEvents();

  }

  setup() {

    var scalex = (Math.random() - 0.5) * 20;
    var x = (Math.random() - 0.5) * 20;

    TweenMax.set(this.$target, {x: x, scaleX: 2 * scalex, opacity: 0});

  }

  update() {

 
  }

  show(index) {

  
    var tl = new TimelineMax({delay: 0.02 * index});

    tl
      // .set(this.$target, {opacity: 1.0, delay: 0.02 * index})
      // .set(this.$target, {opacity: 0})
      .to(this.$target, 1.5, {
        opacity: 1,
        x: 0,
        scaleX: 0,
        ease: Expo.easeOut,
        // ease: Elastic.easeOut.config(1.9, 1.2),
      })
      .to(this.$target, 0.2, {
        opacity: 0,
        ease: Expo.easeOut,
      }, 0.8)




  }

  hide(index) {

  
    var tl = new TimelineMax({});

    tl
      .set(this.$target, {opacity: 0})

    this.setup();

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}