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
    this.p3 = 10;

    this.color1 = "#ffae23"; // CSS string
    this.color2 = [ 0, 128, 255 ]; // RGB array
    this.color3 = [ 0, 128, 255, 0.3 ]; // RGB with alpha
    this.color4 = { h: 350, s: 0.9, v: 0.3 }; // Hue, saturation, value    

    this.presets = '01';

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

    // log(this.color1);
    // log(this.color2);
    // log(this.color3);
    // log(this.color4);

    log(this.presets);

  }

  onPresetsChange() {
        
    if (this.presets=='01') {
      this.color2 = [ 100, 128, 25 ];
    }
    if (this.presets=='02') {
      this.color2 = [ 100, 28, 25 ];
    }
    if (this.presets=='03') {
      this.color2 = [ 100, 228, 25 ];
    }

  }

  setParam() {

    var gui = new dat.GUI();
    // ------------------------------------------------------------
    //  各Pass param setting
    // ------------------------------------------------------------
    // color
    var f2 = gui.addFolder('color');
    // f2.addColor(this, 'color1').onChange(this.onParamsChange.bind(this));
    f2.addColor(this, 'color2').onChange(this.onParamsChange.bind(this));
    // f2.addColor(this, 'color3').onChange(this.onParamsChange.bind(this));
    // f2.addColor(this, 'color4').onChange(this.onParamsChange.bind(this));
    f2.open();

    // value
    var f1 = gui.addFolder('value');
    f1.add(this, 'p1', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this, 'p2', 0.0, Math.PI * 2).step(0.1).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this, 'p3', 0.0, 100.0).step(1).listen().onChange(this.onParamsChange.bind(this));

    // presets
    var f3 = gui.addFolder('presets');
    f3.add(this, 'presets', [ '01', '02', '03' ] ).onChange(this.onPresetsChange.bind(this));

  }

  setEvents() {

  }

}