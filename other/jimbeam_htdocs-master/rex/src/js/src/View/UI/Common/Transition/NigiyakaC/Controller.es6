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
    this.c = new Canvas($('.jimbeamCommon'), 'cvTrans');

  }

  update() {

 
  }

  show(isTrans=false, cb=()=>{}) {

    this.c.show(isTrans, cb);

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}