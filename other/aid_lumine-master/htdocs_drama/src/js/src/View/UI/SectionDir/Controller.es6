//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// ui
import Sec01 from './Sec01/Controller.es6';
import Sec02 from './Sec02/Controller.es6';
import Sec03 from './Sec03/Controller.es6';
import Sec04 from './Sec04/Controller.es6';
import Sec05 from './Sec05/Controller.es6';
import Sec06 from './Sec06/Controller.es6';
import Match from './Match/Controller.es6';

export default class UIController extends Base {

  constructor() {

    super();

    this.setup()
    this.setEvents();

  }

  setup() {

    if (!$('body').hasClass('isIE')) {

      this.Sec01 = new Sec01($('.block02'));
      this.Sec02 = new Sec02($('.block03'));
      this.Sec03 = new Sec03($('.block04'));
      this.Sec04 = new Sec04($('.block05'));
      this.Sec05 = new Sec05($('.block06'));
      this.Sec06 = new Sec06($('.block07'));
      // this.Match = new Match();

    }

    $('.matches.notMv .itemW').each((index, el)=>{

      // if (index>0) return;
      // if (index!==1) return;

      var m = new Match($(el), index);

    });

  }

  update() {

 
  }

  timeline() {


  }

  setEvents() {

    super.setEvents();

  }

}