//--------------------------------------------------
//
//  PostEffect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import vs from './bloom.vs';
import fs from './bloom.fs';

export default class PostEffect extends Base {

  constructor(scene, camera, renderer, texBase, texLast) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.texBase = texBase;
    this.texLast = texLast;

    // this.isUEv = true;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.ready();

    // this.add();

  }

  ready() {

    // plane for post effect
    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},

      tone: {type: 'f', value: 0.7},
      strength: {type: 'f', value: 3},
      fixBlur: {type: 'f', value: 10.0},
      textureBase: {type: 't', value: this.texBase},
      texture: {type: 't', value: this.texLast},

      contrast: {type: 'f', value: 0.5},
      bright: {type: 'f', value: 0.5},
    };

    this.mesh = new THREE.Mesh(
      // new THREE.PlaneBufferGeometry(2, 2),
      new THREE.PlaneBufferGeometry(gb.r.w, gb.r.h),
      new THREE.ShaderMaterial({uniforms: this.uniforms,vertexShader: vs,fragmentShader: fs})
    );

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    this.uniforms.frame.value += gb.up.delta;

  }

  draw() {

    
  }

  timeline() {


  }

  onResize() {

    this.uniforms.resolution.value.x = gb.r.w;
    this.uniforms.resolution.value.y = gb.r.h;

  }

}