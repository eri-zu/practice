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
    this.$target = this.$wrap.find('img');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.defl = this.$wrap.get(0).getBoundingClientRect();
    TweenMax.set(this.$wrap, {x: this.defl.x, y: this.defl.y});
    TweenMax.set(this.$wrap, {position: 'absolute', left: 0,top: 0});


    // 最初のmove
    this.rotates = [];
    this.cnt = 0;
    this.maxcnt = 5;
    this.cntP = 0;

    this.rotateDirP_reverse();

    this.timeline();

  }

  update() {



  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        // this.rotateDirM();

      }, 2.0)

  }

  rotateDirP() {

    var dur = 0.5;
    var deg = this.rotates[this.rotates.length - 1 - this.cntP];
    var l = this.$wrap.get(0).getBoundingClientRect();

    this.cntP++;

    var tl = new TimelineMax();

    tl
      .set(this.$target, {'transform-origin': '50% 100%'})
      .set(this.$target, {
        rotationZ: deg,
      }, dur * 0.5)
      // rotate後の位置を取得
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        TweenMax.set(this.$wrap, {x: l.x + l.width - this.defl.width, y: l.y + l.height - this.defl.height});
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});

      }, dur * 0.5)

      .set(this.$target, {
        rotationZ: -deg,
      }, dur)
      // rotate後の位置を取得
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        TweenMax.set(this.$wrap, {x: l.x + l.width - this.defl.width, y: l.y + l.height - this.defl.height});
        TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

      }, dur)
      .add(()=>{
        this.rotateDirP(this.cntP);
      }, dur)
    
  }


  rotateDirP_reverse() {

    if (this.maxcnt<this.cnt) {
      return;
    }
    this.cnt++;

    var dur = 0.1;
    var deg = 30 + (Math.random() - 0.5) * 20;
    this.rotates.push(deg);

    var l = this.$wrap.get(0).getBoundingClientRect();

    var tl = new TimelineMax();

    tl
      .set(this.$target, {'transform-origin': '50% 100%'})
      .set(this.$target, {
        rotationZ: deg,
      }, dur * 0.5)
      // rotate後の位置を取得
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        TweenMax.set(this.$wrap, {x: l.x + l.width - this.defl.width, y: l.y + l.height - this.defl.height});
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});

      }, dur * 0.5)

      .set(this.$target, {
        rotationZ: -deg,
      }, dur)
      // rotate後の位置を取得
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        TweenMax.set(this.$wrap, {x: l.x + l.width - this.defl.width, y: l.y + l.height - this.defl.height});
        TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

      }, dur)
      .add(()=>{
        this.rotateDirP_reverse();
      }, dur)
    
  }

  rotateDirM() {

    var dur = 0.5;
    var deg = this.rotates[this.rotates.length - 1 - this.cntP];
    var l = this.$wrap.get(0).getBoundingClientRect();
    log(l)
    
    this.cntP++;

    var tl = new TimelineMax();

    tl
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        log(l)
        // clearTimeout(this.Timer);
        //   this.Timer = setTimeout(()=>{
              
            TweenMax.set(this.$wrap, {x: l.x, y: l.y});
            TweenMax.set(this.$target, {'transform-origin': '50% 0%'});
            
          // },1000);
        

        TweenMax.set($('.itemS'), {x: l.x, y: l.y});

      })

      .set(this.$target, {
        rotationZ: deg,
      }, dur * 0.5)
      // rotate後の位置を取得
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        TweenMax.set(this.$wrap, {x: l.x, y: l.y + l.height - this.defl.height});
        TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

      }, dur * 0.5)

      .set(this.$target, {
        rotationZ: -deg,
      }, dur)
      // // // rotate後の位置を取得
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        TweenMax.set(this.$wrap, {x: l.x, y: l.y + l.height - this.defl.height});
        TweenMax.set(this.$target, {'transform-origin': '50% 0%'});

      }, dur)
      .add(()=>{
        this.rotateDirM(this.cntP);
      }, dur)
    
  }

  // rotateDirM() {

  //   var dur = 0.5;
  //   var deg = 10;

  //   var l = this.$wrap.get(0).getBoundingClientRect();
  //   log(l);

  //   var tl = new TimelineMax();

  //   tl
  //     .set(this.$target, {'transform-origin': '50% 0%'})
  //     .set(this.$target, {
  //       rotationZ: deg,
  //     }, dur * 0.5)
  //     // rotate後の位置を取得
  //     .add(()=>{

  //       var l = this.$target.get(0).getBoundingClientRect();
  //       TweenMax.set(this.$wrap, {x: l.x, y: l.y + l.height - this.defl.height});
  //       TweenMax.set(this.$target, {'transform-origin': '50% 100%'});

  //     }, dur * 0.5)

  //     .set(this.$target, {
  //       rotationZ: -deg,
  //     }, dur)
  //     // // rotate後の位置を取得
  //     .add(()=>{

  //       var l = this.$target.get(0).getBoundingClientRect();
  //       TweenMax.set(this.$wrap, {x: l.x, y: l.y + l.height - this.defl.height});
  //       TweenMax.set(this.$target, {'transform-origin': '50% 0%'});

  //     }, dur)
  //     .add(()=>{
  //       this.rotateDirM();
  //     }, dur)
    
  // }

  setEvents() {


  }

}