import { ResourcePath } from "./ResourcePath.es6";
import ResourceMgr from "./ResourceMgr/Controller.es6";
import View from "./View/Controller.es6";
export default class Controller {
  constructor() {
    this.setup();
    this.startTime = new Date();
    this.count = 0;
    this.MAX = ResourcePath.preload.max + ResourcePath.load.max;
  }

  setup() {
    this.resourceMgr = new ResourceMgr();
    this.preload();
  }

  preload() {
    //preload
    const obj = ResourcePath.preload.js;
    const p = [];
    obj.map(path => {
      p.push(this.resourceMgr.scriptLoad(path));
    });
    Promise.all(p).then(e => {
      this.count = obj.length;
      this.ready();
    });
  }

  ready() {
    this.viewController = new View();
    this.viewController.show();
    //処理落ち対策で、delay
    setTimeout(() => {
      this.mainLoad();
    }, 1000);
  }

  mainLoad() {
    //ライブラリロード
    this.libraryLoad().then(e => {
      ++this.count;
      this.texureLoad();
      this.mainScriptLoad();
    });
  }

  loaded() {
    if (this.MAX == this.count) {
      const now = new Date();
      const diff = now - this.startTime;
      if (diff < 3000) {
        setTimeout(e => {
          this.viewController.hide(e => {
            $(window).trigger("loadEnd");
          });
        }, 3000 - diff);
      } else {
        this.viewController.hide(e => {
          $(window).trigger("loadEnd");
        });
      }
    }
  }

  libraryLoad() {
    const obj = ResourcePath.load.lib;
    const p = [];
    obj.map(path => {
      p.push(this.resourceMgr.scriptLoad(path));
    });
    return Promise.all(p);
  }

  texureLoad() {
    const obj = ResourcePath.load.textures;
    window.gb.textures = [];
    obj.map((t, i) => {
      this.resourceMgr.textureLoad(t.path).then(texture => {
        window.gb.textures.push({
          name: t.name,
          texture: texture,
          index: i
        });

        ++this.count;
        if (window.gb.textures.length == obj.length) {
          //読み込み順番を並び替え
          window.gb.textures.sort((a, b) => {
            return a.index > b.index ? 1 : -1;
          });
          this.loaded();
        }
      });
    });
  }

  mainScriptLoad() {
    const obj = ResourcePath.load.js;
    obj.map(path => {
      this.resourceMgr.scriptLoad(path).then(() => {
        ++this.count;
        this.loaded();
      });
    });
  }
}
