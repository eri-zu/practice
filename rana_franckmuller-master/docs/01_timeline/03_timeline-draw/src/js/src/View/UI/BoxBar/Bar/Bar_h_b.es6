//--------------------------------------------------
//
//  Bar
//
//--------------------------------------------------

export default class Bar {

  constructor($wrap) {

    this.$wrap = $wrap;
    this.$target = $wrap.find('.barWrap_h.bottom');
    this.$bar = this.$target.find('.bar');

    this.setup();
    this.setEvents();

  }

  setup() {

    var w = this.$wrap.width();
    this.$target.width(w);
    this.w = this.$target.width();
    this.h = this.$target.height();

    // width back
    TweenMax.set(this.$target, {x: w  - this.w / 4 * 3, rotationZ: 180})




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
      .to(this.$bar, 1.0, {
        width: '100%',
        ease: Power2.easeOut,
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
      .to(this.$target, 1.2, {
        x: - this.w / 2,
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