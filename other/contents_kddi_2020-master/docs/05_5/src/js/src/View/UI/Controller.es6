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

    new MVController()
  }

  timeline() {


  }

  update() {

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();
    $(window).on('setup_mv',e=>{
      gb.loading.onComplete()
    })
    // $(window).on('loadingEnd', this.timeline.bind(this));
    // $(window).on('loadingEnd', this.setup.bind(this));

  }

}