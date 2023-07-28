// ------------------------------------------------------------
//
//  UIBase
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class UIBase extends Base {

  constructor() {

    super();

    this.$target = $('.target');

  }

  show() {

    // this.$target.show();
    this.$target.css('display', 'flex');

  }

  hide() {

    this.$target.hide();

  }

}