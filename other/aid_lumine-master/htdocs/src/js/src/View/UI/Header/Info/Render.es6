//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

export default class Render {

  constructor($wrap, $bg) {

    this.$wrap = $wrap;
    this.$sec = $wrap.find('.sec');

    this.isLock = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.h = this.$img.height();
    this.h = this.$sec.eq(0).innerHeight() + this.$wrap.find('.bar').height();
    
    TweenMax.set(this.$wrap, {display: 'none', opacity: 1, y: - this.h});
    TweenMax.set(this.$sec.eq(0).find('.inner'), {rotationZ: -10});


    this.startRotate = -30;
    this.startx = 400;
    this.startRotate_inner = 30;
    this.startx_inner = -400;
    this.endRotate = 30;
    this.endx = -400;
    this.endRotate_inner = -30;
    this.endx_inner = 400;

    // sec
    TweenMax.set(this.$sec.eq(1), {opacity: 0})
    TweenMax.set(this.$sec.eq(2), {opacity: 0})
    TweenMax.set(this.$sec.eq(3), {opacity: 0})
    this.switch_ready(1);
    this.switch_ready(2);
    this.switch_ready(3);

  }

  show() {

    var tl = new TimelineMax();

    tl
      // wrap
      .add(()=>{

        this.$wrap.css('display', 'block');
        TweenMax.to(this.$wrap, 0.8, {
          y: 0,
          ease: Elastic.easeOut.config(0.9, 0.8)
        })
      
      }, 0.0)
      // sec
      .add(()=>{

        TweenMax.to(this.$sec.eq(0).find('.inner'), 0.8, {
          rotationZ: 0,
          z: 0,
          ease: Elastic.easeOut.config(1.6, 0.8)
        })
      
      }, 0.15)
      // .add(()=>{

      //   this.hide();
      
      // }, 2.1)

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

  switch_next(index) {

    var tl = new TimelineMax();

    tl
      // prev
      .add(()=>{

        this.rotate = 0;
        this.x = 0;
        TweenMax.set(this.$sec.eq(index), {'transform-origin': '50% -200%'});
        TweenMax.to(this, 0.7, {
          rotate: this.endRotate,
          x: this.endx,
          ease: Expo.easeIn,
          onUpdate: ()=>{
            this.$sec.eq(index).css({transform: 'rotate('+this.rotate+'deg) '+'translateX('+this.x+'px)'});
          }
        })

        // this.rotate_inner = 0;
        // this.x_inner = 0;
        // TweenMax.set(this.$sec.eq(index).find('.inner'), {'transform-origin': '50% -200%'});
        // TweenMax.to(this, 0.7, {
        //   rotate_inner: this.endRotate_inner,
        //   x_inner: this.endx_inner,
        //   ease: Expo.easeIn,
        //   onUpdate: ()=>{
        //     this.$sec.eq(index).find('.inner').css({transform: 'translateX('+this.x_inner+'px) '+'rotate('+this.rotate_inner+'deg)'});
        //   }
        // })

        TweenMax.to(this.$sec.eq(index), 0.4, {
          opacity: 0,
          delay: 0.4,
          ease: Power2.easeInOut,
        })

      }, 0.0)
      // next
      .add(()=>{

        this.rotate_next = this.startRotate;
        this.x_next = this.startx;
        TweenMax.to(this, 0.7, {
          rotate_next: 0,
          x_next: 0,
          ease: Expo.easeOut,
          onUpdate: ()=>{
            this.$sec.eq(index+1).css({transform: 'rotate('+this.rotate_next+'deg) '+'translateX('+this.x_next+'px)'});
          },
          onComplete: ()=>{
            TweenMax.set(this.$sec.eq(index+1), {clearProps:'all'});
          }
        })

        // this.rotate_inner_next = this.startRotate_inner;
        // this.x_inner_next = this.startx_inner;
        // TweenMax.to(this, 0.7, {
        //   rotate_inner_next: 0,
        //   x_inner_next: 0,
        //   ease: Expo.easeOut,
        //   onUpdate: ()=>{
        //     this.$sec.eq(index+1).find('.inner').css({transform: 'translateX('+this.x_inner_next+'px) '+'rotate('+this.rotate_inner_next+'deg)'});
        //   }
        // })

        TweenMax.to(this.$sec.eq(index+1), 0.4, {
          opacity: 1,
          ease: Power2.easeInOut,
        })

      }, 0.5)

  }

  switch_prev(index) {

    var tl = new TimelineMax();

    tl
      // prev
      .add(()=>{

        this.rotate = 0;
        this.x = 0;
        TweenMax.set(this.$sec.eq(index), {'transform-origin': '50% -200%'});
        TweenMax.to(this, 0.7, {
          rotate: this.startRotate,
          x: this.startx,
          ease: Expo.easeIn,
          onUpdate: ()=>{
            this.$sec.eq(index).css({transform: 'rotate('+this.rotate+'deg) '+'translateX('+this.x+'px)'});
          }
        })

        // this.rotate_inner = 0;
        // this.x_inner = 0;
        // TweenMax.set(this.$sec.eq(index).find('.inner'), {'transform-origin': '50% -200%'});
        // TweenMax.to(this, 0.7, {
        //   rotate_inner: this.startRotate_inner,
        //   x_inner: this.startx_inner,
        //   ease: Expo.easeIn,
        //   onUpdate: ()=>{
        //     this.$sec.eq(index).find('.inner').css({transform: 'translateX('+this.x_inner+'px) '+'rotate('+this.rotate_inner+'deg)'});
        //   }
        // })

        TweenMax.to(this.$sec.eq(index), 0.4, {
          opacity: 0,
          delay: 0.4,
          ease: Power2.easeInOut,
        })

      }, 0.0)
      // next
      .add(()=>{

        this.rotate_next = this.endRotate;
        this.x_next = this.endx;
        TweenMax.set(this.$sec.eq(index-1), {'transform-origin': '50% -200%'});
        TweenMax.to(this, 0.7, {
          rotate_next: 0,
          x_next: 0,
          ease: Expo.easeOut,
          onUpdate: ()=>{
            this.$sec.eq(index-1).css({transform: 'rotate('+this.rotate_next+'deg) '+'translateX('+this.x_next+'px)'});
          }
        })

        // this.rotate_inner_next = this.endRotate_inner;
        // this.x_inner_next = this.endx_inner;
        // TweenMax.set(this.$sec.eq(index-1).find('.inner'), {'transform-origin': '50% -200%'});
        // TweenMax.to(this, 0.7, {
        //   rotate_inner_next: 0,
        //   x_inner_next: 0,
        //   ease: Expo.easeOut,
        //   onUpdate: ()=>{
        //     this.$sec.eq(index-1).find('.inner').css({transform: 'translateX('+this.x_inner_next+'px) '+'rotate('+this.rotate_inner_next+'deg)'});
        //   }
        // })

        TweenMax.to(this.$sec.eq(index-1), 0.4, {
          opacity: 1,
          ease: Power2.easeInOut,
        })

      }, 0.5)

  }

  switch_ready(index) {

    var rotate = this.startRotate;
    var x = this.startx;
    TweenMax.set(this.$sec.eq(index), {'transform-origin': '50% -200%'});
    this.$sec.eq(index).css({transform: 'rotate('+rotate+'deg) '+'translateX('+x+'px)'});

    // var rotate = this.startRotate_inner;
    // var x = this.startx_inner;
    // TweenMax.set(this.$sec.eq(index).find('.inner'), {'transform-origin': '50% -200%'});
    // this.$sec.eq(index).find('.inner').css({transform: 'translateX('+x+'px) '+'rotate('+rotate+'deg)'});

  }

  setEvents() {

    this.$sec.eq(0).find('.btn').on('click', (e)=>{this.switch_next(0);});
    this.$sec.eq(1).find('.btn').eq(1).on('click', (e)=>{this.switch_next(1);});
    this.$sec.eq(2).find('.btn').eq(1).on('click', (e)=>{this.switch_next(2);});
    this.$sec.eq(1).find('.btn').eq(0).on('click', (e)=>{this.switch_prev(1);});
    this.$sec.eq(2).find('.btn').eq(0).on('click', (e)=>{this.switch_prev(2);});
    this.$sec.eq(3).find('.btn').eq(0).on('click', (e)=>{this.switch_prev(3);});
    this.$sec.eq(3).find('.btn').eq(1).on('click', (e)=>{this.hide();});
    // this.$sec.eq(3).on('click', (e)=>{this.switch_next(0);});

  }

}
