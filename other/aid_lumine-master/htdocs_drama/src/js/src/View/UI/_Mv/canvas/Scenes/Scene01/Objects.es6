// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// basic objects
import Plane from './Plane/Controller.es6';

// custom objects

import * as a from 'Util/Array.es6';
import * as m from 'Util/Math.es6';
import * as e from 'Util/Easing.es6';
import Val from 'Util/Val.es6';

export default class Objects extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    // ready
    this.ready();

    // add
    this.add();

  }


  ready() {

    this.makeNum = 0;
    this.snowNum = 0;
    this.currentIntersected = null;

    this.mouse = new THREE.Vector2();
    this.mouseOld = new THREE.Vector2();
    this.mousePoint = new THREE.Vector3();
    this.mouseSpeed = {vx:0,vy:0,dis:0};
    this.pos = {x:0,y:0};
    this.prePos = {x:0,y:0};
    this.dist = 0;

    this.isDown = false;
    this.particles = {};
    this.snows = {};
    this.trails = {};
    this.itemP = {};
    this.types = ['cross','plus','cube','circle','square'];

    this.base = {vx:1,vy:1,scale:.2};

    this.cnt = 0;

    this.v = new Val();

  }

  add() {


    this.raycaster = new THREE.Raycaster();

    // texture
    this.textures();
    
    // plane
    this.plane = new Plane(this.scene, this.camera, this.renderer);

  }

  update() {

    this.cnt++;
    this.pos = {x:this.mousePoint.x,y:this.mousePoint.y};
    this.dist = Math.floor(m.dist(this.pos, this.prePos));

    // intersects
    this.intersects();

    // animation

    // particle update
    for(var o in this.particles) this.particles[o].update();
    for(var o in this.snows) this.snows[o].update();
    for(var o in this.trails) this.trails[o].update();
    for(var o in this.itemP) this.itemP[o].update();

  }

  timeline() {


  }

  show() {


  }

  hide() {

 
  }

  makeParticle (type,position) {

    if (this.dist<20) return;
    this.prePos = this.pos;

    var geo,mat,
        matOption = {depthTest:false,transparent:true,blending: THREE.AdditiveBlending},
        // matOption = {depthTest:false,transparent:true},
        offsets = {scale:0.5,marginX:0,marginY:0,vx:0,vy:0,vr:Math.random()*0.1,duration:700};

    // item
    var r = Math.random();
    // snowfrake
    if (r<.2) {
      geo = new THREE.PlaneGeometry( this.base.scale * 8, this.base.scale * 8, 1,1);
      matOption.map = this.snowList[Math.floor(this.snowList.length*Math.random())];
    // item
    } else {
      geo = new THREE.PlaneGeometry( this.base.scale * 8, this.base.scale * 8, 1,1);
      matOption.map = this.itemList[Math.floor(this.itemList.length*Math.random())];
    }

    // log(matOption)
    
    var self = this;
    var mat = new THREE.MeshBasicMaterial(matOption);
    var mesh = new THREE.Mesh(geo,mat);
    var obj = {
      name:'particle_'+this.makeNum,
      mesh:mesh,
      id:this.makeNum,
      isReady:false,
      startTime : new Date().getTime(),
      progress:0,
      progressR:1,
      duration:offsets.duration,
      scale:0,
      x:position.x+offsets.marginX,
      y:position.y+offsets.marginY,
      z:position.z,
      vr:offsets.vr,

      // マウスとは正方向
      vx:this.mouseSpeed.vx*.3,
      vy:this.mouseSpeed.vy*.3,

      // マウスとは逆方向
      // vx:this.mouseSpeed.vx*0.4*-1,
      // vy:this.mouseSpeed.vy*0.4*-1,

      // random
      // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
      // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,

      update:function(){
        
        // rotation--------------------
        this.mesh.rotation.z += this.vr;
        // this.x = self.mousePoint.x + this.vx;
        // this.y = self.mousePoint.y + this.vy;

        if(!this.isReady)return;

        // position--------------------
        this.x += this.vx*self.base.vx*100;
        this.y += this.vy*self.base.vy*100;
        // 同じ位置に
        // this.x = self.mousePoint.x;
        // this.y = self.mousePoint.y;

        this.x += offsets.vx
        this.y += offsets.vy

        this.mesh.position.set(this.x,this.y,this.z);
        // this.mesh.position.set(this.x,this.y,gb.z * 2);


        // scale--------------------
        this.scale = (this.scale)*this.progressR+0.001;
        // this.scale = (this.scale)+0.001;
        this.mesh.scale.x = this.scale * 100;
        this.mesh.scale.y = this.scale * 100;
        this.mesh.scale.z = this.scale * 100;

        // progress--------------------
        this.progress = (new Date().getTime() - this.startTime)/this.duration;
        // this.progress = e.inSine(this.progress);
        // this.progress = e.inBack(this.progress);
        this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
        // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);

        // remove--------------------
        this.progressR = 1-this.progress;
        if(this.progress>=1){
          delete self.particles[this.name];
          self.scene.remove(obj.mesh);
          delete this;
        }

      }
    }

    // show
    TweenLite.to(obj,0.2,{scale:1,ease:Back.easeOut,onComplete:function(){
      obj.startTime = new Date().getTime();
      obj.isReady = true;
    }});

    this.particles[obj.name] = obj;
    obj.update();

    // ad
    this.scene.add(mesh);
    this.makeNum++;
    return obj;

  }

  makeSnow (type,position, index, len) {

    var geo,mat,
        matOption = {depthTest:false,transparent:true,blending: THREE.AdditiveBlending},
        // matOption = {depthTest:false,transparent:true},
        offsets = {scale:0.5,marginX:0,marginY:0,vx:0,vy:0,vr:Math.random()*0.1,duration:3000};

    // item
    var r = Math.random();
    var seedx = Math.random() * 10000;
    var seedy = Math.random() * 10000;
    
    geo = new THREE.PlaneGeometry( this.base.scale * 1, this.base.scale * 1, 1,1);
    matOption.map = this.glow;


    var self = this;
    var mat = new THREE.MeshBasicMaterial(matOption);
    var mesh = new THREE.Mesh(geo,mat);
    var obj = {
      name:'snow_'+this.snowNum,
      mesh:mesh,
      id:this.snowNum,
      isReady:false,
      startTime : new Date().getTime(),
      baseRadius:10,
      progress:0,
      progressR:1,
      duration:offsets.duration,
      scale:0,
      // x: x+offsets.marginX,
      // y: y+offsets.marginY,
      // z: z,
      sign: (Math.random()<0.5)? 1: -1,
      speed: 0.035 + Math.random() * 0.03,
      vr:offsets.vr,

      // マウスとは正方向
      vx:this.mouseSpeed.vx*.3,
      vy:this.mouseSpeed.vy*.3,

      // マウスとは逆方向
      // vx:this.mouseSpeed.vx*0.4*-1,
      // vy:this.mouseSpeed.vy*0.4*-1,

      // random
      // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
      // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,

      update:function(){
        
        // rotation--------------------
        this.mesh.rotation.z += this.vr;


        // position--------------------
        var radius = this.baseRadius + Math.sin(rad3 + gb.up.frame * this.speed) * hani;
        // this.x = self.mousePoint.x + Math.cos(rad) * radius;
        // this.y = self.mousePoint.y + Math.sin(rad) * radius;
        // this.x = this.x + Math.cos(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
        // this.y = this.y + Math.sin(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;

        var speed = self.v.noise(gb.up.frame / 100, seedy) + 1 // 0 - 2;
        speed /= 2 // 0 - 1;
        speed /= 2 // 0 - 0.5;
        speed += 0.5 // 0.5 - 1;

        var vx = self.v.noise(gb.up.frame / 100, seedx);
        var vy = -2 * speed;
        this.x += vx;
        this.y += vy;

        // 同じ位置に
        // this.x = self.mousePoint.x;
        // this.y = self.mousePoint.y;

        this.mesh.position.set(this.x,this.y,this.z);
        // this.mesh.position.set(this.x,this.y,gb.z * 2);

        // scale--------------------
        var ss = (this.scale)*this.progressR+0.001;
        // this.scale = (this.scale)+0.001;
        var s = (Math.sin(rad2 + gb.up.frame * this.speed)/2 + 1);
        this.mesh.scale.x = ss * 100 * s;
        this.mesh.scale.y = ss * 100 * s;
        this.mesh.scale.z = ss * 100 * s;

        // progress--------------------
        this.progress = (new Date().getTime() - this.startTime)/this.duration;
        // this.progress = e.inSine(this.progress);
        // this.progress = e.inBack(this.progress);
        // this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
        // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);

        // remove--------------------
        this.progressR = 1-this.progress;
        if(this.progress>=1){
          delete self.snows[this.name];
          self.scene.remove(obj.mesh);
          delete this;
        }

      }
    }


    var delay = Math.random() * 0.5;

    // scale
    var scale = 0.7 + Math.random() * 0.5;
    if (gb.r.w<=768) {
      scale = 1.2 + Math.random() * 0.5;
    }
    TweenLite.to(obj,0.8,{scale: scale,ease:Back.easeOut,delay: delay, onComplete:function(){
      obj.startTime = new Date().getTime();
      obj.isReady = true;
    }});

    // radius
    // var rad = Math.PI * 2 * Math.random();
    var rad = Math.PI * 2 * index / len;
    var rad2 = Math.PI * 2 * Math.random();
    var rad3 = Math.PI * 2 * Math.random();
    // var radius = 25 + (Math.random() - 0.5) * 7;
    var hani = 3;
    if (gb.r.w<=768) {
      obj.baseRadius = 10;
      hani = 5;
    }

    TweenLite.to(obj,0.8,{baseRadius: 35,ease:Back.easeOut,delay: delay, onComplete:function(){}});

    // pos
    var pos = position;
    var x = pos.x + Math.cos(rad) * obj.baseRadius;
    var y = pos.y + Math.sin(rad) * obj.baseRadius;
    var z = 0;

    obj.x = x+offsets.marginX;
    obj.y = y+offsets.marginY;
    obj.z = z;

    this.snows[obj.name] = obj;
    obj.update();
    this.scene.add(mesh);
    this.snowNum++;
    return obj;

  }

  makeTrail (type,position, index, len) {

    var geo,mat,
        matOption = {depthTest:false,transparent:true,blending: THREE.AdditiveBlending},
        // matOption = {depthTest:false,transparent:true},
        offsets = {scale:0.5,marginX:0,marginY:0,vx:0,vy:0,vr:Math.random()*0.1,duration:2500};

    // item
    var r = Math.random();
    var seedx = Math.random() * 10000;
    var seedy = Math.random() * 10000;
    
    geo = new THREE.PlaneGeometry( this.base.scale * 1, this.base.scale * 1, 1,1);
    matOption.map = this.glow;


    var self = this;
    var mat = new THREE.MeshBasicMaterial(matOption);
    var mesh = new THREE.Mesh(geo,mat);
    var obj = {
      name:'snow_'+this.snowNum,
      mesh:mesh,
      id:this.snowNum,
      isReady:false,
      startTime : new Date().getTime(),
      baseRadius:10,
      progress:0,
      progressR:1,
      duration:offsets.duration,
      scale:0,
      // x: x+offsets.marginX,
      // y: y+offsets.marginY,
      // z: z,
      sign: (Math.random()<0.5)? 1: -1,
      speed: 0.035 + Math.random() * 0.03,
      vr:offsets.vr,

      // マウスとは正方向
      vx:this.mouseSpeed.vx*.3,
      vy:this.mouseSpeed.vy*.3,

      // マウスとは逆方向
      // vx:this.mouseSpeed.vx*0.4*-1,
      // vy:this.mouseSpeed.vy*0.4*-1,

      // random
      // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
      // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,

      update:function(){
        
        // rotation--------------------
        this.mesh.rotation.z += this.vr;


        // position--------------------
        var radius = this.baseRadius + Math.sin(rad3 + gb.up.frame * this.speed) * hani;
        this.x = self.mousePoint.x + Math.cos(rad) * radius;
        this.y = self.mousePoint.y + Math.sin(rad) * radius;
        this.x = this.x + Math.cos(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
        this.y = this.y + Math.sin(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;

        // var speed = self.v.noise(gb.up.frame / 100, seedy) + 1 // 0 - 2;
        // speed /= 2 // 0 - 1;
        // speed /= 2 // 0 - 0.5;
        // speed += 0.5 // 0.5 - 1;

        // var vx = self.v.noise(gb.up.frame / 100, seedx);
        // var vy = -2 * speed;
        // this.x += vx;
        // this.y += vy;

        // 同じ位置に
        // this.x = self.mousePoint.x;
        // this.y = self.mousePoint.y;

        this.mesh.position.set(this.x,this.y,this.z);
        // this.mesh.position.set(this.x,this.y,gb.z * 2);

        // scale--------------------
        var ss = this.scale*this.progressR+0.001;
        // this.scale = (this.scale)+0.001;
        var s = (Math.sin(rad2 + gb.up.frame * this.speed)/2 + 1);
        this.mesh.scale.x = ss * 100 * s;
        this.mesh.scale.y = ss * 100 * s;
        this.mesh.scale.z = ss * 100 * s;

        // progress--------------------
        this.progress = (new Date().getTime() - this.startTime)/this.duration;
        // this.progress = e.inSine(this.progress);
        // this.progress = e.inBack(this.progress);
        // this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
        // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);

        // remove--------------------
        this.progressR = 1-this.progress;
        if(this.progress>=1){
          delete self.trails[this.name];
          self.scene.remove(obj.mesh);
          delete this;
        }

      }
    }


    var delay = Math.random() * 0.5;

    // scale
    var scale = 0.7 + Math.random() * 0.5;
    if (gb.r.w<=768) {
      scale = 1.2 + Math.random() * 0.5;
    }
    TweenLite.to(obj,0.8,{scale: scale,ease:Back.easeOut,delay: delay, 
      onStart:()=>{
        obj.startTime = new Date().getTime();
      },
      onComplete:()=>{
        obj.isReady = true;
      }
    });

    // radius
    // var rad = Math.PI * 2 * Math.random();
    var rad = Math.PI * 2 * index / len;
    var rad2 = Math.PI * 2 * Math.random();
    var rad3 = Math.PI * 2 * Math.random();
    // var radius = 25 + (Math.random() - 0.5) * 7;
    var hani = 6;
    if (gb.r.w<=768) {
      obj.baseRadius = 10;
      hani = 5;
    }

    TweenLite.to(obj,0.8,{baseRadius: 35,ease:Back.easeOut,delay: delay, onComplete:function(){}});
    // TweenLite.to(obj,2.5,{baseRadius: 60,ease:Back.easeOut,delay: delay, onComplete:function(){}});

    // pos
    var pos = position;
    var x = pos.x + Math.cos(rad) * obj.baseRadius;
    var y = pos.y + Math.sin(rad) * obj.baseRadius;
    var z = 0;

    obj.x = x+offsets.marginX;
    obj.y = y+offsets.marginY;
    obj.z = z;

    this.trails[obj.name] = obj;
    obj.update();
    this.scene.add(mesh);
    this.snowNum++;
    return obj;

  }

  makeItemBoundParticle (type,pointIndex, index, len) {

    var geo,mat,
        matOption = {depthTest:false,transparent:true,blending: THREE.AdditiveBlending},
        // matOption = {depthTest:false,transparent:true},
        offsets = {scale:0.5,marginX:0,marginY:0,vx:0,vy:0,vr:Math.random()*0.1,duration:2500};

    // item
    var r = Math.random();
    var seedx = Math.random() * 10000;
    var seedy = Math.random() * 10000;
    
    geo = new THREE.PlaneGeometry( this.base.scale * 1, this.base.scale * 1, 1,1);
    matOption.map = this.glow;


    var self = this;
    var mat = new THREE.MeshBasicMaterial(matOption);
    var mesh = new THREE.Mesh(geo,mat);
    var obj = {
      name:'snow_'+this.snowNum,
      mesh:mesh,
      id:this.snowNum,
      isReady:false,
      startTime : new Date().getTime(),
      baseRadius: 10,
      progress:0,
      progressR:1,
      duration:offsets.duration,
      scale:0,
      // x: x+offsets.marginX,
      // y: y+offsets.marginY,
      // z: z,
      sign: (Math.random()<0.5)? 1: -1,
      speed: 0.035 + Math.random() * 0.03,
      vr:offsets.vr,

      // マウスとは正方向
      vx: 0,
      vy: 0,

      // マウスとは逆方向
      // vx:this.mouseSpeed.vx*0.4*-1,
      // vy:this.mouseSpeed.vy*0.4*-1,

      // random
      // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
      // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,

      update:function(){
        
        // rotation--------------------
        this.mesh.rotation.z += this.vr;


        // position--------------------
        var radius = this.baseRadius + Math.sin(rad3 + gb.up.frame * this.speed) * hani;
        this.x = gb.moveItems[pointIndex].point.x + Math.cos(rad) * radius;
        this.y = gb.moveItems[pointIndex].point.y + Math.sin(rad) * radius;
        // this.x = this.basex + Math.cos(rad) * radius;
        // this.y = this.basey + Math.sin(rad) * radius;
        // this.x = this.x + Math.cos(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
        // this.y = this.y + Math.sin(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;

        var speed = self.v.noise(gb.up.frame / 100, seedy) + 1 // 0 - 2;
        speed /= 2 // 0 - 1;
        speed /= 2 // 0 - 0.5;
        speed += 0.5 // 0.5 - 1;

        var vx = self.v.noise(gb.up.frame / 100, seedx);
        var vy = -2 * speed;
        this.vx += vx;
        this.vy += vy;
        this.x += this.vx;
        this.y += this.vy;

        // 同じ位置に
        // this.x = self.mousePoint.x;
        // this.y = self.mousePoint.y;

        this.mesh.position.set(this.x,this.y,this.z);
        // this.mesh.position.set(this.x,this.y,gb.z * 2);

        // scale--------------------
        var ss = this.scale*this.progressR+0.001;
        // this.scale = (this.scale)+0.001;
        var s = (Math.sin(rad2 + gb.up.frame * this.speed)/2 + 1);
        this.mesh.scale.x = ss * 100 * s;
        this.mesh.scale.y = ss * 100 * s;
        this.mesh.scale.z = ss * 100 * s;

        // progress--------------------
        this.progress = (new Date().getTime() - this.startTime)/this.duration;
        // this.progress = e.inSine(this.progress);
        // this.progress = e.inBack(this.progress);
        // this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
        // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);

        // remove--------------------
        this.progressR = 1-this.progress;
        if(this.progress>=1){
          delete self.itemP[this.name];
          self.scene.remove(obj.mesh);
          delete this;
        }

      }
    }


    var delay = Math.random() * 0.5;

    // scale
    var scale = 0.7 + Math.random() * 0.5;
    if (gb.r.w<=768) {
      scale = 1.2 + Math.random() * 0.5;
    }
    TweenLite.to(obj,0.8,{scale: scale,ease:Back.easeOut,delay: delay, 
      onStart:()=>{
        obj.startTime = new Date().getTime();
      },
      onComplete:()=>{
        obj.isReady = true;
      }
    });

    // radius
    // var rad = Math.PI * 2 * Math.random();
    var rad = Math.PI * 2 * index / len;
    var rad2 = Math.PI * 2 * Math.random();
    var rad3 = Math.PI * 2 * Math.random();
    // var radius = 25 + (Math.random() - 0.5) * 7;
    var hani = 6;
    if (gb.r.w<=768) {
      obj.baseRadius = 10;
      hani = 5;
    }

    TweenLite.to(obj,0.8,{baseRadius: 35,ease:Back.easeOut,delay: delay, onComplete:function(){}});
    // TweenLite.to(obj,2.5,{baseRadius: 60,ease:Back.easeOut,delay: delay, onComplete:function(){}});

    // pos
    var pos = gb.moveItems[pointIndex].point;
    var x = pos.x + Math.cos(rad) * obj.baseRadius;
    var y = pos.y + Math.sin(rad) * obj.baseRadius;
    var z = 0;

    obj.basex = obj.x = x+offsets.marginX;
    obj.basey = obj.y = y+offsets.marginY;
    obj.basez = obj.z = z;

    this.itemP[obj.name] = obj;
    obj.update();
    this.scene.add(mesh);
    this.snowNum++;
    return obj;

  }

  makePopItem (type,pointIndex, index, len) {

    var geo,mat,
        matOption = {depthTest:false,transparent:true,blending: THREE.AdditiveBlending},
        // matOption = {depthTest:false,transparent:true},
        offsets = {scale:0.5,marginX:0,marginY:0,vx:0,vy:0,vr:Math.random()*0.1,duration:1500};

    // item
    var r = Math.random();
    var seedx = Math.random() * 10000;
    var seedy = Math.random() * 10000;
    
    geo = new THREE.PlaneGeometry( this.base.scale * 8, this.base.scale * 8, 1,1);

    // item
    var r = Math.random();
    // snowfrake
    if (r<.2) {
      matOption.map = this.snowList[Math.floor(this.snowList.length*Math.random())];
    // item
    } else {
      matOption.map = this.itemList[Math.floor(this.itemList.length*Math.random())];
    }


    var self = this;
    var mat = new THREE.MeshBasicMaterial(matOption);
    var mesh = new THREE.Mesh(geo,mat);
    var obj = {
      name:'snow_'+this.snowNum,
      mesh:mesh,
      id:this.snowNum,
      isReady:false,
      startTime : new Date().getTime(),
      baseRadius: 10,
      progress:0,
      progressR:1,
      duration:offsets.duration,
      scale:0,
      // x: x+offsets.marginX,
      // y: y+offsets.marginY,
      // z: z,
      sign: (Math.random()<0.5)? 1: -1,
      speed: 0.035 + Math.random() * 0.03,
      vr:offsets.vr,

      // マウスとは正方向
      vx: 0,
      vy: 0,

      // マウスとは逆方向
      // vx:this.mouseSpeed.vx*0.4*-1,
      // vy:this.mouseSpeed.vy*0.4*-1,

      // random
      // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
      // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,

      update:function(){
        
        // rotation--------------------
        this.mesh.rotation.z += this.vr;


        // position--------------------
        var radius = this.baseRadius + Math.sin(rad3 + gb.up.frame * this.speed) * hani;
        this.x = gb.stores.points[pointIndex].x + Math.cos(rad) * radius;
        this.y = gb.stores.points[pointIndex].y + Math.sin(rad) * radius;
        // this.x = this.basex + Math.cos(rad) * radius;
        // this.y = this.basey + Math.sin(rad) * radius;
        // this.x = this.x + Math.cos(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;
        // this.y = this.y + Math.sin(rad + gb.up.frame * this.speed * 0.5 * this.sign) * radius * 0.1;

        // var speed = self.v.noise(gb.up.frame / 100, seedy) + 1 // 0 - 2;
        // speed /= 2 // 0 - 1;
        // speed /= 2 // 0 - 0.5;
        // speed += 0.5 // 0.5 - 1;

        // var vx = self.v.noise(gb.up.frame / 100, seedx);
        // var vy = -2 * speed;
        // this.vx += vx;
        // this.vy += vy;
        // this.x += this.vx;
        // this.y += this.vy;

        // 同じ位置に
        // this.x = self.mousePoint.x;
        // this.y = self.mousePoint.y;

        this.mesh.position.set(this.x,this.y,this.z);
        // this.mesh.position.set(this.x,this.y,gb.z * 2);

        // scale--------------------
        var ss = this.scale*this.progressR+0.001;
        // this.scale = (this.scale)+0.001;
        var s = (Math.sin(rad2 + gb.up.frame * this.speed)/2 + 1);
        this.mesh.scale.x = ss * 100 * s;
        this.mesh.scale.y = ss * 100 * s;
        this.mesh.scale.z = ss * 100 * s;

        // progress--------------------
        this.progress = (new Date().getTime() - this.startTime)/this.duration;
        // this.progress = e.inSine(this.progress);
        // this.progress = e.inBack(this.progress);
        // this.progress = Back.easeIn.config(0.7).getRatio(this.progress);
        // this.progress = Elastic.easeOut.config(1, 1).getRatio(this.progress);

        // remove--------------------
        this.progressR = 1-this.progress;
        if(this.progress>=1){
          delete self.itemP[this.name];
          self.scene.remove(obj.mesh);
          delete this;
        }

      }
    }


    var delay = Math.random() * 0.3;

    // scale
    var scale = 0.7 + Math.random() * 0.5;
    if (gb.r.w<=768) {
      scale = 1.2 + Math.random() * 0.5;
    }
    TweenLite.to(obj,0.8,{scale: scale,ease:Back.easeOut,delay: delay, 
      onStart:()=>{
        obj.startTime = new Date().getTime();
      },
      onComplete:()=>{
        obj.isReady = true;
      }
    });

    // radius
    // var rad = Math.PI * 2 * Math.random();
    var rad = Math.PI * 2 * index / len;
    var rad2 = Math.PI * 2 * Math.random();
    var rad3 = Math.PI * 2 * Math.random();
    var hani = 6;
    if (gb.r.w<=768) {
      obj.baseRadius = 10;
      hani = 5;
    }

    var radiusTar = 150 + (Math.random() - 0.5) * 100;
    TweenLite.to(obj,1.5,{baseRadius: radiusTar,ease:Back.easeOut,delay: delay, onComplete:function(){}});
    // TweenLite.to(obj,2.5,{baseRadius: 60,ease:Back.easeOut,delay: delay, onComplete:function(){}});

    // pos
    // var pos = position;
    var pos = gb.stores.points[pointIndex];
    var x = pos.x + Math.cos(rad) * obj.baseRadius;
    var y = pos.y + Math.sin(rad) * obj.baseRadius;
    var z = 0;

    obj.basex = obj.x = x+offsets.marginX;
    obj.basey = obj.y = y+offsets.marginY;
    obj.basez = obj.z = z;

    this.itemP[obj.name] = obj;
    obj.update();
    this.scene.add(mesh);
    this.snowNum++;
    return obj;

  }

  onMouseMove (e) {
    e.preventDefault();
    this.mouse.x = ( gb.m.x / window.innerWidth ) * 2 - 1;
    this.mouse.y = - ( gb.m.y / window.innerHeight ) * 2 + 1;
    this.mouseSpeedUpdate();

    this.intersects();

    // drag
    if(this.isDown){

      var dis = Math.abs(this.mouseSpeed.dis);
      
      this.makeParticle('circle',this.mousePoint);
      this.makeSnow(null,this.mousePoint, 0, 1);

    }

    // mouse move show
    // var dis = Math.abs(this.mouseSpeed.dis);
    // // log(dis);
    // // if(dis > 0.1){

    //   this.makeParticle('circle',this.mousePoint);

    // // }

    this.mouseOld = this.mouse.clone();

  }

  onMouseDown (){

    this.mouse.x = ( gb.m.x / window.innerWidth ) * 2 - 1;
    this.mouse.y = - ( gb.m.y / window.innerHeight ) * 2 + 1;
    this.mouseSpeedUpdate();

    this.intersects();

    if(!this.isDown){

      var len = 20;
      for (var i = 0; i < len; i++) {
        this.makeTrail(null,this.mousePoint, i, len);
      }
      
    }
    this.isDown = true;
  }

  onMouseUp (){

    this.mouse.x = ( gb.m.x / window.innerWidth ) * 2 - 1;
    this.mouse.y = - ( gb.m.y / window.innerHeight ) * 2 + 1;
    this.mouseSpeedUpdate();

    this.intersects();

    if(this.isDown){
      
      // // hide trails
      // for(var o in this.snows) {
      //   var obj = this.snows[o];

      //   TweenMax.to(obj, 0.7, {
      //       progress: 1,
      //       baseRadius: 0,
      //       ease: Back.easeIn.config(0.75),
      //       delay: 0.5 * Math.random()
      //   })
      // }

    }
    this.isDown = false;
  }

  mouseSpeedUpdate (){
    this.mouseSpeed.vx = this.mouse.x - this.mouseOld.x;
    this.mouseSpeed.vy = this.mouse.y - this.mouseOld.y;
    // this.mouseSpeed.vx = m.constrain(this.mouseSpeed.vx, -0.025, 0.025);
    // this.mouseSpeed.vy = m.constrain(this.mouseSpeed.vy, -0.025, 0.025);
    this.mouseSpeed.vx = m.constrain(this.mouseSpeed.vx, -5, 5);
    this.mouseSpeed.vy = m.constrain(this.mouseSpeed.vy, -5, 5);
    this.mouseSpeed.directionX = this.mouseSpeed.vx<0?-1:1;
    this.mouseSpeed.directionY = this.mouseSpeed.vy<0?-1:1;
    this.mouseSpeed.dis = Math.sqrt(this.mouseSpeed.vx*this.mouseSpeed.vx+this.mouseSpeed.vy*this.mouseSpeed.vy);
  }

  generateSprite() {

    var canvas = document.createElement( 'canvas' );
    canvas.width = 32;
    canvas.height = 32;

    var context = canvas.getContext( '2d' );
    var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
    // gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
    // gradient.addColorStop( 0.2, 'rgba(255,255,255,0.5)' );
    // gradient.addColorStop( 0.4, 'rgba(255,255,255,0.1)' );
    // gradient.addColorStop( 1, 'rgba(255,255,255,0.0)' );
    // gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
    // gradient.addColorStop( 0.2, 'rgba(255,50,0,1)' );
    // gradient.addColorStop( 0.4, 'rgba(64,0,0,0.3)' );
    // gradient.addColorStop( 1, 'rgba(64,0,0,0)' );
    gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
    gradient.addColorStop( 0.2, 'rgba(255,255,255,1)' );
    gradient.addColorStop( 0.4, 'rgba(255,255,255,0.1)' );
    gradient.addColorStop( 1, 'rgba(255,255,255,0)' );

    context.fillStyle = gradient;
    context.fillRect( 0, 0, canvas.width, canvas.height );

    return canvas;

  }

  textures() {

    // texture
    // this.textureCross = new THREE.TextureLoader().load( './assets/resource/img/cross.png' );
    // this.texturePlus = new THREE.TextureLoader().load( './assets/resource/img/plus.png' );
    this.glow = new THREE.CanvasTexture(this.generateSprite());

    var len = 15;
    var path = './assets/resource/item/';
    this.itemList = [];
    for (var i = 0; i < len; i++) {
      var tex = new THREE.TextureLoader().load(path+(i+1)+'.png');
      this.itemList.push(tex);
    }

    this.snowList = [];
    for (var i = 0; i < 3; i++) {
      var tex = new THREE.TextureLoader().load(path+'snow0'+(i+1)+'.png');
      this.snowList.push(tex);
    }

  }

  intersects() {

    this.raycaster.setFromCamera( this.mouse, this.camera );
    var intersects = this.raycaster.intersectObjects( this.plane.wrap.children, true);
    if ( intersects.length > 0 ) {
      if ( this.currentIntersected !== undefined ) {
      }
      this.currentIntersected = intersects[ 0 ].object;
      var point = intersects[0].point;
      this.mousePoint.set(point.x,point.y,point.z);
    } else {
      if ( this.currentIntersected !== undefined ) {
      }
      this.currentIntersected = undefined;
    }

  }

  onItemBound(pointIndex) {

    var len = 20;
    for (var i = 0; i < len; i++) {
      this.makeItemBoundParticle(null,pointIndex, i, len);
    }

  }

  onBtnEnter(pointIndex) {

    var len = 14;
    for (var i = 0; i < len; i++) {
      this.makePopItem(null,pointIndex, i, len);
    }

  }

  setEvents() {

    var self = this;

    super.setEvents();

    $(window).on('resize', this.onResize.bind(this));
    $(window).on('mousemove touchmove', function(e){self.onMouseMove.call(self,e)});
    $(window).on('mousedown touchstart', this.onMouseDown.bind(this));
    $(window).on('mouseup touchend', this.onMouseUp.bind(this));

  }

}