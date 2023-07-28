//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';


// ui
import Menu from './Menu/Controller.es6';
import Menu2 from './Menu2/Controller.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    if (gb.urlp.pattern=='1') {
      $('.open.toggle_menu').remove();
    } else {
      $('.c-header--menu').remove();
      $('body').addClass('pattern2');
    }

    if (gb.urlp.pattern=='1') new Menu();
    if (gb.urlp.pattern=='2') new Menu2();

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