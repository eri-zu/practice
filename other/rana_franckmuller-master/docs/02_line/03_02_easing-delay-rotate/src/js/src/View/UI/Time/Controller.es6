//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Time from './Time.es6';
import Render from './Render.es6';

export default class Controller extends Base {

  constructor($target) {

    super();

    this.isUEv = true;
    this.isUpdate = true;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.t = new Time();
    this.r = new Render();

  }

  update() {

    this.t.update();
    this.r.update(this.t);

  }

  setEvents() {

    var self = this;

    super.setEvents();

  }

}
