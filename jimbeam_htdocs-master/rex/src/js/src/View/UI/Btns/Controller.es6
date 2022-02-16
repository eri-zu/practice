//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Btn_normal from './Btn_normal/Controller.es6';
import Btn_shadow from './Btn_shadow/Controller.es6';

export default class Controller extends Base {

  constructor($target=$('#wrapper')) {

    super();

    this.$target = $('.tapBtn');
    this.$targets = $('.tapBtns');

    this.setup();
    this.setEvents();

  }

  setup() {

    this.$target.each(function(index, el) {
      
      new Btn_normal($(el));

    });

    this.$targets.each(function(index, el) {
      
      new Btn_shadow($(el));

    });

    

  }

  update() {



  }

  setEvents() {


  }

}