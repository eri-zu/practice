//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Render from './Render.es6';

export default class Controller extends Base {

  constructor($toggle=$('.toggle_menu'),$open=$('.open_menu'),$close=$('.close_menu'),$contents=$('.contents_menu')) {

    super();

    this.name = 'Info';

    this.isUEv = false; // update

    this.$toggle = $toggle;
    this.$open = $open;
    this.$close = $close;
    this.$contents = $contents;

    this.isOpen = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.r = new Render(this.$contents);

  }

  toggle() {

    if (this.isOpen) {

      this.hide();

    } else {

      this.show();

    };

  }

  show(that) {

    this.r.show();

    this.isOpen = true;

  }

  hide() {

    this.r.hide();

    this.isOpen = false;

  }

  setEvents() {

    var self = this;

    super.setEvents();

    // this.$toggle.on('click', this.toggle.bind(this));
    // this.$open.on('click', this.open.bind(this));
    // this.$close.on('click', this.close.bind(this));

  }

}
