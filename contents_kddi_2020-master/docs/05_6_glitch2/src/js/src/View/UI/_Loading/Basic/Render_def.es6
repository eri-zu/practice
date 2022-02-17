//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

export default class Render {

  constructor(parent) {

    this.$wrap = $('html')
    this.endFlag = false;
    this.setup();
    this.setEvents();

  }

  setup() {



  }

  add(){


  }

  show() {

    this.$target = $('.loading');
    const $shape = this.$target.find('.shape');
    
    TweenMax.set($shape, {opacity: 0, scale: 0.7});
    TweenMax.set($shape.eq(0), {'transform-origin': '50% 75%'});

    var tll = new TimelineMax({delay: 1.0});

    tll
      .to(this.$target.find('.inner'), 1.2, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
      })

      // shapes
      .add(()=>{

        this.tl1 = new TimelineMax({repeat: -1, delay: .7 * 0, repeatDelay: 1.2});
        this.tl2 = new TimelineMax({repeat: -1, delay: .7 * 1, repeatDelay: 1.2});
        this.tl3 = new TimelineMax({repeat: -1, delay: .7 * 2, repeatDelay: 1.2});

        this.tl1
          .set($shape.eq(0), {rotation: -180 * 0.15})
          .to($shape.eq(0),.6,{
            scale:1,
            opacity:1,
            rotation: 0,
            ease:Expo.easeOut
          },0.0)
          .to($shape.eq(0),.3,{
            scale:0.7,
            opacity: 0.0,
            rotation: 180 * 0.15,
            ease:Expo.easeInOut
          }, .6)

        this.tl2
          .set($shape.eq(1), {rotation: -180 * 0.35})
          .to($shape.eq(1),.6,{
            scale:1,
            opacity:1,
            rotation: 0,
            ease:Expo.easeOut
          }, 0.0)
          .to($shape.eq(1),.3,{
            scale:0.7,
            opacity: 0.0,
            rotation: 180 * 0.35,
            ease:Expo.easeInOut
          }, .6)

        this.tl3
          .set($shape.eq(2), {rotation: -180 * 0.35})
          .to($shape.eq(2),.6,{
            scale:1,
            opacity:1,
            rotation: 0,
            ease:Expo.easeOut
          }, 0.0)
          .to($shape.eq(2),.3,{
            scale:0.7,
            opacity: 0.0,
            rotation: 180 * 0.35,
            ease:Expo.easeInOut
          }, .6)


        // hide
        clearTimeout(this.Timer);
        this.Timer = setTimeout(()=>{
            
          this.hide(true);
          
        },3000);

      }, 0.2)  

  }

  update(e) {


  }

  hide(is_end = false) {
    
    if(!this.endFlag || !is_end)return;
    this.is_hide = true;
    
    var tl = new TimelineMax();

    tl
      .to(this.$target.find('.inner'), 1.2, {
        opacity: 0,
        y: -15,
        ease: Expo.easeOut,
      }, 0.0)
      .to(this.$target, 0.8, {
        opacity: 0,
        // scale: 0.,
        ease: Power4.easeOut,
        onComplete: ()=>{
          $('.loading').remove();
          this.tl1.kill();
          this.tl2.kill();
          this.tl3.kill();  

          $(window).trigger('loadingEnd')
        }
      }, 0.0)
    
  }

  setEvents() {


  }

}