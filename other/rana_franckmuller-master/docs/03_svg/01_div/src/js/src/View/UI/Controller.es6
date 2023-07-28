//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.bird = document.getElementById("R");
    this.circle = document.getElementById("circle");
    this.totalLength = this.bird.getTotalLength() >> 0;
    this.nowPos = 0;

  }

  update() {

    // if(this.nowPos > this.totalLength){ 
    //   console.log("fin");
    //   return;
    // }

    var now = this.nowPos%this.totalLength;
    var point = this.bird.getPointAtLength(now);
    this.circle.style.left = point.x + "px";
    this.circle.style.top = point.y + "px";

    this.nowPos++;
 
  }

  timeline() {


  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}