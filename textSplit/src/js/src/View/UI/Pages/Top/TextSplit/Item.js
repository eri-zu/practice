//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";

export default class Item extends Base {
  constructor(item) {
    super();

    this.item = item;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.split();
  }

  split() {
    // html取得
    const itemHTML = this.item.innerHTML;

    // 文字を<br>で分割
    // str.split(区切り文字・正規表現, 分割数) : strを区切り文字で分割
    // 戻り値は配列
    const separator = /<br>/g;
    const splitTextArray = itemHTML.split(separator);

    // txtをspanで囲む
    // replace(検索文字, 置換文字)
    // // : 検索条件
    // \S : 空白文字以外
    // () : グループ化
    // /g : 該当するもの全て
    // $1 : ()の戻り値が前から順番に$1, $2,,,
    const txt = splitTextArray.map((el, i) => {
      return el.replace(/(\S)/g, "<span>$1</span>");
    });

    // <br>で連結
    // join : 配列の全要素を連結した文字列を新たに作成して返す
    const txtAll = txt.join("<br>");

    // 要素内を書き換える
    this.item.innerHTML = txtAll;
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
