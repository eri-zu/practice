// ------------------------------------------------------------
//
//  Text
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Point from '../Object_Point/Point.es6';

export default class Text extends Base {

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

    this.loopStart = false;

  }


  ready() {

    this.text = '宗一郎';
    this.font = 'bold 100px YuGothic';
    this.color = '#000';

    this.ctx.font = this.font;
    this.ctx.textBaseline = "middle";
    this.ctx.textAlign = "center";
    this.textWidth = (this.ctx.measureText(this.text)).width;


    this.x = this.width / 2;
    this.y = this.height / 2;

  }

  update() {

  }
　
  draw() {

    this.ctx.save();
    

    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.text, this.x, this.y);


    this.ctx.restore();

  }

  show() {

  }

  hide() {

  }

}