//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import SetSpan from './SetSpan.es6';

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
    this.$span.css('opacity', 0);

    // this.show();

  }

  show(delay) {

    var arr = a.randomArr(this.len);

    this.$span.each((index, el)=>{

      TweenMax.to(this.$span.eq(arr[index]), 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
        delay: delay + index * 0.02
      });
      
    });

  }

  hide() {

    var arr = a.randomArr(this.len);

    this.$span.each((index, el)=>{

      TweenMax.to(this.$span.eq(arr[index]), .5, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: index * 0.02
      });
      
    });

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}