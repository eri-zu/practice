//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Star from './ObjectCV/Star.es6';

import Base from '_MyLibs/Util/Base.es6';
import * as s from 'Util/String/index.es6';

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

    // canvas要素追加
    var dom = '<canvas id="'+this.id+'"></canvas>';
    this.$wrap.append(dom);
    // style, layout
    this.canvas = document.getElementById(this.id);
    this.stage = new createjs.Stage(this.canvas);
    $(this.canvas).css({position: 'fixed',top: 0,left: 0,'z-index': 0,opcaity:1})

    this.onResize();

    // obj生成
    this.add();

  }

  add() {

    // obj生成
    // text
    if (gb.urlp.pos=='text') {

      for (var i = 0; i < 13; i++) {

        var p = document.getElementById('text'+s.add0(i+1));
        this.c = new Star(this.stage, 0, 0, p);
        
      }

    } else {

      // watch
      for (var i = 0; i < 75; i++) {

        var p = document.getElementById('watch'+(i+1));
        this.c = new Star(this.stage, 0, 0, p);
        
      }


    }

  }

  update() {

    this.stage.update();

  }

  timeline() {


  }

  onResize() {

    // attribute
    this.canvas.width = gb.r.w;
    this.canvas.height = gb.r.h;

    // css
    // $(this.canvas).width(this.w/2);
    // $(this.canvas).height('auto');

  }

  setEvents() {

    super.setEvents();

    this.stage.on('stagemousedown', (e)=>{

      if (gb.urlp.pos=='text') {

        for (var i = 0; i < 13; i++) {

          var p = document.getElementById('text'+s.add0(i+1));
          this.c = new Star(this.stage, e.stageX, e.stageY, p);
          
        }

      } else {

        // watch
        for (var i = 0; i < 75; i++) {

          var p = document.getElementById('watch'+(i+1));
          this.c = new Star(this.stage, e.stageX, e.stageY, p);
          
        }


      }


    })

  }

}