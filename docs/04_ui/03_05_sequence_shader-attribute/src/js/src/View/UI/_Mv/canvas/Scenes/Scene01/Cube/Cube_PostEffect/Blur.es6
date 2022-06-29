//--------------------------------------------------
//
//  PostEffect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import vs from './blur.vs';
import fs from './blur.fs';

export default class PostEffect extends Base {

  constructor(tex, direction) {

    super();

    this.tex = tex;
    this.direction = direction;

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

    // gaussianフィルタの重み係数を算出
    var value = 10;
    var weight = new Array(10);
    var t = 0.0;
    var d = value * value / 100;
    for(var i = 0; i < weight.length; i++){
        var r = 1.0 + 2.0 * i;
        var w = Math.exp(-0.5 * (r * r) / d);
        weight[i] = w;
        if(i > 0){w *= 2.0;}
        t += w;
    }
    for(var i = 0; i < weight.length; i++){
        weight[i] /= t;
    }

    log(weight);

    // plane for post effect
    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w / 10, gb.r.h / 10)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},

      direction: {type: 'v2', value: this.direction},
      texture: {type: 't', value: this.tex},
      weight: {type: 'fv1', value: weight},
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

    this.uniforms.resolution.value.x = gb.r.w / 10;
    this.uniforms.resolution.value.y = gb.r.h / 10;

  }

}