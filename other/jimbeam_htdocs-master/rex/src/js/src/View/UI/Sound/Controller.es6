//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// import {Howl, Howler} from 'howler';

import Render from './Render.es6';

export default class Controller {

  constructor() {

    this.$wrap = $('#menu');
    this.src_tap = '/assets/resource/sound/tap.mp3';

    this.$on = this.$wrap.find('.on');
    this.$off = this.$wrap.find('.off');


    this.isSound = true;
 
    this.setup();
    this.setEvents();

  }

  setup() {

    this.a_tap = new Howl({src: [this.src_tap],autoplay: false,loop: false,volume: 1});

    // 最初のload
    // this.a_bgm.once('load', ()=>{
    //   this.a_bgm.play();
    // });

    if (gb.isSound=='false') this.off();

  }

  toggle() {

    if (this.isSound) {

      this.off();

    } else {

      this.on();

    };

    this.isSound = !this.isSound;

  }

  on() {

    // this.r.on();
    Howler.volume(1.0);

    this.$on.find('path').css('opacity', .3);
    this.$off.find('path').css('opacity', 1);

    gb.isSound = 'true';        
    gb.u.u.setCookie('isSound', gb.isSound, 1 * 24 * 60 * 60 * 1000); //1日

  }

  off() {

    // this.r.off();
    Howler.volume(0.0);

    this.$off.find('path').css('opacity', .3);
    this.$on.find('path').css('opacity', 1);

    gb.isSound = 'false';        
    gb.u.u.setCookie('isSound', gb.isSound, 1 * 24 * 60 * 60 * 1000); //1日

  }

  onBlur() {

    this.a_bgm.pause();

  }

  onFocus() {

    this.a_bgm.play();

  }

  setEvents() {

    // $(window).on('blur', this.onBlur.bind(this));
    // $(window).on('focus', this.onFocus.bind(this));

    // $(window).one('click', ()=>{
    //   this.a_bgm.play();  
    // });
    // $(window).on('click', ()=>{
    //   this.a_tap.play();
    // });

    this.$on.on('click', this.on.bind(this));
    this.$off.on('click', this.off.bind(this));

  }
  
}