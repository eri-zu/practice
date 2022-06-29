//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import BoxBar from './BoxBar/Controller.es6';
import Bar_h from './BoxBar/Bar_h.es6';
import Bar_v from './BoxBar/Bar_v.es6';

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
      // this.bg = new BoxBar($('.bg'));
      // this.tit = new BoxBar($('.tit'));
      // this.text = new BoxBar($('.text'));
      // this.imgBox = new BoxBar($('.imgBox'));
      // this.scroll = new BoxBar($('.scroll'));
      // this.bar = new BoxBar($('.bar'));



    new Bar_h();
    new Bar_v();


    // this.timeline();

  }

  update() {

 
  }

  timeline() {

    var tl = new TimelineMax({delay: 0.5});

    tl
      .add(()=>{

        this.bg.show();

      }, 0.0)
      .add(()=>{

        this.tit.show();
        this.text.show();
        this.imgBox.show();

      }, 0.8)
      .add(()=>{

        this.menu.show();
        this.logo.show();
        this.logo_s.show();

        this.scroll.show();
        this.bar.show();

      }, 1.5)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}