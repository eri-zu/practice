import device from './device';
import ua from './ua';


class ModalController {
  constructor(
    base = '#modals',
    overlay = '.overlay',
    container = '.modal',
    content = '.content',
    closeModal = '.closeModal',
  ) {
    const $base = $(base);
    this.$overlay = $base.find(overlay);
    this.$container = $base.find(container);
    this.$content = $base.find(content);
    this.$closeModal = $base.find(closeModal);
    this.isOpen = false;
    this.data = {};
    this.history = [];
    this.historyOpt = [];

    this.$closeModal.on({
      click: () => {
        this.close();
      },
    });
    $base.on('click', (e) => {
      if (!$(e.target).closest('.content').length) {
        if (this.cur === 'sizeMatrix') {
          this.back();
        } else {
          this.close();
        }
      }
    });

    $(window).on({
      resize: () => {
        this.resize();
      },
    });
  }
  open(id, opt) {
    this.cur = id;
    this.data[id].open(opt);
    this.history.push(id);
    this.historyOpt.push(opt);
  }
  back() {
    const id = this.history[this.history.length - 2];
    const opt = this.historyOpt[this.historyOpt.length - 2];
    this.open(id, opt);
  }
  close() {
    this.data[this.current].close();
  }
  resize() {
    if (this.isOpen) {
      this.data[this.current].setHeight(true);
    }
  }
}

class ModalContent {
  constructor(id, modals) {
    // console.log(modals);
    this.modal = modals;
    this.id = id;
    this.isOpen = false;
    this.$content = $(`#${id}`);
    this.showDuration = 0.3;
    this.openDuration = 0.3;
    this.heightDuration = 0.3;
    this.offsetTopBottom = 0;
    this.$content.find('.back').on({
      click: () => {
        this.modal.back();
      },
    });
    this.$content.find('.btnClose').on({
      click: () => {
        this.close();
      },
    });
  }
  open(opt) {
    this.opt = opt || null;
    // TweenMax.to( window, 0.3, { scrollTo: { y: 0, autoKill: true }, ease: Power3.easeInOut });
    // console.log('this.modal.isOpen',this.modal.isOpen)
    if (!this.modal.isOpen) {
      this.modal.isOpen = true;
      this.setBodyFixed();
      TweenMax.set(this.modal.$container, { scale: 1 });
      this.reset();
      this.setHeight(true);
      new TimelineMax()
        .to(this.modal.$overlay, this.openDuration, { autoAlpha: 0.9 }, 0)
        .fromTo(this.modal.$container, this.openDuration, {
          scale: 1,
        }, {
          scale: 1,
          autoAlpha: 1,
        }, 0)
        .add(() => { this.beforeShow(); })
        .add(() => { this.beforeShowFn(); });
    } else {
      this.change();
    }
  }
  change() {
    this.modal.isChange = true;
    const exContent = this.modal.data[this.modal.current];
    // TweenMax.to( window, 0.3, { scrollTo: { y: 0, autoKill: true }, ease: Power3.easeInOut });
    new TimelineMax()
      // 消す
      .add(() => { exContent.setHeight(); })
      .to(exContent.$content, this.showDuration, { autoAlpha: 0 })
      .add(() => { exContent.afterClose(); })
      .add(() => { exContent.afterHideFn(); })
      .add(() => { this.beforeShow(); })
      .add(() => { this.beforeShowFn(); });
  }
  close() {
    new TimelineMax()
      .to(this.modal.$overlay, this.openDuration, { autoAlpha: 0 }, 0)
      .to(this.modal.$container, this.openDuration, { scale: 1, autoAlpha: 0 }, 0)
      .add(() => { this.modal.isOpen = false; })
      .add(() => { this.afterClose(); })
      .add(() => { this.afterHideFn(); });
    TweenMax.to('#contents', 0.3, { height: $(window).height(), ease: Power3.easeInOut });

    // TweenMax.to( window, 0.3, { scrollTo: { y: 0, autoKill: true }, ease: Power3.easeInOut });
  }
  setCurrent() {
    this.modal.current = this.id;
  }
  setBodyFixed() {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    TweenMax.set('#apparelwrapper', { borderRight: `solid ${scrollBarWidth}px #eee` });
    if (ua.isIE11) {
      $('#fixednavi').hide();
    }
    this.modal.scrollPos = $(window).scrollTop();
    // $('body').css({
    //   position: 'fixed !important',
    //   top: -this.modal.scrollPos,
    // });
    if (device.desktop()) {
      TweenMax.set('body', { overflow: 'hidden' });
    } else {
      document.body.style.setProperty('position', 'fixed', 'important');
      TweenMax.set('body', { top: -this.modal.scrollPos });
    }
  }
  resumeBodyFixed() {
    if (device.desktop()) {
      TweenMax.set('body', { overflow: 'auto' });
    } else {
      document.body.style.setProperty('position', 'relative', 'important');
      TweenMax.set('body', { top: 0 });
    }


    TweenMax.set('#apparelwrapper', { borderRight: 'none' });
    // TweeeMax.set('#fixednavi',{display:'block'});
    if (ua.isIE11) {
      $('#fixednavi').show();
    }
    $(window).scrollTop(this.modal.scrollPos);
  }
  setHeight() {

  }
  reset() {
    $.each(this.modal.data, (i, element) => {
      const el = element;
      TweenMax.set(el.$content, { autoAlpha: 0, display: 'none' });
      el.isOpen = false;
    });
    TweenMax.set(this.modal.$overlay, { autoAlpha: 0, display: 'block' });
    TweenMax.set(this.modal.$container, { autoAlpha: 0 });
    TweenMax.set(this.$content, { autoAlpha: 0, display: 'block' });
  }
  beforeShow() {
    this.setCurrent();
    this.isOpen = true;
    TweenMax.set(this.$content, { display: 'block', autoAlpha: 0 });
  }
  beforeShowFn() {
    // 準備ができたらthis.showTransition();
    this.showTransition();
  }
  showTransition() {
    const delay = this.modal.isChange ? this.heightDuration : 0;
    // const setHeightTime = !this.modal.isChange;
    new TimelineMax()
      .add(() => { this.setHeight(); })
      .to(this.$content, this.showDuration, { autoAlpha: 1, delay })
      .add(() => { this.afterShowFn(); });
    this.modal.isChange = false;
  }
  afterShowFn() {
  }
  afterClose() {
    this.isOpen = false;
    TweenMax.set(this.$content, { autoAlpha: 0, display: 'none' });
    if (this.modal.isOpen === false) {
      this.modal.history = [];
      this.resumeBodyFixed();
    }
  }
  afterHideFn() {
    // 自由に適宜
  }
}

exports.ModalController = ModalController;
exports.ModalContent = ModalContent;
