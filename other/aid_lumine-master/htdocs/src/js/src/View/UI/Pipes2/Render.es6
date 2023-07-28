//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Item from './Item.es6';

import * as a from 'Util/Array.es6';

export default class UIController extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.$itemb = $('.block06 .items.balls .item');
    this.$itemp = $('.block06 .items.pres .item');

    // balls
    this.len = this.$itemb.length;
    var arr = a.randomArr(this.len);
    this.$itemb.each((index, el)=>{

      // if (index>0) return;

      // var $t = this.$item.eq(this.len - index);
      var $t = this.$itemb.eq(index);
      // var $t = this.$itemb.eq(arr[index]);

      var item = new Item($t, index, this.len);
      
    });

    // pre
    this.len = this.$itemp.length;
    var arr = a.randomArr(this.len);
    this.$itemp.each((index, el)=>{

      // if (index>0) return;

      // var $t = this.$item.eq(this.len - index);
      var $t = this.$itemp.eq(index);
      // var $t = this.$itemp.eq(arr[index]);
      var item = new Item($t, index, this.len, true);
      
    });

    this.timeline();

  }

  update() {

  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{


      }, 0.0)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}