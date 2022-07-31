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

    this.$target.show();

  }

  hide() {

    this.$target.hide();

  }

}