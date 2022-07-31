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

    this.$item = this.$target.find('.c-header--contents--pages a');
    this.$btn = this.$target.find('.c-header--contents--otherBtn a');

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$item, {opacity: 0, x: 30, z: 0});
    TweenMax.set(this.$btn, {opacity: 0, y: 10, z: 0});
 
  }

  show() {

    this.$target.show();

    var tl = new TimelineMax();

    tl
      // bg
      .to(this.$target, 1.2, {
        x: 0,
        ease: Expo.easeInOut,
        onComplete: ()=>{
        }
      })

      // item
      .add(()=>{

        this.$item.each(function(index, el) {

          TweenMax.set($(el), {opacity: 0, x: 30});
          TweenMax.to($(el), 0.8, {
            x: 0,
            z: 0,
            opacity: 1,
            ease: Power2.easeOut,
            delay: index * 0.06
          })
          
        });

      }, 0.8 - 0.15)

      // btn
      .add(()=>{

        this.$btn.each(function(index, el) {

          TweenMax.set($(el), {opacity: 0, y: 10});
          TweenMax.to($(el), 0.8, {
            y: 0,
            z: 0,
            opacity: 1,
            ease: Power2.easeOut,
            delay: index * 0.06
          })
          
        });

      }, 1.4 - 0.15)

  }

  hide() {

    var tl = new TimelineMax();

    tl
      // item
      .add(()=>{

        this.$item.each(function(index, el) {

          TweenMax.to($(el), 0.5, {
            opacity: 0,
            ease: Power2.easeOut,
            delay: index * 0.015
          })
          
        });

      }, 0.0)

      // btn
      .add(()=>{

        this.$btn.each(function(index, el) {

          TweenMax.to($(el), 0.5, {
            opacity: 0,
            ease: Power2.easeOut,
            delay: index * 0.015
          })
          
        });

      }, 0.0)

      // bg
      .to(this.$target, 1.2, {
        x: 320,
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.$target.hide();
        }
      }, 0.0)

  }


  setEvents() {


  }
  
}