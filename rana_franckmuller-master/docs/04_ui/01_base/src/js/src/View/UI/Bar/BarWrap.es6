//--------------------------------------------------
//
//  Bar
//
//--------------------------------------------------

export default class Bar {

  constructor($wrap, index) {

    this.index = index;

    this.$barWrap01 = $wrap.find('.barWrap01');
    this.$barWrap02 = $wrap.find('.barWrap02');
    this.$barWrap03 = $wrap.find('.barWrap03');
    this.$barWrap04 = $wrap.find('.barWrap04');

    this.barList = [];
    this.barList.push(this.$barWrap01,this.$barWrap02,this.$barWrap03,this.$barWrap04);

    this.setup();
    this.setEvents();

    // this.timeline();

  }

  setup() {

    // color def
    // var colors = [
    //   'hsla(0, 0%, 91%, 1)',
    //   'hsla(0, 0%, 100%, 1)',
    //   'hsla(51, 100%, 50%, 1)',
    //   'hsla(66, 100%, 31%, 1)',
    //   'hsla(147, 100%, 29%, 1)',
    // ];

    // // color white
    // var colors = [
    //   'hsla(0, 0%, 100%, 1)',
    //   'hsla(0, 0%, 100%, 1)',
    //   'hsla(0, 0%, 100%, 1)',
    //   'hsla(0, 0%, 100%, 1)',
    // ];

    switch (this.index){
      case 1:
        // color 01
        // var colors = [
        //   '#8ce6ec',
        //   '#deaecb',
        //   '#cf9dd4',
        //   '#ffffff',
        // ];
        var colors = [
          '#000',
          '#000',
          // '#000',
          // '#000',
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0)',
        ];
        break;
      case 2:
        // color 02
        var colors = [
          '#49ae90',
          '#ddf18c',
          '#7fbadb',
          '#ffffff',
        ];
        break;
      case 3:
        // color 03
        var colors = [
          '#86e169',
          '#8fd6ad',
          '#c0c6d0',
          '#ffffff',
        ];
        break;
      case 4:
        // color 04
        var colors = [
          '#ca9feb',
          '#edebb8',
          '#fb8465',
          '#ffffff',
        ];
        break;
      case 5:
        // color 05
        var colors = [
          '#e3ada7',
          '#f35fb3',
          '#9ca4e3',
          '#ffffff',
        ];
        break;
    }

    for (var i = 0; i < this.barList.length; i++) {

      var $bar = this.barList[i].find('.bar');

      var index = Math.floor(Math.random() * colors.length);
      $bar.css('background', colors[index]);
      colors.splice(index, 1);

    }

  }

  reset() {


  }

  show(){

    var delays = [0.0, 0.05, 0.2];

    this.show01(this.getVal(delays));
    this.show02(this.getVal(delays));
    this.show03(0.22);
    this.show04(this.getVal(delays));

  }

  getVal(delays) {

    var v = gb.u.a.arrRand(delays);

    // 削除
    var id = delays.indexOf(v);
    if(id >= 0) delays.splice(id, 1); 

    return v;

  }

  // up
  show01 (delay) {

    this.w01 = this.$barWrap01.width();
    this.h01 = this.$barWrap02.height();

    // 左右どちらか
    var dir = (Math.random()>0.5) ? 1: -1;
    if (dir>0) {
      var right = 'auto';
      var left = 0;
    } else {
      var right = 0;
      var left = 'auto';
    }

    var statex = 80 * dir;
    var x1 = -80 * dir + 50 * (Math.random() - 0.5);
    var w = (120 + 50 * Math.random()) + '%';
    var x2 = (this.w01 + this.w01 * 0.4) * dir;

    // state ずっと動く
    // barWrap
    var tl01 = new TimelineMax({delay: 0});
    tl01
      .to(this.$barWrap01, 1.5 + Math.random(), {
        x: statex,
        ease: Power0.easeNone,
      })

    // bar出て、消える
    var tl02 = new TimelineMax({delay: delay});
    tl02
      .set(this.$barWrap01.find('.bar'), {
        x: x1,
        width: '0%',
        right: right,
        left: left,
      })
      .to(this.$barWrap01.find('.bar'), 0.2, {
        width: w,
        ease: Expo.easeOut,
      })
      .to(this.$barWrap01.find('.bar'), 0.4, {
        x: x2,
        width: '0%',
        ease: Expo.easeInOut,
      }, 0.4)
    
  }

  // right
  show02 (delay) {

    this.w01 = this.$barWrap01.width();
    this.h01 = this.$barWrap02.height();

    // 上下どちらか
    var dir = (Math.random()>0.5) ? 1: -1;
    // var dir = -1;
    if (dir>0) {
      var top = 0;
      var bottom = 'auto';
    } else {
      var top = 'auto';
      var bottom = 0;
    }

    var statey = 80 * dir;
    var y1 = -80 * dir + 50 * (Math.random() - 0.5);
    var h = (120 + 50 * Math.random()) + '%';
    var y2 = (this.h01 + this.h01 * 0.4) * dir;

    // state ずっと動く
    // barWrap
    var tl01 = new TimelineMax({delay: 0});
    tl01
      .to(this.$barWrap02, 1.5 + Math.random(), {
        y: statey,
        ease: Power0.easeNone,
      })

    // bar
    var tl02 = new TimelineMax({delay: delay});
    tl02
      .set(this.$barWrap02.find('.bar'), {
        y: y1,
        height: '0%',
        top: top,
        bottom: bottom,
      })
      .to(this.$barWrap02.find('.bar'), 0.2, {
        height: h,
        ease: Expo.easeOut,
      })
      .to(this.$barWrap02.find('.bar'), 0.4, {
        y: y2,
        height: '0%',
        ease: Expo.easeInOut,
      }, 0.4)
    
  }

  // bottom
  show03 (delay) {

    this.w01 = this.$barWrap01.width();
    this.h01 = this.$barWrap02.height();

    // 左右どちらか
    // var dir = (Math.random()>0.5) ? 1: -1;
    var dir = -1;
    if (dir>0) {
      var right = 0;
      var left = 'auto';
    } else {
      var right = 'auto';
      var left = 0;
    }

    var statex = -80 * dir;
    var x1 = 80 * dir + 20 * (Math.random() - 0.5);
    var w = (120 + 50 * Math.random()) + '%';
    var x2 = - (this.w01 + this.w01 * 0.4) * dir;

    // state ずっと動く
    // barWrap
    var tl01 = new TimelineMax({delay: 0});
    tl01
      .to(this.$barWrap03, 1.5 + Math.random(), {
        x: statex,
        ease: Power0.easeNone,
      })

    // bar
    var tl02 = new TimelineMax({delay: delay});
    tl02
      .set(this.$barWrap03.find('.bar'), {
        x: x1,
        width: '0%',
        right: right,
        left: left,
      })
      .to(this.$barWrap03.find('.bar'), 0.2, {
        width: w,
        ease: Expo.easeOut,
      })
      .to(this.$barWrap03.find('.bar'), 0.4, {
        x: x2,
        width: '0%',
        ease: Expo.easeInOut,
      }, 0.4)
    
  }

  // left
  show04 (delay) {

    this.w01 = this.$barWrap01.width();
    this.h01 = this.$barWrap02.height();

    // 上下どちらか
    var dir = (Math.random()>0.5) ? 1: -1;
    // var dir = -1;
    if (dir>0) {
      var top = 'auto';
      var bottom = 0;      
    } else {
      var top = 0;
      var bottom = 'auto';
    }

    var statey = -80 * dir;
    var y1 = 80 * dir + 50 * (Math.random() - 0.5);
    var h = (120 + 50 * Math.random()) + '%';
    var y2 = - (this.h01 + this.h01 * 0.4) * dir;

    // state ずっと動く
    // barWrap
    var tl01 = new TimelineMax({delay: 0});
    tl01
      .to(this.$barWrap04, 1.5 + Math.random(), {
        y: statey,
        ease: Power0.easeNone,
      })

    // bar
    var tl02 = new TimelineMax({delay: delay});
    tl02
      .set(this.$barWrap04.find('.bar'), {
        y: y1,
        height: '0%',
        top: top,
        bottom: bottom,
      })
      .to(this.$barWrap04.find('.bar'), 0.2, {
        height: h,
        ease: Expo.easeOut,
      })
      .to(this.$barWrap04.find('.bar'), 0.4, {
        y: y2,
        height: '0%',
        ease: Expo.easeInOut,
      }, 0.4)
    
  }

  hide () {

    
  }

  timeline() {

    // this.show();

  }

  setEvents() {

  


  }

}