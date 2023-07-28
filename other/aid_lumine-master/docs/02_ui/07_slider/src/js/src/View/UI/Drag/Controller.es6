//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// import Position from './Position.es6';
import * as m from 'Util/Math/index.es6';
import * as e from 'Util/Easing/index.es6';

export default class Controller extends Base {

  constructor($target=$('#wrapper')) {

    super();

    // this.$target = $('.imgInnerWrap');
    this.$target = $('.circle');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isRun = false;
    this.isDown = false;
    this.x = 0;
    this.sx = 0;
    this.sumx = 0;
    this.tarx = 0;

    this.y = 0;
    this.sy = 0;
    this.sumy = 0;
    this.tarx = 0;

    this.ax = 0;
    this.vx = 0;
    this.ay = 0;
    this.vy = 0;
    this.EASING = 0.25;
    this.FRICTION = 0.7;

    $('body').addClass('grab');

  }

  update() {

    // マウスを押した位置から離れている値
    var disx = gb.m.x - this.sx;
    var disy = gb.m.y - this.sy;
    if (this.isDown) {
      this.tarx = this.sumx + disx * 1.0; // マウスの離れている距離  // 前回値を足す
      this.tary = this.sumy + disy * 1.0; // マウスの離れている距離  // 前回値を足す
    } else {
      this.tarx = 0.0; // マウスの離れている距離  // 前回値を足す
      this.tary = 0.0; // マウスの離れている距離  // 前回値を足す
    }

    // // 摩擦
    var fric = 0.3;
    this.tarx *= fric;
    this.tary *= fric;

    // x
    this.ax = (this.tarx - this.x) * this.EASING;
    this.vx += this.ax;
    this.vx *= this.FRICTION;
    this.x += this.vx;
    // y
    this.ay = (this.tary - this.y) * this.EASING;
    this.vy += this.ay;
    this.vy *= this.FRICTION;
    this.y += this.vy;
  
    TweenMax.set(this.$target, {x: this.x, y: this.y});


    // updateを止める
    var dis = (gb.m.x - this.x);
    if(dis < .1 && dis > -.1) {
      this.offU();
      this.isRun = false;
    }

  }

  onDown() {

    this.isDown = true;

    // マウスを押した位置の保存
    this.sx = gb.m.x;
    this.sy = gb.m.y;

    if (!this.isRun) {
      this.isRun = true;
      this.offU();
      this.onU();
    }

    $('body')
      .removeClass('grab')
      .addClass('grabbing');
    
  }

  onUp() {

    this.isDown = false;

    this.sumx = 0;
    this.sumy = 0;

    // this.offU();
    // this.isRun = false;

    $('body')      
      .removeClass('grabbing')
      .addClass('grab');

  }

  setEvents() {

    // grab
    $(window).on('mousedown', this.onDown.bind(this));
    $(window).on('mouseup', this.onUp.bind(this));

  }

}