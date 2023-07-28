//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Render from './Render.es6';

export default class Controller extends Base {

  constructor($toggle=$('.toggle_modal'),$open=$('.open_modal'),$close=$('.close_modal'),$contents=$('.modal_contents')) {

    super();

    this.name = 'Modal';

    // this.$toggle = $toggle;
    this.$open = $open;
    this.$close = $close;
    this.$contents = $contents;

    this.isOpen = false;
    this.isREv = true;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.r = new Render(this.$contents);

  }

  toggle() {

    if (this.isOpen) {

      this.close();

    } else {

      this.open();

    };

    this.isOpen = !this.isOpen;

  }

  open() {

    this.r.show();

    this.isOpen = true;

  }

  close() {

    this.r.hide();

    this.isOpen = false;

  }

  onResize() {

    this.r.l.onResize();

  }

  setEvents() {

    var self = this;

    super.setEvents();

    this.$contents.find('.videoWrap').add(this.$contents.find('.boxWrap .box')).on('click', function(e){e.stopPropagation();});
    this.$open.on('click', function(e){
      
      self.open.call(self, this)
    });
    this.$close.on('click', this.close.bind(this));
    this.$contents.on('click', this.close.bind(this));



  }

}