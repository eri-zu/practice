//--------------------------------------------------
//
//  Btn
//
//--------------------------------------------------

export default class Btn {

  constructor($wrap){

    this.$wrap = $wrap;
    this.$bar = $wrap.find('.bar');

    this.isLock = false;
    this.isEnter = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$bar.eq(0), {'transform-origin': '100% 50%'})   
    TweenMax.set(this.$bar.eq(1), {'transform-origin': '100% 50%'})   
    TweenMax.set(this.$bar.eq(2), {'transform-origin': '100% 50%'})   

  }

  show() {

    TweenMax.killTweensOf(this.$bar);

    this.$bar.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.1});

      tl
        .set($(el), {'transform-origin': '0% 50%'})  
        .to($(el), 0.9, {
          scaleX: 1.0,
          z: 0,
          ease: Expo.easeOut
        })  
      
    });

  }

  hide() {

    TweenMax.killTweensOf(this.$bar);

    this.$bar.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.1});

      tl
        .set($(el), {'transform-origin': '100% 50%'})
        .to($(el), 0.4, {
          scaleX: 0.0,
          z: 0,
          ease: Expo.easeOut,
          onComplete: ()=>{

          }
        })  
      
    });

  }

  onEnter() {

    log('enter');

    if (this.isLock||this.isEnter) return;
    this.isEnter = true;

    TweenMax.killTweensOf(this.$bar);

    this.$bar.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.1});

      tl
        .set($(el), {'transform-origin': '100% 50%'})
        .to($(el), 0.4, {
          scaleX: 0.0,
          z: 0,
          ease: Expo.easeOut
        })  
        .set($(el), {'transform-origin': '0% 50%'})  
        .to($(el), 0.5, {
          scaleX: 1.0,
          z: 0,
          ease: Expo.easeOut,
          onComplete: (index)=>{
            if (index==2) this.isEnter = false;
          },
          onCompleteParams: [index]
        })  
      
    });

  }

  onLeave() {

    log('leave');

    // log(this.isOpen);
    // if (!this.isOpen) return;

    // TweenMax.to(this.$bar.eq(1), 0.5, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // })   
    // TweenMax.to(this.$bar.eq(2), 0.45, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // })   
    // TweenMax.to(this.$bar.eq(3), 0.45, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // }) 

  }

  setEvents() {

    this.$wrap.on('mouseenter.btnOpen', this.onEnter.bind(this));
    this.$wrap.on('mouseleave.btnOpen', this.onLeave.bind(this));

  }

  removeEvents() {

    this.$wrap.off('mouseenter.btnOpen');
    this.$wrap.off('mouseleave.btnOpen');

  }

}