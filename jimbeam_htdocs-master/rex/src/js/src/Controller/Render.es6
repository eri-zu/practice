// ------------------------------------------------------------
//
//  Render
//
// ------------------------------------------------------------

import metaData from "../../../ejs/inc/metaData.json";

export default class Render {

  constructor(){

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  switchMeta(page) {

    var d = metaData[page];
    // var dc = metaData['common'];

    // $('title').text(d.tit);
    // // $('.metaDes').attr({'content': d.des});
    // $('.metaKey').attr({'content': d.keyword});

    // $('.fbTit').attr({'content': d.tit});
    // $('.fbDes').attr({'content': d.des});
    // $('.fbImg').attr({'content': d.fb.img});
    // $('.fbUrl').attr({'content': d.fb.url});

    // $('.twTit').attr({'content': d.tit});
    // $('.twDes').attr({'content': d.des});
    // $('.twImg').attr({'content': d.tw.img});
    // $('.twUrl').attr({'content': d.tw.url});

  }

  // switchMeta2() {

  //   // jquery-pjaxから借りた
  //   var $newPageHead = jQuery( '<head />' ).html(
  //      jQuery.parseHTML(
  //         newPageRawHTML.match( /<head[^>]*>([\s\S.]*)<\/head>/i )[ 0 ],
  //         document,
  //         true
  //      )
  //   );
  //   // 変更したいタグ(ご自身の環境に合わせて適宜変更してください)
  //   var headTags = [
  //      "link[rel='canonical']",
  //      "link[rel='shortlink']",
  //      "link[rel='alternate']",
  //      "meta[name='description']",
  //      "meta[property^='og']",
  //      "meta[name^='twitter']",
  //      "meta[name='robots']"
  //   ].join( ',' );
  //   jQuery('head').find(headTags).remove(); // タグを削除する
  //   $newPageHead.find(headTags).appendTo('head'); // タグを追加する
    
  // }

  // // https://qiita.com/resistance_gowy/items/533628e129ff3d2a90df
  // updateSNS() {

  //   twttr.widgets.load();
  //   FB.XFBML.parse();

  //   // twttr.widgets.load($("#detailSns")[0]);
  //   // FB.XFBML.parse($("#detailSns")[0]);

  // }

  // updateGA() {

  //   // Analyticsにヒットを送信(Google Analyticsを導入している場合)
  //   if (typeof ga === 'function') {
  //      ga('send', 'pageview', location.pathname);
  //   }

  // }

  // runScript() {

  //   // 外部ファイルを任意の場所に追加して実行する(オプション)
  //   // 外部ファイルにdocument.write()が書かれていると、それは無視されますので正常に表示されません。
  //   var script = document.createElement('script');
  //   script.src = 'http://example.com/hoge.js';
  //   // document.body.appendChild(script);

  //   // インラインに書いたjsを実行する(オプション)
  //   var temp = document.createElement('div');
  //   temp.innerHTML = newPageRawHTML;
  //   var hoge = temp.querySelector('.hoge script');
  //   if(hoge != null){
  //      eval(hoge.innerHTML);
  //   }

  // }

  log() {

    // log('path:', gb.u.u.path());
    // log('hash:', this.h.getHash());
    // log('query:', this.q.parse());

    // 現在と過去のurlを確認
    var obj = this.checkURL();

  }

  checkURL() {

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

    log('current', pagecur, imgcur);
    log('prev', pageprev, imgprev);

    return {page: [pagecur, pageprev], img: [imgcur, imgprev]};

  }

  setEvents() {

  }

}