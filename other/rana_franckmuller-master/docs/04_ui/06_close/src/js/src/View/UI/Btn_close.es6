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

    // TweenMax.set(this.$bar.eq(0), {scaleX: 0.0, rotation: -45})  
    // TweenMax.set(this.$bar.eq(1), {scaleX: 0.0, rotation: 45})  

  }

  show() {

    log('enter');

    TweenMax.killTweensOf(this.$bar);

    this.$bar.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.1});

      tl
        // .set($(el), {'transform-origin': '100% 50%'})
        .to($(el), 0.4, {
          scaleX: 1.0,
          z: 0,
          ease: Expo.easeOut
        })  
        // .set($(el), {'transform-origin': '0% 50%'})  
        // .to($(el), 0.9, {
        //   scaleX: 1.0,
        //   z: 0,
        //   ease: Expo.easeOut
        // })  
      
    });

  }

  hide() {

    TweenMax.killTweensOf(this.$bar);

    this.$bar.each((index, el)=>{

      if (index==0) {
        var obj1 = {'transform-origin': '100% 50%'};
        var obj2 = {'transform-origin': '0% 50%'};
      } else {
        var obj1 = {'transform-origin': '0% 50%'};
        var obj2 = {'transform-origin': '100% 50%'};
      }

      var tl = new TimelineMax({delay: index * 0.1});

      tl
        .set($(el), obj1)
        .to($(el), 0.4, {
          scaleX: 0.0,
          z: 0,
          ease: Expo.easeOut
        })  
        // .set($(el), {'transform-origin': '0% 50%'})  
        // .to($(el), 0.9, {
        //   scaleX: 1.0,
        //   z: 0,
        //   ease: Expo.easeOut
        // })  
      
    });

 

  }

  onEnter() {

    log('enter');

    // if (this.isLock||this.isEnter) return;
    // this.isEnter = true;

    TweenMax.killTweensOf(this.$bar);

    this.$bar.each((index, el)=>{

      if (index==0) {
        var obj1 = {'transform-origin': '100% 50%'};
        var obj2 = {'transform-origin': '0% 50%'};
      } else {
        var obj1 = {'transform-origin': '0% 50%'};
        var obj2 = {'transform-origin': '100% 50%'};
      }

      var tl = new TimelineMax({delay: index * 0.1});

      tl
        .set($(el), obj1)
        .to($(el), 0.4, {
          scaleX: 0.0,
          z: 0,
          ease: Expo.easeOut
        })  
        .set($(el), obj2)
        .to($(el), 0.5, {
          scaleX: 1.0,
          z: 0,
          ease: Expo.easeOut,
          onComplete: (index)=>{
            if (index==1) this.isEnter = false;
          },
          onCompleteParams: [index]
        })  
      
    });

  }


  onLeave() {
 

  }

  setEvents() {

    this.$wrap.on('mouseenter', this.onEnter.bind(this));
    this.$wrap.on('mouseleave', this.onLeave.bind(this));

  }

}