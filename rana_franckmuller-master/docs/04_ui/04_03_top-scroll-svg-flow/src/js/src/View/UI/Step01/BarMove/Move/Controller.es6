// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';

export default class Dom extends Base {

  constructor($target, easev, rot) {

    super();

    this.$target = $target;
    this.easev = easev;
    // this.tarDefRot = rot;
    this.tarDefRot = 0;

    this.setup();
    this.setEvents();

    this.timeline();

  }

  setup() {

    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.ease = this.easev;
    this.tarRot = 0;
    this.rot = 0;

    this.radius = 100;

    this.premx = 0;
    this.premy = 0;

    this.basex = 0;
    this.basey = 0;

    this.opacity = 0;

    this.dis = 0;

  }

  update() {

    // var mx = gb.m.x;
    // var my = gb.m.y;
    var mx = 0;
    var my = 0;
    // var mx = gb.targetx;
    // var my = gb.targety;

    var tarx = 0;
    var tary = 0;
    var dismx = this.x - this.premx;
    var dismy = this.y - this.premy;

    // mousemove
    // tarx += (mx - this.basex) + 20;
    // tary += (my - this.basey) - 20;
    tarx += (mx - this.basex);
    tary += (my - this.basey);

    var tarRot1 = this.tarDefRot;    
    var tarRot2 = this.tarDefRot + (dismx + dismy) * 30;
    var dist = m.dist({x:this.x,y:this.y},{x:tarx,y:tary});
    this.dis = dist;
    // this.w = 30 + dist;
    dist = m.constrain(dist, 0, 600);
    dist = m.map(dist, 0, 1, 0, 600);
    this.tarRot = m.lerp(tarRot1,tarRot2,dist);
    // this.tarRot = Math.min(this.tarRot, 360 + 45);
    this.opacity = 1.0 - dist;

    this.x += (tarx - this.x) * this.ease;
    this.y += (tary - this.y) * this.ease;
    this.rot += (this.tarRot - this.rot) * this.ease;

    this.premx = this.x;
    this.premy = this.y;

  }
　
  draw() {

    if (this.dis > 0.01) {
      TweenMax.set(this.$target, {x: this.x, y: this.y, z: 0, rotationZ: this.rot, opacity: this.opacity});
    // TweenMax.set(this.$target, {x: this.x, y: this.y, z: 0, width: this.w, rotationZ: this.rot});
    } else {
      TweenMax.set(this.$target, {x: 0, y: 0, z: 0, rotationZ: 0, opacity: 1});
      this.offU();
    }

  }

  rotate() {


  }

  timeline() {



  }

  setEvents() {

    super.setEvents();
    

  }

}