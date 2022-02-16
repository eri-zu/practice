//--------------------------------------------------
//
//  Controller sss
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// canvas
import Canvas from './canvas/Controller.es6';

// dom

export default class Controller extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    // canvas
    this.c = new Canvas();

  }

  update() {

 
  }

  start() {

    this.c.scene01.obj.pe.show();

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}