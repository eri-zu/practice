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

  constructor($wrap) {

    super();

    this.$W = $wrap;
    this.$wrapW = $wrap.find('.co');
    this.$wrap = $wrap.find('.item');
    this.$target = this.$wrap.find('.itemIn');

    this.$ashiato = $('.ashiato .box');

    this.setup();
    this.setEvents();

  }

  setup() {

    // 最初に座標を合わせておく
    // TweenMax.set($('.tit_matches'), {rotationZ: '+=' + .01});
    TweenMax.set(this.$wrapW, {z: 0});

    this.defl = this.$wrap.get(0).getBoundingClientRect();
    var pos = this.$wrapW.get(0).getBoundingClientRect();
    // this.defl.x -= pos.left;
    // this.defl.y -= pos.top;
    this.defl.x = 0;
    this.defl.y = 0;

    // 中央にset
    // TweenMax.set(this.$wrap, {x: this.defl.x, y: this.defl.y});
    // TweenMax.set(this.$wrap, {position: 'absolute', left: 0,top: 0});

    // origin change
    TweenMax.set(this.$target, {'transform-origin': '50% 100%'});


    // 最初のmove
    this.rotates = [];
    this.pos = [];
    this.cnt = 0;
    this.cntR = 0;
    this.cntPos = 1;
    this.maxcnt = 1;

    var obj = {x: this.defl.x, y: this.defl.y};
    this.pos.push(obj);
    // this.rotates.push(0);

    // this.save(obj);
    // this.timeline();
    this.ready();

  }

  update() {



  }

  ready() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.rotateDirP_reverse();

      }, 0.0)
      .add(()=>{

        this.$W.css('opacity', 1);
        this.$W.addClass('itemWrap');

      }, 1.0)

  }

  timeline() {

    var tl = new TimelineMax();

    var r = Math.floor(Math.random() * 1);
    var d = r * 0.35;

    // log(r, d);

    tl
      .add(()=>{

        this.rotateDirP();

      }, 0.0 + d)

  }

  rotateDirP() {


    if (this.maxcnt<this.cntR) {
      return;
    }

    var dur = .7;
    var deg = this.rotates[this.rotates.length - 1 - this.cntR];
    this.cntR++;
    var deg2 = this.rotates[this.rotates.length - 1 - this.cntR];

    var tl = new TimelineMax();

    tl
      .add(()=>{

        // wrap rotate
        // TweenMax.set(this.$wrapW, {rotationZ: '-=' + .5});
        TweenMax.set(this.$ashiato, {rotationZ: '-=' + .5});

        // pos
        var pos = this.pos[this.pos.length - 1 - this.cntPos];
        this.cntPos++;
        TweenMax.set(this.$wrap, {x: pos.x, y: pos.y, z: 1});

        // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});

      }, dur * 0.5)

      // rotate
      .set(this.$target, {
        rotationZ: -deg,
      }, dur * 0.5)

      // // rotate後の位置を取得
      .add(()=>{

        // pos
        var pos = this.pos[this.pos.length - 1 - this.cntPos];
        this.cntPos++;
        TweenMax.set(this.$wrap, {x: pos.x, y: pos.y, z: 1});

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

      // // // repeat
      .add(()=>{
        this.rotateDirP();
      }, dur)
    
  }

  rotateDirP_reverse() {

    if (this.maxcnt<this.cnt) {
      return;
    }
    this.cnt++;
    
    var dur = 0.01;
    // var deg = Math.floor(10 + (Math.random() - 0.5) * 20);
    var deg = Math.floor(10 + (Math.random() - 0.5) * 10);
    // var deg = 30;
    this.rotates.push(deg);

    var tl = new TimelineMax();

    tl

      .add(()=>{

        // wrap rotate
        // TweenMax.set(this.$wrapW, {rotationZ: '+=' + .5});
        TweenMax.set(this.$ashiato, {rotationZ: '+=' + .5});

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
        obj = {x:obj.x + l.width - this.defl.width / 2,y: obj.y + l.height - this.defl.height};
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

    var $c = this.$wrap.clone();
    var pos = this.$wrapW.get(0).getBoundingClientRect();
    TweenMax.set($c, {opacity: .5, 'margin-left': '-4px', backgroundColor: 'none'});
    this.$ashiato.append($c);

  }

  setEvents() {


  }

}