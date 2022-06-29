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

  constructor($target) {

    super();

    this.$target = $target;

    this.setup()
    this.setEvents();

  }

  setup() {

    // spanで1文字1文字囲む
    this.s = new SetSpan(this.$target);

    // // 各spanを取得
    this.$span = this.$target.find('span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length;
    this.$target.css('opacity', 1);

    this.spanList = [];
    this.$span.each((index, el)=>{

      var r = new Render($(el), index);
      this.spanList.push(r);
      
    });


    // this.show();

  }

  show() {

    var tl = new TimelineMax();
    var arr = a.randomArr(this.spanList.length);

    tl
      .add(()=>{

        for (var i = 0; i < this.spanList.length; i++) {
          var s = this.spanList[i];
          // var s = this.spanList[arr[i]];
          s.show(i * 0.05);
        }

      }, 0.0)


  }

  hide() {

    var tl = new TimelineMax();
    var arr = a.randomArr(this.spanList.length);

    tl
      .add(()=>{

        for (var i = 0; i < this.spanList.length; i++) {
          var s = this.spanList[i];
          // var s = this.spanList[arr[i]];
          s.hide(i * 0.03);
        }

      }, 0.0)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}