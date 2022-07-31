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

    var w = this.$box.width();
    this.$wrap.width(w);
    this.w = this.$wrap.width();
    this.h = this.$wrap.height();

    // width back
    TweenMax.set(this.$wrap, {x: - this.w / 4})




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
        width: '100%',
        ease: Expo.easeOut,
      }, 0.0)
      .to(this.$bar, 0.5, {
        x: this.w,
        opacity: 0,
        width: '0%',
        ease: Power2.easeInOut,
      }, 0.4)

  }

  state_move() {

    var tl = new TimelineMax({delay: 0});
    tl
      .to(this.$wrap, 1.2, {
        x: this.w / 2,
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