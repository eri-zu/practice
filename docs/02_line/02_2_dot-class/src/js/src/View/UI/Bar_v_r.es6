//--------------------------------------------------
//
//  Bar
//
//--------------------------------------------------

export default class Bar {

  constructor($target) {

    this.$box = $('.box');
    this.$wrap = $target;
    this.$bar = this.$wrap.find('.bar');

    this.setup();
    this.setEvents();

  }

  setup() {

    var h = this.$box.height();
    this.$wrap.height(h);
    this.w = this.$wrap.width();
    this.h = this.$wrap.height();

    // width back
    TweenMax.set(this.$wrap, {y: h - this.h / 4 * 3, rotationZ: 180})



    this.show();

  }

  show(){

    this.drawLine();
    this.state_move();


  }

  // width
  drawLine() {

    var tl = new TimelineMax({delay: 0});
    tl
      .to(this.$bar, 0.3, {
        height: '100%',
        ease: Expo.easeOut,
      }, 0.0)
      .to(this.$bar, 0.5, {
        y: this.h,
        opacity: 0,
        height: '0%',
        ease: Power2.easeInOut,
      }, 0.4)

  }

  state_move() {

    var tl = new TimelineMax({delay: 0});
    tl
      .to(this.$wrap, 1.2, {
        y: - this.h / 2,
        ease: Power0.easeNone,
      })

  }

  hide () {

    
  }

  timeline() {

    // this.show();

  }

  setEvents() {

  


  }

}