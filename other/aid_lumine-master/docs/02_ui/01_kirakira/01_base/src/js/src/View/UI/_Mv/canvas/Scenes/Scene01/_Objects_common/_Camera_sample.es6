//--------------------------------------------------
//
//  Camera
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';
import * as m from 'Util/Math/index.es6';

import Move from '../../../Util/Move.es6';

export default class Camera extends Base {  

  constructor(scene) {

    super();

    this.scene = scene;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.view = {
      firstpos : {x: -20, y: 20, z: 100},
      zoomout : {x: 150, y: 100, z: 300},
      zoomin : {x: 0, y: 0, z: 50},
    }

    this.x = this.view.firstpos.x;
    this.y = this.view.firstpos.y;
    this.z =this.view.firstpos.z;
    this.lookx = 0;
    this.looky = 0;
    this.lookz = 0;

    this.fov    = 45;
    this.aspect = gb.r.w / gb.r.h;
    this.near   = 1;
    this.far    = 50000;

    this.ready();

    // this.addHelper();

    // this.param();

    this.progress = 0;
    
    // this.timeline();

  }

  ready() {

    this.camera = new THREE.PerspectiveCamera( this.fov, this.aspect, this.near, this.far );
    this.camera.position.set(this.x ,this.y, this.z);

    // 円弧の形に移動
    this.ma = new Move()

  }

  update() {

    // rotate y axis
    // this.camera.position.x = Math.sin(gb.up.frame / 100) * 50;
    // this.camera.position.z = Math.cos(gb.up.frame / 100) * 50;

    // mousemove
    // var strength = 0.1;
    // this.x += ( - gb.m.cx * strength - this.x ) * 0.08;
    // this.y += ( gb.m.cy * strength - this.y ) * 0.08;
    // this.camera.position.set(this.x ,this.y, this.z);

    // move arc
    // var rad = Math.PI / 2;
    // var percent = gb.m.cx / (gb.r.w / 2); 
    // var radius = 50;
    // var offset = Math.PI / 2;
    // this.ma.tx = percent * rad;
    // this.ma.ease();
    // this.x = Math.cos(offset + this.ma.x) * radius;
    // this.z = Math.sin(offset + this.ma.x) * radius;

    var x1 = gb.meshs[0].p.container_orbit.position.x;
    var y1 = gb.meshs[0].p.container_orbit.position.y;
    var z1 = gb.meshs[0].p.container_orbit.position.z;
    var x2 = gb.meshs[2].p.container_orbit.position.x;
    var y2 = gb.meshs[2].p.container_orbit.position.y;
    var z2 = gb.meshs[2].p.container_orbit.position.z;

    this.lookx = m.lerp(x1, x2, this.progress);
    this.looky = m.lerp(y1, y2, this.progress);
    this.lookz = m.lerp(z1, z2, this.progress);

    this.camera.position.set(this.x, this.y, this.z);
    this.camera.lookAt({x: this.lookx, y: this.looky, z: this.lookz});

  }

  addHelper() {

    var helper = new THREE.CameraHelper( this.camera );
    this.scene.add( helper );

  }

  param() {

    this.p = {
      x: 0.0,
      y: 0.0,
      z: 100.0,
      lookx: 0.0,
      looky: 0.0,
      lookz: 0.0,
      fov:  80,
      near: 0.1,
      far: 10000.0,
    };

    var gui = new dat.GUI();

    // init
    this.camera.position.set(this.p.x, this.p.y, this.p.z);
    this.lookx = this.p.lookx;
    this.looky = this.p.looky;
    this.lookz = this.p.lookz;
    this.camera.fov = this.p.fov;
    this.camera.near = this.p.near;
    this.camera.far = this.p.far;

    gui.add(this.p, 'lookx', -200, 200, 1).onChange((v)=>{this.lookx = v});
    gui.add(this.p, 'looky', -200, 200, 1).onChange((v)=>{this.looky = v});
    gui.add(this.p, 'lookz', -1000, 1000, 1).onChange((v)=>{this.lookz = v});
    gui.add(this.p, 'fov', 0, 200, 1).onChange((v)=>{this.camera.fov = v});
    gui.add(this.p, 'near', 0, 20000, 10.0).onChange((v)=>{this.camera.near = v});
    gui.add(this.p, 'far', 0, 20000, 10.0).onChange((v)=>{this.camera.far = v});

  }

  timeline() {

    var tl = new TimelineMax();  

    tl
      // ------------------------------------------------------------
      // zoomout view
      // ------------------------------------------------------------
      .to(this, 4, {
        y: this.view.zoomout.y,
        z: this.view.zoomout.z,
        ease: Expo.easeInOut
      }, 0.0)
      .to(this, 4, {
        x: this.view.zoomout.x,
        ease: Power4.easeInOut
      }, 0.0)
      // lookat
      .to(this, 4, {
        progress: 0,
        ease: Power4.easeInOut
      }, 0.0)

      // ------------------------------------------------------------
      // zoomin view
      // ------------------------------------------------------------
      .to(this, 5.0, {
        x: this.view.zoomin.x,
        ease: Power2.easeInOut
      }, 3.8)
      .to(this, 5.0, {
        y: this.view.zoomin.y,
        ease: Power2.easeInOut
      }, 3.8)
      .to(this, 5.0, {
        z: this.view.zoomin.z,
        ease: Expo.easeInOut
      }, 3.8)
      .to(this, 5.0, {
        progress: 1,
        ease: Power4.easeInOut
      }, 3.8)

  }

  onResize() {


  }

}
