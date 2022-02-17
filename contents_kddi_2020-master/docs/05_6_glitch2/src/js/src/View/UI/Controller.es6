//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import MVController from './MV/Controller.es6';

export default class Controller extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

    // this.timeline();

  }

  setup() {
    let h = 0;
    if(window.innerWidth > 1024)h = window.innerHeight;
    else if(gb.conf.BUILT_IN)h = $('.mv').height();
    else h = window.innerHeight;
    $('.section01').height(h)
    
    this.mv = new MVController()
  }

  timeline() {


  }

  update() {
    this.mv.render()
  }

  onResize() {


  }

  setEvents() {

    super.setEvents();
    $(window).on('setup_mv',e=>{
      
      // texturesのロード終了、シーンにそれぞれのmeshを追加終了時
      // from UI/MV/Controller.es6 ready()
      gb.loading.onComplete()
    })
    // $(window).on('loadingEnd', this.timeline.bind(this));
    // $(window).on('loadingEnd', this.setup.bind(this));

  }

}
