// ------------------------------------------------------------
//
//  Line
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Line extends Base {

  constructor(stage, img, x, y, copyNum, sc, len) {

    super();

    this.stage = stage;
    this.c = this.stage.canvas;

    this.img = img;
    this.x = x;
    this.y = y;
    this.copyNum = copyNum;
    this.sc = sc;
    this.len = len;

    this.setup();
    this.setEvents();

  }

  setup() {

    // ready
    this.ready();

    this.add();

  }


  ready() {


  }

  add() {

    this.basex = this.x;
    this.basey = this.y;

    this.scale = this.sc; // retina
    this.w = this.img.width * this.scale;

    // layer, object
    this.container = new createjs.Container();

    this.bs = [];
    // var blurFilter = new createjs.BlurFilter(20, 0, 1);
    for (var i = 0; i < this.copyNum; i++) {

      var bmp = new createjs.Bitmap(this.img);

      // Bitmapの中心座標を取得
      // var x = bmp.getBounds().width / 2;
      // var y = bmp.getBounds().height / 2;

      // 画像の中心に基準点を
      bmp.x = this.basex + (this.w + 5) * i;
      bmp.y = -8 * i;
      // bmp.y = 0;
      bmp.regX = 0;
      bmp.regY = 0;
      bmp.rotation = 0;
      bmp.scaleX = this.scale; // retina
      bmp.scaleY = this.scale; // retina

      // log(basex, this.w * i);

      // bmp.filters = [blurFilter];
      // var bounds = blurFilter.getBounds();
      // bmp.cache(0, 0, this.img.width * 1, this.img.height * 1);
      // bmp.cache(bounds.x, bounds.y, bounds.width, bounds.height);

      // add
      this.container.addChild(bmp);

      this.bs.push(bmp);

    }

    this.x = this.basex;
    this.vx = .5;
    this.vy = -.3;
    this.vdefx = 0;
    this.vdefy = 0;


    // var blurFilter = new createjs.BlurFilter(10, 0, .1);
    // this.container.filters = [blurFilter];
    // var bounds = blurFilter.getBounds();
    // this.container.cache(bounds.x, bounds.y, bounds.width, bounds.height);

    // pos
    this.container.x = this.x;
    this.container.y = this.y;
    this.stage.addChild(this.container);

    this.adjust = 0;

    this.left = - this.w;
    this.right = gb.r.w + this.w * (this.copyNum) - this.basex;


  }

  update() {

    this.vdefx += this.vx;
    this.vdefy += this.vy;

    // for (var i = 0; i < this.bs.length; i++) {
    //   var bmp = this.bs[i];
    //   bmp.updateCache();
    // }
    


    // if (this.x < this.left - this.w) {
    // if (this.x > this.right) {
    //   this.x = this.left;
    // }

  }
　
  draw() {

    this.container.x = this.x + this.vdefx;
    this.container.y = this.y + this.vdefy;

    if (this.container.x > -this.basex + gb.r.w + 100) {
      $(window).trigger('overRight');
      this.offU();
      this.container.alpha = 0;
    }

  }

  show(isTrans) {

    var n = 4;
    var dur = 1.0;
    if (isTrans) {
      n = 3;
      dur = .5;
    }

    var tl = new TimelineMax({delay:Math.floor(Math.random() * n) / 10});


    tl
      .add(()=>{

        this.vdefx = 0;
        this.vdefy = 0;
        this.container.x = this.basex;
        this.container.y = this.basey;
        this.x = this.basex;
        this.y = this.basey;
        this.vx = .5;
        this.vy = -.3;
        this.container.alpha = 1;

        this.onU();

      }, 0.0)
      .to(this, .5, {
        // x: -this.basex + gb.r.w / 2 - (this.w * this.copyNum / 2) + (Math.floor(Math.random() * 7) - 5) * 30,
        x: -this.basex + gb.r.w / 2 - (this.w * this.copyNum / 2) + 0,
        y: '+=' + - 50,
        ease: Power4.easeOut,
      })
      .to(this, .5, {
        vx: 100,
        ease: Expo.easeInOut,
      }, dur)



      // blur
      // this.b = 20;
      // TweenMax.to(this, 1.0, {
      //     b: 0,
      //     ease: Expo.easeOut,
      //     onUpdate: ()=>{

      //       var blurFilter = new createjs.BlurFilter(this.b, 0, 1);
      //       for (var i = 0; i < this.copyNum; i++) {

      //         var bmp = this.bs[i];
      //         bmp.filters = [blurFilter];
      //         // bmp.cache(0, 0, this.img.width * 1, this.img.height * 1);
      //         // bmp.cache(0, 0, gb.r.w, this.img.height);

      //       }

      //       bmp.updateCache();

      //     }
      // })


  }

  hide() {

  }

  setEvents() {

    super.setEvents();

  }

}