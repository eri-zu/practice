//--------------------------------------------------
//
//  RenderBase
//
//--------------------------------------------------

import RenderBase from './RenderBase.es6';

export default class Render extends RenderBase {

  constructor($target) {

    super();

    this.$target = $target;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.$wrap = $('#age')
    this.$tit1 = this.$wrap.find('.tit .age_text1_svg');
    this.$tit2 = this.$wrap.find('.tit .age_text2_svg');
    this.$text = this.$wrap.find('.text');

    // TweenMax.set(this.$wrap, {x: -100 * 3, y: 30 * 3, opacity: 0});
    TweenMax.set(this.$wrap, {width: 0});
    TweenMax.set(this.$tit1, {x: (-30 * 2.5) * 2, y: 30 * 2});
    TweenMax.set(this.$tit2, {x: (-30 * 2.5) * 2, y: 30 * 2});
    TweenMax.set(this.$text, {x: (-30 * 2.5) * 2, y: 30 * 2});

    // tapBtn ready
    var ookisa = 100;
    this.$t = this.$wrap.find('.btns .btn');
    TweenMax.set(this.$t, {x: ookisa, y: ookisa, opacity: 0});

  
  }

  first() {

    var tl = new TimelineMax({delay: 1.0});

    tl
      // x
      .to(this.$wrap, .3, {
        width: '100%',
        ease: Expo.easeOut,
      }, 0.0)
      // naname
      // .to(this.$wrap, .3, {
      //   x: 0,
      //   y: 0,
      //   opacity: 1,
      //   ease: Expo.easeOut,
      // }, 0.0)
      .to(this.$tit1, .7, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.8)
      }, .2 + 0.0)
      .to(this.$tit2, .7, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.8)
      }, .2 + 0.05)
      .to(this.$text, .7, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.8)
      }, .2 + 0.05 * 2)

      // btns
      .add(()=>{

        this.$t.each(function(index, el) {

          // tapBtnの表示
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



      }, .2 + 0.25)
      


  }

  setEvents() {


  }
  
}