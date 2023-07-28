// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
// import Val from 'Util/Val.es6';

export default class Dom extends Base {

  constructor($target, pos) {

    super();

    this.$wrap = $('.block05 .btns');
    this.$btn = this.$wrap.find('.btn');
    this.points = [];
    this.len = this.$btn.length;
    for (var i = 0; i < this.len; i++) {
      var $t = this.$btn.eq(i);
      var obj = {x:0,y:0,$t:$t.get(0)};
      this.points.push(obj);
    }
    

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    TweenMax.set(this.$btn.find('a'), {z: 0});

  }

  update() {


    for (var i = 0; i < this.len; i++) {

      var obj = this.points[i];
    
      // 変換後のpoint    
      // pos
      var lay = obj.$t.getBoundingClientRect();
      this.points[i].x = lay.left - gb.r.w / 2;
      this.points[i].y = lay.top - gb.r.h / 2;
      // size    
      this.points[i].x += lay.width / 2;
      this.points[i].y += lay.height / 2;
      this.points[i].y *= -1;

    }

  }
　
  draw() {
    
  }

  onEnter(that) {

    var index = this.$btn.index(that);

    this.$btn.eq(index).find('a').addClass('jellyHover');

    gb.mv.obj.onBtnEnter(index);

  }

  onLeave(that) {

    var index = this.$btn.index(that);

    this.$btn.eq(index).find('a').removeClass('jellyHover');

  }

  setEvents() {

    var self = this;

    super.setEvents();

    this.$btn.on('mouseenter touchstart', function(){self.onEnter.call(self,this)});
    this.$btn.on('mouseleave touchend', function(){self.onLeave.call(self,this)});
    

  }

}