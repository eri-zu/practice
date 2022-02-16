// ------------------------------------------------------------
//
//  Bubble
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Point from '../Object_Point/Point.es6';

import Frequency from '../../UtilCV/Frequency.es6';

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

    // ready
    this.ready();

    // loop start
    this.loopStart = false;

  }


  ready() {

    // 四角形の4隅
    this.x = 20;
    this.y = 20;
    this.w = 100 / 2;
    this.h = 50;


  }

  update() {


  }
　
  draw() {

    this.ctx.save();
    this.ctx.translate(100, 50);

    // rect
    this.ctx.fillStyle = "#5bb1dc";

    // rect
    this.ctx.fillRect(this.x, this.y, this.w, this.h);

    // round rect
    this.roundRect(this.ctx, this.x * 5, this.y * 5, this.w, this.h, 5, true, false);

    this.ctx.restore();

  }

  roundRect(ctx, x, y, width, height, radius, fill, stroke) {

    if (typeof stroke == 'undefined') {
      stroke = true;
    }
    if (typeof radius === 'undefined') {
      radius = 5;
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }

  }

}