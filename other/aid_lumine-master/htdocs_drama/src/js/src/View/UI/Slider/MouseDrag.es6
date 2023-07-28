// ------------------------------------------------------------
//
//  MouseDrag
//
// ------------------------------------------------------------

export default class MouseDrag {

  constructor($wrap=$('#wrapper')) {

    // ---------------
    //  dom
    // ---------------
    this.$wrap = $wrap;

    // ---------------
    //  variable
    // ---------------

    // position
    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
    this.dis = 0;this.minDis = 50;
    this.premX = 0;

    // time
    this.sT=0;this.eT=0;this.minT = 300; //startTime,ellapsedTime,


    this.onStart = ()=>{};
    this.onMove = ()=>{};
    this.onEnd = ()=>{};
    this.onSwipe = ()=>{};

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  onTouchStart (e) {

    // time
    this.sT = (new Date).getTime();
    // pos
    this.sX = e.pageX - $(window).scrollLeft();

    // コールバック
    this.onStart();

  }

  onTouchMove (e) {

    // pos
    this.mX = e.pageX - $(window).scrollLeft();
    // var dis = this.sX - this.mX;
    var dis = this.premX - this.mX;
    var sign = 1;
    if (dis<0) sign = -1;

    this.onMove(sign, Math.abs(dis));

    this.premX = this.mX;

  }

  onTouchEnd (e) {

    // コールバック
    this.onEnd();


    // time
    this.eT = (new Date).getTime() - this.sT;
    var disT = this.sT - this.eT;
    // pos
    this.eX = e.pageX - $(window).scrollLeft();
    var dis = this.sX - this.eX;
    var sign = 1;
    if (dis<0) sign = -1;

    // 最小時間より長かったら、処理
    // if(this.minT < this.eT) this.onSwipe();
    // 最小距離より長かったら、処理
    // log(dis, this.minDis);
    if(Math.abs(dis) > this.minDis) this.onSwipe(sign);

  }

  removeEvents(){

    this.$wrap.off('mousedown.MouseDrag');
    $(window).off('mousemove.MouseDrag');
    $(window).off('mouseup.MouseDrag');

  }
    
  setEvents(){

    this.removeEvents();

    var self = this;

    this.$wrap.on('mousedown.MouseDrag', (e)=>{this.onTouchStart(e);});
    // this.$wrap.on('mousemove.MouseDrag', (e)=>{this.onTouchMove(e);});
    // this.$wrap.on('mouseup.MouseDrag', (e)=>{this.onTouchEnd(e);});
    $(window).on('mousemove.MouseDrag', (e)=>{this.onTouchMove(e);});
    $(window).on('mouseup.MouseDrag', (e)=>{this.onTouchEnd(e);});

  }
    
}