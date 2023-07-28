export default class Btn {

  constructor(options) {
    const $elm = options.$elm;
    const func = options.func;
    const disableDoubleTap = options.disableDoubleTap;

    this.$target = $elm;
    this.$svg = this.$target.find('polygon, path');
    this.$shadow = this.$target.find('.shadow');
    this.func = null;
    this.onUpFunc = null;
    this.disableDoubleTap = disableDoubleTap;

    if (typeof func === 'function') {
      this.func = func;
    }

    this.setEvents();
  }

  onDown() {
    var ookisa = 7;
    TweenMax.set(this.$svg.not(this.$shadow), {x: ookisa, y: ookisa});
    TweenMax.set(this.$shadow, {opacity: 0});

    if (this.func !== null) {
      this.func();
    }
  }

  onUp() {
    TweenMax.set(this.$svg.not(this.$shadow), {x: 0, y: 0});
    TweenMax.set(this.$shadow, {opacity: 1});

    if (this.onUpFunc !== null) {
      this.onUpFunc();
    }
  }

  setOnUpFunc(func) {
    if (typeof func === 'function') {
      this.onUpFunc = func;
    }
  }

  setEvents() {
    this.$target.on('touchstart', (e)=>{
      // 複数指で拡大縮小が出来てしまうのを防ぐ
      if (this.disableDoubleTap === true) {
        if (e.originalEvent.touches.length > 1) e.preventDefault();
      }
      this.onDown();
    });

    this.$target.on('touchend', (e)=>{
      // ダブルタップを防ぐ
      if (this.disableDoubleTap === true) {
        e.preventDefault();
      }
      this.onUp();
    });
  }
}
