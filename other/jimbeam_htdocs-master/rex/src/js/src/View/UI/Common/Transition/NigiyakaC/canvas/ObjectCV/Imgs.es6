// ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

import Img from './Img.es6';

import Base from '_MyLibs/Util/Base.es6';
import * as a from 'Util/Array.es6';

export default class Line extends Base {

  constructor(stage) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.isREv = true;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.img = new Image();
    this.img.onload = this.ready.bind(this);
    this.img.src = '/assets/resource/img/tap.png';

  }

  ready() {

    // new Img(this.stage, this.img);

    var num = 15;
    var y = -100;
    var defh = this.img.height;
    var defw = this.img.width;
    var scs = [];
    var ys = [];

    // log(defh);
    
    while (y < gb.r.h*1.1+0){
    // while (y < 20){

      var sc = .5 / 2 + (Math.floor(Math.random() * 6)) * .01;
      // var sc = .4;
      // var sc = .5 / 2;

      ys.push(y);
      scs.push(sc);

      var h = defh * sc;
      y += h;

    }

    // var arr = a.randomArr(ys.length);
    this.len = ys.length;
    this.is = [];
    for (var i = 0; i < ys.length; i++) {

      // var xx = Math.floor(Math.random()*ys.length) * 10;
      // var xx = gb.r.w + arr[i] * 20;
      // var xx = 0;
      // var xx = gb.r.w / 2;
      // var xx = gb.r.w;
      var yy = ys[i];
      var scsc = scs[i];
      // var copyNum = 5 + Math.floor(Math.random() * 3);
      var copyNum = 6;
      // var copyNum = 1;
      // var copyNum = 10;

      // var xx = -(defw * copyNum + i * 10);
      var xx = -(defw * copyNum + 5 * 10);

      // new Nigiyaka(scsc, copyNum, xx, yy);
      var img = new Img(this.stage, this.img, xx, yy, copyNum, scsc, ys.length);

      this.is.push(img);
      
    }


  }

  add() {

    

  }

  show(isTrans,cb) {

    this.cb = cb;

    for (var i = 0; i < this.is.length; i++) {

      var img = this.is[i];
      img.show(isTrans);
      
    }

  }

  hide() {

  }

  onResize() {

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{
      
      this.ready();

    },100);

  }

  setEvents() {

    super.setEvents();

    this.cnt = 0;
    $(window).on('overRight', (event)=>{

      this.cnt++;
      // log('cnt', this.cnt, this.len);
      if (this.len==this.cnt) {
        this.cb();
        this.cnt = 0;
      }
      
    });

  }

}