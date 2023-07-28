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

    this.timeline();

  }

  setup() {

    this.defl = this.$wrap.get(0).getBoundingClientRect();
    TweenMax.set(this.$wrap, {x: this.defl.x, y: this.defl.y});
    TweenMax.set(this.$wrap, {position: 'absolute', left: 0,top: 0});

  }

  update() {



  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.rotate();

      }, 0.0)

  }

  rotate() {

    var dur = 0.5;
    var deg = 5;

    var l = this.$wrap.get(0).getBoundingClientRect();
    log(l);

    var tl = new TimelineMax();

    tl
      .set(this.$target, {'transform-origin': '50% 100%'})
      .set(this.$target, {
        rotationZ: deg,
        onComplete: ()=>{

        }
      }, dur * 0.5)
      // rotate後の位置を取得
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        TweenMax.set(this.$wrap, {x: l.x + l.width - this.defl.width, y: l.y + l.height - this.defl.height});

      }, dur * 0.5)
      .set(this.$target, {'transform-origin': '50% 0%'})
      .set(this.$target, {
        rotationZ: -deg,
      }, dur)
      // rotate後の位置を取得
      .add(()=>{

        var l = this.$target.get(0).getBoundingClientRect();
        TweenMax.set(this.$wrap, {x: l.x + l.width - this.defl.width, y: l.y + l.height - this.defl.height});

      }, dur)
      .add(()=>{
        this.rotate();
      }, dur)
    
    
  }


  setEvents() {


  }

}