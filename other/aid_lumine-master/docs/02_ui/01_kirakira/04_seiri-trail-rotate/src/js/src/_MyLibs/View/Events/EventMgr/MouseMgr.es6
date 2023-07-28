//--------------------------------------------------
//
//  MouseMgr
//
//--------------------------------------------------

export default class MouseMgr {

  constructor($wrap = $(document)) {

    this.$wrap = $wrap;

    this.x = 0;
    this.y = 0;
    this.px = 0; // previous
    this.py = 0; // previous

    this.cx = 0;
    this.cy = 0;

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  onMousemove(e) {

    this.getPos(e);    

  }

  onTouchStart(e) {

    this.x = e.originalEvent.changedTouches[0].pageX; 
    this.y = e.originalEvent.changedTouches[0].pageY;

  }
  onTouchmove(e) {

    this.x = e.originalEvent.changedTouches[0].pageX; 
    this.y = e.originalEvent.changedTouches[0].pageY;

  }
  onTouchEnd(e) {

    this.x = e.originalEvent.changedTouches[0].pageX; 
    this.y = e.originalEvent.changedTouches[0].pageY;

  }

  getPos(e) {

    if (e.offsetX==undefined) { // this works for Firefox
       this.x = e.pageX - this.$wrap.offset().left;
       this.y = e.pageY - this.$wrap.offset().top;
     } else { // works in Google Chrome
       this.x = e.pageX - $(window).scrollLeft();
       this.y = e.pageY - $(window).scrollTop();
     }

    this.cx = this.x - gb.r.haw;
    this.cy = this.y - gb.r.hah;

  }

  setEvents(){

    this.$wrap.on("touchstart.MouseMgr", (e)=>{this.onTouchStart(e);});
    this.$wrap.on("touchmove.MouseMgr", (e)=>{this.onTouchmove(e);});
    this.$wrap.on("touchend.MouseMgr", (e)=>{this.onTouchEnd(e);});
    this.$wrap.on("mousemove.MouseMgr", (e)=>{this.onMousemove(e);});

  }

  removeEvents(){

    this.$wrap.off("touchmove.MouseMgr");
    this.$wrap.off("mousemove.MouseMgr");

  }

}