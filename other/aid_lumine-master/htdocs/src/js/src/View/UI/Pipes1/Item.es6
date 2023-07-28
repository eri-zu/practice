//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIController extends Base {

  constructor($target, index, len, front=false) {

    super();

    this.$target = $target;
    this.index = index;
    this.len = len;
    this.front = front;

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
    this.sa = 3;
    this.lastIndex = 6;
    this.left = -400 - (100 * this.sa) * this.index;
    // this.left = -400 + 200 * this.index;
    this.leftEnd = -400 - (100 * (this.sa)) * this.lastIndex;

    if (gb.r.w>=1700) {
      this.rate = gb.r.w / this.base;
      this.left *= this.rate;
      this.leftEnd *= this.rate;
    }

    TweenMax.set(this.$target, {scale: 0.9});
    TweenMax.set(this.$target, {x: this.left,y: 0});
    TweenMax.set(this.$target, {'z-index': this.len - this.index});
    if (this.front) TweenMax.set(this.$target, {'z-index': '+=' + 200});

    this.timeline();

  }

  update() {

  }

  timeline() {

    // var tl = new TimelineMax({delay: (this.dur * 1) * this.index});

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax({delay: 0});

    this.tl
      .add(()=>{

        if (this.front) {

          TweenMax.set(this.$target, {y: -70 * this.rate, x: (-400 - (80 * this.sa) * this.index) * this.rate});
          this.lane3_moveX1();  

        } else {

          this.lane1_moveX();

        }

      }, 0.0)

  }

  lane1_moveX() {

    TweenMax.set(this.$target, {'z-index': this.len - this.index});

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      // .to(this.$target, this.dur * 0.2, {
      //   x: '-=' + 5,
      //   ease: Power2.easeInOut,
      // }, 0.0)
      // .to(this.$target, this.dur * 0.8, {
      //   x: '+=' + 105,
      //   // ease: Elastic.easeOut.config(1, 0.7),
      //   ease: Elastic.easeOut.config(1, 1.0),
      //   onComplete: ()=>{

      //     this.cnt++;
          
      //     if (this.isFirst) var cnt = 13 + this.index * this.sa;
      //     else var cnt = 13 + this.lastIndex * this.sa;

      //     // if (this.cnt==13) {
      //     if (this.cnt==cnt) {
      //       this.lane1_moveFront();
      //       this.cnt = 0;
      //       return;
      //     }

      //     this.lane1_moveX();


      //   }
      // }, this.dur * 0.2)

      .to(this.$target, this.dur, {
        x: '+=' + 100 * this.rate,
        // ease: Elastic.easeOut.config(1, 0.7),
        ease: Elastic.easeOut.config(1, 1.0),
        onComplete: ()=>{

          this.cnt++;
          
          if (this.isFirst) var cnt = 13 + this.index * this.sa;
          else var cnt = 13 + this.lastIndex * this.sa;

          // if (this.cnt==13) {
          if (this.cnt==cnt) {
            this.lane1_moveFront();
            this.cnt = 0;
            return;
          }

          this.lane1_moveX();


        }
      })

  }

  lane1_moveFront() {

    if (this.index>=0) {
      TweenMax.set(this.$target, {'z-index': '+=' + 10});
    }

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        scale: '+=' + 0.01 * this.rate,
        x: '+=' + 3 * this.rate,
        y: '+=' + 7 * this.rate,
        ease: Elastic.easeOut.config(1, 0.5),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==9) {
            this.cnt = 0;
            this.lane1_moveXEnd();
            return;
          }

          // lane2へ
          if (this.cnt==1) {
            // 50%の確率でlane2へ
            if (Math.random()<0.5) {
              this.cnt = 0;
              this.lane2_moveX();
              return;
            }
          }

          this.lane1_moveFront();

        }
      })

  }

  lane1_moveXEnd() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        x: '+=' + 100 * this.rate,
        ease: Elastic.easeOut.config(1, 1.0),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==9) {
            this.cnt = 0;
            this.isFirst = false;

            TweenMax.set(this.$target, {x: this.leftEnd, y: 0,scale: .9});

            this.lane1_moveX();
            return;
          }

          this.lane1_moveXEnd();


        }
      })

  }

  lane2_moveX() {

    TweenMax.set(this.$target, {'z-index': '-=' + 50});

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        scale: '+=' + -0.01 * this.rate,
        x: '+=' + 30 * this.rate,
        y: '+=' + - 0.05 * this.rate,
        // rotationY: '+=' + 2.0 * this.rate,
        ease: Elastic.easeOut.config(1, 1.0),
        onComplete: ()=>{

          this.cnt++;
          
          if (this.cnt==7) {
            this.cnt = 0;
            this.lane2_curve();
            return;
          }

          this.lane2_moveX();


        }
      })

  }

  lane2_curve() {

    TweenMax.set(this.$target, {'z-index': '-=' + 50});

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        scale: '+=' + -0.02 * this.rate,
        x: '+=' + 30 * this.rate,
        y: '+=' + -1 * this.rate,
        ease: Elastic.easeOut.config(1, 1.0),
        onStart: ()=>{

          if (this.cnt==0) {

            TweenMax.to(this.$target, this.dur, {
              // rotationY: 30,
              ease: Expo.easeOut,
            })
            
          }

        },
        onComplete: ()=>{

          this.cnt++;
          
          if (this.cnt==4) {
            this.cnt = 0;
            this.lane2_moveXEnd();
            return;
          }

          this.lane2_curve();


        }
      })

  }

  lane2_moveXEnd() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        x: '+=' + 100 * this.rate,
        ease: Elastic.easeOut.config(1, 1.0),
        onStart: ()=>{

          if (this.cnt==0) {

            TweenMax.to(this.$target, this.dur, {
              // rotationY: 0,
              ease: Expo.easeOut,
            })
            
          }

        },
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==6) {
            this.cnt = 0;
            this.isFirst = false;

            TweenMax.set(this.$target, {x: this.leftEnd, y: 0,scale: .9});

            this.lane1_moveX();
            return;
          }

          this.lane2_moveXEnd();


        }
      })

  }

  lane3_moveX1() {

    TweenMax.set(this.$target, {'z-index': this.len - this.index});

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        x: '+=' + 80 * this.rate,
        ease: Elastic.easeOut.config(1, 1.0),
        onComplete: ()=>{

          if (this.isFirst) var cnt = 4 + this.index * this.sa;
          else var cnt = 4 + 3 * this.sa;

          this.cnt++;
          if (this.cnt==cnt) {
            this.cnt = 0;
            this.lane3_moveFront();
            return;
          }

          this.lane3_moveX1();


        }
      })


      // .to(this.$target, this.dur * 0.2, {
      //   x: '-=' + 5,
      //   ease: Power2.easeInOut,
      // }, 0.0)
      // .to(this.$target, this.dur * 0.8, {
      //   x: '+=' + 85,
      //   // ease: Elastic.easeOut.config(1, 0.7),
      //   ease: Elastic.easeOut.config(1, 1.0),
      //   onComplete: ()=>{

      //     this.cnt++;
      //     if (this.cnt==4 + this.index * this.sa) {
      //       this.cnt = 0;
      //       this.lane3_moveFront();
      //       return;
      //     }

      //     this.lane3_moveX1();


      //   }
      // }, this.dur * 0.2)

  }

  lane3_moveFront() {

    if (this.index>=0) {
      TweenMax.set(this.$target, {'z-index': '+=' + 20});
    }

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        scale: '+=' + 0.01 * this.rate,
        x: '+=' + -5 * this.rate,
        y: '+=' + 3 * this.rate,
        ease: Elastic.easeOut.config(1, 0.5),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==6) {
            this.cnt = 0;
            this.lane3_moveDown();
            return;
          }

          this.lane3_moveFront();

        }
      })

  }

  lane3_moveDown() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        scale: '+=' + 0.01 * this.rate,
        x: '+=' + -6 * this.rate,
        y: '+=' + 30 * this.rate,
        ease: Elastic.easeOut.config(1, 0.5),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==3) {
            this.cnt = 0;
            this.lane3_moveFront2();
            return;
          }

          this.lane3_moveDown();

        }
      })

  }

  lane3_moveFront2() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        scale: '+=' + 0.01 * this.rate,
        x: '+=' + -5 * this.rate,
        y: '+=' + 10 * this.rate,
        ease: Elastic.easeOut.config(1, 0.5),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==3) {
            this.cnt = 0;
            this.lane3_moveX2();
            return;
          }

          this.lane3_moveFront2();

        }
      })

  }

  lane3_moveX2() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        x: '+=' + 93 * this.rate,
        ease: Elastic.easeOut.config(1, 1.0),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==9) {
            this.cnt = 0;
            this.lane3_moveFront3();
            return;
          }

          this.lane3_moveX2();


        }
      })

  }

  lane3_moveFront3() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        scale: '+=' + 0.01 * this.rate,
        y: '+=' + 10 * this.rate,
        ease: Elastic.easeOut.config(1, 0.5),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==3) {
            this.cnt = 0;
            this.lane3_moveX3();
            return;
          }

          this.lane3_moveFront3();

        }
      })

  }

  lane3_moveX3() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        x: '+=' + 93 * this.rate,
        ease: Elastic.easeOut.config(1, 1.0),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==8) {
            this.cnt = 0;
            this.lane3_moveFront4();
            return;
          }

          this.lane3_moveX3();


        }
      })

  }

  lane3_moveFront4() {

    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl
      .to(this.$target, this.dur, {
        scale: '+=' + 0.01 * this.rate,
        x: '+=' + 35 * this.rate,
        y: '+=' + 30 * this.rate,
        ease: Elastic.easeOut.config(1, 0.5),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==5) {
            this.cnt = 0;
            this.isFirst = false;

            // 50%の確率でlane2へ
            // if (Math.random()<0.5) {

            //   TweenMax.set(this.$target, {x: this.leftEnd, y: 0,scale: .9});
            //   this.lane1_moveX();

            // } else {

              TweenMax.set(this.$target, {x: (-400 - (80 * this.sa) * 3) * this.rate, y: 0,scale: .9});            
              TweenMax.set(this.$target, {y: -70 * this.rate});
              this.lane3_moveX1();
            // }
            
            return;
          }

          this.lane3_moveFront4();

        }
      })

  }

  onResize() {  

    if (this.tl) this.tl.kill();
    TweenMax.killTweensOf(this.$target);

    this.setup();

  }

  setEvents() {

    super.setEvents();

  }

}