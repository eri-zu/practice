// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scroll from './Scroll.es6';
import SetSpan from './SetSpan.es6';
import SetSpanNum from './SetSpanNum.es6';
import Render from './Render.es6';

import * as a from 'Util/Array/index.es6';

export default class Dom extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $wrap;
    this.$img = $wrap.find('.img');
    this.$text = $wrap.find('.text');

    this.$tit = $wrap.find('.c-section--h1 .sectionTit');
    this.$num = $wrap.find('.c-section--h1 .numtext');
    this.$barl = $wrap.find('.c-section--h1 .bar.left');
    this.$barr = $wrap.find('.c-section--h1 .bar.right');
    
    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    // TweenMax.set(this.$wrap, {opacity: 0});
    TweenMax.set(this.$img, {opacity: 0});
    TweenMax.set(this.$text, {opacity: 0});

    this.textList = [];
    this.$text.each((index, el)=>{

      // spanで1文字1文字囲む
      this.s = new SetSpan($(el));

      // // 各spanを取得
      this.$span = $(el).find('span');
      this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
      this.len = this.$span.length;
      $(el).css('opacity', 1);
      this.$svg = $(el).parent().find('svg');
      this.$svg.css('opacity', 0);
      this.$span = this.$span.add(this.$svg);

      var spanList = [];
      this.$span.each((index, el)=>{

        var r = new Render($(el), index);
        spanList.push(r);
        
      });

      this.textList.push(spanList);
      
    });
    

    TweenMax.set(this.$barl, {opacity: 0, scaleX: 4, x: -60, 'transform-origin': '0% 50%'});
    TweenMax.set(this.$barr, {opacity: 0, scaleX: 15, x: -30, 'transform-origin': '100% 50%'});
    this.ready_num();
    this.ready_tit();

    // events
    // tit
    this.adjustH = 200;
    var targetST = this.$wrap.offset().top - gb.r.h + this.adjustH;
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'step04_'+1);
    s01.cb = ()=>{

      this.show_tit();
      s01.removeEvents();

    };

    // detail
    this.adjustH = 200;
    var targetST = this.$img.eq(0).offset().top - gb.r.h + this.adjustH;
    var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'step04_'+2);
    s02.cb = ()=>{

      // this.show_wrap()
      this.show_detail();
      s02.removeEvents();

    };

  }

  update() {


  }
　
  draw() {


  }

  ready_num() {

    // spanで1文字1文字囲む
    var s = new SetSpanNum(this.$num);

    // // 各spanを取得
    this.$numspan = this.$num.find('div span');
    this.$numspan.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$numspan.length;
    this.$num.height(this.$numspan.eq(0).height());

    // ready
    this.$numspan.each((index, el)=>{

      var w = $(el).width();
      var h = $(el).height();

      if (index%2==0) h *= -1;
      TweenMax.set($(el), {y: h, opacity: 0});
      TweenMax.set($(el).parent(), {y: h / 4});
      
    });

  }

  ready_tit() {

    // spanで1文字1文字囲む
    var s = new SetSpanNum(this.$tit);

    // // 各spanを取得
    this.$titspan = this.$tit.find('div span');
    this.$titspan.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$titspan.length;

    // ready
    this.$titspan.each((index, el)=>{

      var w = $(el).width();
      var h = $(el).height();

      TweenMax.set($(el), {y: h, opacity: 0});
      TweenMax.set($(el).parent(), {y: h / 4});
      
    });

  }

  show_tit() {

    var tl = new TimelineMax();

    tl
      .to(this.$barr, 1.5, {
        scaleX: 1,
        x: 0,
        opacity: 1,
        z: 0,
        ease: Expo.easeOut,
      }, 0.0)
      .to(this.$barl, 1.5, {
        scaleX: 1,
        x: 0,
        opacity: 1,
        z: 0,
        ease: Expo.easeOut,
      }, 0.2)
      .add(()=>{

        this.$numspan.each((index, el)=>{

          TweenMax.to($(el), 1.2, {
            opacity: 1,
            y: 0,
            z: 0,
            ease: Expo.easeOut,
            delay: index * 0.1
          });
          TweenMax.to($(el).parent(), 1.2, {
            y: 0,
            z: 0,
            ease: Power2.easeOut,
            delay: index * 0.1
          });
          
        });

      }, 0.4)
      .add(()=>{

        this.$titspan.each((index, el)=>{

          TweenMax.to($(el), 1.2, {
            opacity: 1,
            y: 0,
            z: 0,
            ease: Expo.easeOut,
            delay: index * 0.03
          });
          TweenMax.to($(el).parent(), 1.2, {
            y: 0,
            z: 0,
            ease: Power2.easeOut,
            delay: index * 0.03
          });
          
        });

      }, 0.6)


  }

  show_detail() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.$img.each((index, el)=>{

          TweenMax.to($(el), 1.8, {
            opacity: 1,
            ease: Power2.easeInOut,
            delay: index * 0.2,
          }, 0.0)
          
        });

      }, 0.0)
      .add(()=>{

        for (var i = 0; i < this.textList.length; i++) {
          
          this.show_text(i, 0.5 + i * 0.2);

        }

      }, 0.0)
        
  }

  show_text(index, delay) {

    var spanList = this.textList[index];

    var tl = new TimelineMax();
    var arr = a.randomArr(spanList.length);

    tl
      .add(()=>{

        for (var i = 0; i < spanList.length; i++) {
          // var s = spanList[i];
          var s = spanList[arr[i]];
          s.show(delay + i * 0.05);
        }

      }, 0.0)

  }


  // show_wrap() {

  //   var tl = new TimelineMax();

  //   tl
  //     .to(this.$wrap, 1.5, {
  //       opacity: 1,
  //       ease: Power2.easeInOut,
  //     }, 0.0)
        
  // }

  hide() {    

  }

  setEvents() {

    super.setEvents();

  }

}