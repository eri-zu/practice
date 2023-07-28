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

import DragArea from './DragArea/Controller.es6';

import Video_html5 from './Video_html5/Controller.es6';
import Scroll from './Scroll.es6';

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
    this.$wrap = $('.block04 .imgs');
    this.$inner = this.$wrap.find('.imgInner');
    this.$move = this.$wrap.find('.imgMove');
    this.$item = this.$wrap.find('.img');
    this.len = this.$item.length;
    for (var i = 0; i < this.len+1; i++) {
      this.xs.push(0);
      this.eases.push(0);
    }

    this.vs = [];

    var path = 'tate';
    var nums = [2,3,1];
    if (gb.r.w>768) path = 'yoko';
    for (var i = 0; i < this.len; i++) {
      var $t = this.$item.eq(i);
      var v = new Video_html5('./assets/resource/video/'+path+nums[i]+'.mp4', ()=>{}, $t);
      this.vs.push(v);
    }

    this.o = new Order(this.len);
    this.r = new Render(this.$wrap, this.len, this);
    new DragArea(this.$wrap);

    // this.timeline();

    this.setEvents();

  }


  next() {

    if (this.r.isLock) return;
    this.r.isLock = true;

    this.o.go();

    this.r.next(this.o.current, this.o.next, this.o.prev);

    // log(this.o);

    // for (var i = 0; i < this.len; i++) {
    //   var v = this.vs[i];
    //   if (this.o.current+1!==i) v.r.pause();
    // }
    // this.vs[this.o.current+1].r.play();

    if(this.tl) this.tl.kill()
    this.tl = new TimelineMax();
    this.tl
      .add(()=>{

        this.autoSwitch();

      }, 9.0)

  }

  prev() {

    if (this.r.isLock) return;
    this.r.isLock = true;

    this.o.back();

    this.r.prev(this.o.current, this.o.next, this.o.nextnext);

    // log(this.o);

    // for (var i = 0; i < this.len; i++) {
    //   var v = this.vs[i];
    //   if (this.o.current+1!==i) v.r.pause();
    // }
    // this.vs[this.o.current+1].r.play();

    if(this.tl) this.tl.kill()
    this.tl = new TimelineMax();
    this.tl
      .add(()=>{

        this.autoSwitch();

      }, 9.0)


  }

  update() {

    // log(this.sign);

    for (var i = 0; i < this.len+1; i++) {

      var $item = this.$item.eq(i);
      if ($item.length==0) return;
      var ease = this.eases[i];
      // log(x)
      var easeTar = (this.sign>0) ? (0.06 + i * 0.05): (0.06 + ((this.len-1)-i) * 0.05);

      // ease += (easeTar - ease) * 0.12;
      this.eases[i] += (easeTar - this.eases[i]) * 0.4;

      // log(''+i+'', this.eases[i]);

      // x += (this.dis - x) * 0.12;
      this.xs[i] += (this.dis - this.xs[i]) * this.eases[i];

      if (this.xs[i]>0.1||this.xs[i]<-0.1) {

        TweenMax.set($item, {x: this.xs[i], z: 0});

      }

    }

    // if (this.x>0.1||this.x<-0.1) TweenMax.set(this.$move, {x: this.x, z: 0});
    

  }

  autoSwitch(dir='next') {

    if (dir=='next') this.next();
    else this.prev();

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .add(()=>{

        this.autoSwitch();

      }, 9.0)

    log('autoswitch');

  }

  timeline() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .add(()=>{

        this.autoSwitch();

      }, 4.0)    

  }

  onClick1() {

    this.prev();
  
  }

  onClick2() {

    // if (this.o.current==-1) {
    //   this.next();
    // }
    // if (this.o.current==1) {
    //   this.prev();
    // }
  
  }

  onClick3() {

    log(11);

    this.next();
  
  }

  setEvents() {

    var self = this;

    super.setEvents();

    log(this.$item)

    this.$item.eq(0).on('click', ()=>{self.onClick1.call(self, this)});
    this.$item.eq(1).on('click', ()=>{self.onClick2.call(self, this)});
    this.$item.eq(2).on('click', ()=>{self.onClick3.call(self, this)});

    // swipe event
    // swipe
    if (gb.u.dv.isSP) this.s = new Swipe(this.$wrap);
    // if (gb.r.w<769) this.s = new Swipe(this.$wrap);
    else this.s = new MouseDrag(this.$wrap);

    // swipe event
    this.s.onStart = ()=>{

      this.dis = 0;
      TweenMax.killTweensOf(this);
      this.isDrag = true;

      // gb.u.o.notMove(true);

      // for (var i = 0; i < this.len; i++) {
      //   var $item = this.$item.eq(i);
      //   var v = $item.find('video').get(0);
      //   v.pause();
      // }

    }
    this.s.onMove = (sign, val, distance)=>{

      this.sign = sign;
      if (this.isDrag) this.dis = - distance * 0.9;  

      // if (!this.isDrag||val<3) return;
      // if (!this.isDrag||Math.abs(this.x)<gb.r.w/4*1.5) return;
      if (!this.isDrag||Math.abs(distance)<gb.r.w/4*1) return;

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
          ease: Elastic.easeOut.config(1.0, 0.34),
        })
      } else {
        TweenMax.to(this, 0.6, {
          dis: 0,
          ease: Power2.easeOut,
        })
      }

    }
    this.s.onEnd = ()=>{

      // this.dis = 0;
      TweenMax.to(this, 1.0, {
        dis: 0,
        ease: Elastic.easeOut.config(1.0, 0.38),
      })

      this.isDrag = false;

      gb.u.o.notMove(false);

      // this.$item.eq(1).find('video').get(0).play();

    }
    this.s.onSwipe = (sign)=>{

      // log('swipe', sign);

      // if (sign>0) this.autoSwitch('next')
      // else this.autoSwitch('prev')

    }


    if (gb.u.dv.isPC) {

      for (var i = 0; i < this.len; i++) {

        var v = this.vs[i];

        // v.r.play();

        if (i!==1) v.r.pause();
        
      }

    } else {

      $(window).one('touchstart', (event)=>{
        
        for (var i = 0; i < this.len; i++) {
          var v = this.vs[i];

          var cb = (v, index)=>{

            var tl = new TimelineMax();

            tl
              .add(()=>{
                if (index!==1) v.r.pause();
              }, 0.0)
          }

          v.r.play();

          cb(v, i);
          
        }

      });

    }


    // scroll
    // titあたり
    // tit
    this.adjustH = 200;
    var $t = this.$wrap;
    var targetST = $t.offset().top - gb.r.h + this.adjustH;
    var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'Slider');
    s01.cb = ()=>{

      log('conveyer');

      this.timeline();
      
      s01.removeEvents();

    };



  }

  setEventsItem($t, index) {

    var self = this;

    if (index==0) $t.on('click', ()=>{self.onClick1.call(self, this)});
    if (index==1) $t.on('click', ()=>{self.onClick2.call(self, this)});
    if (index==2) $t.on('click', ()=>{self.onClick3.call(self, this)});    

    log('sete');

  }

}
