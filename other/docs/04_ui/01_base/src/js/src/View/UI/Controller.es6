//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import BoxBar from './BoxBar/Controller.es6';

import Slider from './Slider/Controller.es6';

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


    new Slider();

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