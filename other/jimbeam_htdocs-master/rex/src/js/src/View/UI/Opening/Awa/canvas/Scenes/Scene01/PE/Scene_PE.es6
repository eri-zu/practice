//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Awa from '../Awa/Controller.es6';

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

    // this.add();

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

    // objects

    // bg
    // var geo = new THREE.PlaneGeometry(this.w, this.h, 1, 1);
    // var mat = new THREE.MeshBasicMaterial({side: THREE.DoubleSide ,transparent: true, color: 0xFCE85E, depthTest: false, opacity: 1});
    // this.bg = new THREE.Mesh(geo, mat);
    // var scale = 1;
    // this.bg.scale.set(scale, scale , 1);
    // this.scenePE.add(this.bg);

    // awa
    this.a = new Awa(this.scenePE, this.cameraPE, this.renderPE)    

    this.onResize();

  }

  addV() {

    // video
    gb.video = $('video').get(0);
    var geo = new THREE.PlaneGeometry(this.w, this.h, 1, 1);
    this.vtexture = new THREE.VideoTexture(gb.video);
    // var this.vtexture = new THREE.Videothis.vTexture(gb.v.v);
    this.vtexture.minFilter = THREE.LinearFilter;
    this.vtexture.magFilter = THREE.LinearFilter;
    this.vtexture.format = THREE.RGBFormat;
    var mat = new THREE.MeshBasicMaterial({map: this.vtexture});
    this.bg = new THREE.Mesh(geo, mat);
    this.scenePE.add(this.bg);

    log(this.vtexture);


  }

  update() {

    // this.m.rotation.set(gb.up.frame/100,gb.up.frame/50,0);

  }

  draw() {

    if (this.vtexture) this.vtexture.needsUpdate = true;

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