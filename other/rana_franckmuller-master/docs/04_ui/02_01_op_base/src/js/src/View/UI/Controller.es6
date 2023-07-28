//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import BoxBar from './BoxBar/Controller.es6';
import Div from './Div/Controller.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    
    // // ui
    this.menu = new Div($('.header .menu'));
    this.logo = new Div($('.header .logo'));
    this.img = new Div($('.slider .imgs .img.active'));
    this.tit = new Div($('.slider .textWrap .textItem.active .tit'));
    this.subTit = new Div($('.slider .textWrap .textItem.active .text'));
    this.indicator = new Div($('.slider .indicator'));
    this.arrow = new Div($('.arrowBtm'));

    this.timeline();

  }

  update() {

 
  }

  timeline() {

    var tl = new TimelineMax({delay: 2});

    tl
      .add(()=>{

        this.logo.show();
        this.img.show();
        this.tit.show();
        this.subTit.show();

      }, 0.0)
      .add(()=>{

        this.menu.show();
        this.indicator.show();
        this.arrow.show();

      }, 1.3)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}