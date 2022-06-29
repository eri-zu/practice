//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    this.$box = $('.box');
    this.$wrap = $('.dotWrap');

    var margin = 2;
    var w = 2;
    var boxw = this.$box.width();

    var div = '<div class="dot"></div>';
    this.html = '';

    // this.len = 10;
    this.len = boxw / (w + margin);

    for (var i = 0; i < this.len; i++) {

      this.html += div;
      
    }

    this.$wrap.append(this.html);
    this.$wrap.css('padding-left', margin / 2);

    this.$dot = this.$wrap.find('.dot');





    this.timeline();

  }

  update() {

 
  }

  timeline() {

    for (var i = 0; i < this.len; i++) {
      var $d = this.$dot.eq(i);
      var tl = new TimelineMax({yoyo: true, repeat: -1});

      var scaley = (i<this.len/2)? i : this.len - i;

      tl
        .to($d, 1.5, {
          opacity: 0,
          // y: 50 * ((i%2==0)?1:-1),
          // y: 50,
          scaleY: 2 * scaley,
          ease: Power2.easeInOut,
        })

    }


  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}