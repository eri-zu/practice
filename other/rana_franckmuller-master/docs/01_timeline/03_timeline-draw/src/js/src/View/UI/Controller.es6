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

    // variable/data
    // this.param = 0
    

    // object
    // dom
    // this.$dom = $('.dom');

    // ui
    this.menu = new BoxBar($('.menu'));
    this.logo = new BoxBar($('.logo'));
    this.logo_s = new BoxBar($('.logo_s'));
    this.bg = new Div($('.bg'));
    this.tit = new BoxBar($('.tit'));
    this.text = new BoxBar($('.text'));
    this.imgBox = new BoxBar($('.imgBox'));
    this.scroll = new BoxBar($('.scroll'));
    this.indicator = new BoxBar($('.indicator'));






    this.timeline();

  }

  update() {

 
  }

  timeline() {

    var tl = new TimelineMax({delay: 2});

    tl
      .add(()=>{

        this.tit.show();
        this.text.show();
        this.imgBox.show();

      }, 0.0)
      .add(()=>{

        this.menu.show();
        this.logo.show();
        this.logo_s.show();

        this.scroll.show();
        this.indicator.show();

      }, 1.3)
      .add(()=>{

        this.bg.show(2.0);
        TweenMax.to($('.imgBox .boxBarTarget'), 2.0, {
          opacity: 0,
          ease: Power2.easeInOut,
        })
        

      }, 2.5)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}