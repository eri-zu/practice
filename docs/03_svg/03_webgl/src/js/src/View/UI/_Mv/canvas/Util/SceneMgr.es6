//--------------------------------------------------
//
//  SceneMgr
//
//--------------------------------------------------

export default class SceneMgr {

  constructor() {

    this.setup();
    this.setEvents();

  }

  setup() {

    this.NUM = 0;
    // シーンを格納する配列
    this.scenes = [];

  }

  add(scene) {

    this.scenes.push(scene);

  }

  update() {

    this.scenes[this.NUM].update();

  }

  draw() {

    this.scenes[this.NUM].draw();

  }

  checkNum() {

    if(this.NUM < 0) this.NUM = this.scenes.length - 1;
    if(this.NUM >= this.scenes.length) this.NUM = 0;

    log(this.NUM);

  }

  onKeyDown(e) {

    if(e.key == "ArrowRight") {
      this.NUM++;
      this.checkNum();
    }
    if( e.key == "ArrowLeft") {
      this.NUM--;
      this.checkNum();
    }

  }

  setEvents() {

    $(window).on('keydown', this.onKeyDown.bind(this));
 
  }

}