//--------------------------------------------------
//
//  Param
//
//--------------------------------------------------

import * as dat from 'dat.gui';

import Base from '_MyLibs/Util/Base.es6';

export default class Param extends Base {

  constructor() {

    super();

    this.p1 = 0;
    this.p2 = 0;
    this.p3 = 0;
    this.p4 = 0;
    

    this.setup();
    this.setEvents();

  }

  setup() {

    this.setParam();

  }

  onParamsChange() {
    
    // log(this.p1);
    // log(this.p2);
    // log(this.p3);

  }

  setParam() {

    var gui = new dat.GUI();
    // ------------------------------------------------------------
    //  各Pass param setting
    // ------------------------------------------------------------
    var f1 = gui.addFolder('1');
    f1.add(this, 'p1', 0.0, 5.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this, 'p2', 0.0, 100.0).step(0.1).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this, 'p3', 0.0, 10.0).step(0.1).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this, 'p4', 0.0, 10.0).step(0.1).listen().onChange(this.onParamsChange.bind(this));
    // f1.add(this, 'p2', 0.0, Math.PI * 2).step(0.1).listen().onChange(this.onParamsChange.bind(this));

  }

  setEvents() {

  }

}