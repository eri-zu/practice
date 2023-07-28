//--------------------------------------------------
//
//  ViewTop
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

// import UIController from './UI/Controller.es6';

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
    // new UIController();

    // ------------------------------------------------------------
    // timeline
    // ------------------------------------------------------------

    // ball1
    var $t1 = $('.ball1');
    var tl = new TimelineMax({repeat: -1, yoyo: false, repeatDelay: 1.0});
    tl
      .to($t1.find('.ballInner'), 0.2, {
        y: 5,
        ease: Power3.easeIn,
      }, 0.0)
      .to($t1, 1.0, {
        y: 100,
        ease: Power2.easeIn,
        onStart: ()=>{
          $t1.find('img').addClass('jelly')
        }
      }, 0.0)
      .to($t1, 1.0, {
        scale: 0.5,
        opacity: 0,
        ease: Power4.easeIn,
        onComplete: ()=>{
          $t1.find('img').removeClass('jelly')
        }
      }, 0.0)

    // ball2
    var $t2 = $('.ball2');
    var tl = new TimelineMax({repeat: -1, yoyo: false, repeatDelay: 1.0, delay: 1.0});
    tl
      .to($t2.find('.ballInner'), 0.2, {
        y: 5,
        ease: Power3.easeIn,
      }, 0.0)
      .to($t2, 1.0, {
        y: 100,
        ease: Power2.easeIn,
        onStart: ()=>{
          $t2.find('img').addClass('jelly')
        }
      }, 0.0)
      .to($t2, 1.0, {
        scale: 0.5,
        opacity: 0,
        ease: Power4.easeIn,
        onComplete: ()=>{
          $t2.find('img').removeClass('jelly')
        }
      }, 0.0)


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

     // ------------------------------------------------------------
     // Scene / timeline
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