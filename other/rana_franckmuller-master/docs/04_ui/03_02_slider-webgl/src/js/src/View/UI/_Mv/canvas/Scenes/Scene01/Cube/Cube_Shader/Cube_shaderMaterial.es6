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

    this.ready();

    this.add();

    this.loopStart = true;

  }

  ready() {

    var geometry = new THREE.BoxGeometry( 5, 5, 5 );

    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      // texture: {type: 't', value: this.tex},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
    };
    var material = new THREE.ShaderMaterial({
                                      vertexShader: vs,
                                      fragmentShader: fs,
                                      uniforms: this.uniforms,
                                      transparent: true,
                                      depthTest: true,
                                    });
    this.mesh = new THREE.Mesh(geometry, material);



  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);

    this.uniforms.frame.value += gb.up.delta / 100.0;

    this.uniforms.mouse.value.x = gb.m.x / gb.r.w * 0.5;
    this.uniforms.mouse.value.y = gb.m.y / gb.r.h * 0.5;

  }

  draw() {



  }

  timeline() {

  }

  onResize() {

  }

}