//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Item from './Item.es6';

export default class Render extends Base {

  constructor($wrap, len) {

    super();

    this.name = 'SliderRender';

    this.$wrap = $wrap;
    this.$inner = this.$wrap.find('.imgInner');
    this.$item = this.$wrap.find('.img');

    this.isLock = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;
    this.onResize();

    this.imgw = this.$item.width() + parseInt(this.$item.css('margin-right'));


  }

  update() {


  }

  next(current, next, prev) {

    this.x = current * this.imgw;
    this.num = current;

    TweenMax.to(this.$inner, 1.4, {
      x: - this.x,
      ease: Elastic.easeOut.config(.7, 0.32),
      onComplete: ()=>{
        this.isLock = false;
      },
    })

  }

  prev(current, next, nextnext) {

    this.x = current * this.imgw;
    this.num = current;

    TweenMax.to(this.$inner, 1.4, {
      x: - this.x,
      ease: Elastic.easeOut.config(.7, 0.32),
      onComplete: ()=>{
        this.isLock = false;
      },
    })

  }

  onResize() {


  }

  setEvents() {

    var self = this;

    super.setEvents();

  }

}
