//--------------------------------------------------
//
//  ViewTop sss
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

import Sns from './Func/Sns.es6';

import Responsive from './UI/Layout/ResponsiveSwitchImg.es6';
import Size from './UI/Layout/Size.es6';
import Clone from './UI/Layout/Clone.es6';
import UIController from './UI/Controller.es6';

export default class ViewCommon extends Base {

  constructor(){

    super();

    this.name = 'ViewCommon';

    this.isUEv = false; // update
    this.isREv = true; // resize
    this.isSEv = false; // scroll
    this.isMEv = false; // mouse

    this.setup();
    this.setEvents();

  }

  setup() {

    if (gb.u.dv.isAndroid()) $('body').addClass('isAndroid');
    


    this.onLoad();

  }

  onLoad() {

    new Responsive();

    // gb.f.SPH($('#wrapper, .section01 .block01'));

    // ------------------------------------------------------------
    //  Util
    // ------------------------------------------------------------
    new Sns();

    // ------------------------------------------------------------
    //  layout
    // ------------------------------------------------------------
    // new Size();
    // new Clone();
    // this.setPos();

    // ------------------------------------------------------------
    //  ui
    // ------------------------------------------------------------
    gb.uic = this.uic = new UIController();

    // ------------------------------------------------------------
    // timeline
    // ------------------------------------------------------------
    // this.uic.timeline();

    // this.$header = $('#header');
    // this.$bg = $('.block01 .bg');
    // this.$tit = $('.block01 .tit');
    // this.$pipe = $('.block02 .pipe');
    // TweenMax.set(this.$header, {opacity: 1});
    // TweenMax.set(this.$bg, {opacity: 1});
    // TweenMax.set(this.$tit, {opacity: 1});
    // TweenMax.set(this.$pipe, {opacity: 1});
    
  }

  onLoadingEnd() { 

    // ------------------------------------------------------------
     //  Util
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     //  layout
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     //  ui
     // ------------------------------------------------------------
          

     // ------------------------------------------------------------
     // effect
     // ------------------------------------------------------------

     // ------------------------------------------------------------
     // Scene / timeline
     // ------------------------------------------------------------


  }

  update() {


  }

  onResize() {


  }

  onLoadAll() {

    // new Responsive();

  }

  setEvents() {

    super.setEvents();

    // $(window).on('load', this.onLoad.bind(this));
    $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
    $(window).on('loadAll', this.onLoadAll.bind(this));

  }

}