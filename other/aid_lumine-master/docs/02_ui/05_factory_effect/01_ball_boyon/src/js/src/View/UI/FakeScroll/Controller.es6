//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Controller extends Base {

  constructor($target=$('#wrapper')) {

    super();

    this.$wrap = $('body');
    this.$target = $target;
    this.target = $target.get(0);

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;
    this.isUEv = true;

    this.speed = 0.12;

    this.scrollY = gb.s.st;
    this.y = 0;
    this.oldy = 0;

    this.$wrap.height(this.$target.height());

    this.$target.css({position: 'fixed',width: '100%'});

  }

  update() {

    // update
    this.y += (this.scrollY-this.y)*this.speed;
    this.y = Number(this.y.toFixed(1));

    // draw
    this.drawPos();

    // constrain
    var dis = (this.scrollY - this.y);
    if(dis < 1 && dis > -1) this.offU();

    this.oldy = this.y;

  }

  drawPos() {

    this.target.style.transform ="translate3d(0, " + (-this.y) + "px, 0)";

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