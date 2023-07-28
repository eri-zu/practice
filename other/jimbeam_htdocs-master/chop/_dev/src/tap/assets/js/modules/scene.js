import { TweenMax } from 'gsap/all';

class SceneController {
  constructor(
    container = '#container',
    content = '#container .scene',
  ) {
    this.$container = $(container);
    this.$content = $(content);
    this.isVisited = false;
    this.data = {};

    // $.each($(this.$content), (i, _this)=>{
    //   let id = $(_this).attr('id');
    //   this.data[id] = new SceneContent(id, this );
    // });
    $(window).on({
      resize: () => {
        this.resize();
      },
    });

    // $('.scene1').on('click', ()=>{
    //   this.change('s1', 'abc');
    // })
    // $('.scene2').on('click', ()=>{
    //   this.change('s2');
    // })
    // $('.scene3').on('click', ()=>{
    //   this.change('s3');
    // })
    // $('.scene4').on('click', ()=>{
    //   this.change('s4');
    // })
    // $('.scene5').on('click', ()=>{
    //   this.change('s5');
    // })
  }
  change(id, opt) {
    this.data[id].change(opt);
  }
  resize() {
    this.data[this.current].setHeight(true);
  }
}

class SceneContent {
  constructor(id, scene) {
    this.scene = scene;
    this.id = id;
    this.$content = $(`#${id}`);
    this.showDuration = 0.25;
    this.heightDuration = 0;
    this.fitToScreen = false;
  }
  change(opt) {
    this.opt = opt || null;
    // console.log(this.scene.isVisited ,this.scene.isChange );
    if (!this.scene.isVisited) {
      this.reset();
      this.setHeight(true);
      this.show();
      // new TimelineMax()
      //   // .to( this.scene.$container, this.openDuration, {  autoAlpha: 1 }, 0 )
      //   .add(()=>{ this.beforeShow() })
      //   .add(()=>{ this.beforeShowFn() })
    } else {
      this.scene.isChange = true;
      const exContent = this.scene.data[this.scene.current];
      new TimelineMax()
        .add(() => exContent.hide())
        // .to({}, this.showDuration, {})
        // .to(window, 0.3, { scrollTo: 0 })
        // .to({}, 0.05, {}) // 少しだけ追加
        .add(() => this.show());
      // new TimelineMax()
      //   //消す
      //   // .add(()=>{ exContent.setHeight(true) })
      //   .to( exContent.$content, this.showDuration, { autoAlpha: 0 })
      //   .add(()=>{ exContent.afterHide() })
      //   .add(()=>{ exContent.afterHideFn() })
      //   .add(()=>{ this.beforeShow() })
      //   .add(()=>{ this.beforeShowFn() })
    }
  }
  setCurrent() {
    this.scene.current = this.id;
  }
  setHeight(noAnim) {
    // TweenMax.set( this.$content, { height: '' });
    // const contentH = this.$content.outerHeight();
    // const outerH = this.fitToScreen ? Math.max(contentH, util.win.h) : contentH;
    // TweenMax.set( this.$content, { height: outerH });
    if (noAnim) {
      // TweenMax.set( this.scene.$container, { height: outerH });
    } else {
      // TweenMax.to(
      //   this.scene.$container,
      //   this.heightDuration,
      //   {
      //     height: outerH,
      //     ease: Power3.easeInOut
      //   }
      // );
    }
  }
  reset() {
    $.each(this.scene.data, (i, el) => {
      TweenMax.set(el.$content, { autoAlpha: 0 });
      el.isVisited = false; // eslint-disable-line no-param-reassign
    });
    TweenMax.set(this.$content, { autoAlpha: 0 });
  }
  show() {
    this.beforeShow();
    this.beforeShowFn();
  }
  beforeShow() {
    this.setCurrent();
    TweenMax.set(this.$content, { autoAlpha: 0 });
  }
  beforeShowFn() {
    // 準備ができたらthis.showTransition();
    this.showTransition();
  }
  showTransition() {
    const setHeightAnim = !this.scene.isVisited;
    const delay = this.scene.isChange ? this.heightDuration : 0;
    new TimelineMax()
      .add(() => { this.setHeight(setHeightAnim); })
      .to(this.$content, this.showDuration, { autoAlpha: 1, delay })
      // .to(this.$content, this.showDuration, { autoAlpha: 1 })
      .add(() => {
        this.scene.isChange = false;
        this.afterShowFn();
      });
    this.scene.isVisited = true;
  }
  afterShowFn() {
    // 自由に適宜
  }
  hide() {
    this.hideTransition();
  }
  hideTransition() {
    new TimelineMax()
      .to(this.$content, this.showDuration, { autoAlpha: 0 })
      .add(() => { this.afterHide(); })
      .add(() => { this.afterHideFn(); });
  }
  afterHide() {
    TweenMax.set(this.$content, { autoAlpha: 0 });
  }
  afterHideFn() {
    // 自由に適宜
  }
}

exports.SceneController = SceneController;
exports.SceneContent = SceneContent;
