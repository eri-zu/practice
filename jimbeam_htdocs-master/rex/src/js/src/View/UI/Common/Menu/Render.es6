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
    this.$bg = $target.find('.list .bg');
    this.$text = $target.find('.list .menuText');
    this.$textInner = $target.find('.list .textInner');
    this.$animItem = $target.find('.animItem');

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$target, {x: '0%', width: '0%'})
    TweenMax.set(this.$animItem, {x: - 20 * 2, y: 5 * 2, opacity: 0});

    TweenMax.set(this.$bg, {scaleX: 0, scaleY: 0.1, 'transform-origin': '0% 50%'})
    TweenMax.set(this.$text, {opacity: 0})    
    TweenMax.set(this.$textInner, {opacity: 1, x: 0, y: 0})    
    this.$textInner.removeClass('runner');
  
  }

  show() {

    // TweenMax.set(this.$animItem, {'will-change': 'transform'});

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.$target.show();

      }, 0.0)
      .to(this.$target, .5, {
        width: '100%',
        ease: Expo.easeInOut,
      })
      .add(()=>{

        var cb = ($t, index)=>{

          var tl = new TimelineMax({delay: 0.03 * index});

          tl
            .to($t, .5, {
              scaleX: 1,
              ease: Expo.easeOut,
            })
            .to($t, .6, {
              scaleY: 1,
              ease: Expo.easeOut,
            }, 0.25)
            .add(()=>{
              this.$text.eq(index).css('opacity', 1);
              this.$textInner.eq(index).addClass('runner');
            }, 0.45)

        }

        this.$bg.each((index, el)=>{

          cb($(el), index);
          
        });

      }, 0.3)
      .add(()=>{

        this.$animItem.each(function(index, el) {

          TweenMax.to($(el), .4, {
            x: 0, 
            y: 0, 
            z: 0,
            opacity: 1, 
            delay: 0.05 * index,
            ease: Expo.easeOut,
            onStart: ()=>{
              TweenMax.set($(el), {'will-change': 'transform'});
            },
            onComplete: ()=>{
              // TweenMax.set($(el), {'clearProps': 'will-change'});
              $('html').addClass('is-fixed');
            },
          });
          
        });


      }, 0.3 + 0.5)

  }

  hide() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        $('html').removeClass('is-fixed');

        var cb = ($t, index)=>{

          var tl = new TimelineMax({delay: 0.01 * index});

          tl
            .to($t, .3, {
              scaleY: 0.1,
              ease: Expo.easeOut,
            }, 0.0)
            .to($t, .3, {
              scaleX: 0,
              ease: Expo.easeOut,
              onStart: ()=>{
                TweenMax.set($t, {'transform-origin': '100% 50%'})
              }
            }, .3)
            .add(()=>{
              this.$textInner.eq(index).removeClass('runner');
              TweenMax.to(this.$textInner.eq(index), .3, {
                x: 60 * 2,
                y: - 1 * 2, 
                opacity: 0,
                ease: Expo.easeOut,
              })
            }, 0.1)

        }

        this.$bg.each((index, el)=>{

          cb($(el), index);
          
        });

      }, 0.0)
      .add(()=>{

        this.$animItem.each(function(index, el) {

          TweenMax.to($(el), .4, {
            x: 20 * 2,
            y: - 5 * 2, 
            z: 0,
            opacity: 0, 
            delay: 0.05 * index,
            ease: Expo.easeOut,
            onComplete: ()=>{
              TweenMax.set($(el), {'clearProps': 'will-change'});
            },
          });
          
        });


      }, 0.1)
      .to(this.$target, .5, {
        x: '100%',
        ease: Expo.easeInOut,
        onComplete: ()=>{

          this.$target.hide();
          this.setup();

          $('html').removeClass('is-fixed');

        }
      }, 0.5)


  }


  setEvents() {


  }
  
}