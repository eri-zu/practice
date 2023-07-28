//--------------------------------------------------
//
//  ViewTop
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

// import MV from './UI/_Mv/Controller.es6';
import Drag from './UI/Drag/Controller.es6';
import DragArea from './UI/DragArea/Controller.es6';
import Slider from './UI/Slider/Controller.es6';

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

  }

  onLoad() {

    // ------------------------------------------------------------
    //  Util
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    //  layout
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    //  ui
    // ------------------------------------------------------------
    // new MV();
    // new Drag();
    new DragArea($('.imgs'));
    new Slider();

    gb.lm.completed++;

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
    

  }

  update() {


  }

  setEvents() {

    super.setEvents();

    $(window).on('load', this.onLoad.bind(this));
    // $(window).on('loadingEnd', this.onLoadingEnd.bind(this));

  }

}