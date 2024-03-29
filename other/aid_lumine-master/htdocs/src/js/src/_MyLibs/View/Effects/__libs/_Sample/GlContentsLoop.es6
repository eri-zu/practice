//--------------------------------------------------
//
//  GlContentsLoop
//
//--------------------------------------------------

export default class GlContentsLoop {

  constructor() {

    this.isAlways = true;
    this.isRunStatus = true;
    this.isAdjustParam = true;
    this.state = 'initial';
    this.sometimesState = 'initial';

    this.loopStart = false;

    this.loopList = [];

    this.setEvents();

  }

  update() {

    if (this.isAlways) this.runAlways();
    if (this.isRunStatus) this.runStatus();
    if (this.isAdjustParam) this.runAdjustParam();

  }

  // ------------------------------------------------------------
  // 常に行う処理
  // ------------------------------------------------------------    
  runAlways() {

    for (var i in this.loopList) this.loopList[i].func();
      

    gb.controls.update();

    // camera
    gb.camera.updateControll();

  }

  // ------------------------------------------------------------
  // 各状態の処理
  // ------------------------------------------------------------
  runStatus() {

    if (this.state == 'initial') {


    } else if (this.state == 'start') {



    } else if (this.state == 'step01') {



    } else if (this.state == 'step02') {



    } else if (this.state == 'step03') {



    } else if (this.state == 'standby') {


    } else if (this.state == 'sometimes') {

      if (this.sometimesState == 'lineShadow') {


      } else if (this.sometimesState == 'sphere') {


      } else if (this.sometimesState == 'satellite') {


      }

    }

  }

  // ------------------------------------------------------------
  // パラメータ調整用処理
  // ------------------------------------------------------------
  runAdjustParam() {



  }

  draw() {

    gb.renderer.render( gb.scene.scene, gb.camera.camera );
    // gb.postprocess.composer.render(0.1);

  }

  loop() {

    if (this.loopStart) {

    this.update();
    this.draw();

    }

  }

  start() {

    this.loopStart = true;

  }

  pause() {

    this.loopStart = false;

  }

  add(name, func) {

    var obj = {name:name,func:func};

    this.loopList.push(obj);
    
  }

  remove(name) {

    var target = {name:name,func:()=>{}};

    var len = this.loopList.length;
    var check;
    for( var i = 0 ; i < len; i++ ) {
      check = this.loopList[ i ];

      if( check.name == target.name){
        this.loopList.splice( i , 1 ) ;
        i--;
        len--;
      }
    }

    return this.loopList;

  }


  setEvents() {

    var self = this;

    gb.up.add('VoiceOnTestDriveLoop',this.loop.bind(this));

  }

}