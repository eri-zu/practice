//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scene01 from './Scenes/Scene01/Scene.es6';
// import Scene02 from './Scenes/Scene02/Scene.es6';

export default class Content extends Base {

  constructor($wrap=$('body'), id='cv') {

    super();

    this.isUEv = true; // update
    this.isREv = true; // update

    this.$wrap = $wrap;
    this.id = id;

    this.setup();
    this.setEvents();

  }

  setup() {

    // canvas size
    this.w = this.$wrap.width();
    this.h = this.$wrap.height();

    this.isRetina = true;

    // renderer
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.w, this.h);
    // this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setClearColor(0xffffff, 1.0);
    
    // append
    this.$wrap.prepend(this.renderer.domElement)
    // set style
    $(this.renderer.domElement)
      .css({position: 'absolute',top: 0,left: 0,'z-index': 1,opacity: 1})
      .attr('id', this.id);

    // obj
    this.add();    

  }

  add() {

    this.scene01 = new Scene01(this.renderer);
    // this.scene02 = new Scene02(this.renderer);
    
  }

  update() {

    this.scene01.update();
    // this.scene02.update();

  }

  draw() {

    this.scene01.draw();
    // this.scene02.draw();

  }

  timeline() {


  }

  onResize() {

    var w = this.w;
    var h = this.h;

    this.scene01.onResize();

    this.renderer.setSize(w, h);
    if (this.scene01.isEffectComposer) {
      this.scene01.composer.setSize(w * window.devicePixelRatio, h * window.devicePixelRatio);
    }

  }

}