//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import SliderTop from './SliderTop/Controller.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {


    this.SliderTop = new SliderTop();


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