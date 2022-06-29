//--------------------------------------------------
//
//  SpanText
//
//--------------------------------------------------

import SpanShuffule from './SpanShuffule.es6';

export default class SpanText {

  constructor($wrap, index) {

    this.$wrap = $wrap
    this.$target = $wrap.find('.spanTarget');

    this.index = index;

    this.setup();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    this.w = this.$wrap.innerWidth();
    this.h = this.$wrap.innerHeight();

    // spanで1文字1文字囲む
    this.setSpan(this.$target);

    // 各spanを取得
    this.$span = this.$target.find('span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length;

    this.ss = [];

    // 上下にずらす
    this.$span.each((index, el)=>{

      // shuffle
      var ss = new SpanShuffule($(el), this.index);
      this.ss.push(ss);

      var x = 100 + gb.u.m.randomInt(0, 5) * 15;
      var y = 0 + gb.u.m.randomInt(0, 3) * 15;
      var signx = (Math.random()>0.5)? 1: -1;
      var signy = (Math.random()>0.5)? 1: -1;

      // pos
      TweenMax.set($(el), {x: signx * x, y: signy * y});      
      // op
      TweenMax.set($(el), {opacity:0});      

      switch (this.index){
        case 1:
          // color 01
          var colors = [
            '#8ce6ec',
            '#deaecb',
            '#cf9dd4',
          ];
          break;
        case 2:
          // color 02
          var colors = [
            '#49ae90',
            '#ddf18c',
            '#7fbadb',
          ];
          break;
        case 3:
          // color 03
          var colors = [
            '#86e169',
            '#8fd6ad',
            '#c0c6d0',
          ];
          break;
        case 4:
          // color 04
          var colors = [
            '#ca9feb',
            '#edebb8',
            '#fb8465',
          ];
          break;
        case 5:
          // color 05
          var colors = [
            '#e3ada7',
            '#f35fb3',
            '#9ca4e3',
          ];
          break;
      }

      var c = colors[Math.floor(Math.random() * colors.length)];
      if (Math.random() < 0.8) TweenMax.set($(el), {color: c});   
      
    });


  }

  reset() {

    this.$span = this.$target.find('span').not('.shadow');

    // 上下にずらす
    this.$span.each((index, el)=>{

      var x = 150 + gb.u.m.randomInt(0, 5) * 15;
      var y = 0 + gb.u.m.randomInt(0, 3) * 15;
      var signx = (Math.random()>0.5)? 1: -1;
      var signy = (Math.random()>0.5)? 1: -1;

      // pos
      TweenMax.set($(el), {x: signx * x, y: signy * y});      
      // op
      TweenMax.set($(el), {opacity:0});      

      switch (this.index){
        case 1:
          // color 01
          var colors = [
            '#8ce6ec',
            '#deaecb',
            '#cf9dd4',
          ];
          break;
        case 2:
          // color 02
          var colors = [
            '#49ae90',
            '#ddf18c',
            '#7fbadb',
          ];
          break;
        case 3:
          // color 03
          var colors = [
            '#86e169',
            '#8fd6ad',
            '#c0c6d0',
          ];
          break;
        case 4:
          // color 04
          var colors = [
            '#ca9feb',
            '#edebb8',
            '#fb8465',
          ];
          break;
        case 5:
          // color 05
          var colors = [
            '#e3ada7',
            '#f35fb3',
            '#9ca4e3',
          ];
          break;
      }

      var c = colors[Math.floor(Math.random() * colors.length)];
      if (Math.random() < 0.8) TweenMax.set($(el), {color: c});   
      
    });

  }

  show (delay) {

    this.timeline(delay);

  }

  hide () {

    this.reset();
    
  }

  timeline(delay=0) {

    // this.show();

    var tl = new TimelineMax({delay: delay});

    tl
      .add(()=>{


        // リズムの値を決める 
        var list = [];
        for (var i = 0; i < this.len; i++) {
          
          // easing
          // var val = (Expo.easeInOut).getRatio(i / (this.len-1))
          // val = gb.u.m.clamp(val, 0, 1.0);



          // トゥ、トゥ、トゥ、、、トゥトゥトゥトゥトゥ
          var val = 0;

          // if (i < 3) {
          //   if (i==0) val = 0.1;
          //   if (i==1) val = 0.2;
          //   if (i==2) val = 0.4;
          // }
          // if (i >= 3) {
          //   val = 0.95 + (Math.random() - 0.5) * 0.2;
          // }

          list.push(val);

        }

        // render
        this.$span.each((index, el)=>{

          var tl02 = new TimelineMax({});

          tl02
            // 表示
            .add(()=>{

              if (Math.random()<0.65) {
                TweenMax.set($(el), {opacity: 1})    
                this.ss[index].start();
                // log('start',index)
              } else {
                this.flash($(el));
              }

              if (Math.random()<0.5) {
                // this.ss[index].start();                
                this.ss[index].showShadow();
              }

              
            }, this.getVal(list))
            
            // pos x, pos y
            .to($(el), 0.3, {
              x: 0,
              ease: Expo.easeOut,
              onStart: ()=>{
                if (Math.random() < 0.5) TweenMax.to($(el), 0.5, {color: 'rgba(255,255,255,1)',ease: Expo.easeOut, delay: 0.2}); 
              }
            })
            .to($(el), 0.3, {
              y: 0,
              ease: Expo.easeOut,
              onStart: ()=>{
                TweenMax.to($(el), 0.5, {color: 'rgba(255,255,255,1)',ease: Expo.easeOut, delay: 0.1}); 
                this.ss[index].end();
                // log('end',index)
                this.ss[index].hideShadow();
              },
              onComplete: ()=>{
                
              }
            })
            .add(()=>{
              if (this.index==1) this.adjust();
            }, 1.0)
          
        });

      }, 0.0);
    

  }

  flash ($target) {

    var tl = new TimelineMax({});

    tl
      .to($target, .025, {opacity: 1, ease: Expo.easeIn})
      .to($target, .025, {opacity:0, ease: Expo.easeOut})
      .to($target, .025, {opacity: 1, ease: Expo.easeOut})
      .to($target, .025, {opacity:0, ease: Expo.easeOut})
      .to($target, .025, {opacity: 1, ease: Expo.easeOut})
      // .to($target, this.dur, {opacity:0, ease: Expo.easeOut});
    
  }

  setSpan($target) {

    var span = $target.text().replace(/(\S)/g, '<span>$1</span>');
    $target.html(span);

  }

  getVal(delays) {

    var v = gb.u.a.arrRand(delays);

    // 削除
    var id = delays.indexOf(v);
    if(id >= 0) delays.splice(id, 1); 

    return v;

  }

  adjust() {

    // 左へ
    TweenMax.to(this.$span.eq(0), 1.0, {
        x: -20,
        ease: Expo.easeInOut,
    })

    // 右へ
    this.$span.each((index, el)=>{
      if (index==0) return;
      TweenMax.to(this.$span.eq(index), 1.0, {
          x: 20,
          ease: Expo.easeInOut,
      })
      
    });

    // op
    TweenMax.to($('.section01 .tit .img'), 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
        delay: 0.5
    })

  }

  onResize() {

    var $span = this.$target.find('span').not('.shadow');
    $span.each((index, el)=>{

      $(el).wrapInner("<span />");
      var $s = $(el).find('span');
      var w = $s.width();
      $(el).width(w);
      $(el).text($s.text());

    });

  }

  setEvents() {

  
    $(window).on('resize', this.onResize.bind(this));

  }

}