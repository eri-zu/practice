//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// import Render from './Render.es6';
import Btn from './Btn/Controller.es6';

export default class Controller extends Base {

  constructor($toggle=$('.toggle_menu'),$open=$('.open_menu'),$close=$('.close_menu'),$contents=$('.modal_contents')) {

    super();

    this.name = 'Modal';

    this.$toggle = $toggle;
    this.$open = $open;
    this.$close = $close;
    this.$contents = $contents;

    this.isOpen = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.r = new Render(this.$contents);
    this.b = new Btn();

  }

  toggle() {

    if (this.isOpen) {

      this.close();

    } else {

      this.open();

    };

    // this.isOpen = !this.isOpen;

  }

  open() {

    log('open');

    // this.r.show();

    this.isOpen = true;

  }

  close() {

    log('close');

    // this.r.hide();

    this.isOpen = false;

  }

  setEvents() {

    var self = this;

    // this.$toggle.on('click', this.toggle.bind(this));
    // this.$open.on('click', this.open.bind(this));
    // this.$close.on('click', this.close.bind(this));
    $(window).on('toClose', this.open.bind(this));
    $(window).on('toOpen', this.close.bind(this));

  }

}