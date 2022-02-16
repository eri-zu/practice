import { TimelineMax, Power0, TweenMax, Back, Elastic, Bounce, Linear, Power3 } from 'gsap/all';
// import { Howl, Howler } from 'howler';
// import { TweenMax } from 'gsap/all';
// import 'gsap/PixiPlugin';
// import 'gsap/ScrollToPlugin';
// import 'gsap/TextPlugin';
// import * as PIXI from 'pixi.js';
// import 'waypoints/lib/jquery.waypoints';
import imagesLoaded from 'imagesloaded';
// import 'slick-carousel';

import { SceneController, SceneContent } from './modules/scene';
import getQueries from './modules/getQueries';

imagesLoaded.makeJQueryPlugin($);
// import { ModalController, ModalContent } from './modules/modal';

let app;


const isDev = getQueries('dev') !== false;
class Timer {
  constructor(n) {
    this.$timer = $('#timer');
    this.$img = $('#timer .n img');
    this.$colon = $('#timer .colon');
    this.$extend = $('#timer .extend');
    this.obj = { d: n, n };

    // this.colonBlink = new TimelineMax({
    //   repeat: -1,
    // })
    //   .to({}, 0.8, {})
    //   .set(this.$colon, { autoAlpha: 0 })
    //   .to({}, 0.2, {})
    //   .set(this.$colon, { autoAlpha: 1 });

    this.tl = new TimelineMax({
      paused: true,
      onUpdate: () => {
        console.log(this.obj.n);

        this.set(this.obj.n);
      },
      onComplete: () => {
        this.isCounting = false;
        app.game.timeup();
      },
    })
      // .add(this.colonBlink)
      .to(this.obj, this.obj.d, { n: 0, ease: Power0.easeNone });

    // this.extendTl = new TimelineMax({
    //   paused: true,
    // })
    //   .set(this.$extend, { autoAlpha: 1 })
    //   .fromTo(
    //     this.$extend, 0.5,
    //     { y: 10 },
    //     { y: -10, ease: SlowMo.ease.config(0.7, 0.7, false) },
    //     0,
    //   )
    //   .set(this.$extend, { autoAlpha: 0 });
    this.set(n);
  }
  set(time) {
    let n = Math.floor(time * 100);
    n = (`000${String(n)}`).slice(-4);
    const array = n.split('');
    $.each(array, (i, t) => {
      const num = Number(t);
      TweenMax.set(this.$img.eq(i), { xPercent: -10 * num });
    });
  }
  start() {
    this.isCounting = true;
    this.tl.play(0);
  }
  pause() {
    this.tl.pause();
  }
  resume() {
    this.tl.play();
  }
  extend(n) {
    // console.log(this.tl.time());
    if (this.isCounting) {
      this.tl.seek(Math.max(this.tl.time() - n, 0));
    }
    // this.extendTl.play(0);
  }
}

class Texts {
  constructor() {
    this.$go = $('#texts .go');
    this.$good = $('#texts .good');
    this.$miss = $('#texts .miss');
    this.$speedup = $('#texts .speedup');
    this.$timeup = $('#timeup');
    this.tl = {};
    this.tl.go = new TimelineMax({
      paused: true,
      // repeat: -1,
    })
      .add('go')
      .fromTo(
        this.$go, 0.01,
        { scale: 0, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, ease: Back.easeOut },
      )
      .to({}, 0.5, {})
      .to(this.$go, 0.3, { scale: 0, autoAlpha: 0, ease: Back.easeIn });
    // .addPause()

    this.tl.good = new TimelineMax({
      paused: true,
      // repeat: -1,
    })
      // .add('good')
      .fromTo(
        this.$good, 0.3,
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: Back.easeOut },
      )
      .to({}, 0.3, {})
      .to(this.$good, 0.3, { y: -30, autoAlpha: 0, ease: Back.easeOut });
    // .addPause()

    this.tl.miss = new TimelineMax({
      paused: true,
      // repeat: -1,
    })
      // .add('miss')
      .fromTo(
        this.$miss, 0.3,
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, ease: Back.easeOut },
      )
      .to({}, 0.3, {})
      .to(this.$miss, 0.3, { y: 30, autoAlpha: 0, ease: Back.easeOut });
    // .addPause()

    this.tl.speedup = new TimelineMax({
      paused: true,
      // repeat: -1,
    })
      // .add('speedup')
      .fromTo(
        this.$speedup, 0.3,
        { x: $(window).width() },
        { x: 0, ease: Back.easeOut },
      )
      .to({}, 0.3, {})
      .to(this.$speedup, 0.3, { x: -$(window).width(), ease: Back.easeOut });
    // .addPause();

    this.tl.timeup = new TimelineMax({ paused: true })
      .set(this.$timeup, { autoAlpha: 1 })
      .fromTo(
        this.$timeup, 0.3,
        { yPercent: -100 },
        { yPercent: 0, ease: Bounce.easeOut },
      )
      .to({}, 2, {})
      .fromTo(this.$timeup, 0.5, { autoAlpha: 1 }, { autoAlpha: 0, ease: Power0.easeNone });
    // .addPause();

    $.each(this.tl, (i, tl) => {
      tl.progress(1);
    });
  }
  show(label) {
    console.log(label);
    if (label === 'timeup') {
      this.tl[label].play(0);
      app.sounds.stop('bgm');
      app.sounds.play('timeup');
    } else {
      this.tl[label].play(0);
    }
    // console.log(label);
  }
}

class Top extends SceneContent {
  constructor(id, scene) {
    super(id, scene);
    console.log(id);
    this.$content.find('.btnPlay').on({
      click: () => {
        app.scene.change('game');
      },
    });
    // $('body').on('click', () => {
    //   $('.modal').toggleClass('active');
    // });
    this.tl = new TimelineMax({
      paused: true,
    })
      .from('#top .shoulder_title', 0.5, { y: 30, autoAlpha: 0, ease: Back.easeOut })
      .from('#top .title', 0.5, { y: 30, autoAlpha: 0, ease: Back.easeOut }, '-=0.4')
      .from('#top .sub_title', 0.5, { y: 30, autoAlpha: 0, ease: Back.easeOut }, '-=0.4')
      .from('#top .craftman', 0.5, { xPercent: -100, autoAlpha: 0, ease: Power3.easeOut })
      .staggerFrom('#top .lead g', 0.5, { x: 100, autoAlpha: 0, ease: Power3.easeOut }, 0.15, '-=0.4')
      .from('#top .btn_play', 0.5, { xPercent: 55, y: 196, ease: Back.easeOut }, '-=0.2');
  }
  beforeShowFn() {
    this.tl.seek(0).pause();
    this.showTransition();
  }
  afterShowFn() {
    $('#top').imagesLoaded(() => {
      this.tl.play();
    });
  }
}
class ModalHowto {
  constructor() {
    this.$container = $('.modal.howto');
    this.num1 = this.$container.find('.num1');
    this.num2 = this.$container.find('.num2');
    this.num3 = this.$container.find('.num3');
    this.tl = new TimelineMax({ paused: true })
      .to({}, 0.5, {})
      .add(() => {
        app.sounds.play('countdown');
      })
      .set(this.num3, { autoAlpha: 1 })
      .set(this.num3, { autoAlpha: 0, delay: 1 })
      .set(this.num2, { autoAlpha: 1 })
      .set(this.num2, { autoAlpha: 0, delay: 1 })
      .set(this.num1, { autoAlpha: 1 })
      .set(this.num1, { autoAlpha: 0, delay: 1 });
  }
  show() {
    this.$container.addClass('active');
    TweenMax.set(this.$container, { autoAlpha: 1 });
  }
  hide() {
    this.$container.removeClass('active');
    TweenMax.to(this.$container, 0.3, { autoAlpha: 0 });
  }
  countdown(callback) {
    this.tl.eventCallback('onComplete', callback);
    this.tl.play(0);
  }
}

class ModalQuit {
  constructor() {
    this.$container = $('.modal.quit');
    $('.btn_backto_tap').on({
      click: () => {
        this.show();
        return false;
      },
    });

    // this.$container.find('.btn_quit').on({
    //   click: () => {
    //     window.location.href = '../';
    //   },
    // });

    this.$container.find('.btn_cancel_quit').on({
      click: () => {
        this.hide();
        if (app.scene.current === 'game') {
          app.game.resume();
        }
      },
    });
  }
  show() {
    this.$container.addClass('active');
    TweenMax.set(this.$container, { autoAlpha: 1 });
  }
  hide() {
    this.$container.removeClass('active');
    TweenMax.to(this.$container, 0.3, { autoAlpha: 0 });
  }
  countdown(callback) {
    this.tl.eventCallback('onComplete', callback);
    this.tl.play(0);
  }
}

class Cask {
  constructor(type) {
    this.type = type;
    this.$container = $('<div class="cask"><div class="item"></div></div>');
    this.$container.addClass(`type${type}`);
    this.test = true;
    this.caskW = Cask.getCaskWidth();
    this.movableWidth = window.innerWidth + this.caskW;
    this.isActive = false;
    this.isClear = false;
    this.tl = new TimelineMax({
      paused: true,
    })
      .to(this.$container, this.movableWidth, {
        x: -this.movableWidth,
        ease: Linear.easeNone,
        onComplete: () => {
          this.remove();
        },
      });
    $('#casks').append(this.$container);
  }
  setDisable() {
    this.isActive = false;
    this.$container.removeClass('active');
  }
  setActive() {
    this.isActive = true;
    this.$container.addClass('active');
  }
  setClear() {
    this.isClear = true;
    this.$container.addClass('clear');
  }
  move() {
    this.tl.play();
  }
  remove() {
    this.$container.remove();
  }
  static getCaskWidth() {
    const caskwidth = 262 / 2; // 375換算
    const ratio = window.innerWidth / 375;
    return caskwidth * ratio;
  }
}

// class Stage {
//   constructor() {
//     this.caskW = Cask.getCaskWidth();
//     this.movableWidth = window.innerWidth + this.caskW;
//     this.casks = [];
//     this.duration = 5; // 表示開始から隠れるまでの時間
//     this.interval = 131 + 113; // 375換算のpx数（cask幅の131以上）
//     // this.interval = 375; // 375換算のpx数（cask幅の131以上）
//     this.time = 0;
//     this.activeIndex = -1; // 1回目0にする為に-1からスタート
//     this.maxSpeed = 0.5;
//     this.incrementRatio = 0.9;
//     this.conveyorTl = new TimelineMax({
//       paused: true,
//     })
//       .to('#conveyor', 267, { x: -267, repeat: -1, ease: Linear.easeNone });
//   }
//   init() {

//   }
//   start() {
//     this.setDistance();
//     this.move();
//     setTimeout(() => {
//       this.stop();
//     }, 2000);
//   }
//   interruption() {
//     // 今はつかわない
//     // this.setDistance(this.conveyorTl.time());
//     // this.move();
//   }
//   addCask() {
//     const rand = Math.floor(Math.random() * 10) + 1;
//     this.casks.push(new Cask(rand));
//     // console.log(this.casks);
//   }
//   setDistance() {
//     this.speed = (this.interval / this.movableWidth) * this.duration;
//     this.time += this.interval;
//     this.addCask();

//     // activeになる開始地点（caskが見えきった時）
//     this.activePosition = (this.caskW / this.movableWidth) * this.duration;
//     this.activeTl = new TimelineMax()
//       .to({}, this.activePosition, {})
//       .add(() => {
//         this.activeIndex += 1;
//         this.changeActive();
//       });
//     // setTimeout(() => {
//     //   this.activeIndex += 1;
//     //   this.changeActive();
//     // }, this.activePosition * 1000);
//   }
//   changeActive() {
//     $.each(this.casks, (i, el) => {
//       el.setDisable();
//     });
//     this.casks[this.activeIndex].setActive();
//     this.setChoices();
//   }
//   shuffle(arr) {
//     const newArr = [];
//     for (let i = 0, len = arr.length; i < len; i += 1) {
//       newArr.push(arr.splice(Math.random() * arr.length || 0, 1)[0]);
//     }
//     return newArr;
//   }

//   setChoices() {
//     const answer = this.casks[this.activeIndex].type - 1;
//     // console.log(this.activeIndex, this.casks[this.activeIndex]);

//     let nums = [...Array(10).keys()];
//     nums = nums.filter(n => n !== answer);
//     nums = this.shuffle(nums);
//     nums = nums.slice(0, 4);
//     nums.splice(0, 0, answer);
//     nums = this.shuffle(nums);
//     const choices = [];
//     $.each(nums, (i, el) => {
//       const $choice = $(`<div class="part pos${i + 1} part${el + 1}" data-part="${el + 1}"/>`);
//       if (answer === el) {
//         $choice.css({
//           backgroundColor: 'rgba(blue, 0.5)',
//         });
//       }
//       $choice.one({
//         touchstart: () => {
//           // console.log(this.casks[this.activeIndex]);
//           const isCorrect = answer === el;
//           this.throw($choice, isCorrect);
//         },
//       });
//       choices.push($choice);
//     });
//     $('#choices').html(choices);
//     // console.log(nums, answer);
//   }
//   throw($choice, isCorrect) {
//     // console.log(this.casks, this.activeIndex);
//     // console.log(this.casks[this.activeIndex]);

//     const cask = this.casks[this.activeIndex];
//     const progress = cask.tl.progress();
//     const left = parseInt($choice.css('left'), 10);
//     // console.log(left);

//     const posX = cask.movableWidth * progress;

//     TweenMax.to($choice, 0.2, {
//       x: -posX + window.innerWidth - left,
//       y: -220,
//       scale: 1,
//       ease: Power2.easeIn,
//       onComplete: () => {
//         if (isCorrect) {
//           cask.setClear();
//           $choice.remove();
//           // app.game.text.show('good');
//         } else {
//           TweenMax.to($choice, 0.5, {
//             x: 0,
//             y: -600,
//             rotation: 900,
//             // scale: 1,
//             ease: Power2.Linear,
//           });
//           // app.game.text.show('miss');
//         }
//       },
//     });
//     // this.casks[this.activeIndex]
//   }
//   move() {
//     this.conveyorTween = this.conveyorTl.tweenTo(this.time, {
//       onComplete: () => {
//         // this.addCask();
//         // this.duration *= 0.9;
//         // console.log(this.duration);
//         // this.duration = Math.max(this.duration, 0.5);
//         this.setDistance();
//         this.move();
//       },
//     }).duration(this.speed);
//     $.each(this.casks, (i, cask) => {
//       const currentTime = cask.tl.time();
//       // console.log(du);
//       cask.tween = cask.tl.tweenTo(currentTime + this.interval).duration(this.speed);
//     });
//   }
//   stop() {
//     console.log('stop');
//     this.conveyorTween.pause();
//     $.each(this.casks, (i, cask) => {
//       console.log(cask);
//       cask.tween.pause();
//     });
//   }
// }
class Game extends SceneContent {
  constructor(id, scene) {
    super(id, scene);
    this.$container = $(`#${id}`);
    this.timeLimit = 15;
    this.defaultDuration = 4; // 表示開始から隠れるまでの時間
    this.incrementRatio = 0.9;
    this.minDuration = 1.5;
    this.bonusTime = 1;
    this.penaltyTime = 0.5;
    if (isDev) {
      this.timeLimit = getQueries('timeLimit') || this.timeLimit;
      this.defaultDuration = getQueries('defaultDuration') || this.defaultDuration;
      this.incrementRatio = getQueries('incrementRatio') || this.incrementRatio;
      this.minDuration = getQueries('minDuration') || this.minDuration;
      this.bonusTime = getQueries('bonusTime') || this.bonusTime;
      this.penaltyTime = getQueries('penaltyTime') || this.penaltyTime;
    }


    this.howto = new ModalHowto();
    this.timer = new Timer(this.timeLimit);
    this.text = new Texts();
    this.$content.find('.btn').on({
      click: () => {
        app.scene.change('result');
      },
    });
    this.speedUpTiming = 3;
    this.caskW = Cask.getCaskWidth();
    this.movableWidth = window.innerWidth + this.caskW;
    this.interval = 131 + 113; // 375換算のpx数（cask幅の131以上）
    // this.interval = 375; // 375換算のpx数（cask幅の131以上）
    this.conveyorTl = new TimelineMax({
      paused: true,
    })
      .to('#conveyor', 267, { x: -267, repeat: -1, ease: Linear.easeNone });


    // this.stage = new Stage();
    // this.stage.start();

    this.tl = new TimelineMax({ paused: true })
      .to({}, 0.1, {})
      .add(() => {
        this.howto.countdown(() => {
          this.howto.hide();
          this.text.show('go');
          this.start();
          app.sounds.play('bgm');
          TweenMax.to({}, 1, {
            onComplete: () => {
              this.timer.start();
            },
          });

          // dummy extend time
          // let n = 0;
          // this.interval = setInterval(() => {
          //   if (n % 2) {
          //     if (n === 3) {
          //       this.text.show('speedup');
          //     } else {
          //       this.text.show('miss');
          //     }
          //   } else {
          //     this.timer.extend(0.5);// 0.5秒UP
          //     this.text.show('good');
          //   }
          //   n += 1;
          // }, 2000);
        });
      });
    // ダブルタップ禁止
    let t = 0;
    document.documentElement.addEventListener('touchend', (e) => {
      const now = new Date().getTime();
      if ((now - t) < 500) {
        e.preventDefault();
      }
      t = now;
    }, false);
    this.$container.find('.btn_backto_tap').on({
      click: () => {
        this.stop();
        // return false;
      },
    });
    // $('.btn_backto_tap').on({
    //   click: () => {
    //     if (app.scene.current === 'game') {
    //       this.resume();
    //     }
    //     // return false;
    //   },
    // });
  }
  init() {
    this.speedUpcount = 0;
    this.duration = this.defaultDuration; // 表示開始から隠れるまでの時間
    this.casks = [];
    this.time = 0;
    this.activeIndex = -1; // 1回目0にする為に-1からスタート
    this.result = 0;
    this.conveyorTl.pause(0);
    this.selectable = false;

    $('#choices').empty();
    $('#choices').removeClass('disabled');
    $('#casks').empty();
  }
  start() {
    this.setDistance();
    this.move();
  }
  interruption() {
    // 今はつかわない
    // this.setDistance(this.conveyorTl.time());
    // this.move();
  }
  addCask() {
    const rand = Math.floor(Math.random() * 10) + 1;
    this.casks.push(new Cask(rand));
    // console.log(this.casks);
  }
  setDistance() {
    this.speed = (this.interval / this.movableWidth) * this.duration;
    this.time += this.interval;
    this.addCask();

    // activeになる開始地点（caskが見えきった時）
    this.activePosition = (this.caskW / this.movableWidth) * this.duration;
    this.activeTl = new TimelineMax()
      .to({}, this.activePosition, {})
      .add(() => {
        this.activeIndex += 1;
        this.changeActive();
      });
    // setTimeout(() => {
    //   this.activeIndex += 1;
    //   this.changeActive();
    // }, this.activePosition * 1000);
  }
  changeActive() {
    $.each(this.casks, (i, el) => {
      el.setDisable();
    });
    this.casks[this.activeIndex].setActive();
    this.setChoices();
  }
  shuffle(arr) {
    const newArr = [];
    for (let i = 0, len = arr.length; i < len; i += 1) {
      newArr.push(arr.splice(Math.random() * arr.length || 0, 1)[0]);
    }
    return newArr;
  }

  setChoices() {
    this.selectable = false;
    const answer = this.casks[this.activeIndex].type - 1;
    // console.log(this.activeIndex, this.casks[this.activeIndex]);

    let nums = [...Array(10).keys()];
    nums = nums.filter(n => n !== answer);
    nums = this.shuffle(nums);
    nums = nums.slice(0, 4);
    nums.splice(0, 0, answer);
    nums = this.shuffle(nums);
    this.choices = [];
    $.each(nums, (i, el) => {
      const $choice = $(`<div class="part pos${i + 1} part${el + 1}" data-part="${el + 1}"/>`);
      $choice.one({
        touchstart: () => {
          // console.log(this.casks[this.activeIndex]);
          const isCorrect = answer === el;
          this.throw($choice, isCorrect);
          return false;
        },
      });
      if (answer === el) {
        // $choice.css('backgroundColor', 'yellow');
      }
      this.choices.push($choice);
    });
    this.isChangingChoices = true;
    TweenMax.staggerFromTo(this.choices, 0.3, {
      scale: 0.8,
      x: 375,
    }, {
      scale: 0.8,
      x: 0,
      ease: Power2.easeOut,
      onComplete: () => {
        this.selectable = true;
        this.isChangingChoices = false;
      },
    }, 0.02);

    $('#choices').html(this.choices);
    // console.log(nums, answer);
  }
  throw($choice, isCorrect) {
    if (this.selectable) {
      this.selectable = false;
      // console.log(this.casks, this.activeIndex);
      // console.log(this.casks[this.activeIndex]);

      const cask = this.casks[this.activeIndex];
      const progress = cask.tl.progress();
      const left = parseInt($choice.css('left'), 10);
      // console.log(left);

      const posX = cask.movableWidth * progress;

      TweenMax.to($choice, 0.2, {
        x: (-posX + window.innerWidth) - left,
        y: -220,
        scale: 1,
        ease: Power2.easeIn,
        onComplete: () => {
          if (isCorrect) {
            cask.setClear();
            $choice.remove();
            this.text.show('good');
            app.sounds.play('good');
            this.timer.extend(this.bonusTime);// 0.5秒UP
            this.result += 1;
            if (this.isChangingChoices === false) {
              TweenMax.staggerTo(this.choices, 0.3, {
                scale: 0.8,
                x: -375,
                ease: Power2.easeIn,
                onComplete: () => {
                  this.selectable = true;
                },
              }, 0.02);
            }
            // 暫定
            this.speedUpcount += 1;
            console.log(this.speedUpcount % this.speedUpTiming, this.speedUpcount);

            if (this.speedUpcount % this.speedUpTiming === 0) {
              this.duration *= this.incrementRatio;
              this.duration = Math.max(this.duration, this.minDuration);
              TweenMax.to({}, 0.5, {
                onComplete: () => {
                  this.text.show('speedup');
                },
              });
            }
          } else {
            TweenMax.to($choice, 0.5, {
              x: 0,
              y: -600,
              rotation: 900,
              // scale: 1,
              ease: Power2.Linear,
            });
            this.text.show('miss');
            app.sounds.play('miss');
            this.timer.extend(-this.penaltyTime);
            this.selectable = true;
          }
        },
      });
      // this.casks[this.activeIndex]
      app.sounds.play('tap');
    }
  }
  move() {
    this.conveyorTween = this.conveyorTl.tweenTo(this.time, {
      onComplete: () => {
        // this.addCask();
        // this.duration *= 0.9;
        // console.log(this.duration);
        // this.duration = Math.max(this.duration, 0.5);
        this.setDistance();
        this.move();
      },
    }).duration(this.speed);
    $.each(this.casks, (i, cask) => {
      const currentTime = cask.tl.time();
      // console.log(du);
      cask.tween = // eslint-disable-line no-param-reassign
        cask.tl.tweenTo(currentTime + this.interval)
          .duration(this.speed);
    });
  }
  stop() {
    // console.log('stop');
    this.conveyorTween.pause();
    $.each(this.casks, (i, cask) => {
      console.log(cask);
      cask.tween.pause();
    });
    this.timer.tl.pause();
    // TweenMax.pauseAll();
    // this.quit.show();
  }
  resume() {
    this.conveyorTween.play();
    $.each(this.casks, (i, cask) => {
      console.log(cask);
      cask.tween.play();
    });
    this.timer.tl.play();
  }
  timeup() {
    // console.log('timeup');
    this.selectable = false;
    this.stop();
    this.text.show('timeup');
    TweenMax.to({}, 2, {
      onComplete: () => {
        app.scene.change('result');
      },
    });
  }
  beforeShowFn() {
    this.init();
    console.log('show');
    this.howto.show();
    this.showTransition();
  }
  afterShowFn() {
    this.tl.play(0);
    // countdown後にTimer Start
    // setTimeout(() => {
    // }, 3000);
  }
  afterHideFn() {
    // this.howto.show();
  }
}
class Result extends SceneContent {
  constructor(id, scene) {
    super(id, scene);
    this.$nums = $('#result .nums img');
    this.$casks = $('#resultCasks');
    this.$title = $('#result .title img');
    this.isLoacal = /192\.168\.0/.test(window.location.hostname);
    // this.isLoacal = true;
    this.$content.find('.btn_retry').on({
      click: () => {
        app.scene.change('game');
      },
    });
    this.$input = $('#input');
    this.xVal = '';
    const checkText = () => {
      let str = this.$input.val();
      if (str === '') {
        this.xVal = '';
      } else {
        str = (str === null) ? '' : str;
        str = str.slice(0, 5);
        if (str.match(/^[a-zA-Z0-9]+$/)) {
        // if (str.match(/^[A-Za-z0-9]+$/)) {
          this.$input.val(str);
          this.xVal = str;
        } else {
          this.$input.val('');
          this.xVal = str;
          window.alert('半角英数で入力してください'); // eslint-disable-line no-alert
        }
      }
    };
    this.$input.on({
      keyup: () => {
        checkText();
      },
      change: () => {
        checkText();
      },
    });
    this.$input[0].addEventListener('paste', () => {
      setTimeout(() => {
        checkText();
      }, 100);
    });
    $('#result .submit').on({
      click: () => {
        if (this.$input.val() !== '') {
          this.submit();
        }
      },
    });
  }
  generateRanking() {
    const apipath = this.isLoacal ? '/tap/assets/json/ranking.json' : '/ranking/';
    // const apipath = 'http://163.49.19.228/ranking';
    $.ajax({
      url: apipath,
      dataType: 'json',
      type: 'GET',
      data: {
        game: 1,
        order: 'desc',
      },
    }).done((json) => {
      const ranking = [];
      $.each(json.data.points, (i, entry) => {
        const rank = `<li class="rank${entry.rank}">
          <div class="amount">${entry.point}個</div>
          <div class="name">${entry.name}</div>
        </li>`;
        ranking.push(rank);
      });
      $('#ranking ul').html(ranking);
      $('#name').html(this.username);
      $('.form,.result').hide();
      TweenMax.fromTo('#name', 1, { autoAlpha: 0 }, { autoAlpha: 1 });
      $('#name').show();
      TweenMax.fromTo('#ranking', 1, { autoAlpha: 0 }, { autoAlpha: 1 });
    });
  }
  submit() {
    // ajaxして
    this.username = this.$input.val();

    const apipath = this.isLoacal ? '/tap/assets/json/setrank.json' : '/setRanking/';
    // const apipath = 'http://163.49.19.228/setRanking';
    const accessType = this.isLoacal ? 'GET' : 'POST';
    // console.log(accessType);
    $.ajax({
      url: apipath,
      dataType: 'json',
      type: accessType,
      data: {
        game: 1,
        name: this.username,
        point: this.result,
      },
    }).done(() => {
      this.generateRanking();
    })
      .always((response) => {
        console.log(response);
      });
  }
  setNum(n) {
    const num = String(n).split('');
    if (num.length === 1) {
      num.unshift(null);
      num.unshift(null);
    }
    if (num.length === 2) {
      num.unshift(null);
    }
    $.each(num, (i, number) => {
      if (number === null) {
        TweenMax.set(this.$nums.eq(i), { autoAlpha: 0 });
      } else {
        TweenMax.set(this.$nums.eq(i), { autoAlpha: 1, xPercent: -10 * Number(number) });
      }
    });
  }
  setTitle(n) {
    // const max = 36;// 36を満点として
    // const sepalate = 6;// 6等分
    let title;
    if (n <= 5) {
      title = 1;
    } else if (n <= 15) {
      title = 2;
    } else if (n <= 20) {
      title = 3;
    } else if (n <= 25) {
      title = 4;
    } else if (n <= 35) {
      title = 5;
    } else {
      title = 6;
    }
    // let title = Math.min(Math.ceil((n / max) * sepalate), sepalate);
    // title = n === 0 ? 1 : title;
    TweenMax.set(this.$title, { autoAlpha: 0 });
    TweenMax.set(this.$title.eq(title - 1), { autoAlpha: 1 });
  }
  beforeShowFn() {
    $('#name').hide();
    $('.form,.result').show();
    TweenMax.set('#ranking', { autoAlpha: 0 });

    this.setNum(0);
    this.tl = new TimelineMax({
      paused: true,
    }).to({}, 1, {})
      .add(() => {
        app.sounds.play('drumroll');
      });
    this.result = app.game.result || 0; // eslint-disable-line prefer-destructuring
    const base = 1.4;
    const d = Math.max(base / this.result, 0.05);
    const caskImg = [];
    for (let i = 0; i < this.result; i += 1) {
      let $img;
      if (i > 170) {
        $img = '';
        this.tl.from({}, d, {});
      } else {
        $img = $('<img src="../assets/img/craftsman/result/cask.svg" />');
        this.tl.from($img, d, { scale: 0, ease: Elastic.easeOut });
      }
      this.tl.add(() => {
        this.setNum(i + 1);
      }, `-=${d}`);
      caskImg.push($img);
    }
    this.$casks.html(caskImg);
    if (this.result > 32) {
      this.$casks.removeClass().addClass('small1');
    }
    if (this.result > 55) {
      this.$casks.removeClass().addClass('small2');
    }
    if (this.result > 105) {
      this.$casks.removeClass().addClass('small3');
    }
    this.tl.add('countend')
      .fromTo(this.$casks, 1, { autoAlpha: 1 }, { autoAlpha: 0.5 })
      .add(() => {
        app.sounds.stop('drumroll');
        app.sounds.play('cymbal');
      })
      .fromTo(
        '#result .title', 0.5,
        { yPercent: -160 },
        { yPercent: 0, ease: Bounce.easeOut },
        'counted',
      );
    this.setTitle(this.result);
    const apipath = this.isLoacal ? '/tap/assets/json/rank.json' : '/ranking/';
    // const apipath = 'http://163.49.19.228/ranking';
    $.ajax({
      url: apipath,
      dataType: 'json',
      type: 'GET',
      data: {
        game: 1,
        order: 'desc',
        point: this.result,
      },
    }).done((json) => {
      $('#thisRank').html(json.data.rank);
      this.showTransition();
    });
  }
  afterShowFn() {
    this.tl.play();
    // app.sounds.play('result');
  }
}

class Sounds {
  constructor() {
    this.data = [
      { label: 'countdown', volume: 1.0, loop: false },
      { label: 'good', volume: 1.0, loop: false },
      { label: 'miss', volume: 1.0, loop: false },
      { label: 'tap', volume: 1.0, loop: false },
      { label: 'timeup', volume: 1.0, loop: false },
      { label: 'drumroll', volume: 1.0, loop: true },
      { label: 'cymbal', volume: 1.0, loop: false },
      { label: 'bgm', volume: 1.0, loop: true },

    ];
    // console.log(php_cfroot+'sp/sound/'+el.label+'.mp3');
    $.each(this.data, (i, el) => {
      // console.log(`${assetPath}${el.label}`);
      this[el.label] = new Howl({ // eslint-disable-line no-undef
        // src: php_cfroot+'sp/sounds/'+el.label+'.mp3',
        src: `/tap/assets/sounds/${el.label}.mp3`,
        loop: el.loop,
        // html5: true,
        volume: el.volume,
        onload: () => {
          // console.log('done',el);
        },
        onplay: () => {
          // console.log('play',el.label);
        },
        onstop: () => {
          // console.log('pause',el.label);
        },
      });
    });
    $('#menu .on').on({
      click: () => {
        Howler.mute(false); // eslint-disable-line no-undef
      },
    });
    $('#menu .off').on({
      click: () => {
        Howler.mute(true); // eslint-disable-line no-undef
      },
    });
    $(window).on({
      blur: () => {
        if (window.gb.isSound === 'true') {
          Howler.mute(true); // eslint-disable-line no-undef
        }
      },
      focus: () => {
        if (window.gb.isSound === 'true') {
          Howler.mute(false); // eslint-disable-line no-undef
        }
      },
    });

    window.onpagehide = () => {
      Howler.mute(true); // eslint-disable-line no-undef
    };
    window.onpageshow = () => {
      if (window.gb.isSound === 'true') {
        Howler.mute(false); // eslint-disable-line no-undef
      }
    };

    // this.$footerBtn = $('#footer .checkSound li');
    // this.$footerBtns = $('#footer .checkSound');

    // var ua = navigator.userAgent;
    // if (ua = android) {
    //   this.$footerBtns.hide();
    // }

    // $('.checkSound').each((i, el) => {
    //   const $li = $(el).find('li');
    //   $li.on({
    //     click: (e) => {
    //       // 60分
    //       const date = new Date();
    //       date.setTime(date.getTime() + (60 * 60 * 1000));
    //       // date.setTime( date.getTime() + ( 20 * 1000 ));
    //       const $this = $(e.currentTarget);
    //       if ($this.data('sound') === 'on') {
    //         this.isMute = false;
    //         Howler.mute(false);
    //         this.play('bgm');
    //         Cookies.set('sound', 'on', { expires: date });
    //         this.setButton(0);
    //       } else {
    //         this.isMute = true;
    //         Howler.mute(true);
    //         Cookies.set('sound', 'off', { expires: date });
    //         this.setButton(1);
    //       }
    //     },
    //   });
    // });

    $(window).one({
      touchstart: () => {
        $.each(this.data, (i, el) => {
          this[el.label].pause();
        });
      },
    });
    $('.se').on({
      touchend: () => {
        this.play('tap');
      },
    });
  }
  // setButton(n) {
  // this.$footerBtn.removeClass('selected');
  // this.$footerBtn.eq(n).addClass('selected');
  // }
  stopAll() {
    $.each(this.data, (i, el) => {
      this[el.label].stop();
    });
  }
  play(soundId) {
    if (this[soundId] && window.gb.isSound === 'true') {
      // console.log(soundId,this.isMute);
      this[soundId].stop().play();
      if (soundId === 'bgm') {
        this.isPlaying = true;
      }
    }
  }
  stop(soundId) {
    if (this[soundId]) {
      this[soundId].stop();
    }
  }
}

class Main {
  constructor() {
    this.quit = new ModalQuit();
    this.scene = new SceneController();
    this.scene.data = {
      top: new Top('top', this.scene),
      game: new Game('game', this.scene),
      result: new Result('result', this.scene),
    };
  }
  init() {
    this.sounds = new Sounds();
    this.top = this.scene.data.top;
    this.game = this.scene.data.game;
    this.result = this.scene.data.result;
    this.scene.change('top');
    // this.scene.change('result');
  }
}

class Dev {
  constructor() {
    this.$tmp = `<div id="debug">
      <form action="./" method="get">
        <label><span>制限時間（20）秒</span>
          <input type="text" name="timeLimit" placeholder="20">
        </label>
        <label><span>初回樽スピード（5）秒</span>
          <input type="text" name="defaultDuration" placeholder="5">
        </label>
        <label><span>ボーナスタイム（1.5）秒</span>
          <input type="text" name="bonusTime" placeholder="1.5">
        </label>
        <label><span>ペナルティ-（0.5）秒</span>
          <input type="text" name="penaltyTime" placeholder="0.5">
        </label>
        <label><span>スピードアップ比率（0.9）倍</span>
          <input type="text" name="incrementRatio" placeholder="0.9">
        </label>
        <label><span>最速樽スピード制限（2）秒</span>
          <input type="text" name="minDuration" placeholder="2">
        </label>
        <input type="submit" value="送信" />
        <input type="hidden" name="dev" value="1" />
      </form>
    </div>`;
    $('body').append(this.$tmp);
  }
  init() {
    $('.copyright').on({
      click: () => {
        $('#debug').toggle();
      },
    });
    $('#debug [name="timeLimit"]').val(getQueries('timeLimit'));
    $('#debug [name="defaultDuration"]').val(getQueries('defaultDuration'));
    $('#debug [name="bonusTime"]').val(getQueries('bonusTime'));
    $('#debug [name="penaltyTime"]').val(getQueries('penaltyTime'));
    $('#debug [name="incrementRatio"]').val(getQueries('incrementRatio'));
    $('#debug [name="minDuration"]').val(getQueries('minDuration'));
  }
}

$('body').imagesLoaded({ background: true }, () => {
  if (isDev) {
    const dev = new Dev();
    dev.init();
  }
  app = new Main();
  app.init();
});

