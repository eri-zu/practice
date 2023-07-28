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

    var layout = this.$span.get(0).getBBox();
    // TweenMax.set(this.$span, {'transform-origin': (layout.x + layout.width/2) +'px '+ (layout.y + layout.height/2) +'px'});
    TweenMax.set(this.$span, {transformOrigin: '50% 50%'});

  }

  update() {

    if (!this.isUpdate) return;
    if (gb.up.frame%10==0) {

      this.rot += 45;
      if (this.rot>=0) this.isUpdate = false;

    }

    // TweenMax.set(this.$span, {rotation: this.rot});

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

  onResize() {


  }

  setEvents() {

    super.setEvents();

  }

}