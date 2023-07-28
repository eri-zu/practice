// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Bubble extends Base {

  constructor(stage, x, y, path) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.x = x;
    this.y = y;
    this.path = path;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    // ready
    this.ready();

    // add
    this.add();

    this.timeline();

  }


  ready() {

    // var path = document.getElementById("text10");
    var path = this.path;

    this.stars     = new createjs.Container()
    this.colorDig   = Math.random() * 360 >> 0;
    this.pathLength = path.getTotalLength();

    var regx = 0;
    var regy = 0;
    
    for (var i = 0; i < this.pathLength; i++) {
      
      var point = path.getPointAtLength(i);
      var star  = new createjs.Shape()
      var r = Math.random() * 100;
      star.graphics
        // .beginFill('hsl('+this.colorDig+', 95%, 56%)')
        .beginFill('rgba('+r+','+r+','+r+',1)')
        // .drawPolyStar(0, 0, 3, 5, 0.6, -90);
        .drawCircle(0, 0, .5);
      star.set({x: point.x, y: point.y});
      this.stars.addChild(star);
      this.colorDig++

      regx += point.x;
      regy += point.y;

    }

    console.log(this.pathLength)

    // 平均化
    regx /= this.pathLength;
    regy /= this.pathLength;

    this.regx = regx;
    this.regy = regy;

    if (gb.urlp.pos=='text') {
      var cx = 170.622 / 2;
      var cy = 77.915 / 2;
    } else {
      var cx = 242.348 / 2;
      var cy = 181.4 / 2;
    }

    this.stars.set({
      x: this.x + regx - cx,
      y: this.y + regy - cy,
      alpha: 0,
      scaleX: 0,
      scaleY: 0,
      regX: regx,
      regY: regy,
      // regX: 0,
      // regY: 0,
    })

  }

  add() {

    this.stage.addChild(this.stars);

  }

  update() {

  }

  timeline() {

    var tl = new TimelineMax();
    tl
      .to(this.stars, 1.0, {
        alpha: 1,
        scaleX: 1,
        scaleY: 1,
        ease: Expo.easeInOut,
        onComplete: ()=>{
          
        }
      })
      .add(()=>{

        this.heartBreak();

      }, 1.0)

  }

  heartBreak() {

    var tl = new TimelineMax();
    tl
      .to(this.stars, 3.0, {
        alpha: 0,
        ease: Expo.easeInOut,
      })
      .add(()=>{
        this.stage.removeChild(this.stars);
      }, 3.0)


    // パス上に配置した星をばらまくアニメーション
    for (var i = 0; i < this.stars.getNumChildren(); i++) {
      
      var star = this.stars.getChildAt(i)

      // ランダムな方向へ Tween させる
      TweenMax.to(star, 3.0, {
        x: this.regx + Math.cos(Math.random() * Math.PI * 2) * Math.random() * 100,
        y: this.regy + Math.sin(Math.random() * Math.PI * 2) * Math.random() * 100,
        scaleX: 1,
        scaleY: 1,
        ease: Power2.easeInOut,
      })

    }
        

  }

  onResize() {


  }

}