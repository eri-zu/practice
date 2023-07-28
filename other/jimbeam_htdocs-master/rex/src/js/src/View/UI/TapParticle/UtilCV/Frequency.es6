//--------------------------------------------------
//
//  Frequency
//
//--------------------------------------------------

export default class Frequency {

  constructor(cnt, cbdef, cb) {

    this.currentCnt = 0;
    this.cnt = cnt;
    this.cntstate = this.cnt + 10;
    this.cntend = 2;
    this.cb = cb;
    this.cbdef = cbdef;

    this.setup();

  }

  setup () {

 

  }

  update() {

    this.currentCnt++;

    if(this.currentCnt>=this.cnt){

      // state
      if(this.currentCnt>=this.cntstate){

        // end
        if(this.currentCnt>=this.cntstate+this.cntend){
          this.currentCnt = 0;
          this.setCnt();
          this.setCntState();
          this.setCntEnd();
          return this.cb();
        } else {
          return this.cb();
        }

      } else {
        return this.cbdef();
      }

    }
    
    return 0;

  }

  updateEnter() {

    this.currentCnt++;

    if(this.currentCnt>=this.cnt){

      // state
      if(this.currentCnt>=this.cntstate){

        this.currentCnt = 0;
        this.cnt = 90 + 90 * Math.random();
        this.cntstate = this.cnt + 5 + 5 * Math.random();
        return this.cb();

      } else {
        return this.cb();
      }

    }
    
    return this.cbdef();

  }

  reset () {

    this.currentCnt = 0;

  }

  setCnt () {

    this.cnt = 60 + 60 * Math.random();

  }

  setCntState () {

    this.cntstate = this.cnt + 10 + 20 * Math.random();

  }

  setCntEnd () {

    this.cntend = 1 + 5 * Math.random();

  }


}