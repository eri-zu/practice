// ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Point from '../Object_Point/Point.es6';

export default class Line extends Base {

  constructor(ctx, canvas) {

    super();

    this.ctx = ctx;
    this.canvas = canvas;

    this.width = $(this.canvas).width();
    this.height = $(this.canvas).height();

    this.onLoad = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    this.ready();

    this.loopStart = false;

  }


  ready() {

    this.img = new Image();
    this.img.onload = this.add.bind(this);
    this.img.src = '/assets/resource/img/img01.jpg';

  }

  add() {

    this.w = this.img.width / 5;
    this.h = this.img.height / 5;

    this.x = this.width / 2 - this.w / 2;
    this.y = this.height / 2 - this.h / 2;
    // this.x = this.width / 2;
    // this.y = this.height / 2;

    this.onLoad = true;

  }

  update() {


  }
　
  draw() {

    this.ctx.save();

    if (this.onLoad) {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    this.ctx.restore();

  }

  show() {

  }

  hide() {

  }

}