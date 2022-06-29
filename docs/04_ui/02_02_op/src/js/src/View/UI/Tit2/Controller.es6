//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Item from './Item.es6';

import * as a from 'Util/Array/index.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.$target = $('.slider .textWrap .textItem .tit');

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.pre = 0;
    this.index = 0;

    this.itemList = [];
    this.$target.each((index, el)=>{

      var item = new Item($(el));
      this.itemList.push(item);
      
    });

    // this.show();

  }

  update() {


  }

  show(index=0) {

    this.itemList[index].show();

  }

  hide(index) {

    this.itemList[index].hide();

  }

  next() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.hide(this.pre);

      }, 0.0)
      .add(()=>{

        this.show(this.index);

      }, 0.2)

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

    $(window).on('sliderChange', (e, index, pre)=>{

      this.index = index;
      this.pre = pre;
      log(this.index, this.pre);
      this.next();
      
    });

  }

}