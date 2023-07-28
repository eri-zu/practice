//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import vs from './shader.vs';
import fs from './shader.fs';

export default class Plane extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    this.timeline();   

  }

  setup() {

    this.isUEv = true;

    this.hue = 0.1;

    this.ready();

    this.add();

  }

  ready() {

    var geometry = new THREE.OctahedronGeometry(240, 7);

    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      // texture: {type: 't', value: this.tex},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},

      hue: {type: 'f', value: this.hue},
      cursor: {type: 'v2', value: new THREE.Vector2(-0.5, 1)},
    };
    var material = new THREE.ShaderMaterial({
                                              uniforms: this.uniforms,
                                              vertexShader: vs,
                                              fragmentShader: fs,
                                              transparent: true,
                                              side: THREE.DoubleSide,
                                              shading: THREE.FlatShading,
                                            })
    this.mesh = new THREE.Mesh(geometry, material);

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    this.uniforms.time.value += gb.up.delta / 1000;

  }

  draw() {



  }

  timeline() {

  }

  onResize() {

  }

}