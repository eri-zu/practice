//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Position from './Position.es6';
import * as m from 'Util/Math/index.es6';

export default class Controller extends Base {

  constructor($target=$('#wrapper')) {

    super();

    this.$target = $('.parallaxImg');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;
    this.isUEv = true;

    this.isRun = false;
    this.speed = 0.12;
    this.scrollY = gb.s.st;
    this.sy = 0;
    this.y = 0;
    this.tary = 0;
    this.ease = 0.08;
    this.dis = 90;
    if (gb.r.w<=750) this.dis = 60;

    this.list = [];
    this.$target.each((index, el)=>{

      var p = new Position($(el), 'parallax_About_resize'+index);
      var obj = {};
      obj.target = $(el).get(0);
      obj.p = p;
      obj.y = 0;

      var val = index * 0.5;
      if (index==1) val = index * 0.5;
      obj.dis = 100 * (val + 1);

      this.list.push(obj);
      
    });    

  }

  update() {

    // if (gb.up.frame%4==0) return

    this.sy += (this.scrollY - this.sy) * this.speed;    

    for (var i = 0; i < this.list.length; i++) {
      var l = this.list[i];

      var p = l.p;
      p.update();
      var targetY = -l.dis/2+p.progress*l.dis/2;
      l.y += (targetY - l.y) * this.ease;
      l.y = Number(l.y.toFixed(1));
      if(p.progress < 1.2 && p.progress > -0.2) this.drawPos(l.target, l.y);

    }

    // updateを止める
    var dis = (this.scrollY - this.sy);
    if(dis < .1 && dis > -.1) {
      this.isRun = false;
      this.offU();
    }

  }

  drawPos(t, y) {

    // if (gb.up.frame%4==0) return

    t.style.transform = "translate3d(0, " + (-y) + "px, 0)";

  }

  onScroll() {

    this.scrollY = gb.s.st;
    if (!this.isRun) {
      this.isRun = true;
      this.offU();
      this.onU();
    }

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

    gb.sl.add('parallax', this.onScroll.bind(this));

  }

  removeEvents() {

    super.removeEvents();

    for (var i = 0; i < this.list.length; i++) {
      var p = this.list[i].p;
      p.removeEvents();
    }

  }

}