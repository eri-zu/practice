//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

export default class Render {

  constructor(parent) {

    this.p = parent;

  }

  seekTo(toTime) {

    this.p.v.currentTime = toTime;

  }

  play() {

    this.p.v.play();
    this.p.isPlay = true;

  }

  pause() {
    
    this.p.v.pause();
    this.p.isPlay = false;
    
  }

  volUp() {
    
    this.p.v.volume = this.p.v.volume + 0.25;

  }

  volDown() {
    
    this.p.v.volume = this.p.v.volume - 0.25;

  }

  tweenVolume (val,dur = 0.5,ease = Power4.easeIn){ 

    // 0.0（無音）～ 1.0（最大）

    TweenMax.to(this.v, dur, {volume:val, ease: ease});

  }

}