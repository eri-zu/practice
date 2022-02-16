//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Btns from './Btns/Controller.es6';
import TapParticle from './TapParticle/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.isREv = true;

    this.setup();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    new Btns();
    new TapParticle();

    this.setup_op()

    if (gb.u.dv.isAndroid()) $('.nigiyakaText').addClass('android');
    // this.timeline();
    
  }

  // topページの電光掲示板演出
  timeline() {

    var w = $('.nigiyakaText div').width();
    $('.nigiyakaText div').css('padding-left', w);
    $('.nigiyakaText div').css('margin-left', - w * .5);


    gb.tlt = new TimelineMax({delay: 0.0});

    this.dur = 15;

    gb.tlt
      .add(()=>{
        this.repeat($('.nigiyakaText div').eq(0));
      }, 0.0)
      .add(()=>{
        this.repeat2($('.nigiyakaText div').eq(1));
      }, this.dur / 2)

  }

  // topページの電光掲示板演出
  repeat($t) {

    gb.tlr = new TimelineMax();

    gb.tlr
      .add(()=>{
        $t.addClass('anim');
      }, 0.0)
      .add(()=>{
        $t.removeClass('anim');
      }, this.dur-0.3)
      .add(()=>{
        this.repeat($t);
      }, this.dur)

  }

  // topページの電光掲示板演出
  repeat2($t) {

    gb.tlr2 = new TimelineMax();

    gb.tlr2
      .add(()=>{
        $t.addClass('anim');
      }, 0.0)
      .add(()=>{
        $t.removeClass('anim');
      }, this.dur-0.3)
      .add(()=>{
        this.repeat2($t);
      }, this.dur)

  }

  setup_op() {

    // $(window).scrollTop(0);
    // $('#wrapper').scrollTop(0);



    // this.$header = $('#header');
    // this.$bg = $('.block01 .bg');
    // this.$tit = $('.block01 .tit');
    // this.$pipe = $('.block02 .pipe');

    // TweenMax.set(this.$header, {opacity: 0});
    // TweenMax.set(this.$bg, {opacity: 0});
    // TweenMax.set(this.$tit, {opacity: 0});
    // TweenMax.set(this.$pipe, {opacity: 0});

    
  }

  update() {

 
  }


  setEvents() {

    super.setEvents();

  }

}