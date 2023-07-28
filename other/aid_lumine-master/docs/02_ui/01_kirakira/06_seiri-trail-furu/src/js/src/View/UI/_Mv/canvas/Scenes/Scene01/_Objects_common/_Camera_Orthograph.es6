//--------------------------------------------------
//
//  Camera
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Camera extends Base {  

  constructor(scene) {

    super();

    this.scene = scene;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.ready();

    this.loopStart = true;

  }

  ready() {

    var size = gb.r.h;

    this.x = 0;
    this.y = 0;
    this.z = 1000;
    this.lookx = 0;
    this.looky = 0;
    this.lookz = 0;

    this.aspect = gb.r.w / gb.r.h;
    this.left = - size / 2 * this.aspect;
    this.right = size / 2 * this.aspect;
    this.top = size / 2;
    this.bottom = - size / 2;
    this.near   = 1;
    this.far    = 10000;


    this.camera = new THREE.OrthographicCamera(this.left, this.right, this.top, this.bottom, this.near, this.far);
    this.camera.position.set(this.x ,this.y, this.z)

  }

  update() {

    // this.camera.position.x = Math.sin(this.rad) * 200;
    // this.camera.position.z = Math.cos(this.rad) * 200;

    // this.rad += Math.PI / 20;

    // this.camera.position.x += ( - gb.in.m.cx * 0.01 * this.val - this.camera.position.x ) * 0.08;
    // this.camera.position.y += ( - gb.in.m.cy * 0.01 * this.val - this.camera.position.y ) * 0.08;
    this.camera.lookAt( this.scene.position );

  }

  set2DView() {

    var size = gb.r.h;

    this.aspect = gb.r.w / gb.r.h;
    this.left = - size / 2 * this.aspect;
    this.right = size / 2 * this.aspect;
    this.top = size / 2;
    this.bottom = - size / 2;

    this.camera.left   = this.left;
    this.camera.right  = this.right;
    this.camera.top    = this.top;
    this.camera.bottom = this.bottom;
    this.camera.updateProjectionMatrix();

  }

  onResize() {


  }

}
