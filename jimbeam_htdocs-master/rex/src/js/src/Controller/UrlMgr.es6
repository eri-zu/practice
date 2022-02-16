// ------------------------------------------------------------
//
//  UrlMgr
//
// ------------------------------------------------------------

import PushState from './PushState.es6';
import Query from './Query.es6';
import HistoryMgr from './HistoryMgr.es6';

import Render from './Render.es6';

export default class UrlMgr {

  constructor(){

    this.p = new PushState(this);
    this.q = new Query(this.p);
    this.hs = new HistoryMgr();

    this.r = new Render();

    this.cnt = 0;
    
    this.setup();
    this.setEvents();

  }

  setup() {

    // 初回時 add history
    this.hs.add({path: gb.u.u.path(), query: this.q.parse()})
    // this.log();

    this.p.cb = this.onTransitionByBrowser.bind(this);

    var u = this.q.parse();
    this.r.switchMeta(u.page);

  }

  switchURL(by, link) {

    this.p.removeEvents(); // ハッシュ追加でpopstateが呼ばれるのを防ぐため、url変更のためにremoveEvents

    switch (by){
      case 'pushstate':
        this.p.set(link);
        break;
      case 'hash':
        // this.h.switchHash(link);
        break;
      case 'query':
        this.q.set(link);
        break;
    }

    // meta情報の変更
    // this.switchMeta('link');

    // hisotryの積み上げ
    this.hs.add({path: gb.u.u.path(), query: this.q.parse()})

    this.p.setEvents();

    var obj = this.checkURL();
    // イベント発行
    // $(window).trigger('switchURL', [obj.page[0],obj.page[1],obj.img[0],obj.img[1]]);

    var u = this.q.parse();
    this.r.switchMeta(u.page);

    this.cnt++;

  }

  onTransitionByBrowser() {

    // this.hs.add(newUrl);

    // add history
    this.hs.add({path: gb.u.u.path(), query: this.q.parse()})

    // switch url
     // show/hide contents
    var obj = this.checkURL();

    // イベント発行
    $(window).trigger('switchURL', [obj.page[0],obj.page[1],obj.img[0],obj.img[1]]);

    var u = this.q.parse();
    this.r.switchMeta(u.page);

  }

  log() {

    // log('path:', gb.u.u.path());
    // log('hash:', this.h.getHash());
    // log('query:', this.q.parse());

    // 現在と過去のurlを確認
    var obj = this.checkURL();

  }

  checkURL() {

    // log(this.hs);

    // 現在と過去のurlを確認
    if (this.hs.currentStatus().query.page) var pagecur = this.hs.currentStatus().query.page;
    else var pagecur = '/';
    if (this.hs.currentStatus().query.img) var imgcur = this.hs.currentStatus().query.img;
    else var imgcur = 0;

    var pageprev = null;
    var imgprev = 0;
    if (this.hs.prevStatus()) {
      if (this.hs.prevStatus().query.page) var pageprev = this.hs.prevStatus().query.page;
      else var pageprev = '/';
      if (this.hs.prevStatus().query.img) var imgprev = this.hs.prevStatus().query.img;
      else var imgprev = 0;
    }

    // log('current', pagecur, imgcur);
    // log('prev', pageprev, imgprev);

    return {page: [pagecur, pageprev], img: [imgcur, imgprev]};

  }

  setEvents() {

    var self = this;

  }

}