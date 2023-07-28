//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import * as m from 'Util/Math/index.es6';
import v from 'Util/Val.es6';

import Particle from './Particle.es6';
import Motion from './Motion.es6';

import vs from './shader.vs';
import fs from './shader.fs';

export default class Controller extends Base {

  constructor(scene, camera, renderer, len, index) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.index = index;
    this.len = len;

    this.setup();
    this.setEvents();

    // this.timeline();   

  }

  setup() {

    this.prev = {
      pos: new THREE.Vector3(),
      rot: new THREE.Vector3(),
      radius: null,
      vradian: 0.001,
    };
    this.next = {
      pos: new THREE.Vector3(),
      rot: new THREE.Vector3(),
      radius: null,
      vradian: 0.001,
    };
    this.param = 0;
    this.cnt = 0;

    this.ready();

    this.add();

    this.m = new Motion(this);

  }

  ready() {

    this.positions = [];
    this.colors = [];
    this.num = 100;

    this.easing = 0.03;
    this.vRadius = 5;
    this.zoff=0;
    this.t = 0;
    this.vRotx = 0;
    this.vRoty = 0;
    this.vRotz = 0;
    this.startRotx = 0;
    this.startRoty = 0;
    this.startRotz = 0;
    this.rotPower = 0;

    this.posRadS = 0;
    this.posF = 0;
    this.posFAdd = 0;
    this.posRadius = 0;

    this.ps = [];

    this.geometry = new THREE.BufferGeometry();

    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(gb.r.w, gb.r.h)},
      // imageResolution: {type: 'v2', value: new THREE.Vector2(texture.image.width, texture.image.height)},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
      opacity: {type: 'f', value: 1.0},

      power: {type: 'f', value: 0.0},
    };
    var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms,transparent: true,blending: THREE.AdditiveBlending,vertexColors: THREE.VertexColors});

    // gemetryの頂点セット
    this.setVertex();

    // オブジェクト生成
    this.mesh = new THREE.Points(this.geometry, mat);
    this.mesh.position.z = 0;
    this.mesh.material.opacity = 1;

    // this.mesh.position.y = (this.index - this.len / 2) * 5 + 2.5;
    this.mesh.position.defy = this.mesh.position.y = (this.index - this.len / 2) * 5;
    this.prev.pos.y = this.next.pos.y = this.mesh.position.y;
    if (this.index%2==0) this.mesh.visible = false;

  }

  add() {

    this.scene.add(this.mesh);

  }

  setVertex() {

    this.positions = new Float32Array( this.num * 3 );
    this.colors = new Float32Array( this.num * 3 );

    this.v = new v();

    var startRad = this.index / this.len * Math.PI * 0.1;
    // var radius = 30 * Math.sin(this.index/this.len * Math.PI + Math.PI / this.len / 2);

    var r = this.len * 5 / 2;
    this.maxradius = r;
    var half = Math.floor(this.len/2);
    var val = Math.abs(half - this.index);
    var tate = val * r / half;
    var radius = Math.pow(r, 2) - Math.pow(tate, 2);
    this.next.radius = this.prev.radius = radius = Math.sqrt(radius);
    if (radius==0) radius = 10;

    // var r = this.len * 5 / 2;
    // var val = 0.5 - Math.abs((this.len/2 - this.index) / this.len);
    // var radius = val * r * 2;

    log(radius, val)

    for (var i = 0; i < this.num; i++) {

      var param = {
        x:m.range(40)*0.5*Math.random(),
        y:m.range(40)*0.5*Math.random(),
        z: 0,

        radian: startRad + i / this.num * Math.PI * 2, vradian:this.prev.vradian, radius:radius,defRadius:radius,
        radian2:m.radian(Math.random()*360)*0.3,
        rad: m.radian(360*360*i/this.num), rad2: m.radian(360*i/this.num),
        vRad: m.radian(0.4 + Math.random()*0.5),
        r: 35,

        rotateX: 0,rotateY: 0,rotateZ: 0,

        noise: this.v.noise(0, i*1000),

        stepX:0, stepY: 0,
      }

      var p = new Particle(param);
      this.ps.push(p);

      // positions
      this.positions[ i * 3 ] = this.ps[i].x;
      this.positions[ i * 3 + 1 ] = this.ps[i].y;
      this.positions[ i * 3 + 2 ] = this.ps[i].z;

      var color = new THREE.Color('#009fe7');
      this.colors[ i * 3 ] = color.r;
      this.colors[ i * 3 + 1 ] = color.g;
      this.colors[ i * 3 + 2 ] = color.b;

    };

    this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
    this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

  }

  update() {

    // 頂点
      this.m.updateCircle();
      // this.m.updateCircleSize(); // サイズ変更
      // this.m.updateSphere(); // 球体
      // this.m.updateRandomWalk(); // ランダムウォーク
      // this.m.updateGunya(); // ランダムウォーク


    // mesh

      // pos
      // var x = m.lerp(this.prev.pos.x, this.next.pos.x, this.param);
      // var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
      // var z = m.lerp(this.prev.pos.z, this.next.pos.z, this.param);
      this.posF += this.posFAdd;
      var x = m.lerp(Math.cos(this.posRadS + this.posF) * this.posRadius, Math.cos(this.posRadS + this.posF) * this.posRadius, this.param);
      var y = m.lerp(this.prev.pos.y, this.next.pos.y, this.param);
      var z = m.lerp(Math.sin(this.posRadS + this.posF) * this.posRadius, Math.sin(this.posRadS + this.posF) * this.posRadius, this.param);
      this.mesh.position.set(x,y,z)
      // rotation
      this.vRotx += (0.01 * this.rotPower);
      this.vRoty += (0.01 * this.rotPower);
      this.vRotz += (0.01 * this.rotPower);
      var rotx = m.lerp(this.prev.rot.x, this.next.rot.x, this.param) + this.vRotx;
      var roty = m.lerp(this.prev.rot.y, this.next.rot.y, this.param) + this.vRoty;
      var rotz = m.lerp(this.prev.rot.z, this.next.rot.z, this.param) + this.vRotz;
      // this.mesh.rotation.set(this.startRotx + this.rotx,this.startRoty + this.roty,this.startRotz + this.rotz);
      this.mesh.rotation.set(rotx,roty,rotz);
      // radius
      var radius = m.lerp(this.prev.radius, this.next.radius, this.param);
      for (var i = 0; i < this.ps.length; i++) {
        var p = this.ps[i];
        p.radius = radius;
      }
      // radian 点々の回転するスピード
      var vradian = m.lerp(this.prev.vradian, this.next.vradian, this.param);
      for (var i = 0; i < this.ps.length; i++) {
        var p = this.ps[i];
        p.vradian = vradian;
      }

      // if (gb.up.frame%30==0) {
      //   log(this.vRotx, this.rotPower);
      //   log(rotx);
      // }

    this.uniforms.frame.value = gb.up.frame/100.0;

  }

  draw() {

  }

  timeline_def(index) {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        TweenMax.to(this.mesh.position, 1.0, {
          y: this.mesh.position.defy,
          ease: Expo.easeInOut,
        })

        // radius
        for (var i = 0; i < this.ps.length; i++) {
          var p = this.ps[i];

          TweenMax.to(p, 1.0, {
            radius: p.defRadius,
            ease: Expo.easeInOut,
          })
        }

        TweenMax.to(this, 2.0, {
          t: 0,
          rotx: 0,
          roty: 0,
          rotz: 0,
          ease: Expo.easeInOut,
        })


      }, 0.0)

  }

  tweenParamTo0() {

    TweenMax.to(this, 1.2, {
      param: 1,
      ease: Expo.easeInOut,
    })

  }

  tweenParamTo1() {

    TweenMax.to(this, 1.2, {
      param: 0,
      ease: Expo.easeInOut,
    })

  }

  reset(index) {

    TweenMax.to(this.uniforms.power, 0.9, {value: 0.0,ease: Power2.easeInOut})

    TweenMax.to(this, 0.9, {rotPower: 0.0,ease: Power2.easeInOut})
    TweenMax.to(this, 0.95, {vRotx: 0,vRoty: 0,vRotz: 0, ease: Power2.easeInOut});
    
    TweenMax.to(this, 0.9, {posRadS: 0, ease: Power2.easeInOut});
    TweenMax.to(this, 0.9, {posFAdd: 0, ease: Power2.easeInOut});
    TweenMax.to(this, 0.9, {posRadius: 0, ease: Power2.easeInOut});     

    // if (index%2==1) {

      TweenMax.to(this.prev.rot, 0.9, {x: 0,y: 0,z: 0, ease: Power2.easeInOut});     
      TweenMax.to(this.prev, 0.9, {radius: this.ps[this.index].defRadius, ease: Power2.easeInOut});     
      TweenMax.to(this.prev.pos, 0.9, {y: this.mesh.position.defy, ease: Power2.easeInOut});

    // } else  {

      TweenMax.to(this.next.rot, 0.9, {x: 0,y: 0,z: 0, ease: Power2.easeInOut});     
      TweenMax.to(this.next, 0.9, {radius: this.ps[this.index].defRadius, ease: Power2.easeInOut});     
      TweenMax.to(this.next.pos, 0.9, {y: this.mesh.position.defy, ease: Power2.easeInOut});

    // }
 
  }

  switch(cur, index) {

    // rotation
    if (cur==1) {
      
      if (index%2==1) {
        // pos
        this.prev.pos.y = 0;
        // rot
        // 綺麗に順番
          TweenMax.to(this, 2.0, {rotPower: 0.5,ease: Power2.easeInOut})
          TweenMax.to(this.prev.rot, 2.5, {x: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
          TweenMax.to(this.prev.rot, 2.5, {y: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
          TweenMax.to(this.prev.rot, 2.5, {z: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
        // 綺麗に1,2回転
          // this.prev.rot.x = 0.00;
          // this.prev.rot.y = 0.00;
          // this.prev.rot.z = 0.00;
          // TweenMax.to(this, 2.5, {startRotx: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
          // TweenMax.to(this, 2.5, {startRoty: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
          // TweenMax.to(this, 2.5, {startRotz: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
        // radius
        // this.prev.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
        this.prev.radius = this.maxradius;
        // vradian
        // this.prev.vradian = 0.001 + (Math.random()-0.5)*0.005;


        var tl = new TimelineMax();
        tl
          .add(()=>{
            this.yokuyou();
          }, 3.0)
      } else {
        // pos
        this.next.pos.y = 0;
        // rot
        // 綺麗に順番
          TweenMax.to(this, 2.0, {rotPower: 0.5,ease: Power2.easeInOut})
          TweenMax.to(this.next.rot, 2.5, {x: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
          TweenMax.to(this.next.rot, 2.5, {y: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
          TweenMax.to(this.next.rot, 2.5, {z: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
        // 綺麗に1,2回転
          // this.next.rot.x = 0.00;
          // this.next.rot.y = 0.00;
          // this.next.rot.z = 0.00;
          // TweenMax.to(this, 2.5, {startRotx: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
          // TweenMax.to(this, 2.5, {startRoty: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
          // TweenMax.to(this, 2.5, {startRotz: this.index * Math.PI * 0.004,ease: Power2.easeInOut})
        // radius
        // this.next.radius = 0.9 * this.maxradius + this.maxradius * 0.1 * Math.random();
        this.next.radius = this.maxradius;
        // vradian
        // this.next.vradian = 0.001 + (Math.random()-0.5)*0.005;


        var tl = new TimelineMax();
        tl
          .add(()=>{
            this.yokuyou();
          }, 3.0)
      }

    }

  }

  yokuyou() {

    var r = Math.random(); 

    // speed止める
    if (r<0.3) {

      // TweenMax.to(this, 2.0, {startRotx: 0, startRoty: 0, startRotz: 0, ease: Expo.easeInOut,})

    // speed早める
    } else if (r<1.0) {

      // var x = '+=' + Math.PI * 2;
      // var y = '+=' + Math.PI * 2;
      // var z = '+=' + Math.PI * 2;
      // TweenMax.to(this, 2.0, {startRotx: x,startRoty: y,startRotz: z, ease: Power2.easeInOut})

    // speed何もしない
    } else if (r<1.0) {


    }

    clearTimeout(this.Timer);
    this.Timer = setTimeout(()=>{
      this.yokuyou();   
    }, 3000 + Math.random()*3000);

  }

  onResize() {

  }

}