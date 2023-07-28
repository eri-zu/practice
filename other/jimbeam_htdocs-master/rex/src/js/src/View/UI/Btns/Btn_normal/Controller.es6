//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// import Position from './Position.es6';
import * as m from 'Util/Math/index.es6';
import * as e from 'Util/Easing/index.es6';

export default class Controller extends Base {

  constructor($t) {

    super();

    this.$t = $t;

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  update() {



  }

  onDown(that) {

    if (!$(that).hasClass('notHide')&&!$(that).find('a').hasClass('notHide')) {

      var ookisa = 5;
      TweenMax.set(this.$t, {x: ookisa, y: ookisa});

      return;
    }


    var ookisa = 100;
    TweenMax.to(this.$t, .3, {x: ookisa, y: ookisa, opacity: 0, 
      ease: Back.easeIn.config(1.7)
      // ease: Power2.easeOut
    });
    
  }

  onUp(that) {

    if (!$(that).hasClass('notHide')&&!$(that).find('a').hasClass('notHide')) {

      TweenMax.set(this.$t, {x: 0, y: 0});

      return;
    }

  }

  setEvents() {

    var self = this;

    // grab
    this.$t.on('touchstart mousedown', function(){self.onDown.call(self, this)});
    this.$t.on('touchend mouseup', function(){self.onUp.call(self, this)});

  }

}