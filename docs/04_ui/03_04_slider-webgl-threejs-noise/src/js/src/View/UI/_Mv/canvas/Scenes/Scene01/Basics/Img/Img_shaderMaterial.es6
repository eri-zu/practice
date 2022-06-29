//--------------------------------------------------
//
 // Plane 全画面
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import vs from './shader.vs';
import fs from './shader.fs';

export default class Plane extends Base {

  constructor(scene, camera) {

    super();

    this.scene = scene;
    this.camera = camera;

    this.setup();
    this.setEvents();

  }

  setup() {

    var t = new THREE.TextureLoader();
    var onLoad = ()=>{

      tex1.magFilter = THREE.LinearFilter;
      tex1.minFilter = THREE.LinearFilter;
      tex2.magFilter = THREE.LinearFilter;
      tex2.minFilter = THREE.LinearFilter;
      this.tex.magFilter = THREE.LinearFilter;
      this.tex.minFilter = THREE.LinearFilter;


      this.texList.push(tex1,this.tex,tex2,tex3);

      this.ready();

      this.startU();

    }

    this.texList = [];
    var tex1 = t.load('./assets/resource/img/watch/white.jpg');
    var tex2 = t.load('./assets/resource/img/watch/2.jpg');
    var tex3 = t.load('./assets/resource/img/watch/3.jpg');
    this.black = t.load('./assets/resource/img/watch/grayscale.jpg');
    this.brush = t.load('./assets/resource/img/displacement/14.jpg');

    this.tex = t.load('./assets/resource/img/watch/1.jpg', onLoad);



  }

  ready() {

    // this.container = new THREE.Object3D();

    var w = 648;
    var h = 600;
    var geo = new THREE.PlaneBufferGeometry(w, h, 1, 1);    

    // img 白黒
    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(w, h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(this.texList[1].image.width, this.texList[1].image.height)},
      texture: {type: 't', value: this.texList[0]},
      texture2: {type: 't', value: this.black},
      disp: {type: 'f', value: this.texList[1]},
      brush: {type: 'f', value: this.brush},
      dispFactor: {type: 'f', value: 0.0},
      threshold: {type: 'f', value: .1},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
      opacity: {type: 'f', value: 1.0},
      isTex: {type: 'f', value: 1.0},
    };
    var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms,transparent: true,depthTest: true,side: THREE.DoubleSide});

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.x = 648 / 2;

    this.scene.add(this.mesh);

    // img original

    this.uniforms2 = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(w, h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(this.texList[1].image.width, this.texList[1].image.height)},
      texture: {type: 't', value: this.texList[0]},
      texture2: {type: 't', value: this.texList[1]},
      disp: {type: 'f', value: this.texList[1]},
      brush: {type: 'f', value: this.brush},
      dispFactor: {type: 'f', value: 0.0},
      threshold: {type: 'f', value: .1},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
      opacity: {type: 'f', value: 1.0},
      isTex: {type: 'f', value: 0.0},
    };
    var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms2,transparent: true,depthTest: true,side: THREE.DoubleSide});

    this.mesh2 = new THREE.Mesh(geo, mat);
    this.mesh2.position.x = - 648 / 2;

    this.scene.add(this.mesh2);

    
    this.timeline();


  }

  add() {

    // this.scene.add(this.mesh);

  }

  update() {

    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);

    this.uniforms.frame.value += gb.up.delta / 100.0;
    this.uniforms2.frame.value += gb.up.delta / 100.0;

  }

  draw() {



  }

  show() {

    this.index = 1;

    // TweenMax.to(this.uniforms.dispFactor, 2.0, {
    //   value: 1.0,
    //   ease: Power1.easeInOut,
    // })
    
    TweenMax.to(this.uniforms2.opacity, 2.0, {
      value: 1.0,
      ease: Power1.easeInOut,
      // delay: 0.4,
    })
    TweenMax.to(this.uniforms2.dispFactor, 2.0, {
      value: 1.0,
      ease: Power1.easeInOut,
      // delay: 0.4,
      onComplete: ()=>{

        var index = this.index;
        var next = this.index + 1;

        this.uniforms2.dispFactor.value = 0;
        this.uniforms2.texture.value = this.texList[index];
        this.uniforms2.texture2.value = this.texList[next];

        this.index++;

      }
    })
    
  }

  next() {

    TweenMax.to(this.uniforms.dispFactor, 2.0, {
      value: 1.0,
      ease: Power1.easeInOut,
    })
    
    TweenMax.to(this.uniforms2.opacity, 2.0, {
      value: 1.0,
      ease: Power1.easeInOut,
      delay: 0.4,
    })
    TweenMax.to(this.uniforms2.dispFactor, 2.0, {
      value: 1.0,
      ease: Power1.easeInOut,
      delay: 0.4,
      onComplete: ()=>{

        var index = this.index;
        var next = this.index + 1;
        var len = this.texList.length;
        if (index==len-1) {
          next = 1;
          this.index = 0;
        }

        this.uniforms2.dispFactor.value = 0;
        this.uniforms2.texture.value = this.texList[index];
        this.uniforms2.texture2.value = this.texList[next];
        // this.uniforms2.imageResolution.value.x = this.texList[index].image.width;
        // this.uniforms2.imageResolution.value.x = this.texList[index].image.width;

        this.index++;

        clearTimeout(this.Timer);
        this.Timer = setTimeout(()=>{
            
          this.next();
          
        }, 3000);
      }
    })


  }

  timeline() {

    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.show();

      }, 1.0)
      .add(()=>{

        this.next();

      }, 4.0)

  }

  onResize() {

    // this.uniforms.resolution.value.x = gb.r.w;
    // this.uniforms.resolution.value.y = gb.r.h;


  }

}