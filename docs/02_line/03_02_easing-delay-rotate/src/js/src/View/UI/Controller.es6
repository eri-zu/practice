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

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    $('.clock').each((index, el)=>{
      
      // var ease = 0.12 + (Math.random() - 0.5) * 0.08;
      var ease = 0.08 + index * 0.05;
      var rot = (index==1)?45:-45;

      new Move($(el), ease, rot);

    });

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}