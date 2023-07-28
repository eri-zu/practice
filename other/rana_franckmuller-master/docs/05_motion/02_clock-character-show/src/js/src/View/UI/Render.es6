//--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIController extends Base {

  constructor($span, index) {

    super();

    this.$span = $span;
    this.index = index;

    this.setup()
    this.setEvents();

  }

  setup() {

    this.isUpdate = false;
    // this.rot = -45 * (this.index + 3);
    this.rot = -45 * 3;

    TweenMax.set(this.$span, {rotation: this.rot});

  }

  updateShow() {

    if (!this.isUpdate) return;
    if (gb.up.frame%10==0) {

      this.rot += 45;
      if (this.rot>=0) this.isUpdate = false;

    }

    TweenMax.set(this.$span, {rotation: this.rot});

  }
  updateHide() {

    if (!this.isUpdate) return;
    if (gb.up.frame%10==0) {

      this.rot += 30;
      if (this.rot>=30*3) this.isUpdate = false;

    }

    TweenMax.set(this.$span, {rotation: this.rot});

  }

  show(delay) {

    TweenMax.to(this.$span, 1.0, {
      opacity: 1,
      ease: Power2.easeInOut,
      onStart:()=>{
        this.isUpdate = true;
      },
      delay: delay
    })

  }

  hide(delay) {

    TweenMax.to(this.$span, 0.6, {
      opacity: 0,
      ease: Power2.easeInOut,
      onStart:()=>{
        this.isUpdate = true;
      },
      delay: delay
    })

  }

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}