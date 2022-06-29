//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import ls from './LineShowText.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    // var l = new ls($('.textWrap'), 1);

    // l.timeline();

    // var l2 = new ls($('.textWrap02'), 1);

    // l2.timeline(0.3);

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}