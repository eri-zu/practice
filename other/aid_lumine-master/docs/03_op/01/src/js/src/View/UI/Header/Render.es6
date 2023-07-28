//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

export default class Render {

  constructor() {

    this.$wrap = $('#header');
    this.$chain = this.$wrap.find('.chain');
    this.$light = this.$wrap.find('.light');
    this.$lighton = this.$wrap.find('.light.on');

    this.setup();
    this.setEvents();

  }

  setup() {
    
    TweenMax.set(this.$wrap, {opacity: 1, y: - 100});
    TweenMax.set(this.$light, {rotationZ: -10, 'transform-origin': '10% 50%', y: -10});

  }

  show() {

    var tl = new TimelineMax();

    tl
      // wrap
      .add(()=>{

        TweenMax.to(this.$wrap, 0.8, {
          y: 0,
          ease: Elastic.easeOut.config(0.9, 0.6)
        })
      
      }, 0.0)
      // sec
      .add(()=>{

        TweenMax.to(this.$light, 0.8, {
          rotationZ: 0,
          z: 0,
          y: 0,
          ease: Elastic.easeOut.config(1.6, 0.45)
        })
      
      }, 0.08)
      .add(()=>{

        // this.flash();
        this.$lighton.css('opacity', 0);
      
      }, 0.08 + 0.05)

  }

  hide() {

    TweenMax.to(this.$wrap, 0.7, {
      y: - this.h,
      ease: Power4.easeIn,
      onComplete: ()=>{
        this.$wrap.css('display', 'none');
      }
    })

    TweenMax.set(this.$sec.eq(3), {'transform-origin': '20% 25%'});
    TweenMax.to(this.$sec.eq(3), 0.7, {
      rotationZ: 30,
      y: -50,
      ease: Expo.easeIn,
    })

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{
        
      $(window).trigger('Opening');
      
    }, 300);

  }

  flash() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.$lighton.addClass('flashD');

      }, 0.0)
      // .add(()=>{

      //   this.$lighton.removeClass('flashD');

      // }, 5.0)
      // .add(()=>{

      //   this.flash();

      // }, 5.0)

  }

  setEvents() {


  }

}
