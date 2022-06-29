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

    // TweenMax.set(this.$target, {x: x, opacity: 0});
    TweenMax.set(this.$target, {x: 0, opacity: 0});

  }

  update() {

 
  }

  show(index) {

  
    var tl = new TimelineMax({delay: 0.02 * index});

    tl
      .to(this.$target, 0.3, {
        opacity: 1,
        x: 0,
        ease: Expo.easeOut,
      })
      .to(this.$target, 0.2, {
        opacity: 0,
        x: 0,
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