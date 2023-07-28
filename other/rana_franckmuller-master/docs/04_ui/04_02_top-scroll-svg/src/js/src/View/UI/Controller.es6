//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import Step01 from './Step01/Controller.es6';
import Step02 from './Step02/Controller.es6';
import Step03 from './Step03/Controller.es6';
import Step04 from './Step04/Controller.es6';
import Step05 from './Step05/Controller.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    // variable/data
    // this.param = 0
    

    // object
      // dom
      // this.$dom = $('.dom');

      // ui
      // this.menu = new BoxBar($('.menu'));
      // this.logo = new BoxBar($('.logo'));
      // this.logo_s = new BoxBar($('.logo_s'));
      // this.tit = new BoxBar($('.tit'));
      // this.text = new BoxBar($('.text'));
      // this.imgBox = new BoxBar($('.imgBox'));
      // this.scroll = new BoxBar($('.scroll'));
      // this.bar = new BoxBar($('.bar'));

    this.step01 = new Step01($('.special .c-section--inner'));
    this.step02 = new Step02($('.collections .c-section--inner'));
    this.step03 = new Step03($('.news-event .c-section--inner'));
    this.step04 = new Step04($('.story .c-section--inner'));
    this.step05 = new Step05($('.shop .c-section--inner'));


    // new Slider();

  }

  update() {

 
  }

  timeline() {


  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}