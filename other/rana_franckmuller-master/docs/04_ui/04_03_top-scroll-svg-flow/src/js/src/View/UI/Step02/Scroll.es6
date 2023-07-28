//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

export default class Scroll {

  constructor(targetST, flag=true, cb=()=>{}, cb02=()=>{}, name) {

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
    
  }

  setup() {

  }

  onScroll() {

    var st = gb.s.st;

    // 特定のst以上になったら1回だけ実行

    if (this.flag) {

      if (this.targetST<=st && !this.isLock) {
        this.isLock = true;

        this.cb();

      }

      // if (this.targetST>st && this.isLock) {
      //   this.isLock = false;

      //   this.cb02();

      // }

    // 特定のst以上になったら連続cb実行
    } else {

      // if (this.targetST<=st) {

      //   this.cb();

      // }

      // if (this.targetST>st) {

      //   this.cb02();

      // }

    }

  }

  setEvents() {

    log('setEvents');

    gb.sl.add('Scroll'+this.name, this.onScroll.bind(this));
    
  }

   removeEvents() {

    gb.sl.remove('Scroll'+this.name);
    
  } 
  
}