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

    TweenMax.set(this.$target, {y: 0, opacity: 0});

  }

  update() {

 
  }

  show(index) {

  
    var tl = new TimelineMax({delay: 0.01 * index});

    tl
      .to(this.$target, 0.3, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
      })
      .to(this.$target, 0.2, {
        opacity: 0,
        y: 0,
        ease: Expo.easeOut,
      }, 0.25)



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