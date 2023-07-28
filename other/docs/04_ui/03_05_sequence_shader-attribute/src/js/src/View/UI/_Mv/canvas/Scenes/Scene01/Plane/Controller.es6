//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import vs from './shader.vs';
import fs from './shader.fs';

export default class Plane extends Base {

  constructor(scene, camera, src) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.src = src;

    this.setup();
    this.setEvents();
  }

  setup() {

    this.isLoad = false;
    this.svtween = 0; // scale value
    this.sv = 0;
    this.svc = 0;
    this.svTar = 0.8;

    var cnt = 0;
    var onload = ()=>{

      // cnt++;
      // if (cnt<2) return;

      this.tex1.magFilter = THREE.LinearFilter;
      this.tex1.minFilter = THREE.LinearFilter;
      // this.tex2.magFilter = THREE.LinearFilter;
      // this.tex2.minFilter = THREE.LinearFilter;
      // this.tex3.magFilter = THREE.LinearFilter;
      // this.tex3.minFilter = THREE.LinearFilter;
      this.texList.push(this.tex1);
      // this.texList.push(this.tex1,this.tex2,this.tex3);

      this.ready();

      this.add();

      // this.timeline();   

      this.isLoad = true;

    }

    this.texList = [];
    var t = new THREE.TextureLoader();
    this.tex1 = t.load(this.src ,onload);

  }

  ready() {

    this.$text = $('.text');
    this.w = this.$text.width();
    this.h = this.$text.height();

    this.sw = this.texList[0].image.width;
    this.sh = this.texList[0].image.height;

    this.adjust = 2;

    // this.container = new THREE.Object3D();

    // var geo = new THREE.PlaneGeometry(this.sw, this.sh, 1, 1);
    // var geo = new THREE.PlaneGeometry(this.w, this.h, 1, 1);
    var geo = new THREE.PlaneBufferGeometry(this.w, this.h, 1, 1);
    var aPos = new Float32Array(geo.attributes.position.count);
    geo.addAttribute('aPos', new THREE.BufferAttribute(aPos, 1));
    this.pos = geo.attributes.aPos.array;
    this.p = {
      x1: - this.w / 2,
      x2: - this.w / 2,
      x3: - this.w / 2,
      x4: - this.w / 2,
      // x1: - this.w / 2,
      // x2: this.w / 2,
      // x3: - this.w / 2,
      // x4: this.w / 2,
    }
    this.pos[0] = this.p.x1;
    this.pos[1] = this.p.x2;
    this.pos[2] = this.p.x3;
    this.pos[3] = this.p.x4;


    // var mat = new THREE.MeshPhongMaterial( { color: 0xffffff, side: THREE.DoubleSide ,transparent: true, map: this.texture} );
    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(this.w, this.h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(this.sw, this.sh)},
      texture: {type: 't', value: this.texList[0]},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
      opacity: {type: 'f', value: 1.0},

      p: {type: 'f', value: 0.0},
      scale: {type: 'f', value: 0.8},
      move: {type: 'f', value: 0.0},
    };
    var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms,transparent: true,depthTest: true,side: THREE.DoubleSide});

    this.mesh = new THREE.Mesh(geo, mat);
    // log()


    // this.onResize();

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    if (!this.isLoad) return;

    this.pos[0] = this.p.x1;
    this.pos[1] = this.p.x2;
    this.pos[2] = this.p.x3;
    this.pos[3] = this.p.x4;

    this.mesh.geometry.attributes.aPos.needsUpdate = true;

    this.svc += 0.00025;
    this.svTar = this.svc + this.svtween;
    this.svTar = Math.min(1.0, this.svTar);
    this.sv += (this.svTar - this.sv) * 0.06;
    this.uniforms.scale.value = this.sv;

  }

  draw() {


  }

  timeline(delay=0.7) {

    TweenMax.killTweensOf(this);
    this.onU();

    // show / hide
    var tl = new TimelineMax({});

    tl

      // scale
      .set(this, {
        svc: 0.75,
        sv: 0.75,
        svtween: 0.0,
      }, 0.0)
      .set(this.p, {
        x1: - this.w / 2,
        x2: - this.w / 2,
        x3: - this.w / 2,
        x4: - this.w / 2,
      }, 0.0)

      .to(this.p, 1.6, {
        x2: this.w / 2,
        ease: Expo.easeInOut,
      }, 0.0)
      .to(this.p, 1.6, {
        x4: this.w / 2,
        ease: Expo.easeInOut,
      }, 0.0 + 0.07)

      // .to(this.p, 1.6, {
      //   x2: - this.w / 2,
      //   ease: Expo.easeInOut,
      // }, 2.5)
      // .to(this.p, 1.6, {
      //   x4: - this.w / 2,
      //   ease: Expo.easeInOut,
      // }, 2.5 + 0.07)
      .to(this.p, 1.6, {
        x1: this.w / 2,
        ease: Expo.easeInOut,
      }, 5.5)
      .to(this.p, 1.6, {
        x3: this.w / 2,
        ease: Expo.easeInOut,
        onComplete: ()=>{
          this.offU();
        }
      }, 5.5 + 0.07)

      // scale
      .to(this, .7, {
        svtween: 0.09,
        ease: Expo.easeOut,
      }, delay)
    
    // var tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0.0});

    // tl
    //   // scale
    //   .to(this.uniforms.scale, 8.0, {
    //     value: 0.85,
    //     ease: Power0.easeNone,
    //   }, 0.0)

    //   // move
    //   .to(this.uniforms.move, 8.0, {
    //     value: 0.1,
    //     ease: Power0.easeNone,
    //   }, 8.0)

  }

  onResize() {

    this.ratioW = this.w / this.h;
    this.ratio = this.sw / this.sh;

    // size cover
    if (this.ratioW > this.ratio) {

      var scale = this.w / this.sw;
      log('1', scale)
      this.mesh.scale.set(scale, scale, 1);

    } else if ( this.ratioW <= this.ratio) {

      var scale = this.h / this.sh;
      log('2', scale)
      this.mesh.scale.set(scale, scale , 1);

    }

  }

}