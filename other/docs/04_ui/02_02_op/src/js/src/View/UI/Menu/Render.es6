//--------------------------------------------------
//
//  RenderBase
//
//--------------------------------------------------

import RenderBase from './RenderBase.es6';

import Item from './Item/Controller.es6';
import ItemSVG from './ItemSVG/Controller.es6';
import Sns from './Sns/Controller.es6';
import Lang from './Lang/Controller.es6';
import AfterService from './AfterService/Controller.es6';

export default class Render extends RenderBase {

  constructor($target) {

    super();

    this.$target = $target;

    this.$item = this.$target.find('.c-header--contents--pages a');
    this.$btn = this.$target.find('.c-header--contents--otherBtn a');
    this.$bar = this.$target.find('.bar');
    this.$bg = this.$target.find('.bg');

    // item
    this.itemList = [];
    var $item = $('.spanTarget');
    $item.each((index, el)=>{

      if ($(el).hasClass('spanTargetSVG')) var item = new ItemSVG($(el));
      else var item = new Item($(el));

      this.itemList.push(item);
      
    });

    this.sns = new Sns();
    this.lang = new Lang();
    this.afterService = new AfterService();

    this.isLock = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$item, {z: 0});
    TweenMax.set(this.$btn, {z: 0});
 
  }

  show() {

    if (this.isLock) return;
    this.isLock = true;


    this.$target.show();

    var tl = new TimelineMax();

    tl
      // bg

      // line
      //   伸びて、色薄く
      .set(this.$bar, {
        backgroundColor: '#000',
      }, 0.0)
      .to(this.$bar, 1.2, {
        height: '100%',
        ease: Expo.easeInOut,
      }, 0.0)
      .to(this.$bar, 0.8, {
        backgroundColor: '#EBEBEB',
        ease: Power2.easeInOut,
      }, 0.4)

      // bg
      .to(this.$bg, 0.8, {
        opacity: 1,
        ease: Power2.easeInOut,
      }, 0.0)

      // item
      .add(()=>{

        for (var i = 0; i < this.itemList.length; i++) {
          var item = this.itemList[i];
          item.show(i * 0.0);
        }

      }, 0.4)

      // after service
      .add(()=>{

        this.afterService.show();

      }, 1.0)

      // sns
      .add(()=>{

        this.sns.show();

      }, 1.2)

      // lang
      .add(()=>{

        this.lang.show();

      }, 1.8)
      .add(()=>{

        this.isLock = false;

      }, 3.0)

  }

  hide() {

    if (this.isLock) return;
    this.isLock = true;


    var tl = new TimelineMax();

    tl
      // item
      .add(()=>{

        for (var i = 0; i < this.itemList.length; i++) {
          var item = this.itemList[i];
          item.hide(0.0);
        }

      }, 0.0)

      // btn
      .add(()=>{

        this.sns.hide();
        this.lang.hide();
        this.afterService.hide();

      }, 0.0)

      // line
      //   伸びて、色薄く
      .to(this.$bar, 1.2, {
        height: '0%',
        ease: Power2.easeInOut,
      }, 0.0)

      // bg
      .to(this.$bg, 0.8, {
        opacity: 0,
        ease: Power2.easeInOut,
        onComplete: ()=>{
          this.$target.hide();
          this.isLock = false;
        }
      }, 0.0)

  }

  setEvents() {


  }
  
}