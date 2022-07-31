//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Item from './Item.es6';

import * as a from 'Util/Array/index.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.$target = $('.slider .textWrap .textItem .text');
    this.$bar = this.$target.eq(0).find('.bar');
    this.$text = this.$target.eq(0).find('.textInner .textIn');
    this.$arrow = this.$target.eq(0).find('.arrow svg g path');

    this.setup()
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$bar, {scaleX: 0});
    TweenMax.set(this.$text, {opacity: 0});

    TweenMax.set(this.$target.eq(0), {opacity: 1});

    this.itemList = [];
    this.$target.each((index, el)=>{

      var item = new Item($(el));
      this.itemList.push(item);
      
    });

    this.$target.find('.textInner').css('opacity', 1);

  }

  showFirst() {

    var tl = new TimelineMax();

    tl
      // bar
      .set(this.$bar, {scaleX: 0, scaleY: 0.05, 'transform-origin': '0% 100%'})
      .to(this.$bar, 1.2, {
        scaleX: 1,
        ease: Expo.easeInOut,
      }, 0.0)
      .to(this.$bar, .7, {
        scaleY: 1.8,
        ease: Expo.easeIn,
      }, .6)
      .set(this.$bar, {'transform-origin': '0% 0%', y: '-100%'})
      .set(this.$text.find('span'), {opacity: 1, x: 0})
      .to(this.$bar, .7, {
        scaleY: 0,
        ease: Expo.easeOut,
        onStart: ()=>{
          TweenMax.to(this.$bar, .7, {
            opacity: 0,
            ease: Power2.easeInOut,
          })

        }
      })
      // arrow
      .add(()=>{

        var tlarrow = new TimelineMax();

        tlarrow
          // .to(this.$arrow, .3, {
          //   drawSVG:"0% 100%",
          //   ease: Expo.easeOut,
          // }, 0.0)
          // .to(this.$arrow, .3, {
          //   drawSVG:"100% 100%",
          //   ease: Expo.easeOut,
          // }, 0.2)
          // .set(this.$arrow, {drawSVG:"0% 0%"})
          .to(this.$arrow, 1.2, {
            drawSVG:"0% 100%",
            ease: Expo.easeOut,
          })

      }, 1.4)
      
  }

  show(index=0) {

    this.itemList[index].show();

  }

  hide(index) {

    this.itemList[index].hide();

  }

  next() {

    var tl = new TimelineMax({delay: 0.2});

    tl
      .add(()=>{

        this.hide(this.pre);

      }, 0.0)
      .add(()=>{

        this.show(this.index);

      }, 0.2)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

    $(window).on('sliderChange', (e, index, pre)=>{

      this.index = index;
      this.pre = pre;
      this.next();
      
    });


  }

}