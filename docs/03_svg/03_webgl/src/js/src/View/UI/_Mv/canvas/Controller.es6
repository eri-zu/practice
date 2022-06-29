//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import SceneMgr from './Util/SceneMgr.es6';
import Scene01 from './Scenes/Scene01/Scene.es6';
import Scene02 from './Scenes/Scene02/Scene.es6';

export default class Content extends Base {

  constructor($wrap=$('body'), id='cv') {

    super();

    this.$wrap = $wrap;
    this.id = id;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    // canvas size
    this.w = gb.r.w;
    this.h = gb.r.h;

    this.isRetina = true;

    // renderer
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(gb.r.w, gb.r.h);
    this.renderer.setClearColor(0xE8E6DD, 1.0);
    // this.renderer.setClearColor(0xffffff, 1.0);
    
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

    this.sm = new SceneMgr();

    var scene01 = new Scene01(this.renderer);
    var scene02 = new Scene02(this.renderer);

    this.sm.add(scene01);
    this.sm.add(scene02);
    
  }

  update() {

    this.sm.update();

  }

  draw() {

    this.sm.draw();

  }

  timeline() {


  }

  onResize() {

    var w = gb.r.w;
    var h = gb.r.h;

    this.scene01.onResize();

    this.renderer.setSize(w, h);
    if (this.scene01.isEffectComposer) {
      this.scene01.composer.setSize(w * window.devicePixelRatio, h * window.devicePixelRatio);
    }

  }

}