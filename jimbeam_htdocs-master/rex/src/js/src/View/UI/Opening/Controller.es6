//--------------------------------------------------
//
//  ViewTop
//
//--------------------------------------------------
import Base from '_MyLibs/Util/Base.es6';

export default class ViewCommon extends Base {

  constructor(){

    super();

    this.isUEv = false; // update
    this.isREv = true; // resize
    this.isSEv = false; // scroll
    this.isMEv = false; // mouse

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  start() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        var cb = ()=>{

          if ($('html').hasClass('page_top')) gb.transition.hide(true, true);

        }

        gb.nc.show(false, cb);

      }, 0.0)

  }

  update() {


  }

  setEvents() {

 
  }

}