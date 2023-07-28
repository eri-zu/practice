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

    this.ts = [];
    $('#matches .itemW').each((index, el)=>{

      // if (index>0) return;
      // if (index!==1) return;

      var $a = $('.ashiato .itemWA').eq(index);
      
      var m = new MatchMove($(el), $a);
      this.ts.push(m);

    });

    var tl = new TimelineMax();

    tl
      .add(()=>{

        for (var i = 0; i < this.ts.length; i++) {
          var m = this.ts[i];
          m.timeline();
        }
        

      }, 2.0)
      .add(()=>{

        for (var i = 0; i < this.ts.length; i++) {
          var m = this.ts[i];
          m.timeline_r();
        }
        

      }, 8.0)

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