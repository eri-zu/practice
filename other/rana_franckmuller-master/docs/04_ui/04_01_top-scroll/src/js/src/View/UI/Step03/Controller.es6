// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scroll from './Scroll.es6';
import SetSpan from './SetSpan.es6';
import Render from './Render.es6';

import * as a from 'Util/Array/index.es6';

export default class Dom extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $wrap;
    this.$img = $wrap.find('.img');
    this.$date = $wrap.find('.date');
    this.$text = $wrap.find('.text');
    this.$btn = $wrap.find('.news-event--more');

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    TweenMax.set(this.$img, {opacity: 0});
    TweenMax.set(this.$text, {opacity: 0});
    TweenMax.set(this.$btn, {opacity: 0});

    this.textList = [];
    this.$text.each((index, el)=>{

      // spanで1文字1文字囲む
      this.s = new SetSpan($(el));

      // // 各spanを取得
      this.$span = $(el).find('span');
      this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
      this.len = this.$span.length;
      $(el).css('opacity', 1);

      var spanList = [];
      this.$span.each((index, el)=>{

        var r = new Render($(el), index);
        spanList.push(r);
        
      });

      this.textList.push(spanList);
      
    });
    
    this.dateList = [];
    this.$date.each((index, el)=>{

      // spanで1文字1文字囲む
      this.s = new SetSpan($(el));

      // // 各spanを取得
      this.$span = $(el).find('span');
      this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
      this.len = this.$span.length;
      $(el).css('opacity', 1);

      var spanList = [];
      this.$span.each((index, el)=>{

        var r = new Render($(el), index);
        spanList.push(r);
        
      });

      this.dateList.push(spanList);
      
    });
    



    // events
    // tit
    this.adjustH = 200;
    var targetST = this.$wrap.offset().top - gb.r.h + this.adjustH;
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'step03_'+1);
    s01.cb = ()=>{

      // this.show_wrap()
      // this.show_detail();
      s01.removeEvents();

    };

    // detail
    this.adjustH = 200;
    var targetST = this.$img.eq(0).offset().top - gb.r.h + this.adjustH;
    var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'step03_'+2);
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
          // TweenMax.to(this.$text.eq(index), 1.8, {
          //   opacity: 1,
          //   ease: Power2.easeInOut,
          //   delay: 0.2 + index * 0.2,
          // }, 0.0)
          this.show_date(index, 0.2 + index * 0.2);
          this.show_text(index, 0.5 + index * 0.2);
          
        });

      }, 0.0)
      .to(this.$btn, 1.2, {
        opacity: 1,
        ease: Power1.easeInOut,
      }, 1.8)
        
  }

  show_date(index, delay) {

    var spanList = this.dateList[index];

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

  show_text(index, delay) {

    var spanList = this.textList[index];

    var tl = new TimelineMax();
    var arr = a.randomArr(spanList.length);

    tl
      .add(()=>{

        for (var i = 0; i < spanList.length; i++) {
          // var s = spanList[i];
          var s = spanList[arr[i]];
          s.show(delay + i * 0.02);
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