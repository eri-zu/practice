//--------------------------------------------------
//
//  ReadyMgr
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Events from './Events.es6';
import Render from './Render_def.es6';

export default class ReadyMgr extends Base {

  constructor() {

    super();

    this.name = 'ReadyMgr';

    this.completed = 0;
    this.total = 1; // 最初に0で割られるのを防ぐ
    this.current = 0;

    this.$wrap = $('#wrapper');
    this.r = new Render();
    if (gb.conf.LOADING) this.setup(); // loading有り
    else this.setup_not_loading(); // loading無し

    this.setEvents();

  }

  setup() {

    this.e = new Events(this);
    this.r.show()
    // this.r.add();
    // this.r.show();

  }

  setup_not_loading() {

    $('.loading').hide();
    this.onComplete();

  }
  
  

  update() {
    // 
    // this.e = this.e.update();
    // this.r.update(this.e);

  }

  onComplete() {
    this.r.endFlag = true;
    this.r.hide()
  }

}