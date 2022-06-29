//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Btn_open from './Btn_open.es6';
import Btn_close from './Btn_close.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    this.$open = $('.open_menu');
    this.$close = $('.close_menu');

    
    // // ui
    this.b_o = new Btn_open(this.$open);
    this.b_c = new Btn_close(this.$close);

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