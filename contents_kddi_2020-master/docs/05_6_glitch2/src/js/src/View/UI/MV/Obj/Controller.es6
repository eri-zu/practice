import frag from './Shader/frag.frag';
import vert from './Shader/vert.vert';
import LineController from './Line/Controller.es6'
import getTriangle from './getTriangle.es6';
import getRect from './getRect.es6';
import getHexagon from './getHexagon.es6';

import * as math from 'Util/Math/index.es6';

export default class Controller {
  constructor(segment = 3) {
    const per = this.getPer(1);
    this.r = 70 * per;
    this.SEGMENT = segment;
    const r2 =  Math.PI * .5 -  Math.PI / segment;
    this.naisetsu = this.r * 2 * Math.cos(r2);
    this.tri_height = this.r + this.r * Math.sin(r2);
    this.Y_NUM = Math.floor(window.innerHeight / this.tri_height) + 20;
    this.X_NUM = Math.floor(window.innerWidth / this.naisetsu) * 2 + 10;
    this.NUM = this.X_NUM * this.Y_NUM;
    this.colors = [
      new THREE.Color(0x3afffe),
      new THREE.Color(0x1ce681),
      new THREE.Color(0xfd49d7),
    ]
    this.setup();

    this.setEvent();
  }
  
  getPer(point = 100){
    if(window.innerWidth > 1023){
      return point;
    }else{
      return point * .4 + (point * .6)/ 1023 * window.innerWidth;
    }
  }


  setup(){
    const geometry = this.setGeometry();
    let color;
    if(this.SEGMENT == 3){
      color = this.colors[0]
    }else if (this.SEGMENT == 4) {
      color = this.colors[1]
    }else if (this.SEGMENT == 6) {
      color = this.colors[2]
    }
    const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
            time: { type: 'f', value: 0 },
            resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth * 0.7 * (Math.random() - .5),window.innerHeight * 0.7 * (Math.random() - .5))},
            // resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth * 0,window.innerHeight * 0)},
            diagonal:{type:'f',value: Math.sqrt(Math.pow(window.innerWidth, 2.0) + Math.pow(window.innerHeight, 2.0)) * 1.5},
            s_time:{type:'f',value:0},
            s_time_toSmall:{type:'f',value:1.0},
            tri_height:{type:"f",value:this.tri_height},
            rgb:{type:'v3',value:color},
            z_time:{type:"f",value:0},
            is_rand:{type:'f',value:0}
        }
    });
    this.mesh = new THREE.Group();
    const mesh = new THREE.Mesh( geometry, material );
    mesh.name = 'obj';
    this.mesh.add(mesh);
    this.lineSetup(color);

  }
  
  
  setGeometry(base_g = null){
    const base_geometry = new THREE.CircleBufferGeometry(this.r, this.SEGMENT,Math.PI *0.5 );
    const base_geometry2 = new THREE.CircleBufferGeometry(this.r, this.SEGMENT,Math.PI * 1.5 );
    const geometry =  base_g || new THREE.BufferGeometry();
    
    const position = base_geometry.attributes.position;
    const position2 = base_geometry2.attributes.position;
    const normal = base_geometry.attributes.normal;
    let attributes;
    if(this.SEGMENT == 3){
      attributes = getTriangle({
        r:this.r,
        geometry1:base_geometry,
        geometry2:base_geometry2,
        ynum:this.Y_NUM,
        xnum: this.X_NUM
      });
    }else if (this.SEGMENT == 4) {
      attributes = getRect({
        r:this.r,
        geometry1:base_geometry,
        geometry2:base_geometry2,
        ynum:this.Y_NUM,
        xnum: this.X_NUM
      });
    }else if (this.SEGMENT == 6) {
      attributes = getHexagon({
        r:this.r,
        geometry1:base_geometry,
        geometry2:base_geometry2,
        ynum:this.Y_NUM,
        xnum: this.X_NUM
      });
    }
    

    const p = attributes.p;
    const n = attributes.n;
    const u = attributes.u;
    const s = attributes.s;
    const m = attributes.m;
    const diff = attributes.diff;
    const is_smalls = attributes.is_smalls;
    

    const indexes = base_geometry.index;
    const index = [];
    
    const c = indexes.count / 3 + 2;
    for (var i = 0; i < this.NUM; i++) {
      indexes.array.map(e=>{
        index.push(e + c*i)
      })
    }


    const ids = s.map((e,i)=>{
      return Math.floor(i/position.count)
    })
    const rand_Scale = [];

    // const center = new THREE.Vector2(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    const center = new THREE.Vector2(.5 * window.innerWidth, .5 * window.innerHeight);
    const diagonal = Math.sqrt(Math.pow(window.innerWidth, 2.0) + Math.pow(window.innerHeight, 2.0)) * 3.0;

    for (var i = 0; i < ids.length / position.count; i++) {
    // for (var i = 0; i < 10; i++) {
      const r = Math.random() * 1000 + 10;
      const r3 = .5 + Math.random() * .5;

      // random
      const r2 = Math.random() * .6;

      for (var j = 0; j < position.count; j++) {

        // var x = m[i * position.count + j * 2 + 0] + diff[i * position.count + j * 2 + 0]
        // var y = m[i * position.count + j * 2 + 1] + diff[i * position.count + j * 2 + 1]
        // var pos = {x:x,y:y};

        // if (this.SEGMENT == 3) console.log(pos);

        // let r2 = math.dist(center, pos);
        // r2 = math.map(r2, 0.0, 1.0, 0.0, diagonal);
        // if (this.SEGMENT == 3) console.log(r2);

        rand_Scale.push(r, r2 ,r3)
      }
    }

    geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(p),3))
    geometry.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(u),2))
    geometry.setAttribute('normal',new THREE.BufferAttribute(new Float32Array(n),3))
    geometry.setAttribute('margin',new THREE.BufferAttribute(new Float32Array(m),2))
    geometry.setAttribute('diff',new THREE.BufferAttribute(new Float32Array(diff),2))
    geometry.setAttribute('ids',new THREE.BufferAttribute(new Float32Array(ids),1))
    geometry.setAttribute('scale',new THREE.BufferAttribute(new Float32Array(s),1))
    geometry.setAttribute('is_smalls',new THREE.BufferAttribute(new Float32Array(is_smalls),1))
    geometry.setAttribute('rand_Scale',new THREE.BufferAttribute(new Float32Array(rand_Scale),3))
    geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index), 1));
    
    return geometry;
  }


  lineSetup(color){
    this.line = new LineController(this.NUM,color);
    this.mesh.add(this.line.mesh)
  }


  show(){

    this.mesh.children[0].material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth * 0.7 * (Math.random() - .5),window.innerHeight * 0.7 * (Math.random() - .5));
    console.log(this.mesh.children[0].material.uniforms.resolution.value)

    const tl = new TimelineMax();
    
    tl
      .set(this.mesh.children[0].material.uniforms.s_time,{value:0})
      .set(this.mesh.children[0].material.uniforms.s_time_toSmall,{value:1})
      .set(this.mesh.children[0].material.uniforms.z_time,{value:0})
      .set(this.mesh.children[0].material.uniforms.is_rand,{value:0})
      // 拡大する
      .to(this.mesh.children[0].material.uniforms.s_time, 1.7,{
        value: 1.0,
        ease: Power0.easeNone
      }, 0.0)
    
  }


  // splash shape
  show2(){

    const tl = new TimelineMax();
    tl
      // 縮む
      .to(this.mesh.children[0].material.uniforms.s_time_toSmall, .7,{
        value: .8,
        ease: Expo.easeOut
      },1.4 - .25)
      .to(this.mesh.children[0].material.uniforms.is_rand,.7,{
        value:1.0,
        ease: Expo.easeOut
      },1.4 - .25)

      // //大きさを顕著に
      // .to(this.mesh.children[0].material.uniforms.s_time, .5,{
      //   value: 10.0,
      //   ease: Power0.easeNone
      // }, 1.6)
      
      // はじける
      .to(this.mesh.children[0].material.uniforms.z_time, 1.2,{
        value: 1.5,
        ease: Expo.easeOut,
      },1.4 - .25)

      // カメラの向こうに消えていく
      .to(this.mesh.children[0].material.uniforms.z_time,1.4,{
        value:120.0,
        ease: Power4.easeInOut,
      },2.4 - .25)

      // line
      .add(e=>{
        // this.line.show();
      },2.9 - .25)

  }
  
  
  resize(){
    const per = this.getPer(1);
    this.r = 100 * per;
    const r2 =  Math.PI * .5 -  Math.PI / this.SEGMENT;
    this.naisetsu = this.r * 2 * Math.cos(r2);
    this.tri_height = this.r + this.r * Math.sin(r2);
    this.Y_NUM = Math.floor(window.innerHeight / this.tri_height) + 20;
    this.X_NUM = Math.floor(window.innerWidth / this.naisetsu) * 2 + 10;
    this.NUM = this.X_NUM * this.Y_NUM;
    
    this.mesh.children.map(mesh=>{
      if(mesh.name == 'obj'){
        const g = this.setGeometry();
        mesh.geometry.dispose();
        mesh.geometry = g;
        mesh.material.uniforms.tri_height.value = this.tri_height;
      }
    })
    
  }








  setEvent(){


  }
}
