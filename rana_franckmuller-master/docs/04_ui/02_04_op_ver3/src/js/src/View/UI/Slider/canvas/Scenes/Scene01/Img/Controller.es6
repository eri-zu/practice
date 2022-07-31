//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import vs from './shader.vs';
import fs from './shader.fs';

export default class Plane extends Base {

  constructor(scene, camera, index) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.index = index;

    this.setup();
    this.setEvents();
  }

  setup() {

    this.isLoad = true;
    this.svtween = 0; // scale value
    this.sv = 0;
    this.svc = 0;
    this.svTar = 0.8;

    this.ready();

    this.add();

  }

  ready() {

    this.$text = $('.text');
    this.defw = this.w = gb.$imgWrap.width();
    this.defh = this.h = gb.$imgWrap.height();

    this.sw = gb.texList[this.index-1].image.width;
    this.sh = gb.texList[this.index-1].image.height;

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

    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(this.w, this.h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(this.sw, this.sh)},
      texture: {type: 't', value: gb.texList[this.index-1]},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
      opacity: {type: 'f', value: 1.0},

      p: {type: 'f', value: 0.0},
      scale: {type: 'f', value: 0.8},
      move: {type: 'f', value: 0.0},
    };
    var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms,transparent: true,depthTest: true,side: THREE.DoubleSide});

    this.mesh = new THREE.Mesh(geo, mat);
    // this.mesh.renderOrder = this.index;
    // this.mesh.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    this.mesh.position.z = -1 * this.index * 0.01;


    // this.onResize();

    this.onU();

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

    // log(this.index, this.mesh.position.z, this.p.x1, this.p.x2);
    // log(this.index, this.mesh.position.z);

    this.mesh.geometry.attributes.aPos.needsUpdate = true;

    this.svc += 0.00015;
    this.svTar = this.svc + this.svtween;
    this.svTar = Math.min(1.0, this.svTar);
    this.sv += (this.svTar - this.sv) * 0.06;
    this.uniforms.scale.value = this.sv;

  }

  draw() {


  }

  show(delay) {

    TweenMax.killTweensOf(this);
    // this.offU();
    // this.onU();

    // log(this.index);

    // show / hide
    var tl = new TimelineMax({delay: delay});

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

      // show
      .to(this.p, 1.6, {
        x2: this.w / 2,
        ease: Expo.easeInOut,
      }, 0.0)
      .to(this.p, 1.6, {
        x4: this.w / 2,
        ease: Expo.easeInOut,
      }, 0.0 + 0.07)

      // hide
      .add(()=>{

        if (this.index!==0) return;

        TweenMax.to(this.p, 1.6, {
          x1: this.w / 2,
          ease: Expo.easeInOut,
        })
        TweenMax.to(this.p, 1.6, {
          x3: this.w / 2,
          ease: Expo.easeInOut,
          delay: 0.07,
          onComplete: ()=>{
            // this.offU();
          }
        })

      }, 10.5)

      // scale
      .to(this, .7, {
        svtween: 0.09,
        ease: Expo.easeOut,
      }, 0.7)
    

  }

  next(delay=0.7, len, cb) {

    if (this.tl) this.tl.kill();
    TweenMax.killTweensOf(this);
    // this.offU();
    // this.onU();

    // log(this.index);

    // show / hide
    this.tl = new TimelineMax({});

    this.tl

      // ready
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
      .add(()=>{

        // log(this.p)

        // this.mesh.renderOrder = len;
        this.mesh.position.z = len * 0.01;
        // this.mesh.position.x = 200;

      }, 0.0)

      // show
      .to(this.p, 1.6, {
        x2: this.w / 2,
        ease: Expo.easeInOut,
      }, 0.0)
      .to(this.p, 1.6, {
        x4: this.w / 2,
        ease: Expo.easeInOut,
        onComplete: ()=>{

        }
      }, 0.0 + 0.07)

      // hide
      .to(this.p, 1.6, {
        x1: this.w / 2,
        ease: Expo.easeInOut,
        onStart: ()=>{
          log('onStart');
        }
      }, 6.5)
      .to(this.p, 1.6, {
        x3: this.w / 2,
        ease: Expo.easeInOut,
        onComplete: ()=>{
          // this.offU();
        }
      }, 6.5 + 0.07)

      // scale
      .to(this, .7, {
        svtween: 0.09,
        ease: Expo.easeOut,
      }, delay)


    log('w', this.w);

  }

  hide() {

    this.p = {
      x1: - this.w / 2,
      x2: - this.w / 2,
      x3: - this.w / 2,
      x4: - this.w / 2,
    }

  }

  onResize(isShow) {

    this.w = gb.$imgWrap.width();
    this.h = gb.$imgWrap.height();

    this.uniforms.resolution.value.x = this.w;
    this.uniforms.resolution.value.y = this.h;

    var geo = new THREE.PlaneBufferGeometry(this.w, this.h, 1, 1);
    var aPos = new Float32Array(geo.attributes.position.count);
    geo.addAttribute('aPos', new THREE.BufferAttribute(aPos, 1));
    this.pos = geo.attributes.aPos.array;

    if (isShow) {
      this.p = {
        x1: - this.w / 2,
        x2: this.w / 2,
        x3: - this.w / 2,
        x4: this.w / 2,
      }
    } else {
       this.p = {
         x1: - this.w / 2,
         x2: - this.w / 2,
         x3: - this.w / 2,
         x4: - this.w / 2,
       } 
    }
    this.pos[0] = this.p.x1;
    this.pos[1] = this.p.x2;
    this.pos[2] = this.p.x3;
    this.pos[3] = this.p.x4;

    this.mesh.geometry = geo;

  }

}