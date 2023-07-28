//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Order from './Order.es6';

import Render from './Render/Render.es6';

import Swipe from './Swipe.es6'
import MouseDrag from './MouseDrag.es6'

export default class Controller extends Base {

  constructor($target) {

    super();

    this.setup();    

  }

  setup() {


    this.name = 'slider';

    this.isUEv = true;
    this.xs = [];
    this.eases = [];
    this.dis = 0;

    this.sign = 1;
    this.$wrap = $('.imgs');
    this.$inner = this.$wrap.find('.imgInner');
    this.$move = this.$wrap.find('.imgMove');
    this.$item = this.$wrap.find('.img');
    this.len = this.$item.length;
    for (var i = 0; i < this.len; i++) {
      this.xs.push(0);
      this.eases.push(0);
    }


    this.o = new Order(this.len);
    this.r = new Render(this.$wrap, this.len);

    // this.timeline();

    this.setEvents();

  }


  next() {

    // if (this.r.isLock) return;
    // this.r.isLock = true;

    this.o.go();

    this.r.next(this.o.current, this.o.next, this.o.prev);

    // log(this.o);

  }

  prev() {

    // if (this.r.isLock) return;
    // this.r.isLock = true;

    this.o.back();

    this.r.prev(this.o.current, this.o.next, this.o.nextnext);

    // log(this.o);

  }

  update() {

    // log(this.sign);

    for (var i = 0; i < this.len; i++) {

      var $item = this.$item.eq(i);
      var ease = this.eases[i];
      // log(x)
      var easeTar = (this.sign>0) ? (0.08 + i * 0.03): (0.08 + ((this.len-1)-i) * 0.03);

      // ease += (easeTar - ease) * 0.12;
      this.eases[i] += (easeTar - this.eases[i]) * 0.10;

      // log(''+i+'', this.eases[i]);

      // x += (this.dis - x) * 0.12;
      this.xs[i] += (this.dis - this.xs[i]) * this.eases[i];

      if (this.xs[i]>0.1||this.xs[i]<-0.1) {

        TweenMax.set($item, {x: this.xs[i], z: 0});

      }

    }





    // if (this.x>0.1||this.x<-0.1) TweenMax.set(this.$move, {x: this.x, z: 0});
    

  }

  setEvents() {

    var self = this;

    super.setEvents();

    // swipe event
    // swipe
    // if (gb.u.dv.isSP) this.s = new Swipe(this.$wrap);
    if (gb.r.w<769) this.s = new Swipe(this.$wrap);
    else this.s = new MouseDrag(this.$wrap);

    // swipe event
    this.s.onStart = ()=>{

      this.dis = 0;
      TweenMax.killTweensOf(this);
      this.isDrag = true;

      gb.u.o.notMove(true);

    }
    this.s.onMove = (sign, val, distance)=>{

      this.sign = sign;
      if (this.isDrag) this.dis = - distance * 0.9;  

      // if (!this.isDrag||val<3) return;
      // if (!this.isDrag||Math.abs(this.x)<gb.r.w/4*1.5) return;
      if (!this.isDrag||Math.abs(distance)<gb.r.w/4*1.5) return;

      // stop
      this.isDrag = false; // 連続でさせるなら、ここをコメントアウト

      // next
      if (sign>0) this.next();
      else this.prev();

      // 戻る動き
      log(this.o)
      if (this.o.max=='over'||this.o.min=='over') {
        TweenMax.to(this, 1.4, {
          dis: 0,
          ease: Elastic.easeOut.config(1.2, 0.34),
        })
      } else {
        TweenMax.to(this, 0.1, {
          dis: 0,
          ease: Power2.easeInOut,
        })
      }

    }
    this.s.onEnd = ()=>{

      // this.dis = 0;
      TweenMax.to(this, 1.0, {
        dis: 0,
        ease: Elastic.easeOut.config(1.4, 0.38),
      })

      this.isDrag = false;

      gb.u.o.notMove(false);

    }
    this.s.onSwipe = (sign)=>{

      // log('swipe', sign);

      // if (sign>0) this.autoSwitch('next')
      // else this.autoSwitch('prev')

    }

  }

}
