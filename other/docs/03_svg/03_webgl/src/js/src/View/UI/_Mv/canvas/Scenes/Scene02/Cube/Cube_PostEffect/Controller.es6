//--------------------------------------------------
//
//  PostEffect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scene_PE from './Scene_PE.es6';

import vs from './posteffect.vs';
import fs from './posteffect.fs';

export default class PostEffect extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.isUEv = true;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.ready();

    this.add();

  }

  ready() {

    // scene for post effect
    this.spe = new Scene_PE(this.scene, this.camera, this.renderer);

    // plane for post effect
    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      texture: {type: 't', value: this.spe.renderPE.texture},
    };

    this.mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(gb.r.w, gb.r.h, 100, 100),
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