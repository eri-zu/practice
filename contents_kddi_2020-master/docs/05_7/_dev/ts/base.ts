/// <reference path="./libs/gsap/index.d.ts" />
/// <reference path="./libs/jquery/v1/index.d.ts" />

class Base {
  constructor() {
    this._addEvent();
  }

  private _addEvent() {
  }

  protected _onResize(event:Event):void {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.resize(w, h);
  }

  public resize(w:number, h:number) {
  }

  protected _onScroll(event:Event):void {
    this.scroll(event);
  }

  public scroll(event:Event) {
    if (!this._isMenu) this._scrollY = window.pageYOffset;
  }

  protected _onMousemove(event:Event):void {
    let x = (<any>event).clientX;
    let y = (<any>event).clientY;
    this.mousemove(x, y);
  }

  public mousemove(mouseX:number, mouseY:number) {
  }

  public update() {
  }

  public getDevice():string {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if ((navigator.userAgent.indexOf('Android') > 0
    && navigator.userAgent.indexOf('Mobile') == -1)
    || navigator.userAgent.indexOf('A1_07') > 0
    || navigator.userAgent.indexOf('SC-01C') > 0
    || navigator.userAgent.indexOf('iPad') > 0)
      return 'tb';
    else if ((navigator.userAgent.indexOf('iPhone') > 0
    && navigator.userAgent.indexOf('iPad') == -1)
    || navigator.userAgent.indexOf('iPod') > 0
    || (navigator.userAgent.indexOf('Android') > 0
    && navigator.userAgent.indexOf('Mobile') > 0))
      return 'sp';
    else
      return 'pc';
  }

  public getBrowser() {
    var ua = window.navigator.userAgent.toLowerCase();
    var ver = window.navigator.appVersion.toLowerCase();
    var name = '';

    if (ua.indexOf("msie") != -1) {
      if (ver.indexOf("msie 6.") != -1) {
        name = 'ie6';
      } else if (ver.indexOf("msie 7.") != -1) {
        name = 'ie7';
      } else if (ver.indexOf("msie 8.") != -1) {
        name = 'ie8';
      } else if (ver.indexOf("msie 9.") != -1) {
        name = 'ie9';
      } else if (ver.indexOf("msie 10.") != -1) {
        name = 'ie10';
      } else{
        name = 'ie';
      }
    } else if(ua.indexOf('trident/7') != -1) {
      name = 'ie11';
    } else if (ua.indexOf('edge') != -1) {
      name = 'edge';
    } else if (ua.indexOf('chrome') != -1) {
      name = 'chrome';
    } else if (ua.indexOf('safari') != -1) {
      name = 'safari';
    } else if (ua.indexOf('opera') != -1) {
      name = 'opera';
    } else if (ua.indexOf('firefox') != -1) {
      name = 'firefox';
    }
    return name;
  }

}

// 各ページごとのクラスの継承元
class AbstractPage {
  constructor() {
  }
  public update(t:number) {

  }
  public draw() {

  }
  public resize(winW:number, winH:number) {

  }
  public scroll(scrollY:number) {

  }
  public mousemove(mouseX:number, mouseY:number) {

  }
}
