//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

// import Time from './Time/Controller.es6';
import Move from './Move/Controller.es6';

export default class Controller extends Base {

  constructor($barl, $barr) {

    super();

    this.$barl = $barl;
    this.$barr = $barr;

    this.setup()
    this.setEvents();

    // this.timeline();

  }

  setup() {

      // var ease = 0.12 + (Math.random() - 0.5) * 0.08;
      var ease = 0.08 + 0 * 0.05;
      var rot = 0;

      this.barl = new Move(this.$barl, ease, rot);

      var ease = 0.08 + 1 * 0.05;
      var rot = 0;

      this.barr = new Move(this.$barr, ease, rot);

  }

  timeline() {

    var tl = new TimelineMax({repeat: 0});

    tl
      .add(()=>{

        this.barl.x = gb.r.w * (Math.random() - 0.5);
        this.barl.y = gb.r.h * Math.random();
      
        this.barr.x = gb.r.w * (Math.random() - 0.5);
        this.barr.y = gb.r.h * Math.random();

        this.barl.onU();
        this.barr.onU();
      
      }, 0.0)
      .add(()=>{

      
      }, 3.0)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}