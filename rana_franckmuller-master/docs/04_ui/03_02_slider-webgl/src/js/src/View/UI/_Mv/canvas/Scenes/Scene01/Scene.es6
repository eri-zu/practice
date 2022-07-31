//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import _Scene from '../Objects_common/_Scene.es6';
import _Camera from '../Objects_common/_Camera.es6';
import _Light from '../Objects_common/_Light.es6';
import Objects from './Objects.es6';

import Effect from './Effect.es6';
import Control from './Control.es6';

export default class Scene extends Base {

  constructor(renderer) {

    super();

    this.isUEv = true; // update

    this.renderer = renderer;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isEffect = true;
    this.isGUI = true;
    this.isControl = true;

    // objÉú³É
    this.add();    

  }

  add() {

    // scene
    this.scene = new _Scene();
    this.scene = this.scene.scene;
    // this.scene.fog = new THREE.FogExp2( 0x000000, 0.0004 );

    // camera
    gb.camera = new _Camera(this.scene);
    this.camera = gb.camera.camera;

    // light
    this.light = new _Light(this.scene);

    // objects
    this.obj = new Objects(this.scene, this.camera, this.renderer);

    // effect
    this.e = new Effect(this.isEffect, this.isGUI, this.renderer, this.scene, this.camera);

    // control
    this.c = new Control(this.isControl, this.renderer, this.camera);

  }

  update() {

    if (this.c.isControl) this.c.controls.update();

  }

  draw() {

    if (this.e.isEffect) {

      this.e.composer.render();

    } else {

      this.renderer.render(this.scene, this.camera);  

    }

  }

  show() {

  }

  hide() {

  }

  state() {

  }

  onResize() {

    var w = gb.r.w * window.devicePixelRatio;
    var h = gb.r.h * window.devicePixelRatio;

    gb.camera.onResize();

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

  }

  setEvents() {

  }

}