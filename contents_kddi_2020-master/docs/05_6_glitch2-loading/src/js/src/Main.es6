// setting
import Conf from "Conf.es6";
import U from "_MyLibs/Util/Util.es6";
import Func from "_MyLibs/Util/Func.es6";
import Debugger from "_MyLibs/Util/Debugger.es6";

// Util
import Util from "Util/Controller.es6";

// model
// import LoadMgr from "View/UI/_Loading/Basic/Controller.es6";

// events
import UpdateMgr from "_MyLibs/View/Events/EventMgr/UpdateMgr.es6";
import ResizeMgr from "_MyLibs/View/Events/EventMgr/ResizeMgr.es6";

// view
import View from "View/View.es6";

export default class Common {
  constructor() {
    this.onImmediate();
    this.setEvents();
  }

  onImmediate() {
    // ------------------------------------------------------------
    //  初期値の設定・データの配置
    //  util関数の初期化
    //  イベントマネージャーの設置
    // ------------------------------------------------------------
    // setting
    gb.conf = new Conf();

    // util
    gb.d = new Debugger();
    gb.u = new U();
    gb.f = new Func();

    if (gb.conf.isUpdateMgr) gb.up = new UpdateMgr();
    if (gb.conf.isResizeMgr) gb.r = new ResizeMgr();

    this.onReady();
  }

  onReady() {
    //Loading
    // gb.loading = new LoadMgr();
    // ------------------------------------------------------------
    //  View
    // ------------------------------------------------------------
    // Layout, UI, Effects
    gb.v = new View();
  }

  onLoad() {
    // ------------------------------------------------------------
    //  Util
    // ------------------------------------------------------------
    // ------------------------------------------------------------
    //  Model
    // ------------------------------------------------------------
    // ------------------------------------------------------------
    //  View
    // ------------------------------------------------------------
  }

  setEvents() {
    //
    // $(window).on('load', this.onLoad.bind(this));
    window.addEventListener("load", e => {
      this.onLoad();
    });
  }
}

// ------------------------------------------------------------
//
//  Main
//
// ------------------------------------------------------------
(() => {
  // // globalオブジェクト
  if (window.gb === undefined) window.gb = {};

  gb.common = new Common();

  if (gb.up) gb.up.loop(); //全体のループスタート
})();
