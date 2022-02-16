
export default class Matchmedia {
  constructor(width = 768) {
    this.mq = window.matchMedia(`screen and (max-width: ${width}px)`);
    this.mq.addListener(this.checkBreakPoint.bind(this));
    this.checkBreakPoint();
  }
  checkBreakPoint() {
    if (this.mq.matches) {
      this.device = 'sp';
    } else {
      this.device = 'pc';
    }
    this.change();
  }
  change() {}
}
