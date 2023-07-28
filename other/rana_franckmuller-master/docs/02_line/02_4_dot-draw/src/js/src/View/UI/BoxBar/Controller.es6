//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import DotWrap from './Dot/DotWrap.es6';
import Bar_h from './Bar/Bar_h.es6';
import Bar_v from './Bar/Bar_v.es6';
import Bar_h_b from './Bar/Bar_h_b.es6';
import Bar_v_r from './Bar/Bar_v_r.es6';

export default class UIController extends Base {

  constructor($wrap) {

    super();

    this.$wrap = $wrap;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.$target = this.$wrap.find('.boxBarTarget');

    var tl = new TimelineMax({delay: 0.5});

    tl
      .add(()=>{

        new Bar_h(this.$wrap);

      }, 0.09 * 0)
      .add(()=>{

        new Bar_h_b(this.$wrap);

      }, 0.09 * 1)
      .add(()=>{

        new Bar_v(this.$wrap);

      }, 0.09 * 2)
      .add(()=>{

        new Bar_v_r(this.$wrap);

      }, 0.09 * 3)
      .add(()=>{

        new DotWrap(this.$wrap);

      }, 0.0)
      .add(()=>{

        TweenMax.to(this.$target, 1.5, {
          opacity: 1,
          ease: Power2.easeInOut,
        })

      }, 0.4)

    


  }

  update() {

 
  }

  timeline() {


  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}