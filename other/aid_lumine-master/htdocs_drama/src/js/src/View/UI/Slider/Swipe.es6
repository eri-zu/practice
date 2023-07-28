// ------------------------------------------------------------
//
//  Swipe
//
// ------------------------------------------------------------

export default class Swipe {

  constructor($wrap=$('#wrapper'), name) {

    // ---------------
    //  dom
    // ---------------
    this.$wrap = $wrap;
    this.name = name;

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
    this.sX = e.originalEvent.changedTouches[0].pageX;

    this.premX = this.sX;

    // コールバック
    this.onStart();

  }

  onTouchMove (e) {

    // pos
    this.mX = e.originalEvent.changedTouches[0].pageX;
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
    this.eX = e.originalEvent.changedTouches[0].pageX;;
    var dis = this.sX - this.eX;
    var sign = 1;
    if (dis<0) sign = -1;

    // 最小時間より長かったら、処理
    // if(this.minT < this.eT) this.onSwipe();
    // 最小距離より長かったら、処理
    // log(dis, this.minDis);
    if(Math.abs(dis) > this.minDis) this.onSwipe(sign);

  }

  setEvents(){

    var self = this;

    this.$wrap.on('touchstart'+'.'+this.name, (e)=>{this.onTouchStart(e);});
    this.$wrap.on('touchmove'+'.'+this.name, (e)=>{this.onTouchMove(e);});
    this.$wrap.on('touchend'+'.'+this.name, (e)=>{this.onTouchEnd(e);});

  }
    
}