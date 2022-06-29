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

    this.isUEv = true;

    // spanで1文字1文字囲む
    // this.s = new SetSpan(this.$target);

    // // 各spanを取得
    this.$span = this.$target.find('path');
    // this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length;
    this.$target.css('opacity', 1);

    this.spanList = [];
    this.$span.each((index, el)=>{

      var r = new Render($(el), index);
      this.spanList.push(r);
      
    });


    this.timeline();

  }

  update() {

    for (var i = 0; i < this.spanList.length; i++) {
      var s = this.spanList[i];
      s.update();
    }

  }

  timeline() {

    var tl = new TimelineMax();
    var arr = a.randomArr(this.spanList.length);

    tl
      .add(()=>{

        for (var i = 0; i < this.spanList.length; i++) {
          // var s = this.spanList[i];
          var s = this.spanList[arr[i]];
          s.show(i * 0.1);
        }

      }, 0.0)


  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}