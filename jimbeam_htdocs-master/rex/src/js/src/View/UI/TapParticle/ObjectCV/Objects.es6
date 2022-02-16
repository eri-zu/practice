// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// object
import Tap from './Tap/Controller.es6';

// custom

export default class Objects extends Base {

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

    this.isUEv = true;

    // this.p = new Params();

    // ready
    this.ready();

    // add
    this.add();

  }


  ready() {


  }

  add() {

    this.Tap = new Tap(this.ctx, this.canvas);

  }

  update() {

    this.ctx.clearRect(0, 0, gb.r.w, gb.r.h);

    this.Tap.update();

  }
　
  draw() {

    this.Tap.draw();

  }

  show() {


  }

  hide() {

 
  }

}