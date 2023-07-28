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
    this.ease = 0.06;

    $('body').addClass('grab');

  }

  update() {

    // マウスを押した位置から離れている値
    var dis = gb.m.x - this.sx;
    if (this.isDown) this.tarx = this.sumx + dis * 1.0; // マウスの離れている距離  // 前回値を足す

    // 摩擦
    // var friction = 0.3;
    // this.tarx *= friction;

    this.x += (this.tarx - this.x) * this.ease;
  


    TweenMax.set(this.$target, {x: this.x});


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

    this.sumx = this.tarx;
    // this.tarx = 

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