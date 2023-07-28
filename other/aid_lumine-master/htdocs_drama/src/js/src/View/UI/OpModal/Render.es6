//--------------------------------------------------
//
//  RenderBase
//
//--------------------------------------------------

import RenderBase from './RenderBase.es6';

import LineBox from '../LineBox/Controller.es6';

export default class Render extends RenderBase {

  constructor($target) {

    super();

    this.$target = $target;

    this.setup();
    this.setEvents();

    this.isFirst = true;
    this.isLock = true;

  }

  setup() {

    $('html').addClass('is-hidden');


    this.$t = $('.lineBoxWrapVideo');
    var num = this.$t.data('color');
    this.l = new LineBox(this.$t, num);

    this.$target.find('.boxWrap .box').eq(1).find('.bg').addClass('inactive');
    $('.movieBox').eq(1).find('.bg').addClass('inactive');
    
  }

  show() {

    this.$target.show();

    var tl = new TimelineMax();

    tl
      .to(this.$target, 0.6, {
        opacity: 1,
        ease: Expo.easeOut,
      })
      .to(this.$videoWrap, 1.5, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
      }, .0)
      .to(this.$skip, 1.5, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
      }, .15)
      .to(this.$box, 1.5, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
      }, .15)

    $('html').addClass('is-hidden');

  }

  hide() {

    if (this.isLock) return;

    var tl = new TimelineMax();

    tl
      .to(this.$target, 1.8, {
          opacity: 0,
          ease: Power2.easeInOut,
          onComplete: ()=>{
            this.$target.hide();
          },
          onStart: ()=>{

            TweenMax.set($('.block01 .titMtach'), {opacity: 1});

          }
      })
      .to(this.$videoWrap, 1.2, {
        opacity: 0,
        y: 10,
        ease: Power2.easeOut,
      }, .0)
      .to(this.$skip, 1.2, {
        opacity: 0,
        y: 10,
        ease: Power2.easeOut,
      }, .0)
      .to(this.$box, 1.2, {
        opacity: 0,
        y: 10,
        ease: Power2.easeOut,
      }, .0)


      .add(()=>{

        if (this.isFirst) {

          gb.uic.bgMathRun_r();

          // $(window).scrollTop(0);
          // $('#wrapper').scrollTop(0);

          
          if (!$('body').hasClass('isIE')) {
            if (gb.u.dv.isPC) gb.u.o.disableScroll($(window));
            else gb.u.o.notMove(true, $('#inner'));
          }

        }

      }, 0.0)
      .add(()=>{

        if (this.isFirst) {
          this.isFirst = false;
          $(window).trigger('OpStart');
          this.$target.css('background', 'rgba(255,255,255,.85)');
          this.$skip.find('.text').text('CLOSE');
        }

      }, 2.0)

    $('html').removeClass('is-hidden');

  }

  first() {

    this.$modal = $('#modal');
    this.$videoWrap = this.$modal.find('.videoWrap');
    this.$video = this.$modal.find('#video');
    this.$skip = this.$modal.find('.skip');
    this.$box = this.$modal.find('.boxWrap .box');
    TweenMax.set(this.$skip, {y: 10});
    TweenMax.set(this.$box, {y: 10});

    var tl = new TimelineMax({delay: .5});

    tl
      .add(()=>{

        $('html').css('opacity', 1);
        gb.uic.bgMathRun()

      }, 1.0)
      .add(()=>{

        this.l.show(2.2, Expo.easeInOut);

      }, 2.0 + 0.0)
      .to(this.$video, 1.8, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 2.0 + 1.0)
      .to(this.$skip, 1.8, {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
      }, 2.0 + 1.2)
      .add(()=>{

        this.$box.each(function(index, el) {

          TweenMax.to($(el), 1.8, {
            opacity: 1,
            y: 0,
            delay: index * 0.2,
            ease: Power2.easeInOut,
          })
          
        });

      }, 2.0 + 1.2)      
      .add(()=>{

        this.isLock = false;

        TweenMax.to(this.$modal.find('#video'), 1.8, {
          opacity: 1,
          ease: Power2.easeInOut,
        })

      }, 2.0 + 2.2)


    this.hLock = false;
    this.zR = 0;
    // this.$skip.find('.skipInner').on('mouseenter', this.onEnter.bind(this));
    // this.$skip.find('.skipInner').on('mouseleave', this.onLeave.bind(this));

  }

  onEnter() {

    this.zR += 90;

    TweenMax.to(this.$skip.find('.img img'), 1.5, {
      rotationZ: this.zR,
      z: 0,
      ease: Expo.easeOut,
      onComplete: ()=>{

      }
    })
    
  }

  onLeave() {

    this.zR += 90;

    TweenMax.to(this.$skip.find('.img img'), 1.5, {
      rotationZ: this.zR,
      z: 0,
      ease: Expo.easeOut,
      onComplete: ()=>{

      }
    })

  }

  onHonpen() {

    TweenMax.to($('#video'), 1.5, {
      opacity: 1,
      ease: Power2.easeInOut,
      onComplete: ()=>{
        $('#video').css('pointer-events', 'auto');
      }
    })
    TweenMax.to($('#video2'), 1.5, {
      opacity: 0,
      ease: Power2.easeInOut,
      onComplete: ()=>{
        $('#video2').css('pointer-events', 'none');
      }
    })
    TweenMax.to($('.cover2'), 1.5, {
      opacity: 0,
      ease: Power2.easeInOut,
    })

    this.$target.find('.boxWrap .box .bg').removeClass('inactive');
    this.$target.find('.boxWrap .box').eq(1).find('.bg').addClass('inactive');
    $('.movieBox').find('.bg').removeClass('inactive');
    $('.movieBox').eq(1).find('.bg').addClass('inactive');

    gb.y2.p.player.pauseVideo()
    
  }

  onYokoku() {

    TweenMax.to($('#video'), 1.5, {
      opacity: 0,
      ease: Power2.easeInOut,
      onComplete: ()=>{
        $('#video').css('pointer-events', 'none');
      }
    })
    TweenMax.to($('#video2'), 1.5, {
      opacity: 1,
      ease: Power2.easeInOut,
      onComplete: ()=>{
        $('#video2').css('pointer-events', 'auto');
      }
    })
    TweenMax.to($('.cover2'), 1.5, {
      opacity: 1,
      ease: Power2.easeInOut,
    })

    this.$target.find('.boxWrap .box .bg').removeClass('inactive');
    this.$target.find('.boxWrap .box').eq(0).find('.bg').addClass('inactive');
    $('.movieBox').find('.bg').removeClass('inactive');
    $('.movieBox').eq(0).find('.bg').addClass('inactive');

    gb.y1.p.player.pauseVideo()

  }

  setEvents() {

    // this.first();

    this.$target.find('.boxWrap .box').eq(0).on('click', this.onHonpen.bind(this));
    this.$target.find('.boxWrap .box').eq(1).on('click', this.onYokoku.bind(this));
    $('.movieBox').eq(0).on('click', this.onHonpen.bind(this));
    $('.movieBox').eq(1).on('click', this.onYokoku.bind(this));

    if (gb.u.dv.isIe()) {

      $('html').css('opacity', 1);
          
      this.first();
        
      
    } else {

      $(window).one('youtubeReady', this.first.bind(this));

    }

  }
  
}