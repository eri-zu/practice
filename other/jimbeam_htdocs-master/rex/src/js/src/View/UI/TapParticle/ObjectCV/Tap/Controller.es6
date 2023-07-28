// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Circle from './Circle.es6';

export default class Bubble extends Base {

  constructor(ctx, canvas) {

    super();

    this.ctx = ctx;
    this.canvas = canvas;

    this.width = $(this.canvas).width();
    this.height = $(this.canvas).height();

    this.setup();
    this.setEvents();

  }

  setup() {

    // param
    // this.p = new Params();

    // ready
    this.ready();

    // add
    this.add();

  }

  ready() {

    this.num = 16;
    this.c = [];

  }

  add() {


  }

  update() {

    for (var i = 0; i < this.c.length; i++) {
      var c = this.c[i];
      c.update();
    }

    // log(this.c.length); 
    
  }
　
  draw() {


  }

  onTouch() {

    // for (var i = 0; i < this.num; i++) {
    //   var c = this.c[i];
    //   c.onTouch();
    // }

    for (var i = 0; i < this.num; i++) {
      var c = new Circle(this.ctx, this.canvas);
      this.c.push(c);
      c.onTouch(this, i, this.num);
    }

  }

  setEvents() {

    $(window).on('touchstart', ()=>{this.onTouch.call(this)});

  }

}