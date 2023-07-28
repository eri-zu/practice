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

    this.isShow = true;

    this.setup()
    this.setEvents();

  }

  setup() {

    // append
    var html = '<div class="loading"><div class="text">Special</div></div>';
    $('body').append(html);
  
    this.$target = $('.loading .text');

    log('append', this.$target);

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


    // this.timeline();

  }

  update() {

    for (var i = 0; i < this.spanList.length; i++) {
      var s = this.spanList[i];
      if (this.isShow) s.updateShow();
      else s.updateHide();
    }

    log('sss');

  }

  show() {

    this.onU();

    this.tlshow = new TimelineMax({repeat: -1, repeatDelay: 2.0});

    this.tlshow
      .add(()=>{

        log('start');

        for (var i = 0; i < this.spanList.length; i++) {
          var s = this.spanList[i];
          s.setup();
        }

      }, 0.0)
      .add(()=>{

        this.isShow = true;

        for (var i = 0; i < this.spanList.length; i++) {
          var s = this.spanList[i];
          s.show(i * 0.1);
        }

      }, 0.01)
      .add(()=>{

        this.isShow = false;

        for (var i = 0; i < this.spanList.length; i++) {
          var s = this.spanList[i];
          s.hide(i * 0.1);
        }

      }, 2.0)

  }

  hide() {

    log('end');

    if (this.tlshow) this.tlshow.kill();

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.isShow = false;
        for (var i = 0; i < this.spanList.length; i++) {
          var s = this.spanList[i];
          s.hide(i * 0.1);
        }

      }, 0.0)
      .add(()=>{

        this.offU();

      }, this.spanList.length * 0.1)



  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}