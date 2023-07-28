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

  constructor($target=$('#wrapper')) {

    super();

    this.$wrap = $('.tit_matches .item');
    this.$inner = this.$wrap.find('.itemIn');
    // this.$target = this.$wrap.find('img');
    this.$target = this.$wrap.find('.itemIn');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.defl = this.$wrap.get(0).getBoundingClientRect();

    // 中央にset
    TweenMax.set(this.$wrap, {x: this.defl.x, y: this.defl.y});
    TweenMax.set(this.$wrap, {position: 'absolute', left: 0,top: 0});

    // origin change
    TweenMax.set(this.$target, {'transform-origin': '50% 100%'});


    // 最初のmove
    this.rotates = [];
    this.pos = [];
    this.cnt = 0;
    this.cntR = 0;
    this.cntPos = 1;
    this.maxcnt = 5;
    this.cntP = 0;

    var obj = {x: this.defl.x, y: this.defl.y};
    this.pos.push(obj);
    this.rotates.push(0);

    this.save(obj);

    this.timeline();

  }

  update() {



  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.rotateDirP_reverse();

      }, 0.0)
      .add(()=>{

        this.rotateDirP();

      }, 5.0)

  }

  rotateDirP() {

    var dur = 0.5;
    var deg = this.rotates[this.rotates.length - 1 - this.cntP];

    if (this.maxcnt<this.cntR) {

      TweenMax.set(this.$target, {rotationZ: 0, delay: dur * 0.5})

      return;
    }
    this.cntR++;


    var l = this.$wrap.get(0).getBoundingClientRect();

    var tl = new TimelineMax();

    tl
      .add(()=>{

        // pos
        var pos = this.pos[this.pos.length - 1 - this.cntPos];
        this.cntPos++;
        TweenMax.set(this.$wrap, {x: pos.x, y: pos.y});

        // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});
        // TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

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
        TweenMax.set(this.$wrap, {x: pos.x, y: pos.y});

        // origin change
        // TweenMax.set(this.$target, {'transform-origin': '50% 0%'});
        TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

      }, dur)

      // rotate
      .set(this.$target, {
        rotationZ: deg,
      }, dur)

      // // repeat
      .add(()=>{
        this.rotateDirP();
      }, dur)
    
  }

  rotateDirP_reverse() {

    if (this.maxcnt<this.cnt) {
      return;
    }
    this.cnt++;

    var dur = 0.5;
    // var deg = Math.floor(30 + (Math.random() - 0.5) * 20);
    var deg = 30;
    this.rotates.push(deg);

    var l = this.$wrap.get(0).getBoundingClientRect();

    var tl = new TimelineMax();

    tl

      // rotate
      .set(this.$target, {
        rotationZ: deg,
      }, 0.0)
      
      .add(()=>{

        // pos
        var l = this.$target.get(0).getBoundingClientRect();
        var obj = {x:l.x + l.width - this.defl.width / 2,y:l.y};
        // log(l)
        TweenMax.set(this.$wrap, {x: obj.x, y: obj.y});
        this.pos.push(obj);

        // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});

        // save
        this.save(obj);

      }, dur * 0.5)
      // }, dur * 3)
      // rotate
      .set(this.$target, {
        rotationZ: -deg,
      }, dur * 0.5)
      
      .add(()=>{

        // pos
        var l = this.$target.get(0).getBoundingClientRect();
        var obj = {x:l.x + l.width - this.defl.width / 2,y: l.y + l.height - this.defl.height};
        TweenMax.set(this.$wrap, {x: obj.x, y: obj.y});
        this.pos.push(obj);

        // // origin change
        TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

        // // save
        this.save(obj);

      }, dur)

      // // repeat
      .add(()=>{
        this.rotateDirP_reverse();
      }, dur)

    
  }

  save(pos) {

    log(pos);

    // var $c = $('#wrapper #inner .itemC').clone();
    // TweenMax.set($c, {x: pos.x, y: pos.y});
    var $c = $('.tit_matches .item').clone();
    TweenMax.set($c, {opacity: .5, 'margin-left': '-4px'});
    $('body').append($c);

    // var $c = $('.tit_matches .item img').clone();
    // $c.addClass('img');
    // var l = $('.tit_matches .item img').get(0).getBoundingClientRect();
    // TweenMax.set($c, {opacity: .5,x: l.x, y: l.y});
    // $('body').append($c);

  }

  setEvents() {


  }

}