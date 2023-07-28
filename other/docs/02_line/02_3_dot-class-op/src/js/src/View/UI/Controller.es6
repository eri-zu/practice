//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import DotWrap from './DotWrap.es6';
import Bar_h from './Bar_h.es6';
import Bar_v from './Bar_v.es6';
import Bar_h_b from './Bar_h_b.es6';
import Bar_v_r from './Bar_v_r.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    this.$img = $('.box img');

    var tl = new TimelineMax({delay: 0.5});

    tl
      .add(()=>{

        new Bar_h($('.barWrap_h.top'));

      }, 0.09 * 0)
      .add(()=>{

        new Bar_h_b($('.barWrap_h.bottom'));

      }, 0.09 * 1)
      .add(()=>{

        new Bar_v($('.barWrap_v.left'));

      }, 0.09 * 2)
      .add(()=>{

        new Bar_v_r($('.barWrap_v.right'));

      }, 0.09 * 3)
      .add(()=>{

        new DotWrap();

      }, 0.0)
      .add(()=>{

        TweenMax.to(this.$img, 1.5, {
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