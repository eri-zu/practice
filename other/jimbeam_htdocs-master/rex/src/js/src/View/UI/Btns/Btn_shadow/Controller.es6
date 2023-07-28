//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// import Position from './Position.es6';
import * as m from 'Util/Math/index.es6';
import * as e from 'Util/Easing/index.es6';

export default class Controller extends Base {

  constructor($t) {

    super();

    this.$t = $t;
    this.$svg = this.$t.find('polygon, path');
    this.$shadow = this.$t.find('.shadow');

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  update() {



  }

  onDown() {

    var ookisa = 3;

    TweenMax.set(this.$svg.not(this.$shadow), {x: ookisa, y: ookisa});
    this.$shadow.css('opacity', 0);
    
  }

  onUp() {

    TweenMax.set(this.$svg.not(this.$shadow), {x: 0, y: 0});
    this.$shadow.css('opacity', 1);

  }

  setEvents() {

    // grab
    this.$t.on('touchstart mousedown', this.onDown.bind(this));
    this.$t.on('touchend mouseup', this.onUp.bind(this));

  }

}