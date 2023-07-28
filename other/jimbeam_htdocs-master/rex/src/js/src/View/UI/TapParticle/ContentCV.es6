//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Objects from './ObjectCV/Objects.es6';

import Base from '_MyLibs/Util/Base.es6';

export default class Content extends Base {

  constructor($wrap, id) {

    super();

    this.$wrap = $wrap;
    this.id = id;

    // canvas size
    this.w = gb.r.w;
    this.h = gb.r.h;

    this.isREv = true;
    this.isRetina = true;

    this.setup();
    this.setEvents();
    // this.timeline();

  }

  setup() {

    // canvas要素追加
    var dom = '<canvas id="'+this.id+'"></canvas>';
    this.$wrap.append(dom);


    // style, layout
    this.canvas = document.getElementById(this.id);
    this.ctx = this.canvas.getContext("2d");
    $(this.canvas).css({position: 'absolute',top: 0,left: 0,'z-index':9999999,opcaity:1,'pointer-events':'none'})

    this.onResize();

    // obj生成
    this.add();

  }

  add() {

    // obj生成
    this.c = new Objects(this.ctx, this.canvas);

  }

  update() {


  }

  timeline() {


  }

  onResize() {

    if (this.isRetina) {

      // attribute
      this.canvas.width = gb.r.w * 2;
      this.canvas.height = gb.r.h * 2;

      // css
      $(this.canvas).width(gb.r.w);
      $(this.canvas).height(gb.r.h);

      this.ctx.scale(2,2);

    } else {

      this.canvas.width = gb.r.w;
      this.canvas.height = gb.r.h;      
      
    }

  }

}