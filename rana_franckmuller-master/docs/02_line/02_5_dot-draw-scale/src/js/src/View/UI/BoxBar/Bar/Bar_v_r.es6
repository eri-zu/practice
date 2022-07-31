//--------------------------------------------------
//
//  Bar
//
//--------------------------------------------------

export default class Bar {

  constructor($wrap) {

    this.$wrap = $wrap;
    this.$target = $wrap.find('.barWrap_v.right');
    this.$bar = this.$target.find('.bar');

    this.setup();
    this.setEvents();

  }

  setup() {

    var h = this.$wrap.height();
    this.$target.height(h);
    this.w = this.$target.width();
    this.h = this.$target.height();

    // width back
    TweenMax.set(this.$target, {y: h - this.h / 4 * 3, rotationZ: 180})



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
      .to(this.$target, 1.2, {
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