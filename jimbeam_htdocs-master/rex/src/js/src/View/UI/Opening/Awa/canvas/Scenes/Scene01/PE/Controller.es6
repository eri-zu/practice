//--------------------------------------------------
//
 // Plane 全画面
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scene_PE from './Scene_PE.es6';
import Scene_PE_mask from './Scene_PE_mask.es6';

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

  }

  setup() {

    // plane awa 白
    this.spe = new Scene_PE(this.renderer);
    // plane awa mask
    this.spe_mask = new Scene_PE_mask(this.renderer);

    this.ready();

  }

  ready() {

    // this.container = new THREE.Object3D();

    var w = gb.r.w;
    var h = gb.r.h;
    var geo = new THREE.PlaneBufferGeometry(w, h, 1, 1);    

    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(w, h)},
      texture: {type: 't', value: this.spe.renderPE.texture},
      texture_mask: {type: 't', value: this.spe_mask.renderPE.texture},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
      opacity: {type: 'f', value: 1.0},
    };
    var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms,transparent: true,depthTest: true,side: THREE.DoubleSide});
    this.mesh = new THREE.Mesh(geo, mat);

    this.scene.add(this.mesh);

  }

  add() {

    // this.scene.add(this.mesh);

  }

  update() {


  }

  draw() {



  }

  show() {

    var tl = new TimelineMax();
    tl
      .add(()=>{

        this.spe.addV();
        this.spe.a.show();

      }, 0.0)
      .add(()=>{

        this.spe_mask.a.show();

      }, 1.2)
      .add(()=>{

        this.spe.offU();

      }, 5.5)
      .add(()=>{

        this.spe_mask.offU();

      }, 10.0)

  }

  onResize() {

    // this.uniforms.resolution.value.x = gb.r.w;
    // this.uniforms.resolution.value.y = gb.r.h;


  }

}