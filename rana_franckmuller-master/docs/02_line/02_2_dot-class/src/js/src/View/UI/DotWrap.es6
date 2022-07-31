//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as a from 'Util/Array/index.es6';
import * as m from 'Util/Math/index.es6';

import Dot_h from './Dot_h.es6';
import Dot_v from './Dot_v.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    this.$box = $('.box');
    this.$wrap_h = $('.dotWrap_h');
    this.$wrap_v = $('.dotWrap_v');

    var margin = 2;
    var w = 2;
    var h = 2;
    var boxw = this.$box.width();
    var boxh = this.$box.height();

    var div = '<div class="dot"></div>';
    this.html = '';

    // horizon
    // this.len_h = 10;
    this.len_h = boxw / (w + margin);
    for (var i = 0; i < this.len_h; i++) {

      this.html += div;
      
    }
    this.$wrap_h.append(this.html);
    this.$wrap_h.css('padding-left', margin / 2);

    // vertical
    this.len_v = boxh / (h + margin);
    for (var i = 0; i < this.len_v; i++) {

      this.html += div;
      
    }
    this.$wrap_v.append(this.html);
    this.$wrap_v.css('padding-top', margin / 2);

    this.$dot_h = this.$wrap_h.find('.dot');
    this.$dot_v = this.$wrap_v.find('.dot');


    this.ds_h = [];
    for (var i = 0; i < this.$dot_h.length; i++) {
      var d = new Dot_h(this.$dot_h.eq(i));
      this.ds_h.push(d);
    }
    this.ds_v = [];
    for (var i = 0; i < this.$dot_v.length; i++) {
      var d = new Dot_v(this.$dot_v.eq(i));
      this.ds_v.push(d);
    }

 
    this.timeline();

  }

  update() {

 
  }

  timeline() {

    var tl = new TimelineMax({repeat: 0});

    tl
      .add(()=>{

        this.show();

      }, 0.0)
      .add(()=>{

        this.hide();

      }, 3.0)


  }

  show() {

    var tl = new TimelineMax();
    tl
      .add(()=>{
        var arr = a.randomArr(this.len_h);
        for (var i = 0; i < this.len_h; i++) {
          var d = this.ds_h[arr[i]];
          d.show(i);
        }
      }, 0.0)
      // .add(()=>{
      //   for (var i = 0; i < this.len_h; i++) {
      //     var d = this.ds_h[i];
      //     d.hide(i);
      //   }
      // }, this.len_h * 0.02 + 0.8)

    var tl02 = new TimelineMax();
    tl02
      .add(()=>{
        var arr = a.randomArr(this.len_v);
        for (var i = 0; i < this.len_v; i++) {
          var d = this.ds_v[arr[i]];
          d.show(i);
        }
      }, 0.0)
      // .add(()=>{
      //   for (var i = 0; i < this.len_v; i++) {
      //     var d = this.ds_v[i];
      //     d.hide(i);
      //   }
      // }, this.len_v * 0.02 + 0.8)
    
    
  }

  hide() {

    for (var i = 0; i < this.len_h; i++) {
      var d = this.ds_h[i];
      d.hide(i);
    }

    for (var i = 0; i < this.len_v; i++) {
      var d = this.ds_v[i];
      d.hide(i);
    }

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}