//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Sphere from '../../Sphere/Controller.es6';
import Points from '../../Basics/Point.es6';
import CurveLineAnimation from '../../Basics/CurveLineAnimation.es6';

export default class Plane extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    // this.isUEv = true;

    this.setup();
    this.setEvents();

    this.timeline();   

  }

  setup() {

    this.ready();

    // this.add();

  }

  ready() {

    // scene
    this.renderPE = new THREE.WebGLRenderTarget(gb.r.w * 2, gb.r.h * 2);
    this.scenePE = new THREE.Scene();
    this.cameraPE = new THREE.PerspectiveCamera(45, gb.r.w / gb.r.h, 1, 100000);
    this.cameraPE.position.set(0, 0, 1000);
    this.cameraPE.lookAt(new THREE.Vector3());

    // objects
    // var geometry = new THREE.BoxGeometry( 5, 5, 5 );
    // var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // this.m = new THREE.Mesh(geometry, material);
    // this.sphere = new Sphere(this.scenePE, this.cameraPE, this.rendererPE);
    this.points = new Points(this.scenePE, this.cameraPE, this.rendererPE);
    // this.CurveLineAnimation = new CurveLineAnimation(this.scenePE, this.cameraPE, this.rendererPE);

    this.tex = this.renderPE.texture;

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

  }

}