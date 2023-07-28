// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// basic objects
import Plane from './Plane/Controller.es6';
import Particle from './Particle/Controller.es6';

// custom objects

import * as a from 'Util/Array.es6';

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
    this.currentIntersected = null;

    this.mouse = new THREE.Vector2();
    this.mouseOld = new THREE.Vector2();
    this.mousePoint = new THREE.Vector3();
    this.mouseSpeed = {vx:0,vy:0,dis:0};

    this.isDown = false;
    this.particles = {};
    this.types = ['cross','plus','cube','circle','square'];
    // this.gender = 'man';
    this.gender = 'woman';

    this.base = {vx:1,vy:1,scale:.2};

  }

  add() {


    this.raycaster = new THREE.Raycaster();

    // texture
    this.textureCross = new THREE.TextureLoader().load( './assets/resource/img/cross.png' );
    this.texturePlus = new THREE.TextureLoader().load( './assets/resource/img/plus.png' );
    this.glow = new THREE.CanvasTexture(this.generateSprite());

    var len = 15;
    var path = './assets/resource/img/item/';
    this.itemList = [];
    for (var i = 0; i < len; i++) {
      var tex = new THREE.TextureLoader().load(path+(i+1)+'.png');
      this.itemList.push(tex);
    }

    // plane
    this.planeContainer = new THREE.Object3D();
    this.plane = new THREE.Mesh(new THREE.PlaneGeometry(gb.r.w, gb.r.h, 1, 1),new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:1,depthTest:true}));
    this.planeContainer.add(this.plane);
    this.scene.add(this.planeContainer);
    this.planeContainer.position.z = 0;

    this.wrap = new THREE.Object3D();

    var lineMaterial = new THREE.LineBasicMaterial({
      transparent:true,
      color:0xffffff,
      linejoin:"bevel",
      linecap:"square",
      linewidth:1,
    });

    var radius   = 100,
        segments = 64,
        geometry = new THREE.CircleGeometry( 1, segments );
    geometry.vertices.shift();
    geometry.computeLineDistances();

    this.circle = new THREE.Line(geometry, lineMaterial);
    this.circle.scale.x = this.base.scale;
    this.circle.scale.y = this.base.scale;
    this.wrap.add(this.circle);
    this.scene.add(this.wrap);

    this.circle.scale.x = this.circle.scale.y = 0.001;


  }

  update() {

    // this.makeParticle('cross',this.mousePoint);

    // intersects
    this.raycaster.setFromCamera( this.mouse, this.camera );
    var intersects = this.raycaster.intersectObjects( this.planeContainer.children, true);
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

    // animation

    // circle mouse trail
    this.slidingMove(this.wrap,this.mousePoint,0.3);

    // particle update
    for(var o in this.particles) this.particles[o].update();

  }

  draw() {


  }

  timeline() {


  }

  show() {


  }

  hide() {

 
  }

  makeParticle (type,position) {

    var geo,mat,
        matOption = {depthTest:true,transparent:true,blending: THREE.AdditiveBlending},
        offsets = {scale:0.5,marginX:0,marginY:0,vx:0,vy:0,vr:Math.random()*0.1,duration:2000};

    // switch(type){
    //   case 'cross'    : geo = new THREE.PlaneGeometry( this.base.scale, this.base.scale, 1,1);
    //                     matOption.map = this.textureCross;
    //                     break;
    //   case 'plus'     : geo = new THREE.PlaneGeometry( this.base.scale, this.base.scale, 1,1);
    //                     matOption.map = this.texturePlus;
    //                     break;
    //   case 'cube'     : var geo = new THREE.BoxGeometry( this.base.scale, this.base.scale, this.base.scale, 1);
    //                     matOption.vertexColors = THREE.FaceColors;
    //                     for ( var i = 0; i < geo.faces.length; i += 2 ) {
    //                       var hex = i%6==0?0xffffff:0x64b0da;
    //                       geo.faces[ i ].color.setHex( hex );
    //                       geo.faces[ i + 1 ].color.setHex( hex );
    //                     }
    //                     break;
    //   case 'sphere'   : var geo = new THREE.IcosahedronGeometry( this.base.scale, 0 );
    //                     matOption.vertexColors = THREE.FaceColors;
    //                     for ( var i = 0; i < geo.faces.length; i += 1 ) {
    //                       var hex = i%3==0?0xffffff:0xfc6396;
    //                       geo.faces[ i ].color.setHex( hex );
    //                       // geo.faces[ i + 1 ].color.setHex( hex );
    //                     }
    //                     matOption.color = 0xffffff;
    //                     break;
    //   case 'circle'   : geo = new THREE.CircleGeometry( this.base.scale, 12 );
    //                     matOption.color = 0xffffff;
    //                     break;

    //   case 'square'   : geo = new THREE.PlaneGeometry( this.base.scale, this.base.scale, 1,1);
    //                     matOption.color = 0xffffff;
    //                     break;
    // }
    
    // glow
    geo = new THREE.PlaneGeometry( this.base.scale * 4, this.base.scale * 4, 1,1);
    matOption.map = this.glow;

    // item
    // var r = Math.random();
    // if (r<.5) {
    //   geo = new THREE.PlaneGeometry( this.base.scale * 4, this.base.scale * 4, 1,1);
    //   matOption.map = this.itemList[Math.floor(this.itemList.length*Math.random())];
    // } else {
    //   geo = new THREE.PlaneGeometry( this.base.scale * 4, this.base.scale * 4, 1,1);
    //   matOption.map = this.glow;
    // }

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
      // vx:this.mouseSpeed.vx*.2,
      // vy:this.mouseSpeed.vy*.2,

      // マウスとは逆方向
      vx:this.mouseSpeed.vx*0.4*-1,
      vy:this.mouseSpeed.vy*0.4*-1,

      // random
      // vx:this.mouseSpeed.vx*1 + (Math.random()-0.5)*0.1,
      // vy:this.mouseSpeed.vy*1 + (Math.random()-0.5)*0.1,

      update:function(){
        
        if(type == 'cube' || type == 'sphere'){
          this.mesh.rotation.x += this.vr;
          this.mesh.rotation.y += this.vr;
          // this.mesh.rotation.z += this.vr;
        }else{
          this.mesh.rotation.z += this.vr;
        }
        // this.x = self.mousePoint.x + this.vx;
        // this.y = self.mousePoint.y + this.vy;

        this.x += this.vx*self.base.vx*100;
        this.y += this.vy*self.base.vy*100;

        // 同じ位置に
        // this.x = self.mousePoint.x;
        // this.y = self.mousePoint.y;

        // log(this.vx, this.vy);

        this.scale = (this.scale)*this.progressR+0.001;
        // this.scale = (this.scale)+0.001;
        // log(this.z);
        this.mesh.position.set(this.x,this.y,this.z);
        // this.mesh.position.set(this.x,this.y,gb.z * 2);
        if(!this.isReady)return;
        this.x += offsets.vx
        this.y += offsets.vy
        // this.z -= this.progress;
        this.mesh.scale.x = this.scale * 100;
        this.mesh.scale.y = this.scale * 100;
        this.mesh.scale.z = this.scale * 100;
        this.progress = (new Date().getTime() - this.startTime)/this.duration;
        this.progressR = 1-this.progress;
        if(this.progress>=1){
          delete self.particles[this.name];
          self.scene.remove(obj.mesh);
          delete this;
        }
      }
    }
    TweenLite.to(obj,0.2,{scale:1,ease:Back.easeOut,onComplete:function(){
      obj.startTime = new Date().getTime();
      obj.isReady = true;
    }});

    this.particles[obj.name] = obj;
    obj.update();
    this.scene.add(mesh);
    this.makeNum++;
    return obj;

  }

  onResize () {

    aspect = window.innerWidth/window.innerHeight;
    aspectW = aspect*10;
    aspectH = window.innerHeight/window.innerWidth;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

  }

  onMouseMove (e) {
    e.preventDefault();
    // this.mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    // this.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    this.mouse.x = ( gb.m.x / window.innerWidth ) * 2 - 1;
    this.mouse.y = - ( gb.m.y / window.innerHeight ) * 2 + 1;
    this.mouseSpeedUpdate();

    if(this.isDown){

      var dis = Math.abs(this.mouseSpeed.dis);
      // log(dis);
      if(dis < 0.02){

      }else if(dis > 0.02 && dis < 0.05){
        if(this.gender == 'woman'){
          this.makeParticle('circle',this.mousePoint);
        }else{
          this.makeParticle('square',this.mousePoint);
        }

      }else if(dis> 0.05 && dis < 0.1){
        this.makeParticle('cross',this.mousePoint);
      }else if(dis> 0.15 && dis < 0.2){
        this.makeParticle('plus',this.mousePoint);
      }else{
        if(this.gender == 'woman'){
          this.makeParticle('sphere',this.mousePoint);
        }else{
          this.makeParticle('cube',this.mousePoint);  
        }
      }


      // var p = this.makeParticle('',this.mousePoint);
      this.makeParticle('cross',this.mousePoint);
      // this.addLine(p.mesh.position);
    }

    this.mouseOld = this.mouse.clone();

  }

  onMouseDown (){
    if(!this.isDown){
      TweenLite.to(this.circle.scale,0.6,{x:0.2*100,y:0.2*100,ease:Back.easeOut});
      
      this.makeParticle(this.types[Math.floor(this.types.length*Math.random())],this.mousePoint);
    }
    this.isDown = true;
  }

  onMouseUp (){
    if(this.isDown){
      var scale = 0.001;
      TweenLite.to(this.circle.scale,0.6,{delay:0.2,x:scale,y:scale,ease:Back.easeInOut});
    }
    this.isDown = false;
  }

  mouseSpeedUpdate (){
    this.mouseSpeed.vx = this.mouse.x - this.mouseOld.x;
    this.mouseSpeed.vy = this.mouse.y - this.mouseOld.y;
    this.mouseSpeed.directionX = this.mouseSpeed.vx<0?-1:1;
    this.mouseSpeed.directionY = this.mouseSpeed.vy<0?-1:1;
    this.mouseSpeed.dis = Math.sqrt(this.mouseSpeed.vx*this.mouseSpeed.vx+this.mouseSpeed.vy*this.mouseSpeed.vy);
  }


  slidingMove (tg,pos,speed){
    tg.position.x += (pos.x-tg.position.x)*speed;
    tg.position.y += (pos.y-tg.position.y)*speed;
    tg.position.z += (pos.z-tg.position.z)*speed;
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

  setEvents() {

    var self = this;

    super.setEvents();

    $(window).on('resize', this.onResize.bind(this));
    $(window).on('mousemove touchmove', function(e){self.onMouseMove.call(self,e)});
    $(window).on('mousedown touchstart', this.onMouseDown.bind(this));
    $(window).on('mouseup touchend', this.onMouseUp.bind(this));

  }

}