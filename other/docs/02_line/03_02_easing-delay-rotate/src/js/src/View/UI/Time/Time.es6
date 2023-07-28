//--------------------------------------------------
//
//  Time
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Time extends Base {

  constructor(){

    super();

    this.h = '';
    this.m = '';
    this.s = '';
    
    this.setup();
    this.setEvents();    

  }

  setup() {

    gb.u.d.date();

  }

  update() {

    // 間引き
    if (gb.up.frame%60!==0) return;

    gb.u.d.time();

    // this.h = gb.u.s.add0(gb.u.d.hour).split('');
    // this.m = gb.u.s.add0(gb.u.d.minute).split('');
    // this.s = gb.u.s.add0(gb.u.d.second).split('');
    this.h = gb.u.s.add0(gb.u.d.hour);
    this.m = gb.u.s.add0(gb.u.d.minute);
    this.s = gb.u.s.add0(gb.u.d.second);

  }

  draw() {


  }

}