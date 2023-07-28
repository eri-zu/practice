//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import MouseDrag from '../MouseDrag.es6'
import Swipe from '../Swipe.es6'
import * as m from 'Util/Math/index.es6'

export default class Render extends Base {

  constructor($wrap, len) {

    super();

    this.name = 'Sliders';

    this.$wrap = $wrap;
    this.$inner = this.$wrap.find('.textInIn');
    this.$in = this.$inner.find('.textYokoSc');
    this.$barWrap = $wrap.find('.ui .bar');
    this.$bar = this.$barWrap.find('.barIn');
    this.$ball =  $wrap.find('.ui .ball');
    this.$cur =  $wrap.find('.ui .cur');
    this.$total =  $wrap.find('.ui .total');

    this.$arrow = $wrap.find('.arrow');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;
    if (gb.r.w<=750) this.isREv = false;

    this.w = this.$inner.width();

    this.wrapw = this.$inner.width();
    this.innerw = this.$in.width();
    this.dis = this.innerw - this.wrapw;
    this.barDis = this.innerw - gb.r.w;

    TweenMax.set(this.$wrap, {z: 0});

    this.x = 0;
    this.prex = 0;
    this.tarx = 0;
    this.barTarx = 0;
    this.barx = 0;
    this.dragx = 0;
    this.disx = 0;
    this.cur = 1;
    this.total = Math.ceil(this.innerw / this.wrapw);
    this.$total.text(this.total);

    // bar
    this.$bar.css('width', Math.ceil(this.tarx / this.dis) * 100 + '%');
    this.barw = this.$barWrap.width();
    this.ballw = this.$ball.find('.ballIn').width();

    this.isDrag = false;

  }

  update() {

    // max
    // min
    // var tarx = this.tarx;
    if (this.tarx > this.dis) this.tarx = this.dis;
    if (this.tarx < 0) this.tarx = 0;
    this.x += (this.tarx - this.x) * 0.24;
    this.x = Number(m.float(this.x, 0));

    // log('this.x', this.x);

    var v = Number(m.float(this.x / this.dis));

    // draw
    // inner
    var x = this.x;
    x = Math.floor((x / this.dis) * this.total) * this.w;

    // log(x, this.x, this.dis);
    if (gb.u.dv.isSP) TweenMax.set(this.$in, {marginRight: -x, z: 0});
    else TweenMax.set(this.$in, {x: x, z: 0});
    TweenMax.set(this.$bar, {width: v * 100 + '%', z: 0});
    TweenMax.set(this.$ball, {x: - v * (this.barw - this.ballw)});

    // cur
    this.cur = Math.floor(v * (this.total - 1)) + 1;
    this.$cur.text(this.cur);
    

    this.prex = this.x;

  }


  next(cur, next, prev) {

    TweenMax
      .to(this, 0.01, {
        tarx: '+=' + this.w,
        // barTarx: '+=' + - this.w * rate,
        ease: Expo.easeOut,
        // ease: Elastic.easeOut.config(1.9, 0.01),
        onComplete: ()=>{
          // this.isLock = false;
        }
      })

    // this.cur++;
    // if (this.cur>this.total) this.cur = this.total;
    // this.$cur.text(this.cur);

  }

  prev(cur, next, prev) {

    TweenMax
      .to(this, 0.01, {
        tarx: '+=' + -this.w,
        // barTarx: '+=' + this.w * rate,
        ease: Expo.easeOut,
        // ease: Elastic.easeOut.config(1.9, 0.01),
        onComplete: ()=>{
          // this.isLock = false;
        }
      })

    // this.cur--;
    // if (this.cur<1) this.cur = 1;
    // this.$cur.text(this.cur);

  }  　

  onResize() {

    this.w = this.$inner.width();

    this.wrapw = this.$inner.width();
    this.innerw = this.$in.width();
    this.dis = this.innerw - this.wrapw;
    this.barDis = this.innerw - gb.r.w;

    this.x = 0;
    this.prex = 0;
    this.tarx = 0;
    this.barTarx = 0;
    this.barx = 0;
    this.dragx = 0;
    this.disx = 0;
    this.cur = 1;
    this.total = Math.ceil(this.innerw / this.wrapw);
    this.$total.text(this.total);

    // bar
    this.$bar.css('width', Math.ceil(this.tarx / this.dis) * 100 + '%');
    this.barw = this.$barWrap.width();
    this.ballw = this.$ball.find('.ballIn').width();

    this.isDrag = false;

  }

  setEvents() {

    var self = this;

    super.setEvents();

    // swipe
    if (gb.u.dv.isSP) {
      this.s = new Swipe(this.$ball, 'slider1');
      this.sw = new Swipe(this.$wrap.find('.textWrap'), 'slider2');
    } else {
      this.s = new MouseDrag(this.$ball);
    }

    // swipe event
    this.s.onStart = ()=>{

      this.isDrag = true;
      // this.dragx = 0;

      $('body').addClass('no-select');

    }
    this.s.onMove = (sign, val)=>{

      

      if (!this.isDrag) return;

      var rate = this.dis / this.barw;

      // if (!this.isOff) {
        // this.dragx = sign * val * 1.0 * rate;
      // }

      this.tarx += sign * val * 1.0 * rate;

    }
    this.s.onEnd = ()=>{

      this.isDrag = false;

      $('body').removeClass('no-select');

    }
    if (this.sw) {
      this.sw.onSwipe = (sign)=>{

        if (sign>0) this.prev();
        else this.next();

      }
    }

  }

}
