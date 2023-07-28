//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as a from 'Util/Array/index.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.$arrow = $('.arrowBtm svg g path');

    this.setup()
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$arrow, {drawSVG:"100% 100%", fill: 'none'});

    // this.show();

  }

  show() {

    var tl = new TimelineMax();

    tl
      .to(this.$arrow, 1.2, {
        drawSVG:"0% 100%",
        ease: Expo.easeOut,
      })
      
   
  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}