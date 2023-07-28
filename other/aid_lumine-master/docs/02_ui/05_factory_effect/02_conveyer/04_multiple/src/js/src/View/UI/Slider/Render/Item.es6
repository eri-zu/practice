//--------------------------------------------------
//
//  Btn
//
//--------------------------------------------------

export default class Btn {

  constructor($target, index){

    this.name = 'SliderTopRenderItem';

    this.$item = $target;
    this.$bar = $target.find('.textIn .bar');

    this.isLock = false;
    this.isEnter = false;
    this.ve = 0;
    this.vl = 0;
    this.index = index;

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$bar, {scaleX: 0, 'transform-origin': '0% 50%', z: 0});

  }

  show() {


  }

  hide() {


  }

  onEnter (that) {

    this.isEnter = true;
    if (this.ve!=0||this.vl!=0) return;

    this.tlEnter = new TimelineMax();

    this.tlEnter
      .set($(that).find('.bar'), {scaleX: 0, 'transform-origin': '0% 50%', x: 0})
      .to($(that).find('.bar'), 0.6, {
        scaleX: 1,
        ease: Expo.easeOut,
        onUpdate: ()=>{

          this.ve = this.tlEnter.progress().toFixed(2)

          if (!this.isEnter&&this.ve>=0.99) {
            if (this.tlEnter) this.tlEnter.kill();
            this.hide(that);
            this.ve = 0;
          }

        }
      })
    
  }

  hide(that) {

    if (this.tlLeave) this.tlLeave.kill();
    this.tlLeave = new TimelineMax();

    this.tlLeave
      .to($(that).find('.bar'), 0.5, {
        scaleX: 0,
        // x: 2,
        ease: Expo.easeInOut,
        onStart: ()=>{
          TweenMax.set($(that).find('.bar'), {'transform-origin': '100% 0%'});
        },
        onUpdate: ()=>{

          this.vl = this.tlLeave.progress().toFixed(2)

          if (this.isEnter&&this.vl>=0.99) {
            if (this.tlEnter) this.tlEnter.kill();
            this.vl = 0;
            this.ve = 0;
            this.onEnter(that);
          }

        },
        onComplete: ()=>{
          this.ve = 0;
          this.vl = 0;
        }
      })

  }

  onLeave (that) {

    log('leave')

    this.isEnter = false

    if (this.ve>=0.99) {
      this.hide(that);
      // this.v = 0;
    }

  }

  setEvents() {

    var self = this;

    this.$item.on('mouseenter'+'.'+this.name, function(){self.onEnter.call(self,this)});
    this.$item.on('mouseleave'+'.'+this.name, function(){self.onLeave.call(self,this)});
  }

  removeEvents() {

    this.$item.off('mouseenter'+'.'+this.name);
    this.$item.off('mouseleave'+'.'+this.name);

  }

}