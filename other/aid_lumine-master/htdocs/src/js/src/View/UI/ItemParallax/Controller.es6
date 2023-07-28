//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import TargetScroll from './TargetScroll/Controller.es6';
import Move from './Move/Controller.es6';

export default class Controller extends Base {

  constructor($wrap) {

    super();

    this.isREv = true;

    this.$wrap = $wrap;

    this.setup();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    // scroll
    var tsl = new TargetScroll(this.$wrap);

    // move
    this.$wrap.find('.itemWrap').each((index, el)=>{
      if (tsl.list[index]==undefined) return;

      // if (index>0) return;
      var pos = tsl.list[index].pos;
      var m = new Move($(el), pos, gb.moveItemsIndex);

      gb.moveItems.push(m);
      gb.moveItemsIndex++;
    });

    log(gb.moveItems);
    
  }

  setEvents() {

    super.setEvents();

  }

}