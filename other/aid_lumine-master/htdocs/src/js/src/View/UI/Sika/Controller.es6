// ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
import Val from 'Util/Val.es6';

export default class Dom extends Base {

  constructor() {

    super();

    this.$sika = $('.sika.on');

    this.setup();
    this.setEvents();

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.repeat();

      }, 4.0 + Math.random() * 3.0)

  }

  setup() {



  }

  timeline() {


  }

  repeat() {

    var tl = new TimelineMax({});

    tl
      .add(()=>{

        var tls = new TimelineMax();
        this.dur = .05;

        tls
          .to(this.$sika, this.dur, {opacity: 1, ease: Expo.easeIn})
          .to(this.$sika, this.dur, {opacity:0, ease: Expo.easeOut})
          .to(this.$sika, this.dur, {opacity: 1, ease: Expo.easeOut})
          .to(this.$sika, this.dur, {opacity:0, ease: Expo.easeOut})
          .to(this.$sika, this.dur, {opacity: 1, ease: Expo.easeOut})
          .to(this.$sika, 2.0, {opacity: 0, ease: Power2.easeInOut})
        

      }, 0.0)
      .add(()=>{

        this.repeat();

      }, 5.0)

  }

  setEvents() {

    super.setEvents();
    

  }

}