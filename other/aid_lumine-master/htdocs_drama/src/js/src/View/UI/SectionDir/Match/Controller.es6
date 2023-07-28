// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scroll from './Scroll.es6';

// import * as a from 'Util/Array/index.es6';

export default class Dom extends Base {

  constructor($wrap, index) {

    super();

    this.$W = $wrap;
    this.$wrapW = $wrap.find('.co');
    this.$wrap = $wrap.find('.item');
    this.$target = this.$wrap.find('.itemIn');
    this.index = index;

    this.setup();
    this.setEvents();

  }

  setup() {

    // 最初に座標を合わせておく
    TweenMax.set(this.$wrapW, {z: 0});

    this.defl = this.$W.get(0).getBoundingClientRect();
    var pos = this.$wrapW.get(0).getBoundingClientRect();

    // origin change
    TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

    // 最初のmove
    this.rotates = [];
    this.pos = [];
    this.cnt = 0;
    this.cntR = 0;
    this.cntPos = 1;
    this.maxcnt = 1;

    var obj = {x: 0, y: 0};
    this.pos.push(obj);

    this.ready();


    if (!$('body').hasClass('isIE')) {

      // scroll dir
      this.adjustH = 70;
      var $t = this.$W;
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var t = new Scroll(targetST, true, ()=>{}, ()=>{}, 'secMatch'+this.index);
      t.$t = this.$W;
      t.cb = ()=>{

        this.timeline_r();
        
        t.removeEvents();

      };

    }


  }

  ready() {

    if ($('body').hasClass('isIE')) {

      this.$W.addClass('itemWrap');
      this.$W.addClass('rotate');
      this.$W.css('opacity', 1);

    } else {

      var tl = new TimelineMax();

      tl
        .add(()=>{

          this.rotateDirP_reverse();

        }, 0.0)
        .add(()=>{

          this.$W.addClass('itemWrap');

          this.defl = this.$W.get(0).getBoundingClientRect();

        }, 0.5)
        .add(()=>{

          this.$W.addClass('rotate');

          this.rotateDirP();

        }, 1.0)

    }

  }

    timeline() {

    var tl = new TimelineMax();

    var r = Math.floor(Math.random() * 3);
    var d = r * 0.25;

    // log(r, d);

    tl
      .add(()=>{

        // this.$W.css('opacity', 1);
        var tls = new TimelineMax();
        tls
          .to(this.$W, 1.0, {
            opacity: 1,
            ease: Power2.easeInOut,
          }, 0.0)

        this.cntR = 0;
        this.cntPos = 0;

        this.rotateDirPGyaku();

      }, 0.0 + d)

  }

  timeline_r() {

    var tl = new TimelineMax();

    var r = Math.floor(Math.random() * 3);
    var d = r * 0.25;

    // log(r, d);

    tl
      .add(()=>{

        var tl = new TimelineMax();
        tl
          .to(this.$W, .25, {
          // .to(this.$W, 1.0, {
            opacity: 1,
            ease: Power2.easeInOut,
          }, 0.25)

        this.cntR = 0;
        this.cntPos = 1;

        this.rotateDirP(0.5, true);

      }, 0.0 + d)

  }


  rotateDirP(dur=.01, flag=false) {


    if (this.maxcnt<this.cntR) {
      return;
    }

    var deg = this.rotates[this.rotates.length - 1 - this.cntR];
    this.cntR++;
    var deg2 = this.rotates[this.rotates.length - 1 - this.cntR];

    var tl = new TimelineMax();

    tl
      .add(()=>{

        // wrap rotate
        TweenMax.set(this.$W, {rotationZ: '+=' + .1});

        // pos
        var pos = this.pos[this.pos.length - 1 - this.cntPos];
        this.cntPos++;
        TweenMax.set(this.$wrap, {x: pos.x, y: pos.y});

        // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});

      }, dur * 0.5)

      // rotate
      .set(this.$target, {
        rotationZ: -deg,
      }, dur * 0.5)
      // save
      // .add(()=>{if(flag) this.save();}, dur * .5)

      // // rotate後の位置を取得
      .add(()=>{

        // pos
        var pos = this.pos[this.pos.length - 1 - this.cntPos];
        this.cntPos++;
        TweenMax.set(this.$wrap, {x: pos.x, y: pos.y});

        // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

        // end
        if (this.maxcnt<this.cntR) {
          TweenMax.set(this.$target, {rotationZ: 0})
          return;
        }

      }, dur)

      // rotate
      .set(this.$target, {
        rotationZ: deg2,
      }, dur)
      // // save
      // .add(()=>{if(flag) this.save();}, dur)

      // // // repeat
      .add(()=>{
        this.rotateDirP(dur, flag);
      }, dur)
    
  }

  rotateDirPGyaku() {

    if (this.maxcnt<this.cntR) {

      // op
      var tl = new TimelineMax();
      tl
        .to(this.$W, 0.6, {
          opacity: 0,
          ease: Power2.easeInOut,
        }, 0.0)

      return;
    }

    var dur = .5;
    var deg = this.rotates[this.cntR];
    var deg2 = this.rotates[this.cntR];
    this.cntR++;
    
    var tl = new TimelineMax();

    tl

      .add(()=>{

        // wrap rotate
        // TweenMax.set(this.$W, {rotationZ: '-=' + 3.5});
        TweenMax.set(this.$W, {rotationZ: '-=' + .1});

        // pos
        this.cntPos++;
        var pos = this.pos[this.cntPos];
        TweenMax.set(this.$wrap, {x: pos.x, y: pos.y});



        log(deg, this.rotates, this.cntR, this.pos, pos)

        // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});

      }, dur * 0.5)
      // }, dur * 3)
      // rotate
      .set(this.$target, {
        rotationZ: -deg,
      }, dur * 0.5)
      // save
      // .add(()=>{this.save();}, dur * .5)
      
      .add(()=>{

        // pos
        this.cntPos++;
        var pos = this.pos[this.cntPos];
        TweenMax.set(this.$wrap, {x: pos.x, y: pos.y});

        log(deg, this.rotates, this.cntR, this.pos, pos)

        // // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

      }, dur)

      .set(this.$target, {
        rotationZ: deg,
      }, dur)
      // save
      // .add(()=>{this.save();}, dur)

      // // // // // repeat
      .add(()=>{
        this.rotateDirPGyaku();
      }, dur)
    
  }

  rotateDirP_reverse() {

    if (this.maxcnt<this.cnt) {
      return;
    }
    this.cnt++;
    
    var dur = 0.01;
    // var deg = Math.floor(10 + (Math.random() - 0.5) * 20);
    var deg = Math.floor(15 + (Math.random() - 0.5) * 20);
    // var deg = 30;
    this.rotates.push(deg);

    var tl = new TimelineMax();

    tl

      .add(()=>{

        // wrap rotate
        // TweenMax.set(this.$wrapW, {rotationZ: '+=' + 13.5});
        // TweenMax.set(this.$ashiato, {rotationZ: '+=' + .5});

        // pos
        var l = this.$target.get(0).getBoundingClientRect();
        var pos = this.$wrapW.get(0).getBoundingClientRect();
        var obj = {x:l.left,y:l.top};
        obj.x -= pos.left;
        obj.y -= pos.top;
        obj = {x:obj.x + l.width - this.defl.width / 2,y:obj.y};
        TweenMax.set(this.$wrap, {x: obj.x, y: obj.y});
        this.pos.push(obj);

        // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});     

      }, dur * 0.5)
      // }, dur * 3)
      // rotate
      .set(this.$target, {
        rotationZ: -deg,
      }, dur * 0.5)
      // save
      // .add(()=>{this.save();}, dur * 0.5)
      
      .add(()=>{

        // pos
        var l = this.$target.get(0).getBoundingClientRect();
        var pos = this.$wrapW.get(0).getBoundingClientRect();
        var obj = {x:l.left,y:l.top};
        obj.x -= pos.left;
        obj.y -= pos.top;
        obj = {x:obj.x + l.width - this.defl.width / 2,y:obj.y};
        TweenMax.set(this.$wrap, {x: obj.x, y: obj.y});
        this.pos.push(obj);

        // // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

      }, dur)

      .set(this.$target, {
        rotationZ: deg,
      }, dur)
      // save
      // .add(()=>{this.save();}, dur)


      // // // repeat
      .add(()=>{
        this.rotateDirP_reverse();
      }, dur)

    
  }

  setEvents() {

    var self = this;

    super.setEvents();


  }

}