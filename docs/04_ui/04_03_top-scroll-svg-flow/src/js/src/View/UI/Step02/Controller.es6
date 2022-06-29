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

import BarMove from './BarMove/Controller.es6';

import * as a from 'Util/Array/index.es6';

export default class Dom extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $wrap;

    this.$svg01 = $wrap.find('.collections--contents--item').eq(0).find('svg path, svg ellipse, svg rect, svg polygon, svg circle, svg line');
    this.$bg01 = $wrap.find('.collections--contents--item').eq(0).find('.bg');
    this.$text01 = $wrap.find('.collections--contents--item').eq(0).find('p');

    this.$svg02 = $wrap.find('.collections--contents--item').eq(1).find('svg path, svg ellipse, svg rect, svg polygon, svg circle, svg line');
    this.$bg02 = $wrap.find('.collections--contents--item').eq(1).find('.bg');
    this.$text02 = $wrap.find('.collections--contents--item').eq(1).find('p');

    this.$svg03 = $wrap.find('.collections--contents--item').eq(2).find('svg path, svg ellipse, svg rect, svg polygon, svg circle, svg line');
    this.$bg03 = $wrap.find('.collections--contents--item').eq(2).find('.bg');
    this.$text03 = $wrap.find('.collections--contents--item').eq(2).find('p');

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

    // svg
    TweenMax.set(this.$svg01, {drawSVG:"0% 0%", fill: 'none'});
    TweenMax.set(this.$svg02, {drawSVG:"0% 0%", fill: 'none'});
    TweenMax.set(this.$svg03, {drawSVG:"0% 0%", fill: 'none'});

    TweenMax.set(this.$barl, {opacity: 0});
    TweenMax.set(this.$barr, {opacity: 0});
    this.bm = new BarMove(this.$barl, this.$barr);
    this.ready_num();
    this.ready_tit();

    // text
    this.$texts = this.$text01.add(this.$text02).add(this.$text03);
    this.textList = [];
    this.$texts.each((index, el)=>{

      // spanで1文字1文字囲む
      this.s = new SetSpan($(el));

      // // 各spanを取得
      this.$span = $(el).find('span');
      this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
      this.len = this.$span.length;
      $(el).css('opacity', 1);

      this.spanList = [];
      this.$span.each((index, el)=>{

        var r = new Render($(el), index);
        this.spanList.push(r);
        
      });

      this.textList.push(this.spanList);
      
    });

    // events

    this.adjustH = 200;

    var targetST = this.$wrap.offset().top - gb.r.h + this.adjustH;
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'step02_'+1);
    s01.cb = ()=>{

      this.show_tit();

      this.show_wrap(this.$svg01, this.$bg01, 0, 1.0 * 0);
      this.show_wrap(this.$svg02, this.$bg02, 1, 1.0 * 1);
      this.show_wrap(this.$svg03, this.$bg03, 2, 1.0 * 2);
      s01.removeEvents();

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
      // .to(this.$barr, 1.5, {
      //   scaleX: 1,
      //   x: 0,
      //   opacity: 1,
      //   ease: Expo.easeOut,
      // }, 0.0)
      // .to(this.$barl, 0.0, {
      //   opacity: 1,
      //   ease: Expo.easeOut,
      // }, 0.2)
      .add(()=>{

        this.bm.timeline();

      }, 0.0)
      .add(()=>{

        this.$numspan.each((index, el)=>{

          TweenMax.to($(el), 1.2, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: index * 0.1
          });
          TweenMax.to($(el).parent(), 1.2, {
            y: 0,
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
            ease: Expo.easeOut,
            delay: index * 0.03
          });
          TweenMax.to($(el).parent(), 1.2, {
            y: 0,
            ease: Power2.easeOut,
            delay: index * 0.03
          });
          
        });

      }, 0.6)


  }


  show_wrap(svg, bg, i, delay) {

    var tl = new TimelineMax({delay: delay});

    tl
      // svg line
      .add(()=>{

        // svg
        svg.each((index, el)=>{
          
          TweenMax.to($(el), 1.0, {
            drawSVG:"0% 100%",
            ease: Power2.easeInOut,
            delay: index * 0.01
          })

        });
      
      }, 0.0)
      // op
      .to(svg, 1.2, {
        stroke: 'rgba(0,0,0,0)',
        ease: Power2.easeInOut,
      }, 1.3)
      // bg
      .to(bg, 1.2, {
        opacity: 1,
        ease: Power1.easeInOut,
      }, 1.5)
      // text
      .add(()=>{

        this.show_text(i, 0);

      }, 2.0)
        
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

  hide() {    

  }

  setEvents() {

    super.setEvents();

  }

}