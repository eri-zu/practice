//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Position from './Position.es6';
import * as m from 'Util/Math/index.es6';

export default class Controller extends Base {

  constructor($target=$('#wrapper')) {

    super();

    this.$target = $('.imgInner');
    this.target = $target.get(0);

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;
    this.isUEv = true;

    this.speed = 0.1;
    this.scrollY = gb.s.st;
    this.y = 0;

    this.list = [];

    this.$target.each((index, el)=>{

      var obj = {};

      // if (index!==8) return; 

      obj.$target = $(el);
      obj.pos = new Position($(el));
      obj.y = 0;

      // random
      // obj.ease = m.map(0.12 + (Math.random() - 0.5) * 0.3, 0.04, 0.2, -0.03, 0.27);
      // obj.distance = 500 + (Math.random() - 0.5) * 1000;

      // sizeから
      var size = $(el).find('img').width() * $(el).find('img').height() / 1000;
      // log(size / 1000);
      obj.ease = 0.2 - m.map(size , 0.04, 0.2, 0, 600);
      obj.distance = 600 - Math.random() * size;

      // 手動
      // obj.ease = $(el).data('ease');
      // obj.distance = $(el).data('distance');

      this.list.push(obj);

      // log(obj.ease)

    });

  }

  update() {

    this.y += (this.scrollY - this.y) * this.speed;
    
    for(var i=0; i<this.list.length; i++){

      var $target = this.list[i].$target;
      var pos = this.list[i].pos;
      var y = this.list[i].y;
      var ease = this.list[i].ease;
      var distance = this.list[i].distance;

      pos.update();

      var speed = Math.abs(pos.progressC);
      // speed = m.map(speed, 0.8, 1.0, 0.0, 1.0);
      speed = Number(speed.toFixed(2));
      // speed = Math.pow(m.map(speed, 1.0, 1.3, 0.0, 1.0), 3.0);

      // log(speed, pos.progressC);

      // var targetY = pos.progressC * distance * speed;
      var targetY = pos.progressC * distance;
      // var targetY = pos.progressC * distance;
      y += (targetY - y) * ease;
      y = Number(y.toFixed(3));

      // log(targetY, pos.progressC);

      if(pos.progress < 1.5 && pos.progress > -.5) {
        // imgs[i].img.style.transform = translate3d('0px',Number(imgs[i].y.toFixed(3))+'%',200);
        // imgs[i].title.style.transform = translate3d('0px',Number(imgs[i].titleY.toFixed(3))+'px',0);

        this.drawPos($target, y);
      }

    }

    var dis = (this.scrollY - this.y);
    if(dis < .1 && dis > -.1) this.offU();

    // log(1)

  }

  drawPos($target, y) {

    $target.get(0).style.transform = "translate3d(0, " + (-y) + "px, 0)";

  }

  onScroll() {

    this.scrollY = gb.s.st;
    this.offU();
    this.onU();

  }

  onResize() {

    this.$wrap.height(this.$target.height());

  }

  setEvents() {

    super.setEvents();

    gb.sl.add('FakeScroll', this.onScroll.bind(this));

  }

}