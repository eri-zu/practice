//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// common
import Sound from './Sound/Controller.es6';
import Transition from './Common/Transition/Controller.es6';
import Menu from './Common/Menu/Controller.es6';
import Age from './Common/Age/Controller.es6';
import Orientation from './Common/Orientation/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.isREv = true;

    this.setup();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    gb.sound = new Sound();
    gb.transition = new Transition();
    gb.orientation = new Orientation();
    gb.menu = new Menu();
    gb.age = new Age($('.toggle_age'),$('.open_age'),$('.close_age'),$('.age_contents'));

    // op
    if (gb.isAge=='true') {

      // topページ郡の時
      if ($('html').hasClass('page_top')) {

        gb.transition.hide(true);  

      // topページ郡でない時
      } else {

        var dur = .4;

        this.$coverWrap = $('.coverWrap');
        this.$cover = $('.cover');

        var c = $('html').css('background');
        this.$cover.css({'background':c});


        var u = location.pathname;
        if (gb.u.s.isContain(u, 'craftsman')) var p = {opacity: 0,ease: Power2.easeOut,onComplete: ()=>{this.$coverWrap.hide();}};
        else var p = {x: gb.r.w,ease: Power2.easeOut,onComplete: ()=>{this.$coverWrap.hide();}};


        var tl = new TimelineMax({delay: .5});
        tl
          .add(()=>{

            this.$coverWrap.show();
            // x
            TweenMax.set(this.$coverWrap, {x: 0});
            TweenMax.set(this.$cover, {width: '100%'});
            // naname
            // TweenMax.set(this.$coverWrap, {x: 0, y: 0, opacity: 1});
            // TweenMax.set(this.$cover, {width: '100%'});

            $('body').css('opacity', 1);

          }, 0.0)

          // x
          .to(this.$coverWrap, dur, p, .1)

      }
      

    } else {

      // ページ全体表示
      $('body').css('opacity', 1);

      gb.age.r.first();  
      
    } 
    
    
  }

  update() {

 
  }


  setEvents() {

    super.setEvents();

  }

}