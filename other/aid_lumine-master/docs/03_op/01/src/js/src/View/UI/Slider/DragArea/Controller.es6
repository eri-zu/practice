//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Controller extends Base {

  constructor($wrap=$('#wrapper')) {

    super();

    this.$wrap = $wrap;

    this.setup();
    this.setEvents();

  }

  setup() {

    $('body').addClass('grab');

  }

  update() {

  }

  onDown() {

    $('body')
      .removeClass('grab')
      .addClass('grabbing');
    
    $('body')
      .addClass('no-select');
    
  }

  onUp() {

    $('body')      
      .removeClass('grabbing')
      .addClass('grab');

    $('body')
      .removeClass('no-select');

  }

  onEnter() {

    $('body')      
      .addClass('grab');

    $('body')
      .addClass('no-select');

  }

  onLeave() {

    $('body')      
      .removeClass('grabbing')
      .removeClass('grab');

    $('body')
      .removeClass('no-select');

  }

  setEvents() {

    // grab
    this.$wrap.on('mousedown', this.onDown.bind(this));
    this.$wrap.on('mouseup', this.onUp.bind(this));

    this.$wrap.on('mouseleave', this.onLeave.bind(this));
    this.$wrap.on('mouseenter', this.onEnter.bind(this));

  }

}