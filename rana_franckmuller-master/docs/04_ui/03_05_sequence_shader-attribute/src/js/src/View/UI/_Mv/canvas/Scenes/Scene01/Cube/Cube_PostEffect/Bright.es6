//--------------------------------------------------
//
//  PostEffect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import vs from './bright.vs';
import fs from './bright.fs';

export default class PostEffect extends Base {

  constructor(tex) {

    super();

    this.tex = tex;

    // this.isUEv = true;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.ready();

    // this.add();

  }

  ready() {

    // scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, gb.r.w / gb.r.h, 1, 2);

    // plane for post effect
    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},

      minBright: {type: 'f', value: 0.2},
      texture: {type: 't', value: this.tex},
    };

    this.mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2, 2),
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

  onResize() {

    this.uniforms.resolution.value.x = gb.r.w;
    this.uniforms.resolution.value.y = gb.r.h;

  }

}