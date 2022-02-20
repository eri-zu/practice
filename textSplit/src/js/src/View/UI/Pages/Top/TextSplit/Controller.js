//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import { CustomEase } from "@BALANCeLibs/View/gsap/CustomEase/CustomEase.js";
import { Conf } from "@/Conf";

export default class TextSplitController extends Base {
  constructor() {
    super();

    // this.$item = $(".js-textsplit_txt");
    this.item = document.querySelector(".js-textsplit_txt");

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

    console.log(txt);

    // const spanTxt = itemHTML.replace(/(\S)/g, "<span>$1</span>");

    // // brタグがあっても問題がないように
    // // brで区切る
    // const text = this.$item.html();

    // var split = /<br>/g;
    // var span = text.split(split);

    // // span化
    // for (var i = 0; i < span.length; i++) {
    //   span[i] = span[i].replace(
    //     /(\S)/g,
    //     '<div class="text"><span class="text__wrap">$1</span></div>'
    //   );
    // }

    // // 配列をbr追加して連結
    // var append = span.join('<br area-hidden="true">');

    // this.$item.html(append);
  }

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
