//--------------------------------------------------
//
//  ViewTop sss
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

import Sns from './Func/Sns.es6';
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

    this.onLoad();

  }

  onLoad() {

    gb.f.SPH($('.section'));
    // var baseW = 375;
    // var baseH = 667;
    // baseH = baseH * gb.r.w / baseW;
    // $('.section').height(baseH);

    // ------------------------------------------------------------
    //  Util
    // ------------------------------------------------------------
    new Sns($('.fbShare_header'),$('.twShare_header'),$('.lineShare_header'),$('.onMail'));

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
    this.onResize();
    
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

    // let vh = gb.r.h;
    // document.documentElement.style.setProperty('--h', vh + 'px');

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