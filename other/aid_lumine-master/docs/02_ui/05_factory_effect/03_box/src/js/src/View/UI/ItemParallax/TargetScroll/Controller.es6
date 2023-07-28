//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Position from './Position.es6';
import * as m from 'Util/Math/index.es6';
import * as e from 'Util/Easing/index.es6';

export default class Controller extends Base {

  constructor($wrap) {

    super();

    this.$target = $wrap.find('.item');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;
    this.isUEv = true;

    this.isRun = false;
    this.speed = 0.12;
    this.scrollY = gb.s.st;
    this.y = 0;
    this.tary = 0;

    this.top = .8;
    this.btm = .2;
    this.kake = 3;
    this.ease = .06;
    if (gb.u.dv.isSP) {
      this.top = .8;
      this.btm = .2;
      this.kake = 2;
      this.ease = .08;
    }

    this.list = [];
    this.listPlane = [];

    // param set
    this.$target.each((index, el)=>{

      // if (index>0) return;

      // obj
      var obj = {};
      obj.$target = $(el);
      obj.$inner = $(el).find('.itemInner');
      obj.pos = new Position($(el));
      obj.y = 0;
      obj.scale = 0;

      // random
      // if ($(el).hasClass('item')) {

      //   obj.ease = m.map(0.12 + (Math.random() - 0.5) * 0.3, 0.04, 0.2, -0.03, 0.27);
      //   obj.distance = 500 + (Math.random() - 0.5) * 1000;

      // // sizeから
      // } else {

        var size = $(el).find('img').width() * $(el).find('img').height() / 1000;
        obj.ease = 0.2 - m.map(size , 0.04, 0.2, 0, 300);
        obj.distance = 300 - Math.random() * size;

      // }

      // 手動
      // obj.ease = $(el).data('ease');
      // obj.distance = $(el).data('distance');

      this.list.push(obj);

    });

  }

  update() {

    // if (gb.up.frame%4==0) return

    this.y += (this.scrollY - this.y) * this.speed;
    
    for(var i=0; i<this.list.length; i++){

      var $target = this.list[i].$target;
      var $inner = this.list[i].$inner;
      var pos = this.list[i].pos;
      var y = this.list[i].y;
      var scale = this.list[i].scale;
      var ease = this.list[i].ease;
      var distance = this.list[i].distance;

      pos.update();

      // var speed = Math.abs(pos.progressC);
      // speed = Number(speed.toFixed(2));

      var targetY = 0.0;
      var scaleT = 1;

      // log(pos.progress);

      if(pos.progress > this.top) {
        var val = pos.progress - this.top;
        var targetY = m.lerp(0.0, pos.progressC * distance * this.kake, val);
        targetY = m.constrain(targetY, 0, 300);

        scaleT = m.map(val, 1.0, 0.0, 0.0, 0.2);
        scaleT = e.inExpo(scaleT);
      }
      if(pos.progress < this.btm) {
        var val = this.btm - pos.progress;
        var targetY = m.lerp(0.0, pos.progressC * distance * this.kake, val);
        targetY = m.constrain(targetY, -300, 0);

        scaleT = m.map(val, 1.0, 0.0, 0.0, 0.2);
        scaleT = e.inExpo(scaleT);
      }

      y += (targetY - y) * this.ease;
      y = Number(y.toFixed(1));
      scale += (scaleT - scale) * 0.12;
      // scale = Number(scale.toFixed(1));
      this.drawPos($inner, y, scale);
      this.list[i].y = y;
      this.list[i].scale = scale;

    }

    // updateを止める
    var dis = (this.scrollY - this.y);
    if(dis < .1 && dis > -.1) {
      this.isRun = false;
      this.offU();
    }

  }

  drawPos($target, y, scale) {

    // if (gb.up.frame%4==0) return

    $target.get(0).style.transform = "translate3d(0, " + (-y) + "px, 0) scale("+scale+")";

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

    gb.sl.add('FakeScroll', this.onScroll.bind(this));

  }

}