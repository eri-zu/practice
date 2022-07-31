//--------------------------------------------------
//
//  Bar
//
//--------------------------------------------------

export default class Bar {

  constructor() {

    this.$wrap = $('.barWrap_h');
    this.$bar = this.$wrap.find('.bar');

    this.setup();
    this.setEvents();

  }

  setup() {

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
      .to(this.$bar, 0.2, {
        width: '100%',
        ease: Expo.easeOut,
      }, 0.0)
      .to(this.$bar, 0.4, {
        x: this.w,
        width: '0%',
        ease: Expo.easeInOut,
      }, 0.4)

  }

  state_move() {

    var tl = new TimelineMax({delay: 0});
    tl
      .to(this.$wrap, 1.5, {
        x: this.w,
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