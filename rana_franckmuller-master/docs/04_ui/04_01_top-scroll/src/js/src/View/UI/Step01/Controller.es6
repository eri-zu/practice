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
    this.$text = $wrap.find('.text');

    // this.$tit = $wrap.find('.titBox');
    // this.$img = $wrap.find('.imgWrap');
    // this.$text = $wrap.find('.text');

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

      this.spanList = [];
      this.$span.each((index, el)=>{

        var r = new Render($(el), index);
        this.spanList.push(r);
        
      });

      this.textList.push(this.spanList);
      
    });
    



    // events
    // tit
    this.adjustH = 200;
    var targetST = this.$wrap.offset().top - gb.r.h + this.adjustH;
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'step01_'+1);
    s01.cb = ()=>{

      // this.show_wrap()
      // this.show_detail();
      s01.removeEvents();

    };

    // detail
    this.adjustH = 200;
    var targetST = this.$img.eq(0).offset().top - gb.r.h + this.adjustH;
    var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'step01_'+2);
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
            delay: index * 0.4,
          }, 0.0)
          // TweenMax.to(this.$text.eq(index), 1.8, {
          //   opacity: 1,
          //   ease: Power2.easeInOut,
          //   delay: 0.2 + index * 0.4,
          // }, 0.0)
          this.show_text(index, 0.5 + index * 0.4);
          
        });

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