//--------------------------------------------------
//
//  ViewTop
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

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
    new UIController();

    // ------------------------------------------------------------
    // timeline
    // ------------------------------------------------------------

    // clearTimeout(this.Timer);
    // this.Timer = setTimeout(()=>{
        
      this.onResize();
      
    // }, 5000);
    

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

  onResize() {

    var $target = $('.imgBox');

    var w = $target.width();
    var h = $target.height();

    var defW = 375;
    var defH = 667;
    // var defw = 220;
    var defw = 213;
    var defh = 166;

    this.ratioW = gb.r.h / gb.r.w;
    this.ratio = defH / defW;
    var defmt = -56;
    var defml = -32;

    log(this.ratioW > this.ratio, this.ratioW, this.ratio);

    // // size cover
    if (this.ratioW > this.ratio) {
      
      var scale = gb.r.h / defH;
      // scale = Math.ceil(scale);
      // log(scale);

      $target.width(defw * scale);
      $target.height(defh * scale);
      $target.css({
        'margin-left': defml * scale,
        'margin-top': defmt * scale
      });

    // }
    } else if ( this.ratioW <= this.ratio) {

      var scale = gb.r.w / defW;
      // scale = Math.ceil(scale);
      // log(scale);

      $target.width(defw * scale);
      $target.height(defh * scale);
      $target.css({
        'margin-left': defml * scale,
        'margin-top': defmt * scale
      });

    }

  }

  setEvents() {

    super.setEvents();

    $(window).on('load', this.onLoad.bind(this));
    // $(window).on('loadingEnd', this.onLoadingEnd.bind(this));

  }

}