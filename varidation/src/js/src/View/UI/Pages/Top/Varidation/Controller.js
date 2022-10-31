//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";

export default class Controller extends Base {
  constructor() {
    super();

    this.wraps = document.querySelectorAll(".js-validitem");
    this.inputs = document.querySelectorAll(
      ".js-validitem input,.js-validitem textarea,.js-validitem select"
    );
    this.btn = document.querySelector('input[type="submit"]');
    this.errors = {};

    this.setup();
    this.setEvents();
  }

  setup() {
    this.inputs.forEach((input, i) => {
      const id = input.id;
      this.errors[id] = "";
    });

    this.regexData = {
      email:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      tel: /^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/,
    };
  }

  check(target) {
    console.log(this.errors);
    let value = target.value;
    const isEmpty = !value;
    const id = target.id;
    const type = target.type;
    const isRequired = target.dataset.required;

    let index = Array.from(this.inputs).indexOf(target);
    index = index == 0 || index == 1 ? 0 : index - 1;
    const errorDom = this.wraps[index].querySelector(".errorwrap");

    let regexPattern;

    if (type == "email") {
      regexPattern = this.regexData.email;
    }

    if (type == "tel") {
      regexPattern = this.regexData.tel;
      value = value.replace(/-/g, "");
    }

    // checkbox
    if (type == "checkbox") {
      if (isRequired && !target.checked) {
        this.isError(id, errorDom);
      } else {
        this.deleteError(id, errorDom);
      }
    }

    console.log(value, isRequired, isEmpty, errorDom, id);

    // text
    if (
      type == "text" ||
      type == "textarea" ||
      type == "select-one" ||
      type == "file"
    ) {
      if (isRequired && isEmpty) {
        console.log("aaaaa");
        this.isError(id, errorDom);
      } else {
        console.log("bbbb");
        this.deleteError(id, errorDom);
      }
    }

    // tel, email
    if (type == "tel" || type == "email") {
      const regex = new RegExp(regexPattern);
      const invalidRegex = !regex.test(value);

      if (
        (isRequired && (isEmpty || invalidRegex)) || // 必須
        (!isRequired && invalidRegex && value) // not 必須
      ) {
        this.isError(id, errorDom);
      } else {
        this.deleteError(id, errorDom);
      }
    }

    // 送信ボタン
    const errorCount = Object.keys(this.errors).length; // objのkeyを配列で取得
    this.checkBtn(errorCount);
  }

  isError(id, errorDom) {
    console.log("isError!!", id);
    this.errors[id] = "isError";
    if (errorDom) errorDom.classList.add("isActive");
  }

  deleteError(id, errorDom) {
    delete this.errors[id]; // objからidプロパティを削除
    if (errorDom) errorDom.classList.remove("isActive");
  }

  checkBtn(errorCount) {
    console.log(errorCount);
    // エラーカウント判定
    if (errorCount == 0) {
      this.btn.classList.add("isActive");
    } else {
      this.btn.classList.remove("isActive");
    }
  }

  setEvents() {
    super.setEvents();

    // input:入力の都度
    // change:フォーカス外れたとき、enterで確定した時
    // blur:フォーカス外れたとき

    const events = ["input", "change", "blur"];

    this.inputs.forEach((input, i) => {
      events.forEach((event, i) => {
        input.addEventListener(event, (e) => {
          console.log("aaaa");
          this.check(e.target);
        });
      });
    });

    // display noneにしてるので、blurとかinputにかけてもきかない
    // const windowevents = ["focus", "blur"];

    // windowevents.forEach((windowevent, i) => {
    //   window.addEventListener(windowevent, (e) => {
    //     setTimeout(() => {
    //       this.check(document.querySelector('input[type="file"]'));
    //     }, 1000);
    //   });
    // });

    window.addEventListener("focus", (e) => {
      // console.log("focus");
      // fileモーダル消えた時、focus
      this.check(document.querySelector('input[type="file"]'));
    });
  }
}
