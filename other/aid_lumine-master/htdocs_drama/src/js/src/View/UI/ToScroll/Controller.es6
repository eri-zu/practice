//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// howto
// <div data-link=".target" data-diff="30"></div>
// .targetのtop値を取得して、そこまでスクロール

import Scroll from './Scroll.es6';

export default class Controller {

  constructor($target=$('.toScroll'), $wrap=$('body,html')) {

    if (gb.u.dv.isPC) this.$wrap = $wrap;
    else this.$wrap = $('#wrapper');

    this.$target = $target;

    this.cb = ()=>{};

    this.setup();
    this.setEvents();

  }

  setup() {

    // Power3.easeInOut
    // Expo.easeInOut
    
    // CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1") //expo.easeOut
    // CustomEase.create("custom", "M0,0 C0.17,0 0.31,0.076 0.386,0.154 0.464,0.234 0.5,0.42 0.5,0.5 0.5,0.586 0.568,0.858 0.64,0.924 0.712,0.99 0.794,1 1,1") // しゅばっしゅばっと
    // CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.586,0.88,0.64,0.928,0.679,0.962,0.698,1,1,1") //Expo.easeInOut
    // CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1") //Expo.easeInOut outの方をさらにゆっくりめ
    this.ease = CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1"); //Expo.easeInOut outの方をさらにゆっくりめ

    // this.hashScroll();

    // top scroll
    this.adjustH = 0;
    var $t = $('.block02');
    var $s = $('.block01 .scroll');
    var targetST = $t.offset().top - gb.r.h + this.adjustH;
    var t = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec01scroll');
    t.cb = ()=>{

      TweenMax.set($s, {'position': 'absolute'});
      
      // t.removeEvents();

    };
    t.cb02 = ()=>{

      TweenMax.set($s, {'position': 'fixed'});
      
      // t.removeEvents();

    };


  }

  run(that) {

    // get target position
    var $target = $($(that).data("link"));
    var pos = $target.offset().top;

    // get diff
    var diff = 0;
    if ($(that).data('diff')) diff = $(that).data('diff');
    if (gb.r.w<768) diff *= 0.8;

    // calculate
    pos = pos - diff;
    if (gb.u.dv.isSP) pos += gb.s.st;

    if (!$('body').hasClass('isIE')) {
      // animation
      TweenMax.to(this.$wrap, 1.9, {
        scrollTop: pos,
        // ease: this.ease,
        ease: Power4.easeInOut,
        onComplete: ()=>{
         this.cb(); 
        }
      });
    } else {
      log('pos', pos);
      $('html,body').scrollTop(pos);
    }



    if (gb.menu.isOpen) gb.menu.close();



  }

  runTo(pos, cb=()=>{}) {

    // animation
    TweenMax.to(this.$wrap, 1.9, {
      scrollTop: pos,
      ease: this.ease,
      onComplete: ()=>{
        cb();
      }
    });

  }

  runToFirst(pos, dur=1.9, ease=Power1.easeInOut) {

    // animation
    TweenMax.to(this.$wrap, 1.9, {
      scrollTop: pos,
      // ease: Expo.easeInOut, //Expo.easeInOut,
      // ease: CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1"),
      // ease: CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.586,0.88,0.64,0.928,0.679,0.962,0.698,1,1,1"),
      ease: Power1.easeInOut,
    });

  }

  hashScroll() {

    var h = location.hash;
    if (h==''||h==null||h==undefined) return;

    var st01 = $('.section04').offset().top;
    var diff = 60;
    if (gb.r.w<768) diff *= 0.8;
    if (h=="#campaign") this.runTo(st01-diff, ()=>{});

  }

  setEvents () {

    var self = this;

    this.$target.not('.notScroll').on('click',function(){self.run.call(self,this);return false});

  }

}