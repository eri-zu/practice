//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

export default class Render {

  constructor($target, audio) {

    this.$target = $target;
    this.a = audio;

    this.setup();
    this.setEvents();

  }

  setup() {

  }

  on() {

    this.$target.find('.volume').addClass('playing');
    // this.a.tweenVolume(1,2);
    this.a.tweenVolume(1,2);

  }

  off() {

    this.$target.find('.volume').removeClass('playing');
    // this.a.tweenVolume(0,2);
    this.a.tweenVolume(0,2);

  }

  setEvents() {


  }
  
}