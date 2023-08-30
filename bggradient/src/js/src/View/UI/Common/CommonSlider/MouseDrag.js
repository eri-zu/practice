// ------------------------------------------------------------
//
//  Swipe
//
// ------------------------------------------------------------
export default class MouseDrag {
  constructor(wrap, target) {
    // ---------------
    //  dom
    // ---------------
    this.wrap = wrap;
    this.target = target;

    // ---------------
    //  variable
    // ---------------

    // position
    this.sX = 0;
    this.mX = 0;
    this.eX = 0; //startX,moveX,endX
    this.dis = 0;
    this.minDis = 40;
    this.premX = 0;

    // time
    this.sT = 0;
    this.eT = 0;
    this.minT = 300; //startTime,ellapsedTime,

    this.onStart = () => {};
    this.onMove = () => {};
    this.onEnd = () => {};
    this.onSwipe = () => {};

    this.isDrag = false;

    this.setup();
    this.setEvents();
  }

  setup() {}

  onTouchStart(e) {
    console.log("start");
    this.isDrag = true;
    // time
    this.sT = new Date().getTime();
    // pos
    // this.sX = e.changedTouches[0].pageX;
    this.sX = e.pageX;

    this.premX = this.sX;

    // コールバック
    this.onStart();
  }

  onTouchMove(e) {
    console.log("move");
    if (!this.isDrag) return;

    // pos
    // this.mX = e.changedTouches[0].pageX;
    this.mX = e.pageX;
    // var dis = this.sX - this.mX;
    var dis = this.premX - this.mX;
    var sign = 1;
    if (dis < 0) sign = -1;

    this.onMove(sign, Math.abs(dis), this.mX);

    this.premX = this.mX;
  }

  onTouchEnd(e) {
    console.log("end");
    this.isDrag = false;

    // コールバック
    this.onEnd();

    // time
    this.eT = new Date().getTime() - this.sT;
    var disT = this.sT - this.eT;
    // pos
    // this.eX = e.changedTouches[0].pageX;
    this.eX = e.pageX;
    var dis = this.sX - this.eX;
    var sign = 1;
    if (dis < 0) sign = -1;

    // 最小時間より長かったら、処理
    // if(this.minT < this.eT) this.onSwipe();
    // 最小距離より長かったら、処理
    // log(dis, this.minDis);
    if (Math.abs(dis) > this.minDis) this.onSwipe(sign);
  }

  removeEvents() {
    this.target.removeEventListener("mousedown", this.onTouchStart.bind(this), {
      passive: false,
    });
    this.wrap.removeEventListener("mousemove", this.onTouchMove.bind(this), {
      passive: false,
    });
    this.wrap.removeEventListener("mouseup", this.onTouchEnd.bind(this), {
      passive: false,
    });
  }

  setEvents() {
    this.removeEvents();

    var self = this;

    this.target.addEventListener("mousedown", this.onTouchStart.bind(this), {
      passive: false,
    });
    this.wrap.addEventListener("mousemove", this.onTouchMove.bind(this), {
      passive: false,
    });
    this.wrap.addEventListener("mouseup", this.onTouchEnd.bind(this), {
      passive: false,
    });
  }
}
