//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import LineBox from './LineBox/Controller.es6';
import Youtube from './Youtube/Controller.es6';

import OpModal from './OpModal/Controller.es6';
import Menu from './Menu/Controller.es6';

import ToScroll from './ToScroll/Controller.es6';
import MatchMove from './MatchMove/Controller.es6';
import MatchMove_Bg from './MatchMove_Bg/Controller.es6';
import Match_dist from './Match_dist/Controller.es6';

import Play from './Play/Controller.es6';
import SectionDir from './SectionDir/Controller.es6';
import Slider from './Slider/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.isREv = true;

    this.setup();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    gb.y1 = new Youtube('video', 'qb3Cq6kLrz0');
    gb.y2 = new Youtube('video2', 'HkPeh9U_g1s');

    var $t = $('.lineBoxWrap');
    this.lList = [];
    for (var i = 0; i < $t.length; i++) {
      var $tt = $t.eq(i);
      var num = $tt.data('color');
      var l = new LineBox($tt, num);
      l.show(0.0);
      this.lList.push(l);
    }

    gb.opModal = new OpModal($('.toggle_opModal'),$('.open_opModal'),$('.close_opModal'),$('.opModal_contents'));
    gb.menu = new Menu($('.toggle_menu'),$('.open_menu'),$('.close_menu'),$('.menu_contents'));

    // gb.mv = new Mv();
    gb.tos = new ToScroll();

    new Play();
    new Slider();

    this.setup_bgMatch();
    this.setup_op()
    
  }

  setup_op() {

    this.$wrap = $('.block').not('.block01');
    this.$img = $('.block01 .imgMv');
    this.$tit = $('.block01 .titMtach');
    this.$subTit = $('.block01 .titGirl');
    this.$textObiTop = $('.block01 .textObiTop');
    this.$textObi = $('.block01 .textObi.pc');
    if (gb.r.w<=768) this.$textObi = $('.block01 .textObi.sp');
    this.$scroll = $('.block01 .scroll');
    this.$list = $('.block01 .list .item');
    this.$menuBtn = $('#header .menuBtn');

    this.$webtext = $('.block01 .webtext');
    this.$logotop = $('.block01 .logotop');

    this.$sns = $('#header .sns .item');
    this.$line = $('.block01 .lineBox');

    var sc = 1.07;
    if (gb.r.w<=768) sc = 1.2;

    TweenMax.set(this.$wrap, {opacity: 0});
    TweenMax.set(this.$img, {opacity: 0, scale: 1.05});
    TweenMax.set(this.$tit, {opacity: 0});
    TweenMax.set(this.$subTit, {opacity: 0,scale: sc});
    TweenMax.set(this.$logotop, {opacity: 0,scale: sc});
    TweenMax.set(this.$textObiTop.find('.bg'), {scaleY: 0});
    TweenMax.set(this.$textObiTop.find('svg path'), {opacity: 0, y: -8});
    TweenMax.set(this.$textObi, {scale: sc});
    TweenMax.set(this.$textObi.find('svg path, svg polyline'), {opacity: 0});
    TweenMax.set(this.$webtext, {scale: sc});
    TweenMax.set(this.$webtext.find('svg path, svg polyline'), {opacity: 0});
    TweenMax.set(this.$scroll, {opacity: 0});
    TweenMax.set(this.$list, {opacity: 0, y: -10});
    TweenMax.set(this.$sns, {y: - this.$sns.height()});
    TweenMax.set(this.$sns.find('svg'), {opacity: 0, y: -10});
    if (gb.r.w<=768) TweenMax.set(this.$menuBtn, {y: - this.$menuBtn.height()});
    // TweenMax.set(this.$line, {opacity: 0});
    var cb=()=>{};  


    // mv match
    if (gb.r.w<=768) {
      var base = 375;
      var rate = gb.r.w / base;
      TweenMax.set($('.tit_matches').parent(), {scale: 0.5 * rate});
    }
    this.titMatches = [];
    $('.tit_matches .itemW').each((index, el)=>{

      // if (index>1) return;
      // if (index!==1) return;
      
      var m = new MatchMove($(el));
      this.titMatches.push(m);

    });

    // mv linebox
    var $t = $('.lineBoxWrapMV');
    var num = $t.data('color');
    this.l = new LineBox($t, num, true);
    TweenMax.set($t.find('.lineBox'), {z: 0, 'z-index': 2});

    // var adj = 100;
    // if (gb.r.w<=768) adj = 70;
    var adj = 0;
    var top = this.$tit.find('img').offset().top + this.$tit.find('img').height() / 2 - gb.r.h / 2 + adj;
    gb.tos.runTo(top);
    
  }

  setup_bgMatch() {


    var tl = new TimelineMax({delay: 0.0});

    tl
      .add(()=>{

        this.mb = [];
        $('.matches.mv .itemW').each((index, el)=>{

          // if (index>0) return;
          // if (index!==1) return;

          var $a = $('.ashiato .itemWA').eq(index);

          var m = new MatchMove_Bg($(el), $a);
          this.mb.push(m);

        });

      }, 0.0)
      // .add(()=>{

      //   for (var i = 0; i < this.mb.length; i++) {
      //     var m = this.mb[i];
      //     // m.timeline();
      //     m.timeline_r();
      //   }

      // }, 2.0)
      // .add(()=>{

      //   for (var i = 0; i < this.mb.length; i++) {
      //     var m = this.mb[i];
      //     m.timeline_r();
      //   }
        

      // }, 8.0)

  }

  bgMathRun() {

    for (var i = 0; i < this.mb.length; i++) {
      var m = this.mb[i];
      m.timeline_r();
    }

  }

  bgMathRun_r() {

    for (var i = 0; i < this.mb.length; i++) {
      var m = this.mb[i];
      m.timeline();
    }

  }

  timeline() {

    var tl = new TimelineMax({delay: 0.0});

    tl
      // tit match
      .add(()=>{

        for (var i = 0; i < this.titMatches.length; i++) {
          var m = this.titMatches[i];
          m.timeline();
        }

      }, .0)
      .add(()=>{

        var adj = 150;
        if (gb.r.w<=768) adj = 70;
        gb.tos.runToFirst('+=' + adj, 3.0);

      }, 1.2)
      .to(this.$subTit, 1.4, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 1.3)
      .add(()=>{

        TweenMax.to(this.$subTit, 1.2, {
          opacity: 1,
          ease: Power2.easeInOut,
          onStart: ()=>{
            TweenMax.to(this.$subTit, 5.0, {
                scale: 1,
                ease: Power2.easeOut,
            })
          }
        })

      }, 1.3)
      .add(()=>{

        // webtext
        this.$webtext.find('svg path, svg polyline').each(function(index, el) {

          TweenMax.to($(el), 1.4, {
            opacity: 1,
            delay: index * 0.05,
            ease: Power2.easeInOut,
          })
          TweenMax.to($(el), 1.4, {
            x: 0,
            y: 0,
            delay: index * 0.05,
            ease: Power2.easeOut,
          })
          
        });

        TweenMax.to(this.$webtext, 5.0, {
          scale: 1,
          ease: Power2.easeOut,
        })

      }, 1.3)
      // textobi
      .add(()=>{

        this.$textObi.find('svg path, svg polyline').each(function(index, el) {

          TweenMax.to($(el), 1.4, {
            opacity: 1,
            delay: index * 0.05,
            ease: Power2.easeInOut,
          })
          TweenMax.to($(el), 1.4, {
            x: 0,
            y: 0,
            delay: index * 0.05,
            ease: Power2.easeOut,
          })
          
        });

        TweenMax.to(this.$textObi, 5.0, {
          scale: 1,
          ease: Power2.easeOut,
        })

      }, 1.3 + 0.7)
      // logotop
      .add(()=>{

        TweenMax.to(this.$logotop, 1.2, {
          opacity: 1,
          ease: Power2.easeInOut,
          onStart: ()=>{
            TweenMax.to(this.$logotop, 5.0, {
                scale: 1,
                ease: Power2.easeOut,
            })
          }
        })

      }, 1.3 + 2.5)

      // scrollTop
      .add(()=>{

        gb.tos.runToFirst(0);

      }, 3.0 + 2.0)

      // line
      .add(()=>{
        this.l.show(2.2, Expo.easeInOut);
      }, 3.0 + 2.5)
      // img
      .to(this.$img, 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
        onStart: ()=>{
          TweenMax.to(this.$img, 5.0, {
              scale: 1,
              ease: Power2.easeOut,
          })
        }
      }, 3.0 + 3.5)
      // obi
      .add(()=>{

        TweenMax.to(this.$textObiTop.find('.bg'), 1.2, {
          scaleY: 1,
          ease: Power3.easeInOut,
        })
        this.$textObiTop.find('svg path').each(function(index, el) {

          TweenMax.to($(el), 1.4, {
            opacity: 1,
            delay: 0.5 + index * 0.1,
            ease: Power2.easeInOut,
          })
          TweenMax.to($(el), 1.4, {
            x: 0,
            y: 0,
            delay: 0.5 + index * 0.1,
            ease: Power2.easeOut,
          })
          
        });


      }, 3.0 + 3.5)
           
      
      .add(()=>{

        // item
        this.$list.each(function(index, el) {

          TweenMax.to($(el), 1.0, {
            opacity: 1,
            y: 0,
            z: 0,
            delay: index * 0.1,
            ease: Power2.easeOut,
          })
          
        });

        // sns
        this.$sns.each(function(index, el) {

          TweenMax.to($(el), 1.0, {
            y: 0,
            delay: index * 0.1,
            ease: Power2.easeOut,
          })
          TweenMax.to($(el).find('svg'), 1.0, {
            opacity: 1,
            y: 0,
            delay: 0.2 + index * 0.1,
            ease: Power2.easeOut,
          })
          
        });
        if (gb.r.w<=768) {
          TweenMax.to(this.$menuBtn, 1.0, {
            y: 0,
            ease: Power2.easeOut,
          })
        }

      }, 3.0 + 4.5)
      .to(this.$scroll, 1.0, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 3.0 + 4.5)

      .to(this.$wrap, 1.0, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 3.0 + 4.5)
      .add(()=>{

        $('.ashiato').css('position', 'absolute');
        $('.matches').css('position', 'absolute');
        gb.uic.bgMathRun();

        this.isOpEnd = true;

      }, 3.0 + 5.0)
      .add(()=>{

        new SectionDir();
        // if (gb.u.dv.isPC) $('.matchD').each(function(index, el) {new Match_dist($(el));});
        if (!$('body').hasClass('isIE')) $('.matchD').each(function(index, el) {new Match_dist($(el));});

      }, 3.0 + 7.0)
      .add(()=>{

        if (!gb.u.dv.isIe()) {
          if (gb.u.dv.isPC) gb.u.o.enableScroll($(window));
          else gb.u.o.notMove(false, $('#inner'));
        }

      }, 3.0 + 8.0)
     
  }

  update() {

 
  }

  onResize() {

    for (var i = 0; i < this.lList.length; i++) {
      this.lList[i].onResize();
    }

    this.l.onResize();

    if (gb.r.w<=768) {
      var base = 375;
      var rate = gb.r.w / base;
      TweenMax.set($('.tit_matches').parent(), {scale: 0.5 * rate});
    }

  }

  setEvents() {

    super.setEvents();

    $(window).on('OpStart', (event)=>{
      this.timeline();
    });

  }

}