// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Val from 'Util/Val.es6';

export default class Bubble extends Base {

  constructor(ctx, canvas) {

    super();

    this.ctx = ctx;
    this.canvas = canvas;

    this.width = $(this.canvas).width();
    this.height = $(this.canvas).height();

    this.c = (Math.random()<.2)?'#FCE85E':'#ffffff';

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;

    // param
    // this.p = new Params();

    // ready
    this.ready();

    // add
    this.add();

  }

  ready() {

    this.v = new Val();
    this.rad1 = Math.random() * 10000;
    this.rad2 = Math.random() * 10000;

    this.x = gb.r.w / 2;
    this.y = gb.r.h / 2;
    this.r = 0;

    this.opacity = .75 + (Math.random() - .5) * .6;
    this.isStroke = Math.random();

  }

  add() {


  }

  update() {

    var nx = this.v.noise(gb.up.frame / 90, this.rad1) * 12;
    var ny = this.v.noise(gb.up.frame / 90, this.rad2) * 12;

    this.ctx.globalAlpha = this.opacity;
    this.ctx.beginPath();
    this.ctx.arc(this.x + nx, this.y + ny, this.r, 0, 2 * Math.PI, false);
    if (this.isStroke>.5) {
      // this.ctx.strokeStyle = '#FCE85E';
      this.ctx.strokeStyle = this.c;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    } else {
      // this.ctx.fillStyle = '#FCE85E';
      this.ctx.fillStyle = this.c;
      this.ctx.fill();
    }
    this.ctx.closePath();

  }
　
  draw() {


  }

  onTouch(parent, index, len) {

    TweenMax.killTweensOf(this);

    var rad = Math.PI * 2 * Math.random();
    var radius = 60 + Math.random() * 40;
    var mx = gb.m.x;
    var my = gb.m.y;
    // var x = Math.cos(rad) * radius;
    // var y = Math.sin(rad) * radius;
    var x = (Math.random() - .5) * 50;
    var y = (Math.random() - .5) * 50;

    var rx = (Math.random() - .5) * 20;
    var rdur = -.3;
    
    var tl = new TimelineMax({delay: .03 * index});
    tl
      .add(()=>{

        this.x = mx + x;
        this.y = my + y;
        this.r = 6 + (Math.random() - .5) * 3;

      }, 0.0)
      .to(this, 1.0 + rdur, {
        y: my - 80 - Math.random() * -50,
        ease: Back.easeIn.config(.3),
        // ease: Power1.easeOut,
      }, .0)
      .to(this, 1.0 + rdur, {
        x: mx + x + rx,
        ease: Back.easeOut.config(.2),
      }, .0)
      .to(this, 1.0 + rdur, {
        r: 0.0,
        ease: Power1.easeIn,
        onComplete: ()=>{
          if (index==len-1) parent.c.splice(0, len); // 二番目から一つ削除
        }
      }, .0)


  }

  onResize() {

    this.x = gb.r.w / 2;
    this.y = gb.r.h / 2;

  }

}