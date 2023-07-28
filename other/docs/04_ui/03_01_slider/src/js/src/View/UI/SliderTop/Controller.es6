//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Order from './Order.es6';

import Render from './Render/Render.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.isUpdate = true;

    this.$wrap = $('.sliderTop');
    this.$img = this.$wrap.find('.imgs .img');

    this.$indicator = $('.indicator');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.len = this.$img.length;

    this.o = new Order(this.len);
    this.r = new Render(this.$wrap, this.len);

    this.timeline();

  }


  next() {

    log('next');

    this.o.go();

    this.r.next(this.o.current, this.o.next, this.o.prev);

  }

  prev() {

    this.o.back();

    this.r.prev(this.o.current, this.o.next, this.o.prev);

  }

  update() {

  }

  autoSwitch(dir='next') {

    if (dir=='next') this.next();
    else this.prev();

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{
        
      this.autoSwitch();
      
    }, 6000);
  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.autoSwitch();

      }, 2.0)    

  }

  setEvents() {

    var self = this;

    super.setEvents();

  }

}
