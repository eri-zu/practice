//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import vs from './shader.vs';
import fs from './shader.fs';

import * as m from 'Util/Math/index.es6';


export default class Plane extends Base {

  constructor(scene, camera, src) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.src = src;

    this.setup();
    this.setEvents();

    this.timeline();   

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;
    this.time = 0;

    this.isRun = false;
    this.isDown = false;
    this.x = 0;
    this.sx = 0;
    this.sumx = 0;
    this.tarx = 0;

    this.y = 0;
    this.sy = 0;
    this.sumy = 0;
    this.tarx = 0;

    // this.ease = 0.125;
    this.ease = 0.25;

    this.ready();

  }

  ready() {

    // this.container = new THREE.Object3D();

    var cnt = 0;

    var t = new THREE.TextureLoader();
    var onLoad = ()=>{

      cnt++;
      if (cnt<3) return;

      this.texture.wrapS = THREE.RepeatWrapping;
      this.texture.wrapT = THREE.RepeatWrapping;

      // var geo = new THREE.PlaneGeometry(this.texture.image.width / 2, this.texture.image.height / 2, 10, 10);
      var geo = new THREE.PlaneGeometry(gb.r.w, gb.r.h, 1, 1);

      // var mat = new THREE.MeshBasicMaterial( { map: this.texture, side: THREE.DoubleSide ,transparent: true} );    
      this.uniforms = {
        time: {type: 'f', value: 1.0},
        frame: {type: 'f', value: 0.0},
        resolution: {type: 'v2', value: new THREE.Vector2(this.texture.image.width, this.texture.image.height)},
        imageResolution: {type: 'v2', value: new THREE.Vector2(this.texture.image.width, this.texture.image.height)},
        texture: {type: 't', value: this.texture},
        map: {type: 't', value: this.tex2},
        mapNext: {type: 't', value: this.tex3},
        mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
        opacity: {type: 'f', value: 1.0},

        disp: {type: 'f', value: 0.0},
      };
      var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms,transparent: true,depthTest: true,side: THREE.DoubleSide});

      this.mesh = new THREE.Mesh(geo, mat);

      var scale = 1;
      this.mesh.scale.set(scale, scale , 1);
      
      // add      
      this.add();

      this.onResize();

    }
    this.texture = t.load(this.src, onLoad);
    this.tex1 = t.load('./assets/resource/img/tex1.jpeg', onLoad);
    this.tex2 = t.load('./assets/resource/img/tex2.jpeg', onLoad);
    this.tex3 = t.load('./assets/resource/img/tex3.jpeg', onLoad);

    this.vec = new THREE.Vector3();

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    if (this.mesh==undefined) return;

    // frame
    this.uniforms.frame.value = gb.up.frame;

    // disp
    // マウスを押した位置から離れている値
    var disx = gb.m.x - this.sx;
    var disy = gb.m.y - this.sy;
    if (this.isDown) {
      this.tarx = this.sumx + disx * 1.0; // マウスの離れている距離  // 前回値を足す
      this.tary = this.sumy + disy * 1.0; // マウスの離れている距離  // 前回値を足す
    } else {
      this.tarx = 0.0; // マウスの離れている距離  // 前回値を足す
      this.tary = 0.0; // マウスの離れている距離  // 前回値を足す
    }

    // 摩擦
    var friction = 0.3;
    this.tarx *= friction;
    this.tary *= friction;

    this.x += (this.tarx - this.x) * this.ease;
    this.y += (this.tary - this.y) * this.ease;
      
    var x = m.constrain(this.x, -100, 100);
    x = m.map(x, -1.0, 1.0, -100, 100);

    this.uniforms.disp.value = x;


    if (x<0) {
      this.uniforms.mapNext.value = this.tex1;
    } else {
      this.uniforms.mapNext.value = this.tex3;
    }


  }

  draw() {



  }

  timeline() {

  }

  onResize() {

    // this.ratioW = gb.r.h / gb.r.w;
    // this.ratio = this.texture.image.height / this.texture.image.width;

    // // size cover
    // if (this.ratioW > this.ratio) {

    //   var scale = gb.r.h / this.texture.image.height;
    //   this.mesh.scale.set(scale, scale, 1);

    // } else if ( this.ratioW <= this.ratio) {

    //   var scale = gb.r.w / this.texture.image.width * 1.01;
    //   this.mesh.scale.set(scale, scale , 1);

    // }

  }

  onDown() {

    this.isDown = true;

    // マウスを押した位置の保存
    this.sx = gb.m.x;
    this.sy = gb.m.y;


    $('body')
      .removeClass('grab')
      .addClass('grabbing');
    
  }

  onUp() {

    this.isDown = false;

    this.sumx = 0;
    this.sumy = 0;

    $('body')      
      .removeClass('grabbing')
      .addClass('grab');

  }

  setEvents() {

    super.setEvents();

    // grab
    $(window).on('mousedown', this.onDown.bind(this));
    $(window).on('mouseup', this.onUp.bind(this));

  }

}