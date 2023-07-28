//--------------------------------------------------
//
//  Profiler
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Stats from 'stats-js';

export default class Profiler extends Base {

  constructor() {

    super();

    this.name = 'Profiler';

    this.isUEv = true; // update

    this.setup();
    this.setEvents();

  }

  setup() {

    this.Stats = new Stats();
    this.Stats.domElement.style.position = "fixed";
    this.Stats.domElement.style.left     = "0px";
    this.Stats.domElement.style.top   = "0px";
    $(this.Stats.domElement).css('z-index', 9999);
    document.body.appendChild(this.Stats.domElement);
  
  }

  update() {

    if(this.Stats) this.Stats.update();

  }

}