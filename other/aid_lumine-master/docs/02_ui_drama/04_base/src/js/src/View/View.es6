//--------------------------------------------------
//
//  ViewTop
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

// import MV from './UI/_Mv/Controller.es6';
import MatchMove from './UI/MatchMove/Controller.es6';

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

    $('.tit_matches .itemW').each(function(index, el) {

      // if (index>1) return;
      // if (index!==1) return;
      
      new MatchMove($(el));

    });

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