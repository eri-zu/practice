// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';

export default class Dom extends Base {

  constructor($w) {

    super();

    this.$wrap = $w;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.x = 0;
    this.y = 0;
    this.wrapx = 0;
    this.wrapy = 0;

    this.prex = 0;

    this.ease = 0.12;
    this.radius = 150;

    this.v = 0;
    this.isEnter = false;

    this.isLock = false;
    this.isLock2 = false;
    
    this.defx = this.$wrap.offset().left + this.$wrap.width() / 2;
    this.defy = this.$wrap.offset().top + this.$wrap.height() / 2 - gb.s.st;

  }

  update() {

    var basex = this.$wrap.offset().left + this.$wrap.width() / 2;
    var basey = this.$wrap.offset().top + this.$wrap.height() / 2 - gb.s.st;

    var mx = gb.m.x;
    var my = gb.m.y;

    var dist = m.dist({x:mx,y:my},{x:basex,y:basey});

    // log(dist, mx, my, basex, basey);

    if (dist < this.radius) {


      var theta = Math.atan2(basey - my, basex - mx);
      // var d = 3000 / dist;
      var d = 30;

      log(m.degree(theta));

      // var x = basex - this.defx;
      // var y = basey - this.defy;
      var x = 0;
      var y = 0;

      // spread
      x += d * Math.cos(theta);
      y += d * Math.sin(theta);

      if (!this.isLock2) this.move(x, y);

      if (!this.isLock) this.rotate();

    } else {


    }


  }
　
  move(x, y) {

    this.isLock2 = true;
    var tl = new TimelineMax();
    tl
      .to(this.$wrap, 0.05, {
        x: '+=' + x,
        y: '+=' + y,
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.isLock2 = false;
        }
      })

  }

  rotate() {

    this.isLock = true;
    var tl = new TimelineMax();
    tl
      .to(this.$wrap, 0.1, {
        rotationZ: (Math.random() - 0.5) * 180,
        ease: Expo.easeOut,
        onComplete: ()=>{
          this.isLock = false;
        }
      })

  }

  onEnter() {

  
  }

  onLeave() {

    this.isEnter = false;  

  }  

  timeline() {


  }

  setEvents() {

    super.setEvents();
  
    // gb.sl.add('Play', this.onScroll.bind(this));   

    // this.$target.on('mouseenter', this.onEnter.bind(this));
    // this.$target.on('mouseleave', this.onLeave.bind(this));

  }

}