//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIController extends Base {

  constructor() {

    super();


    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.$item = $('.block05 .img01 .item');
    this.$img = this.$item.find('img');

    this.dur = 1.5;

    // TweenMax.set(this.$item, {scale: 0.9});
    // TweenMax.set(this.$item, {x: -400});
    TweenMax.set(this.$item, {'transform-origin': '10% 90%'});


    this.timeline();

    this.cnt = 0;

  }

  update() {

  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.moveX();
        // this.toFront();

      }, 0.0)

  }

  moveX() {

    var tl = new TimelineMax();

    tl
      .to(this.$item, this.dur * 0.3, {
        x: '-=' + 20,
        ease: Power2.easeInOut,
      }, 0.0)
      .to(this.$item, this.dur * 0.9, {
        x: '+=' + 120,
        // ease: Elastic.easeOut.config(1, 0.7),
        ease: Elastic.easeOut.config(1, 1.0),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==13) {
            this.toFront();
            this.cnt = 0;
            return;
          }

          this.moveX();


        }
      }, this.dur * 0.3)

      // // skew
      .to(this.$item, this.dur * 0.1, {
        skewX: 8,
        ease: Expo.easeOut,
      }, this.dur * 0.3)
      .to(this.$item, this.dur * 0.2, {
        skewX: -3,
        ease: Expo.easeOut,
      }, this.dur * 0.3 + this.dur * 0.3)
      .to(this.$item, this.dur * 0.4, {
        skewX: 0,
        ease: Elastic.easeOut.config(1.2, 0.4),
      }, this.dur * 0.3 + this.dur * 0.3 + this.dur * 0.1)

  }

  moveXEnd() {

    var tl = new TimelineMax();

    tl
      .to(this.$item, this.dur, {
        x: '+=' + 100,
        ease: Elastic.easeOut.config(1, 0.5),
        onComplete: ()=>{

          log(this.cnt);

          this.cnt++;
          if (this.cnt==9) {
            this.cnt = 0;

            TweenMax.set(this.$item, {x: -400, y: 0,scale: 1});

            this.moveX();
            return;
          }

          this.moveXEnd();


        }
      })

  }

  toFront() {

    var tl = new TimelineMax();

    tl
      .to(this.$item, this.dur, {
        scale: '+=' + 0.01,
        x: '+=' + 3,
        y: '+=' + 6,
        ease: Elastic.easeOut.config(1, 0.5),
        onComplete: ()=>{

          this.cnt++;
          if (this.cnt==9) {
            this.cnt = 0;
            this.moveXEnd();
            return;
          }

          this.toFront();

        }
      })

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}