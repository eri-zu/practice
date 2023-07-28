//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
import v from 'Util/Val.es6';

export default class Controller extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    // this.timeline();   

  }

  setup() {

    this.ready();

    this.add();

  }

  ready() {

    this.wrap = new THREE.Object3D();
    this.plane = new THREE.Mesh(new THREE.PlaneGeometry(gb.r.w, gb.r.h, 1, 1),new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:0,depthTest:true}));
    this.wrap.position.z = 0;

  }

  add() {
    
    this.wrap.add(this.plane);
    this.scene.add(this.wrap);

  }

  onResize() {

  }

}