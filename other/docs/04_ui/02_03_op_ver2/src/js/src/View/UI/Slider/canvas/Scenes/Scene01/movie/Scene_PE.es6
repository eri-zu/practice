//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

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

    gb.video = document.getElementById('video');
    this.W = 648 * 2;
    this.H = 600;
    this.w = $(gb.video).width();
    this.h = $(gb.video).height();
    // scene
    this.renderPE = new THREE.WebGLRenderTarget(this.W * 2, this.H * 2);
    this.scenePE = new THREE.Scene();
    this.cameraPE = new THREE.PerspectiveCamera(45, this.W / this.H, 1, 100000);

    var fov = 45;
    var vFOV = fov * (Math.PI / 180); // convert to radians
    var vpHeight = this.H // viewport height;
    var z = vpHeight / (2 * Math.tan(vFOV / 2) );
    log(z);
    // this.cameraPE.position.set(0, 0, 2000);
    this.cameraPE.position.set(0, 0, z);

    this.cameraPE.lookAt(new THREE.Vector3());


    // log('z', z);


    // objects
    var geometry = new THREE.PlaneGeometry( this.w, this.h, 1, 1);

    var texture = new THREE.VideoTexture(gb.video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    var material = new THREE.MeshBasicMaterial({map: texture});
    this.m = new THREE.Mesh(geometry, material);

    this.onResize();

  }

  add() {

    this.scenePE.add(this.m);

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