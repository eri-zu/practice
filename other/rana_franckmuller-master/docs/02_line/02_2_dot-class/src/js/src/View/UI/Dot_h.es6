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

    var scaley = (Math.random() - 0.5) * 20;
    var y = (Math.random() - 0.5) * 40;

    TweenMax.set(this.$target, {y: y, scaleY: 2 * scaley, opacity: 0});

  }

  update() {

 
  }

  show(index) {

  
    var tl = new TimelineMax({});

    tl
      .set(this.$target, {opacity: 1.0, delay: 0.01 * index})
      // .set(this.$target, {opacity: 0})
      .to(this.$target, 1.5, {
        opacity: 0,
        y: 0,
        scaleY: 0,
        ease: Expo.easeOut,
        // ease: Elastic.easeOut.config(1.9, 1.2),
      })



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