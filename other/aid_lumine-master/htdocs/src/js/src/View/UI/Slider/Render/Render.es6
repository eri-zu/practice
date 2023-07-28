//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Render extends Base {

  constructor($wrap, len, p) {

    super();

    this.name = 'SliderRender';

    this.$wrap = $wrap;
    this.$inner = this.$wrap.find('.imgInner');
    this.$item = this.$wrap.find('.img');
    this.p = p;

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

    var tl = new TimelineMax({delay: 0.0});

    tl
      .to(this.$inner, 1.4, {
        x: '+=' + -this.imgw,
        ease: Elastic.easeOut.config(.7, 0.55),
        onStart: ()=>{
          var $v = $('.block04 .imgs video');
          for (var i = 0; i < $v.length; i++) {
            var v = $v.eq(i).get(0);
            v.pause();
          }
        },
        onComplete: ()=>{
          this.isLock = false;

          this.$item.eq(0).remove();
          TweenMax.set(this.$inner, {x: 0});

          this.$item = $('.block04 .imgs .img');
          this.p.$item = this.$item;
          this.p.setEventsItem(this.$item.eq(0), 0);
          this.p.setEventsItem(this.$item.eq(2), 2);
          this.p.$item.eq(1).off('click');

        },
      })
      .add(()=>{
        this.p.$item.eq(1).find('video').get(0).play();
      }, 1.4)

    // append
    var num = 0;
    var $c = this.$item.eq(num).clone();
    $c.find('video').get(0).pause();
    this.$inner.append($c);
    this.$item = $('.block04 .imgs .img');
    this.p.$item = this.$item;

  }

  prev(current, next, nextnext) {

    this.x = current * this.imgw;
    this.num = current;

    var tl = new TimelineMax({delay: 0.0});

    tl
      .to(this.$inner, 1.4, {
        x: '+=' + this.imgw,
        ease: Elastic.easeOut.config(.7, 0.55),
        onStart: ()=>{
          var $v = $('.block04 .imgs video');
          for (var i = 0; i < $v.length; i++) {
            var v = $v.eq(i).get(0);
            v.pause();
          }
        },
        onComplete: ()=>{
          this.isLock = false;

          this.$item.eq(3).remove();
          TweenMax.set(this.$inner, {x: 0});

          this.$item = $('.block04 .imgs .img');
          this.p.$item = this.$item;
          this.p.setEventsItem(this.$item.eq(0), 0);
          this.p.setEventsItem(this.$item.eq(2), 2);
          this.p.$item.eq(1).off('click');

        },
      })
      .add(()=>{
        this.$item.eq(1).find('video').get(0).play();
      }, 1.4)

    var num = 2;
    var $c = this.$item.eq(num).clone();
    $c.find('video').get(0).pause();
    this.$inner.prepend($c);
    TweenMax.set(this.$inner, {x: '+=' + -this.imgw});
    this.$item = $('.block04 .imgs .img');
    this.p.$item = this.$item;


  }

  onResize() {


  }

  setEvents() {

    var self = this;

    super.setEvents();

  }

}
