//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import SetSpan from './SetSpan.es6';
import Render from './Render.es6';

import * as a from 'Util/Array/index.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.$target = $('.header .logo');

    this.setup()
    this.setEvents();

  }

  setup() {

    this.rot = 0;

    // // 各spanを取得
    this.$numList = [];
    this.$target.find('svg .num').each((index, el)=>{

      var $t = this.$target.find('svg .num'+(index+1));
      this.$numList.push($t);
      
    });
    this.$subList = [];
    this.$sub = this.$target.find('svg .sub1');
    this.$target.find('svg .sub').each((index, el)=>{

      var $t = this.$target.find('svg .sub'+(index+1));
      this.$subList.push($t);
      
    });

    this.numList = [];
    for (var i = 0; i < this.$numList.length; i++) {
      var r = new Render(this.$numList[i], i);
      this.numList.push(r);      
    }
    this.subList = [];
    for (var i = 0; i < this.$subList.length; i++) {
      var r = new Render(this.$subList[i], i);
      this.subList.push(r);      
    }
    // this.changeTarget(true);

    // this.show();

  }

  update() {

    // if (gb.up.frame%10==0) {

    //   this.rot += 45;
    //   if (this.rot>360) {
    //     this.offU();
    //     this.rot = 0;
    //     this.changeTarget();
    //   }

    //   // TweenMax.set(this.$target, {rotation: this.rot});

    // }

  }

  show() {

    var tl = new TimelineMax();
    var arr = a.randomArr(this.numList.length);
    var arr_s = a.randomArr(this.subList.length);

    tl
      .add(()=>{

        for (var i = 0; i < this.numList.length; i++) {
          var s = this.numList[i];
          // var s = this.numList[arr[i]];
          s.show(i * 0.05);
        }

      }, 0.0)
      .add(()=>{

        for (var i = 0; i < this.subList.length; i++) {
          var s = this.subList[i];
          // var s = this.subList[arr_s[i]];
          s.show(i * 0.05);
        }

      }, 0.2)
      .add(()=>{

        this.onU();

      }, 3.0)

  }

  changeTarget(first=false) {

    var $t = this.$num.add(this.$sub);

    this.$target = $t.eq(Math.floor($t.length * Math.random()));

    var tl = new TimelineMax();
    tl
      .add(()=>{

        if (!first) this.onU();

      }, 8.0)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}