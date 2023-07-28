//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Render from './Render.es6';

export default class Controller {

  constructor(src, cb, $wrap) {

    this.$wrap = $wrap || $('body');


    this.v = null;
    this.src = src;
    this.w = 0;
    this.h = 0;
    this.duration = 0; 
    this.currentTime = 0;
    this.volume = 1;
    this.loop = false;
    this.autoplay = false;
    this.muted = true;
    this.controls = false;

    this.isLoad = false;
    this.isPlay = false;
    this.isAutoPlay = false;
    this.isLoop = true;
    this.isControl = false;

    // コールバック
    this.cb = cb || (()=>{});

    this.setup();

  }

  setup() {

    // dom生成
    this.v = document.createElement('video');
    this.v.playsinline = true;
    this.v.loop = false;
    this.v.autoplay = true;
    this.v.muted = true;
    $(this.v).attr({
      playsinline: true,
      muted: true,
      loop: false,
      autoplay: true
    });

    // type確認
    var type = this.support(this.v);
    if (type == "") {
      return;
    }

    // videoのload
    // this.load();

  }

  load() {

    // this.v.addEventListener("canplay", ()=>{
    // this.v.addEventListener("canplaythrough", ()=>{

    //   if (!this.isLoad) {

    //     this.r = new Render(this);

    //     this.isLoad = true;
    //     this.getAttr();
    //     this.cb();

    //     if (this.isLoop) this.v.loop = true;
    //     if (this.isControl) this.v.controls = true;

    //     // append
    //     this.prepend();
    //     // this.append();
    //     if (this.isAutoPlay) this.r.play();

    //   };

    // }, false);

    // this.v.src = this.src;

    this.r = new Render(this);

    this.v.addEventListener("canplaythrough", ()=>{

      if (!this.isLoad) {

        log(11)
        this.isLoad = true;

        this.append();
        $(window).trigger('videoload');

      };

    }, false);
    this.v.src = this.src;


  }

  append() {

    this.$wrap.append(this.v);

  }

  prepend() {

    this.$wrap.prepend(this.v);

  }

  fullsize($wrap, eventName, w, h) {

    var l = new FullSize($wrap, $(this.v), 0, 'center');
    l.targetDefW = w;
    l.targetDefH = h;
    l.run();

  }

  support() {

    var ext = "";
    if (this.v.canPlayType("video/webm") == "probably" || this.v.canPlayType("video/webm") == "maybe") {
      ext = "webm";
    } else if(this.v.canPlayType("video/mp4") == "probably" || this.v.canPlayType("video/mp4") == "maybe") {
      ext = "mp4";
    } else if(this.v.canPlayType("video/ogg") == "probably" || this.v.canPlayType("video/ogg") == "maybe") {
      ext = "ogg";
    }

    return ext;
  }

  getAttr() {

    this.w = this.v.videoWidth;
    this.h = this.v.videoHeight;
    this.duration = this.v.duration;
    this.currentTime = this.v.currentTime;
    this.volume = this.v.volume;
    this.loop = this.v.loop;
    this.autoplay = this.v.autoplay;
    this.muted = this.v.muted;
    this.controls = this.v.controls;

    log(this);
    
  }

  onLoadStart() {

    log('loadstart');

  }

  onProgress() {

    log('progress');

    if (this.v.buffered.length > 0 && this.v.buffered.end && this.v.duration) {
        var percent = this.v.buffered.end(0) / this.v.duration;
    } else if (this.v.bytesTotal != undefined && this.v.bytesTotal > 0 && this.v.bufferedBytes != undefined) {
        var percent = this.v.bufferedBytes / this.v.bytesTotal;
    }

    log(percent);

  }

  onSuspend() {

    log('suspend');

  }

  onLoadedmetadata() {

    log('loadedmetadata');

  }

  onCanplaythrough() {

    log('canplaythrough');

  }

  onLoop() {

    if (this.v.buffered.length > 0 && this.v.buffered.end && this.v.duration) {
        var percent = this.v.buffered.end(0) / this.v.duration;
    } else if (this.v.bytesTotal != undefined && this.v.bytesTotal > 0 && this.v.bufferedBytes != undefined) {
        var percent = this.v.bufferedBytes / this.v.bytesTotal;
    }

    log(percent);

    if(percent>=1 && !isLock){
      isLock = true;
      log(gb.u.d.s());
    }

  }

  setEvents() {

    var self = this;

    // this.v.addEventListener("loadstart", this.onLoadStart.bind(this), false);
    // this.v.addEventListener("progress", this.onProgress.bind(this), false);
    // this.v.addEventListener("suspend", this.onSuspend.bind(this), false), false);
    // this.v.addEventListener("loadedmetadata", this.onLoadedmetadata.bind(this), false);
    // this.v.addEventListener("canplaythrough", this.onCanplaythrough.bind(this), false);

    // this.v.addEventListener("timeupdate", function () {
    //   if(self.video.currentTime >= 6.0) {
    //     self.video.currentTime = 5.0;
    //     // self.video.pause();
    //   }
    // });

    // 再生完了
    // v.addEventListener("ended", function(){
    //   document.getElementById("kanryou").innerHTML = "動画の再生が完了しました。";
    // }, false);


  }

}