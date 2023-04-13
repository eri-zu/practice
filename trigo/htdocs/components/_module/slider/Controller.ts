//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

export default class Controller {
  private inner: HTMLDivElement;
  private list: HTMLElement;
  private x: number = 0;
  private speed: number = 0.8;
  private w: number = 0;

  constructor(inner: HTMLDivElement) {
    this.inner = inner;
    this.list = this.inner.querySelector(".js-list")!;

    this.setup();
  }

  setup() {
    this.calcWidth();
  }

  calcWidth() {
    this.w = this.list.clientWidth;
  }

  update() {
    this.x += this.speed;

    if (this.x > this.w) {
      this.x = 0;
    }

    const x = -1 * this.x;

    this.inner.style.transform = `translate3d(${x.toFixed(0)}px, 0px, 0px)`;
  }

  onResize() {
    this.calcWidth();
  }
}
