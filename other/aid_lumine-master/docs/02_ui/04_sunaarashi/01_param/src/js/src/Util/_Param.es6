//--------------------------------------------------
//
//  Param
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Param extends Base {

  constructor() {

    super();

    this.param01 = 0;
    this.param02 = 0;
    this.param03 = 0;
    

    this.setup();
    this.setEvents();

  }

  setup() {

    this.onToggleChange()
    this.onParamsChange()
    this.setParam();

  }

  onToggleChange(){
    


  }
  
  onParamsChange() {
    
    this.RGBShiftPass.uniforms.angle.value = this.p.RGBShiftPass_angle;
    this.RGBShiftPass.uniforms.amount.value = this.p.RGBShiftPass_amount;
    this.RGBShiftPass.uniforms.brightness.value = this.p.RGBShiftPass_brightness;

  }

  setParam() {

    var gui = new dat.GUI();
    // ------------------------------------------------------------
    //  各Pass param setting
    // ------------------------------------------------------------
    var f1 = gui.addFolder('param01');
    f1.add(this, 'RGBShiftPass_show').onChange(this.onToggleChange.bind(this));
    f1.add(this, 'RGBShiftPass_angle', 0.0, Math.PI * 2).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this, 'RGBShiftPass_amount', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));

  }

  setEvents() {

  }

}