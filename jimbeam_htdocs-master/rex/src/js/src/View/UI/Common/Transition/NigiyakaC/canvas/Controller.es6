//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

// import Gradation from './ObjectCV/Gradation.es6';
import Imgs from './ObjectCV/Imgs.es6';

import Base from '_MyLibs/Util/Base.es6';

export default class Content extends Base {

  constructor($wrap, id) {

    super();

    this.$wrap = $wrap;
    this.id = id;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    this.w = gb.r.w;
    this.h = gb.r.h;

    this.isRetina = true;

    // canvas要素追加
    var dom = '<canvas id="'+this.id+'"></canvas>';
    this.$wrap.append(dom);
    // style, layout
    this.canvas = document.getElementById(this.id);
    this.stage = new createjs.Stage(this.canvas);
    $(this.canvas).css({position: 'fixed',top: 0,left: 0,'z-index': 99999,opcaity:1})

    if (this.isRetina) {
      // this.ctx.scale(2,2);
      this.stage.scaleX = 2;
      this.stage.scaleY = 2;
    }

    this.onResize();

    // obj生成
    this.add();

  }

  add() {

    // obj生成
    // this.c = new Gradation(this.stage);
    this.c = new Imgs(this.stage);

  }

  update() {

    this.stage.update();

  }

  show(isTrans,cb) {

    this.c.show(isTrans,cb);

  }

  onResize() {
 
    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{

      if (this.isRetina) {

        // attribute
        this.canvas.width = gb.r.w * 2;
        this.canvas.height = gb.r.h * 2;

        // css
        $(this.canvas).width(gb.r.w);
        $(this.canvas).height(gb.r.h);
      } else {

        this.canvas.width = gb.r.w;
        this.canvas.height = gb.r.h;      
        
      }

    },100);

  }

}