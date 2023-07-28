//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Render from './Render.es6';

import NigiyakaC from './NigiyakaC/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.$section = $('.sectionWrap');
    this.urlList = [
      'top', // 0
      'talk', // 1
      'warikan', // 2
      'tap', // 3
      'tour', // 4
      'cm', // 5
    ]
    this.$coverWrap = $('.coverWrap');
    this.$cover = $('.cover');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.$tit = $('.id_top .section01 .titWrap .tit');
    this.$subTit = $('.id_top .section01 .titWrap .subTit');
    this.$nigiyakaWrap = $('.id_top .section01 .titWrap .nigiyakaWrap');
    this.$budge = $('header.notLower .budge');
    this.$menu1 = $('header.notLower .menus .menu');
    this.$menu2 = $('header.notLower .menus .line');
    this.$menu3 = $('header.notLower .menus .tw');
    this.$menu4 = $('header.notLower .menus .fb');
    this.$footer = $('#footer');

    gb.nc = this.nc = new NigiyakaC();

    this.isUEv = true;
    this.isUpdate = false;

    var o = gb.urlm.q.parse();
    if (o.page==undefined) this.onReady();

  }

  update() {


  }

  show(cb, url, toTop, isMenu, isBB=false, prev=null) {

    var dur = 0.4;
    var delay = .5;
    if (isMenu) delay = 0.0;

    gb.menu.close(false);

    // to Top
    if (toTop) {

      var tl = new TimelineMax({delay: 0.0});

      tl
        .add(()=>{this.$coverWrap.show();}, 0.0)
        // x
        .set(this.$coverWrap, {x: '0%', width: 0, 'overflow': 'hidden', opacity: 1}, 0.0)
        .set(this.$cover, {x: '0%', width: gb.r.w}, 0.0)
        // naname
        // .set(this.$coverWrap, {x: -100 * 3, y: 30 * 3, opacity: 0, width: gb.r.w, 'overflow': 'hidden'}, 0.0)
        // .set(this.$cover, {x: '0%', width: gb.r.w}, 0.0)

        .add(()=>{

          if (prev==null) {

            var o = gb.urlm.q.parse();
            var num = 0;
            if (o.page=='talk') num = 1;
            if (o.page=='warikan') num = 2;
            if (o.page=='tap') num = 3;
            if (o.page=='tour') num = 4;
            if (o.page=='cm') num = 5;
            if (o.page==undefined) this.topHide();
            else if (o.page=='tour'||o.page=='cm') this.pageHide('lower', num);
            else this.pageHide('gameList', num);

          } else {

            var num = 0;
            if (prev=='talk') num = 1;
            if (prev=='warikan') num = 2;
            if (prev=='tap') num = 3;
            if (prev=='tour') num = 4;
            if (prev=='cm') num = 5;
            if (prev=='/') this.topHide();
            else if (prev=='tour'||prev=='cm') this.pageHide('lower', num);
            else this.pageHide('gameList', num);

          }

        }, 0.0)
        // // x
        .to(this.$coverWrap, dur, {
          width: '100%',
          ease: Expo.easeInOut,
        }, delay)
        .add(()=>{

          this.nc.show(true, cb.bind(this, url, isBB));

        }, delay + 0.0)
        // naname
        // .to(this.$coverWrap, dur, {
        //   x: 0,
        //   y: 0,
        //   opacity: 1,
        //   ease: Expo.easeOut,
        //   onComplete: ()=>{

        //     cb(url, isBB);

        //   }
        // }, delay)

    // no toTop
    } else {

      var tl = new TimelineMax({delay: 0.0});

      tl
        .add(()=>{this.$coverWrap.show();}, 0.0)
        // x
        .set(this.$coverWrap, {x: 0}, 0.0)
        .set(this.$cover, {x: '0%', width: '0%'}, 0.0)
        // naname
        // .set(this.$coverWrap, {x: -100 * 3, y: 30 * 3, opacity: 0, width: gb.r.w, 'overflow': 'hidden'}, 0.0)
        // .set(this.$cover, {x: '0%', width: gb.r.w}, 0.0)

        .add(()=>{

          if (prev==null) {

            var o = gb.urlm.q.parse();
            var num = 0;
            if (o.page=='talk') num = 1;
            if (o.page=='warikan') num = 2;
            if (o.page=='tap') num = 3;
            if (o.page=='tour') num = 4;
            if (o.page=='cm') num = 5;
            if (o.page==undefined) this.topHide();
            else if (o.page=='tour'||o.page=='cm') this.pageHide('lower', num);
            else this.pageHide('gameList', num);

          } else {

            var num = 0;
            if (prev=='talk') num = 1;
            if (prev=='warikan') num = 2;
            if (prev=='tap') num = 3;
            if (prev=='tour') num = 4;
            if (prev=='cm') num = 5;
            if (prev=='/') this.topHide();
            else if (prev=='tour'||prev=='cm') this.pageHide('lower', num);
            else this.pageHide('gameList', num);

          }

        }, 0.0)

        // // x
        .to(this.$cover, dur, {
          // x: '0%',
          width: '100%',
          ease: Expo.easeInOut,
        }, delay)
        .add(()=>{

          this.nc.show(true, cb.bind(this, url, isBB));

        }, delay + 0.0)
        // naname
        // .to(this.$coverWrap, dur, {
        //   x: 0,
        //   y: 0,
        //   opacity: 1,
        //   ease: Expo.easeOut,
        //   onComplete: ()=>{

        //     cb(url, isBB);

        //   }
        // }, delay)

    }

  }

  hide(isFirst=false, isTop=false) {

    var num = 0;

    var o = gb.urlm.q.parse();
    $('header').hide().removeClass('showSNS');

    var de = 0.0;
    if (isFirst) de = .5;
    if (isTop) de = 0;
    var dur = .4;

    log('page', o.page);

    // top
    if (o.page==undefined) {

      this.$section.eq(0).show();
      $('header.notLower').show().addClass('showSNS');

      // cover
      this.$cover.css({'background':'url(/assets/resource/img/bgTop.jpg)','background-size': '100%'});

      TweenMax.set(this.$tit, {clearProps:'all'});
      TweenMax.set(this.$subTit, {clearProps:'all'});
      TweenMax.set(this.$nigiyakaWrap, {
        rotationZ: -4,
        x: 0,
        y: 0,
        opacity: 1,
      })

      this.onReady();

      var showDelay = 0.0;
      var tl = new TimelineMax({delay: de});

      tl
        .add(()=>{
          this.$coverWrap.show();
          TweenMax.set(this.$coverWrap, {x: 0, width: gb.r.w, 'overflow': 'hidden'});
          TweenMax.set(this.$cover, {x: '0%', width: '100%'});

          gb.uic.timeline();

        }, 0.0)
        .add(()=>{
          
          $('body').css('opacity', 1);
        }, showDelay)

        // // x
        .to(this.$coverWrap, dur, {
          x: -gb.r.w,
          ease: Expo.easeInOut,
        }, showDelay + 0.05)
        .to(this.$cover, dur, {
          x: '100%',
          ease: Expo.easeInOut,
          onComplete: ()=>{
            this.$coverWrap.hide();
          }
        }, showDelay + 0.05)
        // naname
        // .to(this.$coverWrap, dur, {
        //   x: -gb.r.w,
        //   ease: Expo.easeInOut,
        // }, showDelay + 0.05)
        // .to(this.$cover, dur, {
        //   x: '100%',
        //   ease: Expo.easeInOut,
        //   onComplete: ()=>{
        //     this.$coverWrap.hide();
        //   }
        // }, showDelay + 0.05)

        .add(()=>{

          this.topShow();

        }, showDelay + 0.2)

    } else {

      if (o.page=='talk') this.$cover.css({'background':'#FFF9B2'});
      if (o.page=='warikan') this.$cover.css({'background':'#FDD7BB'});
      if (o.page=='tap') this.$cover.css({'background':'#ECF0B3'});
      if (o.page=='tour') this.$cover.css({'background':'#F7B8BF'});
      if (o.page=='cm') this.$cover.css({'background':'#E8E8E8'});

      // ready

      this.onReady();

      if (isFirst) {

        var tl = new TimelineMax({delay: de});

        tl
          .add(()=>{
            this.$coverWrap.show();
            // x
            TweenMax.set(this.$coverWrap, {x: 0});
            TweenMax.set(this.$cover, {width: '0%'});
            // naname
            // TweenMax.set(this.$coverWrap, {x: 0, y: 0, opacity: 1});
            // TweenMax.set(this.$cover, {width: '100%'});

            $('body').css('opacity', 1);

          }, 0.0)
          // x
          .to(this.$cover, dur, {
            width: '100.1%',
            ease: Power2.easeOut,
          }, 0.0)
          // naname
          // .to(this.$cover, dur, {
          //   x: 0,
          //   y: 0,
          //   opacity: 1,
          //   ease: Expo.easeOut,
          // }, 0.0)
          .add(()=>{

            if (o.page=='talk') {
              $('html').css({'background':'#FFF9B2'});
              $('header.notLower').show();
              num = 1;
            }
            if (o.page=='warikan') {
              $('html').css({'background':'#FDD7BB'});
              $('header.notLower').show();
              num = 2;
            }
            if (o.page=='tap') {
              $('html').css({'background':'#ECF0B3'});
              $('header.notLower').show();
              num = 3;
            }
            if (o.page=='tour') {
              $('html').css({'background':'#F7B8BF'});
              $('header.lower2').show();
              num = 4;
            }
            if (o.page=='cm') {
              $('html').css({'background':'#E8E8E8'});
              $('header.lower2').show();
              num = 5;
            }

            this.$section.hide();
            this.$section.eq(num).show();

          }, .1)

          // x
          .to(this.$coverWrap, dur, {
            x: gb.r.w,
            ease: Power2.easeOut,
            onComplete: ()=>{

              this.$coverWrap.hide();

            }
          }, .1)
          // naname
          // .to(this.$coverWrap, dur, {
          //   x: 100 * 3, y: -30 * 3, opacity: 0,
          //   ease: Expo.easeOut,
          //   onComplete: ()=>{

          //     this.$coverWrap.hide();

          //   }
          // }, .1)
          .add(()=>{

            if (o.page=='tour'||o.page=='cm') this.pageShow('lower', num);
            else this.pageShow('gameList', num);

          }, .3)

      } else {

        var tl = new TimelineMax({delay: de});

        tl
          .add(()=>{
            this.$coverWrap.show();
            // x
            TweenMax.set(this.$coverWrap, {x: 0});
            TweenMax.set(this.$cover, {width: '100.1%',});
            // naname
            // TweenMax.set(this.$coverWrap, {x: 0, y: 0, opacity: 1});
            // TweenMax.set(this.$cover, {width: '100%'});

            if (o.page=='talk') {
              $('header.notLower').show();
              num = 1;
            }
            if (o.page=='warikan') {
              $('header.notLower').show();
              num = 2;
            }
            if (o.page=='tap') {
              $('header.notLower').show();
              num = 3;
            }
            if (o.page=='tour') {
              $('header.lower2').show();
              num = 4;
            }
            if (o.page=='cm') {
              $('header.lower2').show();
              num = 5;
            }

          }, 0.0)

          // x
          .to(this.$coverWrap, dur, {
            x: gb.r.w,
            ease: Power2.easeOut,
            onComplete: ()=>{

              this.$coverWrap.hide();

            }
          }, .1)
          // naname
          // .to(this.$coverWrap, dur, {
          //   x: 100 * 3, y: -30 * 3, opacity: 0,
          //   ease: Expo.easeOut,
          //   onComplete: ()=>{

          //     this.$coverWrap.hide();

          //   }
          // }, .1)
          .add(()=>{

            if (o.page=='tour'||o.page=='cm') this.pageShow('lower', num);
            else this.pageShow('gameList', num);

          }, .3)

      }
    }

  }

  onReady() {

    // tapBtn ready
    var ookisa = 100;
    this.$t = $('.id_top .section .btns .btn');
    TweenMax.set(this.$t, {x: ookisa, y: ookisa, opacity: 0});

    TweenMax.set(this.$tit, {opacity: 0});
    TweenMax.set(this.$subTit, {opacity: 0});
    // this.$nigiyakaWrap.css('width', 'auto');
    var w = 270 * gb.r.w / 375;
    this.$nigiyakaWrap.css('width', w);
    this.nw = w;
    TweenMax.set(this.$nigiyakaWrap, {width: 0});
    TweenMax.set(this.$budge, {opacity: 0, scale: 1.5});
    TweenMax.set(this.$menu1, {opacity: 0});
    TweenMax.set(this.$menu2, {opacity: 0});
    TweenMax.set(this.$menu3, {opacity: 0});
    TweenMax.set(this.$menu4, {opacity: 0});
    TweenMax.set(this.$footer, {opacity: 0});

    TweenMax.set($('#wrapper .hidePage'), {opacity: 0});
    TweenMax.set($('#wrapper .hideBtn'), {opacity: 0});

    log('sfsf');

    // tapBtn ready
    var ookisa = 50;
    this.$mb = this.$menu1.add(this.$menu2).add(this.$menu3).add(this.$menu4);
    TweenMax.set(this.$mb, {x: ookisa, y: ookisa, opacity: 0});

  }

  topShow() {

    var tl = new TimelineMax();

    tl
      // tit
      // .add(()=>{

      //   var len = 2;
      //   for (var i = 0; i < len; i++) {
      //     var $c = this.$tit.clone();
      //     var pos = this.$tit.get(0).getBoundingClientRect();
      //     var left = this.$tit.get(0).offsetLeft;
      //     var top = this.$tit.get(0).offsetTop;
      //     // var pos = this.$tit.offset();
      //     TweenMax.set($c, {left: left, top: top, 'position': 'absolute' ,opacity: 0});
      //     $('.section01 .titWrap').prepend($c);
      //   }



      //   $('.section01 .titWrap .tit').each((index, el)=>{

      //     var tl = new TimelineMax();
      //     tl
      //       .add(()=>{
      //         if (index!==len) TweenMax.set($(el), {opacity: .3})
      //         else TweenMax.set($(el), {opacity: 1})
      //         $(el).find('.in').addClass('runner')
      //       }, .1 * index)
      //       .add(()=>{
      //         if (index!==len) TweenMax.to($(el), .2, {opacity: 0, ease: Expo.easeOut})
      //       }, .1 * index + 0.3)
          
      //   });

      // }, 0.0)
      // tit
      .add(()=>{

        var num = 5;
        TweenMax.set(this.$tit, {'z-index': num+1});

        // clone
        var x = 0;
        var y = 0;
        for (var i = 0; i < num; i++) {

          x += 3;
          y += 3;
          var $clone = this.$tit.clone();
          var left = this.$tit.get(0).offsetLeft;
          var top = this.$tit.get(0).offsetTop;
          TweenMax.set($clone, {left: left, top: top, 'position': 'absolute' ,opacity: 0,'z-index': num-i});
          TweenMax.set($clone.find('.in'), {x: x, y: y});
          this.$tit.parent().append($clone);
        }

        var tl = new TimelineMax();
        var $t = this.$tit.parent().find('.tit');
        var len = $t.length;


        tl
          .add(()=>{


            $t.each((index, el)=>{

              TweenMax.set($t.eq(len-1-index), {
                opacity: 1, 
                delay: index * .05
              });

            });

          }, 0.0)
          .add(()=>{

            var x = 0;
            var y = 0;

            $t.each((index, el)=>{

              if (index==len-1) return;

              var $s = $t.eq(len-1-index);

              TweenMax.set($s, {
                opacity: 0, 
                delay: index * .05,
                onComplete: ($ta, index)=>{
                  $ta.remove();
                },
                onCompleteParams: [$s, index]
              });
              
            });

          }, 0.2)

      }, 0.0)
      // subTit
      .add(()=>{

        TweenMax.set(this.$subTit, {opacity: 1})
        this.$subTit.find('.in').addClass('runner')

      }, 0.3)

      .to(this.$nigiyakaWrap, 0.6, {
        width: this.nw,
        ease: Expo.easeOut,
      }, 0.5)


      // tapBtn¤Î±íÊ¾
      .add(()=>{

        this.$t.each(function(index, el) {

          var ookisa = 0;
          TweenMax.to($(el), 1.0, {
            x: ookisa, 
            y: ookisa, 
            opacity: 1, 
            delay: 0.1 * index,
            // ease: Expo.easeOut
            ease: Elastic.easeOut.config(.8, 0.5)
          });
          
        });

        // $('.new').each(function(index, el) {

        //   TweenMax.set($(el).find('polygon'), {transformOrigin: '50% 50%'});
        //   TweenMax.to($(el).find('polygon'), 5.0, {
        //     rotationZ: 360,
        //     repeat: -1,
        //     ease: Power0.easeNone,
        //   })
          
        // });


      }, -2.4 + 3.0)
      // menu btns
      .add(()=>{

        this.$mb.each(function(index, el) {

          var ookisa = 0;
          TweenMax.to($(el), 1.0, {
            x: ookisa, 
            y: ookisa, 
            opacity: 1, 
            delay: 0.1 * index,
            // ease: Expo.easeOut
            ease: Elastic.easeOut.config(.8, 0.5)
          });
          
        });

      }, -2.4 + 3.5)

      // budge
      .add(()=>{

        // TweenMax.to(this.$budge, 1.0, {
        //   opacity: 1,
        //   scale: 1,
        //   ease: Expo.easeIn,
        // })

        TweenMax.set(this.$budge, {opacity: 1});
        TweenMax.to(this.$budge, .4, {
          scale: 1,
          delay: 0.02,
          ease: Expo.easeOut,
        })
        TweenMax.to(this.$footer, 1.0, {
          opacity: 1,
          ease: Power2.easeInOut,
          onComplete: ()=>{
          }
        })

        // wiggle
        // var ta = new TimelineMax();
        // ta
        //   .add(()=>{

        //     var maxcnt = 25;
        //     var cnt = 0;
        //     var $t = $('.section01 .titWrap .tit');
        //     wiggle($t);
            
        //     function wiggle(selector){
        //       $(selector).each(function() {
        //         // wiggleProp(this, 'scale', 0.93, 1);
        //         // wiggleProp(this, 'rotation', -1, 1);
        //         wiggleProp(this, 'x', -15, 15);
        //         wiggleProp(this, 'y', -15, 15);
        //       })
        //     }

        //     function wiggleProp(element, prop, min, max) {
        //       // var duration = Math.random() * .01 + .01;
        //       var duration = .01;
              
        //       var tweenProps = {
        //         ease: Power1.easeInOut,
        //         onComplete: wiggleProp,
        //         onCompleteParams: [element, prop, min, max]
        //       };
        //       tweenProps[prop] = Math.random() * (max - min) + min;

        //       if (maxcnt>cnt) TweenMax.to(element, duration, tweenProps);
        //       else TweenMax.set($($t), {x: 0, y:0, scale: 1, rotation: -4});
        //       cnt++;
        //       log(cnt)
        //     }            

        //   }, 0.98)

      }, -2.4 + 4.0)


  }

  pageShow(page, num) {

    if (page=='gameList') {

      var tl = new TimelineMax();

      tl
        // tit
        .add(()=>{

          var $t = this.$section.eq(num).find('.hidePage');

          TweenMax.set($t, {x: - 20 * 2, y: 5 * 2, opacity: 0});

          $t.each(function(index, el) {

            TweenMax.to($(el), .4, {
              x: 0, 
              y: 0, 
              opacity: 1, 
              delay: 0.1 * index,
              ease: Expo.easeOut
            });
            
          });

          $t = this.$section.eq(num).find('.hideBtn');
          var ookisa = 100;
          TweenMax.set($t, {x: ookisa, y: ookisa, opacity: 0});
          $t.each(function(index, el) {
            
            TweenMax.to($(el), .4, {
              x: 0, 
              y: 0, 
              opacity: 1, 
              delay: 0.1 * index,
              ease: Expo.easeOut
            });
            
          });

        }, 0.0)

        // menu btns
        .add(()=>{

          this.$mb.each(function(index, el) {

            var ookisa = 0;
            TweenMax.to($(el), 1.0, {
              x: ookisa, 
              y: ookisa, 
              opacity: 1, 
              delay: 0.1 * index,
              // ease: Expo.easeOut
              ease: Elastic.easeOut.config(.8, 0.5)
            });
            
          });

        }, .4)

        // budge
        .add(()=>{

          TweenMax.set(this.$budge, {opacity: 1});
          TweenMax.to(this.$budge, .4, {
            scale: 1,
            delay: 0.02,
            ease: Expo.easeOut,
          })
          TweenMax.to(this.$footer, 1.0, {
            opacity: 1,
            ease: Power2.easeInOut,
            onComplete: ()=>{
            }
          })

        }, .4)

    } else {

      var tl = new TimelineMax();

      tl
        // tit
        .add(()=>{

          var $t = this.$section.eq(num).find('.hidePage');

          TweenMax.set($t, {x: - 20 * 2, y: 5 * 2, opacity: 0});

          $t.each(function(index, el) {

            TweenMax.to($(el), .4, {
              x: 0, 
              y: 0, 
              opacity: 1, 
              delay: 0.1 * index,
              ease: Expo.easeOut
            });
            
          });

        }, 0.0)

        // ui
        .add(()=>{

          var $t = $('header.lower2').find('.hidePage');

          TweenMax.set($t, {x: - 20 * 2, y: 5 * 2, opacity: 0});

          $t.each(function(index, el) {

            TweenMax.to($(el), .4, {
              x: 0, 
              y: 0, 
              opacity: 1, 
              delay: 0.1 * index,
              ease: Expo.easeOut
            });
            
          });

          TweenMax.to(this.$footer, .4, {
            opacity: 1,
            ease: Power2.easeInOut,
            delay: 0.1 * ($t.length - 1),
            onComplete: ()=>{
            }
          })

        }, 0.3)

    }

  }

  topHide() {

    var tl = new TimelineMax();

      tl
      // tit
      .add(()=>{

        TweenMax.to(this.$tit, 0.4, {
          x: 20 * 2,
          y: -5 * 2,
          opacity: 0,
          ease: Expo.easeOut,
        })

      }, 0.0)
      // subTit
      .add(()=>{

        TweenMax.to(this.$subTit, 0.4, {
          x: 20 * 2,
          y: -5 * 2,
          opacity: 0,
          ease: Expo.easeOut,
        })

      }, 0.0)

      .to(this.$nigiyakaWrap, 0.4, {
        width: 0,
        rotationZ: -4,
        x: this.nw,
        y: -20,
        opacity: 0,
        ease: Expo.easeOut,
        onComplete: ()=>{
          if (gb.tlt) gb.tlt.kill();
          if (gb.tlr) gb.tlr.kill();
          if (gb.tlr2) gb.tlr2.kill();         
          $('.nigiyakaText div').removeClass('anim');
        }
      }, 0.0)

      .add(()=>{

        this.$t = $('.id_top .section .btns .btn');

        this.$t.not('.notHide').each(function(index, el) {

          var ookisa = 100;
          TweenMax.to($(el), .4, {
            x: ookisa, 
            y: ookisa, 
            opacity: 0, 
            delay: 0.05 * index,
            ease: Expo.easeOut
          });
          
        });

      }, 0.0)
      // menu btns
      .add(()=>{

        this.$mb.each(function(index, el) {

          var ookisa = 100;
          TweenMax.to($(el), .4, {
            x: ookisa, 
            y: ookisa, 
            opacity: 0, 
            delay: 0.04 * index,
            ease: Expo.easeOut
          });
          
        });

      }, 0.2)
      // budge
      .add(()=>{

        TweenMax.to(this.$budge, .4, {
          scale: .5,
          opacity: 0,
          ease: Expo.easeOut,
        })

      }, 0.2)

  }

  pageHide(page='lower', num) {

    if (page=='lower') {

      var tl = new TimelineMax();

      tl
        .add(()=>{

          var $t = this.$section.eq(num).find('.hidePage');

          $t.each(function(index, el) {

            TweenMax.to($(el), .4, {
              x: 20 * 2, 
              y: -5 * 2, 
              opacity: 0, 
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
            
          });

        }, 0.0)

        // ui
        .add(()=>{

          var $t = $('header.lower2').find('.hidePage');

          $t.each(function(index, el) {

            TweenMax.to($(el), .4, {
              x: 20 * 2, 
              y: -5 * 2, 
              opacity: 0, 
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
            
          });

        }, 0.3)

    } else {

      var tl = new TimelineMax();

      tl
        .add(()=>{

          var $t = this.$section.eq(num).find('.hidePage');

          $t.each(function(index, el) {

            var ookisa = 100;
            TweenMax.to($(el), .4, {
              x: 20 * 2, 
              y: -5 * 2, 
              opacity: 0, 
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
            
          });

        }, 0.0)
        .add(()=>{

          var $t = this.$section.eq(num).find('.hideBtn');

          $t.not('.notHide').each(function(index, el) {

            var ookisa = 100;
            TweenMax.to($(el), .4, {
              x: ookisa, 
              y: ookisa, 
              opacity: 0, 
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
            
          });

        }, 0.0)
        // menu btns
        .add(()=>{

          this.$mb.each(function(index, el) {

            var ookisa = 100;
            TweenMax.to($(el), .4, {
              x: ookisa, 
              y: ookisa, 
              opacity: 0, 
              delay: 0.05 * index,
              ease: Expo.easeOut
            });
            
          });

        }, 0.3)
        // budge
        .add(()=>{

          TweenMax.to(this.$budge, .4, {
            scale: .5,
            opacity: 0,
            ease: Expo.easeOut,
          })

        }, 0.3)

    }

  }

  setEvents() {

    super.setEvents();

    var self = this;
    var toTop = false;

    var cb=(url, isBB)=>{

      if (!$('html').hasClass('page_top')||self.isPageOut) {
        location.href = url;
        return;
      }

      var num = null;
      if (toTop) {
        num = 0;
        $('html').css({'background':'url(/assets/resource/img/bgTop.jpg)','background-size': '100%'});
        if (!isBB) gb.urlm.switchURL('pushstate', '/');
      }
      if (gb.u.s.isContain(url,'talk')) {
        num = 1;
        $('html').css({'background':'#FFF9B2'});
        if (!isBB) gb.urlm.switchURL('query', {page: self.urlList[num]});
      }
      if (gb.u.s.isContain(url,'warikan')) {
        num = 2;
        $('html').css({'background':'#FDD7BB'});
        if (!isBB) gb.urlm.switchURL('query', {page: self.urlList[num]});
      }
      if (gb.u.s.isContain(url,'tap')) {
        num = 3;
        $('html').css({'background':'#ECF0B3'});
        if (!isBB) gb.urlm.switchURL('query', {page: self.urlList[num]});
      }
      if (gb.u.s.isContain(url,'tour')) {
        num = 4;
        $('html').css({'background':'#F7B8BF'});
        if (!isBB) gb.urlm.switchURL('query', {page: self.urlList[num]});
      }
      if (gb.u.s.isContain(url,'cm')) {
        num = 5;
        $('html').css({'background':'#E8E8E8'});
        if (!isBB) gb.urlm.switchURL('query', {page: self.urlList[num]});
      }

      self.$section.hide();
      self.$section.eq(num).show();

       // send ga
       log('send1')
      if (typeof ga === 'function'&&$('html').hasClass('page_top')) {

        log('send2', location.href, location.search)
        // ga('send', 'pageview', location.href);
        // // ga('send', 'pageview', location.search);

        // ga('send', {
        //   hitType: 'pageview',
        //   title: 'test',
        //   location: 'https://jimbeam.fun/',
        //   page: 'index.html' + location.search
        // }); 

        // ga('send', {
        //   hitType: 'event',
        //   eventCategory: 'page_transition', //必須
        //   eventAction: 'click',  //必須
        //   eventLabel: 'index.html' + location.search,
        // })

        // gtag('config', 'GA_TRACKING_ID', {
        //   'page_title' : 'homepage',
        //   'page_path': '/home'
        // });

      }
      

      self.hide();

    }



    $('a').not('.notTransition').on('click', function(e) {e.preventDefault();});
    $('a').not('.notTransition').on('touchstart', function(e) {

      e.preventDefault();

      self.isPageOut = $(this).hasClass('pageOut');

      // sound
      if (gb.sound) gb.sound.a_tap.play();

      $(this).addClass('notHide');

      var href = $(this).attr('href');
      var color = $(this).data('color');
      var isMenu = $(this).data('menu');
      toTop = false;

      var bool = (color=='#FFF9B2'||color=='#FDD7BB'||color=='#ECF0B3'||color=='#F7B8BF'||color=='#E8E8E8');
      var bool2 = !$('html').hasClass('page_top');
      if (bool&&isMenu&&bool2) color = 'toTop';

      if (color=='toTop') {
        self.$cover.css({'background':'url(/assets/resource/img/bgTop.jpg)','background-size': '100%'});
        toTop = true;
      } else if (color=='toCraftsman') {
        self.$cover.css({'background':'url(/tap/assets/img/craftsman/common/bg.png) no-repeat center center/cover','background-size': '100%'});
        toTop = true;
      } else {
        self.$cover.css('background', color);
        toTop = false;
      }

      // clearTimeout(this.Timer);
      // this.Timer = setTimeout(()=>{
          
        self.show(cb, href, toTop, isMenu);
        
      // },1000);

    });

    $(window).on('switchURL', (e, cur, prev)=>{

      // if (!$('html').hasClass('page_top')) {}

      toTop = false;
      if (cur=='/') toTop = true;
      var isMenu = false;

      if (toTop) {
        this.$cover.css({'background':'url(/assets/resource/img/bgTop.jpg)','background-size': '100%'});
      } else {
        if (gb.u.s.isContain(cur,'talk')) var color = '#FFF9B2';
        if (gb.u.s.isContain(cur,'warikan')) var color = '#FDD7BB';
        if (gb.u.s.isContain(cur,'tap')) var color = '#ECF0B3';
        if (gb.u.s.isContain(cur,'tour')) var color = '#F7B8BF';
        if (gb.u.s.isContain(cur,'cm')) var color = '#E8E8E8';
        this.$cover.css('background', color);
      }
      
      this.show(cb, cur, toTop, isMenu, true, prev);

    });

  }
  
}