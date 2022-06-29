//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// canvas
import Canvas from './canvas/Controller.es6';

// dom

export default class Controller extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    var $wrap = $('.slider .imgWrap');

    gb.canvas = {};
    gb.canvas.w = $wrap.width();
    gb.canvas.h = $wrap.height();

    // canvas
    gb.canvas = this.c = new Canvas($wrap);

  }

  update() {

 
  }

  show() {

    this.c.scene01.obj.Img.show();

    // if (this.c.scene01.obj.Img.fsIndex==0) this.c.scene01.obj.Img.show();
    // if (this.c.scene01.obj.Img.fsIndex==1) this.c.scene01.obj.Img.show1();
    // if (this.c.scene01.obj.Img.fsIndex==2) this.c.scene01.obj.Img.show();
    // if (this.c.scene01.obj.Img.fsIndex==3) this.c.scene01.obj.Img.show3();
    // if (this.c.scene01.obj.Img.fsIndex==4) this.c.scene01.obj.Img.show();
    // if (this.c.scene01.obj.Img.fsIndex==5) this.c.scene01.obj.Img.show();
    // if (this.c.scene01.obj.Img.fsIndex==6) this.c.scene01.obj.Img.show();
    // if (this.c.scene01.obj.Img.fsIndex==7) this.c.scene01.obj.Img.show();
    // if (this.c.scene01.obj.Img.fsIndex==8) this.c.scene01.obj.Img.show();

  }

  next() {

    this.c.scene01.obj.Img.next();

    // if (this.c.scene01.obj.Img.fsIndex==0) this.c.scene01.obj.Img.next();
    // if (this.c.scene01.obj.Img.fsIndex==1) this.c.scene01.obj.Img.next1();
    // if (this.c.scene01.obj.Img.fsIndex==2) this.c.scene01.obj.Img.next();
    // if (this.c.scene01.obj.Img.fsIndex==3) this.c.scene01.obj.Img.next3();
    // if (this.c.scene01.obj.Img.fsIndex==4) this.c.scene01.obj.Img.next();
    // if (this.c.scene01.obj.Img.fsIndex==5) this.c.scene01.obj.Img.next();
    // if (this.c.scene01.obj.Img.fsIndex==6) this.c.scene01.obj.Img.next();
    // if (this.c.scene01.obj.Img.fsIndex==7) this.c.scene01.obj.Img.next();
    // if (this.c.scene01.obj.Img.fsIndex==8) this.c.scene01.obj.Img.next();

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

    $(window).on('sliderChangeSlider', (e, index)=>{

      this.next();
      
    });

  }

}