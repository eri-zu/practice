import 'gsap';
import 'gsap/ScrollToPlugin';

export default class SmoothScroll {
  constructor(
    offset = 0,
    duration = 0.5,
  ) {
    this.offsetTop = offset;
    this.duration = duration;
    this.prefix = '#/';
    this.isEnableUpdateUrlHash = true;
  }
  setTrigger() {
    $(document).on('click', `a[href*="${this.prefix}"]`, (e) => {
      const href = $(e.currentTarget).prop('href').split(this.prefix);
      const url = href[0];
      const id = href[1];
      if (url === window.location.href.split('#')[0]) {
        this.to(`#${href[1]}`, this.offsetTop);
        // ハッシュを残す場合
        if (this.isEnableUpdateUrlHash) {
          this.updateUrl(id);
        }
        e.preventDefault();
      }
    });
  }
  getUrlHash() {
    const hash = window.location.href.split(this.prefix)[1];
    return hash;
  }
  updateUrl(id) {
    window.location.hash = this.prefix + id;
  }
  removeHash() {

  }
  toUrlHash() {
    // 読み込み時ににハッシュがあればスクロールさせる
    const hash = window.location.href.split(this.prefix)[1];
    const $target = $(`#${hash}`);
    if ($target.length) {
      setTimeout(() => {
        this.to($target, this.offsetTop);
      }, 1000);
    }
  }
  to(IDorNum, offset) {
    const offsetTop = offset || this.offsetTop;
    TweenMax.to(window, this.duration, {
      scrollTo: { y: IDorNum, offsetY: offsetTop, autoKill: false },
      ease: Power3.easeOut,
    });
    return false;
  }
}
