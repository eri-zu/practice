//--------------------------------------------------
//
 // Plane 全画面
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scene_PE from './Scene_PE.es6';

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

    this.spe = new Scene_PE(this.renderer);

    var cnt = 0;
    var onload = ()=>{

      cnt++;
      if (cnt<2) return;

      this.tex1.magFilter = THREE.LinearFilter;
      this.tex1.minFilter = THREE.LinearFilter;
      this.tex2.magFilter = THREE.LinearFilter;
      this.tex2.minFilter = THREE.LinearFilter;
      this.tex3.magFilter = THREE.LinearFilter;
      this.tex3.minFilter = THREE.LinearFilter;
      this.texList.push(this.tex1,this.tex2,this.tex3);

      this.ready();

      this.onU();

    }

    this.texList = [];
    var t = new THREE.TextureLoader();
    this.tex1 = t.load('./assets/resource/img/watch/PC_TOP_1.jpg' ,onload);
    this.tex2 = t.load('./assets/resource/img/watch/PC_TOP_2.jpg' ,onload);
    this.tex3 = t.load('./assets/resource/img/watch/PC_TOP_3.jpg' ,onload);

  }

  ready() {

    // img original
    var w = gb.canvas.w;
    var h = gb.canvas.h;

    var geo = new THREE.PlaneBufferGeometry(w, h, 1, 1);

    this.uniforms = {
      time: {type: 'f', value: 1.0},
      frame: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(w, h)},
      imageResolution: {type: 'v2', value: new THREE.Vector2(this.texList[0].image.width, this.texList[0].image.height)},
      texture: {type: 't', value: this.texList[0]},
      texture2: {type: 't', value: this.texList[1]},
      dispFactor: {type: 'f', value: 0.0},
      threshold: {type: 'f', value: .08},
      mouse: {type: 'v2', value: new THREE.Vector2(0.5, 0.5)},
      opacity: {type: 'f', value: 1.0},
      isTex: {type: 'f', value: 0.0},
      transitTex: {type: 't', value: this.spe.renderPE.texture},
      imageResolutionTex: {type: 'v2', value: new THREE.Vector2($('video').width(), $('video').height())},
      isFirst: {type: 'f', value: 1.0},
    };
    var mat = new THREE.ShaderMaterial({vertexShader: vs,fragmentShader: fs,uniforms: this.uniforms,transparent: true,depthTest: true,side: THREE.DoubleSide});

    this.mesh = new THREE.Mesh(geo, mat);

    this.scene.add(this.mesh);

    
    // this.timeline();


  }

  add() {

    // this.scene.add(this.mesh);

  }

  update() {

    this.uniforms.frame.value += gb.up.delta / 100.0;

  }

  draw() {



  }

  show() {

    this.index = 0;

    // video play
    gb.video.currentTime = 2.0;
    gb.video.play();

    // TweenMax.to(this.mesh.scale, 10.0, {
    //   x: .9,
    //   y: .9,
    //   ease: Power0.easeNone,
    // })

    // texture change
    TweenMax.to(this.uniforms.dispFactor, 5.0, {
      value: 1.0,
      ease: Power1.easeOut,
      onComplete: ()=>{

        var index = this.index;
        var next = this.index + 1;

        this.uniforms.dispFactor.value = 0;
        this.uniforms.isFirst.value = 0.0;
        this.uniforms.texture.value = this.texList[index];
        this.uniforms.texture2.value = this.texList[next];

        this.index++;


      }
    })
    
  }

  next() {

    // video play
    gb.video.currentTime = 2.0;
    gb.video.play();
      
    // texture change
    TweenMax.to(this.uniforms.dispFactor, 3.5, {
      value: 1.0,
      ease: Power1.easeOut,
      onComplete: ()=>{

        var index = this.index;
        var next = this.index + 1;
        var len = this.texList.length;
        if (index==len-1) {
          next = 0;
          this.index = -1;
        }

        this.uniforms.dispFactor.value = 0;
        this.uniforms.texture.value = this.texList[index];
        this.uniforms.texture2.value = this.texList[next];

        this.index++;

        // // repeat
        // clearTimeout(this.Timer);
        // this.Timer = setTimeout(()=>{
        //   this.next();
        // }, 1000);

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

      }, 5.0)

  }

  onResize() {

    // this.uniforms.resolution.value.x = gb.r.w;
    // this.uniforms.resolution.value.y = gb.r.h;


  }

}