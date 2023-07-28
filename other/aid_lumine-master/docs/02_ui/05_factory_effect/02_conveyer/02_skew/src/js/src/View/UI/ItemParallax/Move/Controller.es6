// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
import Val from 'Util/Val.es6';

export default class Dom extends Base {

  constructor($target, pos, index) {

    super();

    this.$target = $target;
    this.target = this.$target.get(0);
    this.$img = this.$target.find('img');
    this.img = this.$img.get(0);
    this.pos = pos;
    this.point = {x:0,y:0};
    this.index = index;

    this.setup();
    this.setEvents();

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.repeat();

      }, 4.0 + Math.random() * 3.0)

  }

  setup() {

    this.isUEv = true;

    this.v = new Val();

    this.x = 0;
    this.y = 0;

    // noraml
    // this.ease = 0.12;
    // this.radius = 100;

    // random
    this.ease = m.map(0.09 + (Math.random() - 0.5) * 0.1, 0.02, 0.16, -0.03, 0.27);
    this.radius = 50 + 100 * Math.random();
    if (gb.r.w<=768) this.radius = 10 + 20 * Math.random();

    this.ookisa = 0.1 + (Math.random() - 0.5) * 0.04;

    // var size = this.$target.find('img').width() * this.$target.find('img').height() / 1000;
    // this.ease = 0.16 - m.map(size , 0.04, 0.12, 0, 600);
    // this.radius = 600 - size * 0.95;

    this.radStart = 10000 * Math.random();

    this.basex = this.$target.offset().left + this.$target.width() / 2;
    this.basey = this.$target.offset().top + this.$target.height() / 2;

  }

  update() {

    // if (gb.up.frame%4==0) return

    var mx = gb.m.cx;
    var my = gb.m.cy;
    var cx = mx;
    var cy = my;

    var tarx = 0;
    var tary = 0;
    var ookisa = 20;
    var radius = 50;

    // noise
    // tarx += this.v.noise(this.radStart + gb.up.frame / 200) * ookisa;
    // tary += this.v.noise(this.radStart + gb.up.frame / 200, 100) * ookisa;

    // 回転
    tarx += 0 + Math.cos(((Math.sin(this.radStart + gb.up.frame / 150) + 1) / 2) * Math.PI / 2 + Math.PI / 4) * radius;
    tary += 0 + Math.sin(((Math.sin(this.radStart + gb.up.frame / 150) + 1) / 2) * Math.PI / 2 + Math.PI / 4) * radius;

    // mousemove
    tarx += cx * this.ookisa;
    tary += cy * this.ookisa;

    
    this.x += (tarx - this.x) * this.ease;
    this.y += (tary - this.y) * this.ease;

    // draw
    this.x = Number(this.x.toFixed(1));
    this.y = Number(this.y.toFixed(1));

    if(this.pos.progress < 1.5 && this.pos.progress > -.5) this.target.style.transform ="translate3d("+this.x+"px, " + this.y + "px, 0)";

  
    if(this.pos.progress < 1.5 && this.pos.progress > -.5) {

      // 変換後のpoint    
      // pos
      var lay = this.img.getBoundingClientRect();
      this.point.x = lay.left - gb.r.w / 2;
      this.point.y = lay.top - gb.r.h / 2;

      // size    
      // this.point.x += this.$img.width() / 2;
      // this.point.y += this.$img.height() / 2;
      this.point.x += lay.width / 2;
      this.point.y += lay.height / 2;

      this.point.y *= -1;

      // log(this.point)

    }

  }
　
  draw() {

    
  }

  timeline() {


  }

  repeat() {

    var tl = new TimelineMax({});

    tl
      .add(()=>{

        this.$img.addClass('jelly-target');

        if(this.pos.progress < 1.5 && this.pos.progress > -.5) gb.mv.obj.onItemBound(this.index)

      }, 0.0)
      .add(()=>{
        
        this.$img.removeClass('jelly-target');

      }, 2.0)
      .add(()=>{

        this.repeat();

      }, 4.0)

  }

  setEvents() {

    super.setEvents();
    

  }

}