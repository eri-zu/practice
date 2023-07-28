//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Order from './Order.es6';

import Render from './Render/Render.es6';

export default class Controller extends Base {

  constructor($target) {

    super();

    this.setup();    

  }

  setup() {

    this.name = 'Slider';

    this.$wrap = $('.slider');
    this.$arrow = this.$wrap.find('.arrow');

    this.o = new Order(3);
    this.r = new Render(this.$wrap, this.len);

    this.setEvents();

  }


  next() {

    log('next');

    this.r.next();

  }

  prev() {

    this.r.prev();

  }

  update() {

  }

  setEvents() {

    var self = this;

    super.setEvents();

    this.$arrow.eq(1).on('click'+'.'+this.name, ()=>{this.prev()});
    this.$arrow.eq(0).on('click'+'.'+this.name, ()=>{this.next()});

  }

}
