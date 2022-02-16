//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Awa_mask from '../Awa_mask/Controller.es6';

export default class Plane extends Base {

  constructor(renderer) {

    super();

    this.renderer = renderer;

    this.isUEv = true;

    this.setup();
    this.setEvents();

    this.timeline();   

  }

  setup() {

    this.ready();

    this.add();

  }

  ready() {

    this.w = gb.r.w;
    this.h = gb.r.h;

    // scene
    this.renderPE = new THREE.WebGLRenderTarget(this.w * 2, this.h * 2);
    this.scenePE = new THREE.Scene();
    this.cameraPE = new THREE.PerspectiveCamera(45, this.w / this.h, 1, 100000);

    var fov = 45;
    var vFOV = fov * (Math.PI / 180); // convert to radians
    var vpHeight = gb.r.h // viewport height;
    var z = vpHeight / (2 * Math.tan(vFOV / 2) );
    log(z);
    // this.cameraPE.position.set(0, 0, 2000);
    this.cameraPE.position.set(0, 0, z);
    this.cameraPE.lookAt(new THREE.Vector3());

    this.a = new Awa_mask(this.scenePE, this.cameraPE, this.renderPE)
    

    this.onResize();

  }

  add() {

    // this.scenePE.add(this.m);

  }

  update() {

    // this.m.rotation.set(gb.up.frame/100,gb.up.frame/50,0);

  }

  draw() {

    this.renderer.render(this.scenePE, this.cameraPE, this.renderPE);

  }

  timeline() {

  }

  onResize() {

    this.ratioW = this.W / this.H;
    this.ratio = this.w / this.h;

    // size cover
    if (this.ratioW > this.ratio) {

      var scale = this.H / this.h;
      log('1', scale)
      this.m.scale.set(scale, scale, 1);

    } else if ( this.ratioW <= this.ratio) {

      var scale = this.W / this.w * 1.01;
      log('2', scale)
      this.m.scale.set(scale, scale , 1);

    }

  }


}