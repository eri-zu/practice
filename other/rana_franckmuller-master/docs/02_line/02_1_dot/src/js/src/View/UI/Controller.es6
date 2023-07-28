//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import Dot from './Dot.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    new Dot();

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