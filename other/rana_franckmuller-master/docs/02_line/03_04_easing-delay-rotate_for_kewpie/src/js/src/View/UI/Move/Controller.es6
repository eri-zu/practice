// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
import * as e from 'Util/Easing.es6';

export default class Dom extends Base {

  constructor($target, easev, rot) {

    super();

    this.$target = $target;
    this.easev = easev;
    this.tarDefRot = rot;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.x = 0;
    this.y = 0;
    this.mx = 0;
    this.my = 0;
    this.ease = this.easev;
    this.tarRot = 0;
    this.rot = 0;

    this.radius = 100;

    this.premx = 0;
    this.premy = 0;

    this.basex = this.$target.offset().left + this.$target.width() / 2;
    this.basey = this.$target.offset().top + this.$target.height() / 2;

  }

  update() {

    var mx = gb.m.x;
    var my = gb.m.y;

    var tarx = 0;
    var tary = 0;
    var dismx = mx - this.premx;
    var dismy = my - this.premy;

    // mousemove
    tarx += (mx - this.basex) + 20;
    tary += (my - this.basey) - 20;

    var tarRot1 = this.tarDefRot;    
    var tarRot2 = this.tarDefRot + (dismx + dismy) * 30;
    var dist = m.dist({x:this.x,y:this.y},{x:tarx,y:tary});
    dist = m.constrain(dist, 0, 600);
    dist = m.map(dist, 0, 1, 0, 600);
    this.tarRot = m.lerp(tarRot1,tarRot2,dist);
    // this.tarRot = Math.min(this.tarRot, 360 + 45);

    // this.x += (tarx - this.x) * this.ease;
    // this.y += (tary - this.y) * this.ease;
    // this.rot += (this.tarRot - this.rot) * this.ease;


    this.premx = mx;
    this.premy = my;

    this.mx += (mx - this.mx) * 0.05;
    this.my += (my - this.my) * 0.05;
    var dist2 = m.dist({x:this.mx,y:this.my},{x:mx,y:my});
    dist2 = m.constrain(dist2, 0, 100);
    dist2 = m.map(dist2, 0, 0.8, 0, 100);
    // var val = e.inOutCirc(dist2);
    var val = e.inOutSine(dist2);
    // log(val, dist2);

    this.x += (tarx - this.x) * this.ease * (1.0 - val);
    this.y += (tary - this.y) * this.ease * (1.0 - val);
    this.rot += (this.tarRot - this.rot) * this.ease;

  }
　
  draw() {

    TweenMax.set(this.$target, {x: this.x, y: this.y, z: 0, rotationZ: this.rot});

  }

  rotate() {


  }

  timeline() {


  }

  setEvents() {

    super.setEvents();
    

  }

}