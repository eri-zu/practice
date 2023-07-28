//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIController extends Base {

  constructor($target, index, len, pre=false) {

    super();

    this.$target = $target;
    this.index = index;
    this.len = len;
    this.pre = pre;

    this.isREv = true;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isFirst = true;

    // this.dur = 0.2;
    // this.dur = 0.4;
    this.dur = 1.2;
    this.cnt = 0;

    this.base = 1700;
    this.rate = 1;
    this.sa = 2;
    this.saPre = 2;
    this.lastIndex = 1;
    this.lastIndexPre = 3;
    this.left = -120 - (100 * this.sa) * this.index;
    this.leftPre = -800 + 25 - (100 * this.saPre) * this.index;
    // this.left = -120 + 200 * this.index;
    this.leftEnd = -120 - (100 * (this.sa)) * this.lastIndex;
    this.leftEndPre = 0 + 25 - (100 * (this.saPre)) * this.lastIndexPre;

    if (gb.r.w>=1700) {
      this.rate = gb.r.w / this.base;
      this.left *= this.rate;
      this.leftEnd *= this.rate;
      this.leftPre *= this.rate;
    }
    if (gb.r.w<=768) {
      this.left -= 470;
      this.leftEnd -= 470;
    }

    TweenMax.set(this.$target, {x: this.left});
    TweenMax.set(this.$target, {'transform-origin': '50% 90%'});
    if (this.pre) {
      TweenMax.set(this.$target, {x: this.leftPre});
      TweenMax.set(this.$target.find('img'), {'transform-origin': '50% 90%',scale: 0.0});
    }

    this.timeline();

  }

  update() {

  }

  timeline() {

    // var tl = new TimelineMax({delay: (this.dur * 1) * this.index});
    var tl = new TimelineMax({delay: 0});

    tl
      .add(()=>{

        if (this.pre) {

          this.lane2_moveX();

        } else {

          this.lane1_moveX();

        }

      }, 0.0)

  }

  lane1_moveX() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        x: '+=' + 100 * this.rate,
        // ease: Elastic.easeOut.config(1, 0.7),
        ease: Elastic.easeOut.config(1, 1.0),
        onStart: ()=>{

          if (this.isFirst) var cnt = 10 + this.index * this.sa;
          else var cnt = 10 + this.lastIndex * this.sa;

          if (this.cnt==cnt-3) {

            TweenMax
              .to(this.$target, this.dur * 0.2, {
                scale: 0,
                ease: Back.easeIn,
              });

          }

        },
        onComplete: ()=>{

          this.cnt++;
          
          if (this.isFirst) var cnt = 10 + this.index * this.sa;
          else var cnt = 10 + this.lastIndex * this.sa;

          // if (this.cnt==13) {
          if (this.cnt==cnt-2) {
            this.cnt = 0;
            this.isFirst = false;

            TweenMax
              .to(this.$target, this.dur, {
                x: '+=' + 100 * this.rate,
                ease: Elastic.easeOut.config(1, 1.0),
              });

            TweenMax.set(this.$target, {x: this.leftEnd, y: 0, scale: 1});

            this.lane1_moveX();

            return;
          }

          this.lane1_moveX();


        }
      })

  }

  lane2_moveX() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        x: '+=' + 100 * this.rate,
        // ease: Elastic.easeOut.config(1, 0.7),
        ease: Elastic.easeOut.config(1, 1.0),
        onStart: ()=>{

          if (this.isFirst) var cnt = 8 + this.index * this.saPre;
          else var cnt = 0 + this.lastIndexPre * this.saPre;

          if (this.cnt==cnt) {

            TweenMax
              .to(this.$target.find('img'), this.dur * 0.6, {
                scale: 1,
                ease: Elastic.easeOut.config(0.8, 0.8),
              });

          }

        },
        onComplete: ()=>{

          this.cnt++;
          
          if (this.isFirst) var cnt = 18 + this.index * this.saPre;
          else var cnt = 10 + this.lastIndexPre * this.saPre;

          if (this.cnt==cnt) {
            this.cnt = 0;
            this.isFirst = false;

            TweenMax.set(this.$target, {x: this.leftEndPre * this.rate, y: 0,});
            TweenMax.set(this.$target.find('img'), {scale: 0.0});

            this.lane2_moveX();

            return;
          }

          this.lane2_moveX();


        }
      })

  }

  onResize() {  

    if (this.tl) this.tl.kill();
    TweenMax.killTweensOf(this.$target);
    TweenMax.killTweensOf(this.$target.find('img'));

    this.setup();

  }


  setEvents() {

    super.setEvents();

  }

}