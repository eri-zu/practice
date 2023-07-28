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

    this.$text = $target.find('.text');
    this.$svg = $target.find('svg');

    this.setup()
    this.setEvents();

  }

  setup() {

    // spanで1文字1文字囲む
    this.s = new SetSpan(this.$text);

    // // 各spanを取得
    this.$span = this.$text.find('span');
    this.$span.css('display', 'inline-block'); // spanはinline-blockかblockじゃないとtnraslateが効かないので、styleつける
    this.len = this.$span.length + this.$svg.length;
    this.$span.css('opacity', 0);
    this.$svg.css('opacity', 0);

    this.$target = this.$span.add(this.$svg);

    // this.show();

  }

  show(delay) {

    var arr = a.randomArr(this.len);

    this.$target.each((index, el)=>{

      TweenMax.to(this.$target.eq(arr[index]), 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
        delay: delay + index * 0.02
      });
      
    });

  }

  hide() {

    var arr = a.randomArr(this.len);

    this.$target.each((index, el)=>{

      TweenMax.to(this.$target.eq(arr[index]), .5, {
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