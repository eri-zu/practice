//--------------------------------------------------
//
//  PostEffect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';;

import vs from './posteffect.vs';
import fs from './posteffect.fs';

export default class PostEffect extends Base {

  constructor(tex) {

    super();

    this.name = 'PostEffect';

    this.tex = tex;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.ready();

    this.add();

    this.loopStart = true;

  }

  ready() {

    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      texture: {type: 't', value: this.tex},
    };

    this.mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2, 2, 100, 100),
      new THREE.ShaderMaterial({uniforms: this.uniforms,vertexShader: vs,fragmentShader: fs})
    );

  }

  add() {


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