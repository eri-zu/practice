//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
import v from 'Util/Val.es6';

import vs from './shader.vs';
import fs from './shader.fs';

export default class Controller extends Base {

  constructor(scene, camera, renderer, len, index) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.index = index;
    this.len = len;

    this.setup();
    this.setEvents();

    // this.timeline();   

  }

  setup() {

    this.ready();

    this.add();

  }

  ready() {

    this.positions = [];
    this.colors = [];
    this.num = 800;

    this.easing = 0.03;
    this.vRadius = 5;
    this.zoff=0;
    this.t = 0;
    this.rotx = 0;
    this.roty = 0;
    this.rotz = 0;


    this.ps = [];

    this.geometry = new THREE.BufferGeometry();

    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      // imageResolution: {type: 'v2', value: new THREE.Vector2(texture.image.width, texture.image.height)},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
      opacity: {type: 'f', value: 1.0},
      t: {type: 'f', value: 0.0},
      h: {type: 'f', value: gb.r.h * 1.0},
    };
    var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms,transparent: true,vertexColors: THREE.VertexColors});

    // gemetryの頂点セット
    this.setVertex();

    // オブジェクト生成
    this.mesh = new THREE.Points(this.geometry, mat);
    this.mesh.position.z = 0;
    this.mesh.material.opacity = 1;

  }

  add() {

    this.scene.add(this.mesh);

  }

  setVertex() {

    this.positions = new Float32Array( this.num * 3 );
    this.colors = new Float32Array( this.num * 3 );
    this.size = new Float32Array( this.num * 1 );
    this.sizeDelay = new Float32Array( this.num * 1 );
    this.frss = new Float32Array( this.num * 1 );
    this.delay = new Float32Array( this.num * 1 );
    this.spdy = new Float32Array( this.num * 1 );
    this.rad = new Float32Array( this.num * 2 );

    this.v = new v();

    var defH = 667;
    var rate = gb.r.h / defH;

    for (var i = 0; i < this.num; i++) {

      var param = {
        // x: (Math.random() - .5) * gb.r.w - 20 - 50 * Math.random(),
        // y: (Math.random() - .5) * gb.r.h - 50 - 100 * Math.random(),
        // z: 0,
        x: (Math.random() - .5) * (gb.r.w * 1.2),
        y: (Math.random() - .5) * gb.r.h,
        z: 0,

        radian:m.radian(Math.random()*360),vradian:0,radius:0,radian2:m.radian(Math.random()*360)*0.3,
        rad: m.radian(360*360*i/this.num), rad2: m.radian(360*i/this.num),
        vRad: m.radian(0.4 + Math.random()*0.5),r: 35,

        rotateX: 0,rotateY: 0,rotateZ: 0,

        noise: this.v.noise(0, i*1000),

        stepX:0, stepY: 0,
      }

      // positions
      this.positions[ i * 3 ] = param.x;
      this.positions[ i * 3 + 1 ] = param.y;
      this.positions[ i * 3 + 2 ] = param.z;

      var color = new THREE.Color('#ffffff');
      // if (Math.random()<.2) color = new THREE.Color('#FCE85E');
      this.colors[ i * 3 ] = color.r;
      this.colors[ i * 3 + 1 ] = color.g;
      this.colors[ i * 3 + 2 ] = color.b;

      this.size[ i ] = (.5 + Math.random() * 1) * rate;
      this.sizeDelay[ i ] = 1.0 + Math.random();
      this.frss[ i ] = 1000000;
      this.delay[ i ] = Math.random() * 1;
      // this.spdy[ i ] = 1.0 + (Math.random() - .5)
      this.spdy[ i ] = 4.0 + Math.random() * 20;

      this.rad[ i * 3 ] = Math.random() * Math.PI * 2;
      this.rad[ i * 3 + 1 ] = (Math.random() - .5) * gb.r.w;


    };

    this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
    this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );
    this.geometry.addAttribute( 'size', new THREE.BufferAttribute( this.size, 1 ) );
    this.geometry.addAttribute( 'sizeDelay', new THREE.BufferAttribute( this.sizeDelay, 1 ) );
    this.geometry.addAttribute( 'frs', new THREE.BufferAttribute( this.frss, 1 ) );
    this.geometry.addAttribute( 'delay', new THREE.BufferAttribute( this.delay, 1 ) );
    this.geometry.addAttribute( 'spdy', new THREE.BufferAttribute( this.spdy, 1 ) );
    this.geometry.addAttribute( 'rad', new THREE.BufferAttribute( this.rad, 2 ) );
    this.geometry.center();


    // this.onU();

  }

  update() {

    this.uniforms.frame.value += gb.up.delta / 1000;

    if (this.uniforms.frame.value>5) this.offU();

    // this.m.updateCircle();
    // this.m.updateCircleSize(); // サイズ変更
    // this.m.updateSphere(); // 球体
    // this.m.updateRandomWalk(); // ランダムウォーク
    // this.m.updateGunya(); // ランダムウォーク

  }

  draw() {

  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.onU();

      }, 0.0)

  }

  onResize() {

    this.uniforms.h.value = gb.r.h;

  }

}