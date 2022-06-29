//--------------------------------------------------
//
//  Btn
//
//--------------------------------------------------

export default class Btn {

  constructor($wrap){

    this.$wrap = $wrap;
    this.$open = $wrap.find('.openWrap');
    this.$close = $wrap.find('.closeWrap');
    this.$bar_o = this.$open.find('.bar');
    this.$bar_c = this.$close.find('.bar');

    this.isLock = false;
    this.isEnter = false;
    this.isEnter_c = false;
    this.isCloseShow = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$bar_o.eq(0), {'transform-origin': '100% 50%'})   
    TweenMax.set(this.$bar_o.eq(1), {'transform-origin': '100% 50%'})   
    TweenMax.set(this.$bar_o.eq(2), {'transform-origin': '100% 50%'})   

    TweenMax.set(this.$bar_c.eq(0), {'scaleX': 0})   
    TweenMax.set(this.$bar_c.eq(1), {'scaleX': 0})   

  }

  show_o() {

    TweenMax.killTweensOf(this.$bar_o);

    this.$bar_o.each((index, el)=>{

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

  hide_o() {

    TweenMax.killTweensOf(this.$bar_o);

    this.$bar_o.each((index, el)=>{

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

    if (this.isEnter||this.isCloseShow) return;
    this.isEnter = true;

    TweenMax.killTweensOf(this.$bar_o);

    this.$bar_o.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.1});

      var cb = (i)=>{if (i==0) this.isEnter = false;};

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
            // if (index==0) this.isEnter = false;
          },
          onCompleteParams: [index]
        })  
        .add(cb.bind(this, index), 0.8)
      
    });

  }

  onLeave() {

    log('leave');

    // log(this.isOpen);
    // if (!this.isOpen) return;

    // TweenMax.to(this.$bar_o.eq(1), 0.5, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // })   
    // TweenMax.to(this.$bar_o.eq(2), 0.45, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // })   
    // TweenMax.to(this.$bar_o.eq(3), 0.45, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // }) 

  }

  onEnter_c() {

    if (this.isEnter_c||!this.isCloseShow) return;
    this.isEnter_c = true;
    
    TweenMax.killTweensOf(this.$bar_c);

    this.$bar_c.each((index, el)=>{

      var tl = new TimelineMax({delay: index * 0.1});

      var cb = (i)=>{if (i==0) this.isEnter_c = false;};

      tl
        .set($(el), {'transform-origin': '0% 50%'})
        .to($(el), 0.4, {
          scaleX: 0.0,
          z: 0,
          ease: Expo.easeOut
        })  
        .set($(el), {'transform-origin': '100% 50%'})  
        .to($(el), 0.5, {
          scaleX: 1.0,
          z: 0,
          ease: Expo.easeOut,
          onComplete: (index)=>{
            // if (index==0) this.isEnter = false;
          },
          onCompleteParams: [index]
        })  
        .add(cb.bind(this, index), 0.8)
      
    });

  }

  onLeave_c() {

    log('leave');
    this.isEnter_c = false;    

    // log(this.isOpen);
    // if (!this.isOpen) return;

    // TweenMax.to(this.$bar_o.eq(1), 0.5, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // })   
    // TweenMax.to(this.$bar_o.eq(2), 0.45, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // })   
    // TweenMax.to(this.$bar_o.eq(3), 0.45, {
    //   scaleX: 1.0,
    //   z: 0,
    //   ease: Expo.easeOut,
    // }) 

  }

  toClose() {

    if (this.isCloseShow||this.isEnter||this.isLock) return;
    this.isLock = true;

    TweenMax.killTweensOf(this.$bar_o);

    if (this.tlToClose) this.tlToClose.kill();
    this.tlToClose = new TimelineMax();

    this.tlToClose
      // 3本消えて、
      .add(()=>{

        this.$bar_o.each((index, el)=>{

          // if (index==1) return;

          var tl = new TimelineMax({delay: index * 0.1});

          tl
            .set($(el), {'transform-origin': '100% 50%'})
            .to($(el), 0.4, {
              scaleX: 0.0,
              z: 0,
              ease: Expo.easeOut
            })  
          
        });

      }, 0.0)
      // 1本出てきて
        // ひとつ回転して、２つに別れる
      .add(()=>{

        var tl = new TimelineMax({delay: 0});

        TweenMax.killTweensOf(this.$bar_c.eq(1).parent());
        TweenMax.set(this.$bar_c.eq(1).parent(), {rotationZ: -45});

        tl
          .set(this.$bar_c.eq(0), {'transform-origin': '100% 50%'})
          .to(this.$bar_c.eq(0), 0.4, {
            scaleX: 1.0,
            z: 0,
            ease: Expo.easeOut
          })  
          .set(this.$bar_c.eq(1), {scaleX: 1.0}, 0.2)
          .to(this.$bar_c.eq(1).parent(), 0.4, {
            rotationZ: 45,
            z: 0,
            ease: Power2.easeOut
          }, 0.2)  

      }, 0.6 )
      .add(()=>{

        this.isLock = false;
        this.isCloseShow = true;

      }, 1.0)
      .add(()=>{

        this.timeline_close();

      }, 3.0)

    

  }

  toOpen() {

    if (!this.isCloseShow||this.isEnter_c||this.isLock) return;
    this.isLock = true;

    TweenMax.killTweensOf(this.$bar_c);

    if (this.tlToOpen) this.tlToOpen.kill();
    this.tlToOpen = new TimelineMax();

    this.tlToOpen
      // close 消える
      .add(()=>{

        this.$bar_c.each((index, el)=>{

          var tl = new TimelineMax({delay: index * 0.1});

          tl
            .set($(el), {'transform-origin': '0% 50%'})
            .to($(el), 0.4, {
              scaleX: 0.0,
              z: 0,
              ease: Expo.easeOut
            })  
          
        });

      }, 0.0)
      .add(()=>{

        this.show_o();

      }, 0.4)
      // open show
      .add(()=>{

        this.isCloseShow = false;
        this.isLock = false;

      }, 1.0 )

    

  }

  timeline_close() {

    this.timeline_close_stop();

    var kakudo = 180;
    var tani = 20;
    var divide = kakudo / tani;

    for (var i = 0; i < divide; i++) {

      TweenMax.set(this.$bar_c.eq(1).parent(), {rotationZ: '+=' + tani, delay: i * 0.4});

    }

    this.Timer = setTimeout(()=>{
        
      this.timeline_close();
        
    }, 10000);

  }

  timeline_close_stop() {

    TweenMax.killTweensOf(this.$bar_c.eq(1).parent());

    log(this.Timer);
    if (this.Timer) clearTimeout(this.Timer);

  }

  setEvents() {

    this.$wrap.on('mouseenter.btnOpen', this.onEnter.bind(this));
    this.$wrap.on('mouseleave.btnOpen', this.onLeave.bind(this));
    this.$wrap.on('mouseenter.btnOpen', this.onEnter_c.bind(this));
    this.$wrap.on('mouseleave.btnOpen', this.onLeave_c.bind(this));
    this.$wrap.on('click.btnOpen', this.toClose.bind(this));
    this.$wrap.on('click.btnOpen', this.toOpen.bind(this));

  }

  removeEvents() {

    this.$wrap.off('mouseenter.btnOpen');
    this.$wrap.off('mouseleave.btnOpen');

  }

}