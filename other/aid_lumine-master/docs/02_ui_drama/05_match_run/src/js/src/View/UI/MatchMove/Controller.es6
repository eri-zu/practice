//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// import Position from './Position.es6';
import * as m from 'Util/Math/index.es6';
import * as e from 'Util/Easing/index.es6';

export default class Controller extends Base {

  constructor($wrap, $a) {

    super();

    this.$W = $wrap;
    this.$wrapW = $wrap.find('.co');
    this.$wrap = $wrap.find('.item');
    this.$target = this.$wrap.find('.itemIn');

    this.$ashiato = $a;

    this.setup();
    this.setEvents();

  }

  setup() {

    // 最初に座標を合わせておく
    // TweenMax.set($('.tit_matches'), {rotationZ: '+=' + .01});
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
    this.maxcnt = 3;

    var obj = {x: 0, y: 0};
    this.pos.push(obj);
    // this.rotates.push(0);

    // this.save(obj);
    this.ready();

  }

  update() {



  }

  ready() {

    var tl = new TimelineMax();

    // log(r, d);

    tl
      .add(()=>{

        this.rotateDirP_reverse();

      }, 0.0)
      .add(()=>{

        this.$W.addClass('itemWrap');
        this.$ashiato.addClass('itemWrapA');

        this.defl = this.$W.get(0).getBoundingClientRect();

      }, 0.5)
      .add(()=>{

        // TweenMax.set(this.$W, {rotationZ: '-=' + 233});
        this.$W.addClass('rotate');

        this.rotateDirP();

      }, 1.0)

      .add(()=>{

        this.$W.css('opacity', 1);

      }, 2.0)

  }

  timeline() {

    var tl = new TimelineMax();

    var r = Math.floor(Math.random() * 3);
    var d = r * 0.25;

    // log(r, d);

    tl
      .add(()=>{

        this.$W.css('opacity', 1);

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
            opacity: 1,
            ease: Power2.easeInOut,
          }, 0.0)

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
        // TweenMax.set(this.$wrapW, {rotationZ: '-=' + .5});
        // TweenMax.set(this.$ashiato, {rotationZ: '-=' + .5});

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
      .add(()=>{if(flag) this.save();}, dur * .5)

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
      .add(()=>{if(flag) this.save();}, dur)

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
      .add(()=>{this.save();}, dur * .5)
      
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
      .add(()=>{this.save();}, dur)

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
        l.x -= pos.left;
        l.y -= pos.top;
        var obj = {x:l.x + l.width - this.defl.width / 2,y:l.y};
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
        l.x -= pos.left;
        l.y -= pos.top;
        var obj = {x:l.x + l.width - this.defl.width / 2,y: l.y + l.height - this.defl.height};
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

  save() {

    var $c = this.$W.clone();
    var pos = this.$W.get(0).getBoundingClientRect();
    TweenMax.set($c, {opacity: .5, 'margin-left': '0px', backgroundColor: 'none'});
    // TweenMax.set($c, {opacity: .5, 'margin-left': '0px', backgroundColor: 'rgba(255,0,0,.5)'});
    TweenMax.set($c, {left: this.defl.left, top: this.defl.top, 'position': 'absolute'});
    $('.ashiato').append($c);
    $c.wrap('<div class="itemWrapA"></div>')

    // op
    var tl = new TimelineMax();
    tl
      .to($c, 1.2, {
        opacity: 0,
        ease: Power2.easeInOut,
      }, 0.3)

  }

  setEvents() {


  }
}
