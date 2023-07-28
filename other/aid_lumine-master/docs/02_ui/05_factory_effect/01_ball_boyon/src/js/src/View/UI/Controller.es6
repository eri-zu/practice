//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import FakeScroll from './FakeScroll/Controller.es6';
import TargetScroll from './TargetScroll/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    new FakeScroll();
    new TargetScroll();

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}