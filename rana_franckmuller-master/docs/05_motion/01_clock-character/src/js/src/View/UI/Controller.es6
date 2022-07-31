//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import SetSpan from './SetSpan.es6';
import Render from './Render.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.$target = $('.text');

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

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

  }

  update() {

    for (var i = 0; i < this.spanList.length; i++) {
      var s = this.spanList[i];
      s.update();
    }

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}