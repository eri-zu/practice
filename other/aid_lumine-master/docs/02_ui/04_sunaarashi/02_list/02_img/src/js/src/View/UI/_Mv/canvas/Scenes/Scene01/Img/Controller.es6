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

    this.timeline();   

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    this.ready();

  }

  ready() {

    // this.container = new THREE.Object3D();

    var t = new THREE.TextureLoader();
    var onLoad = ()=>{

      this.texture.wrapS = THREE.RepeatWrapping;
      this.texture.wrapT = THREE.RepeatWrapping;

      var geo = new THREE.PlaneGeometry(this.texture.image.width / 2, this.texture.image.height / 2, 10, 10);

      // var mat = new THREE.MeshBasicMaterial( { map: this.texture, side: THREE.DoubleSide ,transparent: true} );    
      this.uniforms = {
        time: {type: 'f', value: 1.0},
        frame: {type: 'f', value: 0.0},
        resolution: {type: 'v2', value: new THREE.Vector2(this.texture.image.width, this.texture.image.height)},
        imageResolution: {type: 'v2', value: new THREE.Vector2(this.texture.image.width, this.texture.image.height)},
        texture: {type: 't', value: this.texture},
        mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
        opacity: {type: 'f', value: 1.0},
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

    this.vec = new THREE.Vector3();

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);
    // if (this.mesh) {

    //   this.vec.x = 0 - this.camera.position.x;
    //   this.vec.y = 0 - this.camera.position.y;
    //   this.vec.z = 0 - this.camera.position.z;
    //   this.vec.normalize(1);
    //   this.vec.multiplyScalar(gb.camera.z);
    //   this.mesh.position.set(this.camera.position.x + this.vec.x, this.camera.position.y + this.vec.y, this.camera.position.z + this.vec.z);

    //   this.mesh.quaternion.copy(this.camera.quaternion);

    // }

  }

  draw() {



  }

  timeline() {

  }

  onResize() {

    this.ratioW = gb.r.h / gb.r.w;
    this.ratio = this.texture.image.height / this.texture.image.width;

    // size cover
    if (this.ratioW > this.ratio) {

      var scale = gb.r.h / this.texture.image.height;
      this.mesh.scale.set(scale, scale, 1);

    } else if ( this.ratioW <= this.ratio) {

      var scale = gb.r.w / this.texture.image.width * 1.01;
      this.mesh.scale.set(scale, scale , 1);

    }

  }

}