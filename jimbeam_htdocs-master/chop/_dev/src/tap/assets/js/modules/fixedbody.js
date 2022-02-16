import 'gsap';
import Matchmedia from './matchmedia';

export default class FixedBody {
  /**
   * bodyをifixedにしてSPのスクロールを止める
   * @param {String} scrollContentSelector - '#container'
   * @param {object} fixeStyle={} cssをobjectで - { left: 0 }
   * @memberof FixedBody
   */
  constructor(scrollContentSelector, fixeStyle = {}) {
    this.defaultStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
    };
    this.fixedStyle = $.extend({}, this.defaultStyle, fixeStyle);
    this.$container = scrollContentSelector;
    this.isFixed = false;
    this.xScTop = 0;
    this.mq = new Matchmedia();
  }
  on() {
    if (this.mq.device === 'pc') {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      TweenMax.set('body', {
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        borderRight: `solid ${scrollBarWidth}px #eee`,
      });
    } else {
      this.xScTop = $(window).scrollTop();
      TweenMax.set(this.$container, { top: -this.xScTop });
      // $('body').addClass('fixed');
      TweenMax.set('body', this.fixedStyle);
    }
    this.isFixed = true;
  }
  off() {
    if (this.mq.device === 'pc') {
      TweenMax.set('body', { clearProps: 'all' });
      // TweenMax.set('#wrapper', { borderRight: 'none' });
    } else {
      TweenMax.set('body', { clearProps: 'all' });
      TweenMax.set(this.$container, { top: 0 });
      // $('body').removeClass('fixed');
      $(window).scrollTop(this.xScTop);
    }
    this.isFixed = false;
  }
}
