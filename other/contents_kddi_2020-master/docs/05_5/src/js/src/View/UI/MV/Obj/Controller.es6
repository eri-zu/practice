import frag from './Shader/frag.frag';
import vert from './Shader/vert.vert';
import LineController from './Line/Controller.es6'
import getTriangle from './getTriangle.es6';
import getRect from './getRect.es6';
import getHexagon from './getHexagon.es6';
export default class Controller {
  constructor(segment = 3) {
    const per = this.getPer(1);
    this.r = 100 * per;
    this.SEGMENT = segment;
    const r2 =  Math.PI * .5 -  Math.PI / segment;
    this.naisetsu = this.r * 2 * Math.cos(r2);
    this.tri_height = this.r + this.r * Math.sin(r2);
    this.Y_NUM = Math.floor(window.innerHeight / this.tri_height) + 20;
    this.X_NUM = Math.floor(window.innerWidth / this.naisetsu) * 2 + 10;
    this.NUM = this.X_NUM * this.Y_NUM;
    this.colors = [
      new THREE.Color(0x3afffe),
      new THREE.Color(0x59ef07),
      new THREE.Color(0xdb4cff),
    ]
    this.setup();

    this.setEvent();
  }
  
  getPer(point = 100){
    if(window.innerWidth > 1023){
      return point;
    }else{
      return point / 1023 * window.innerWidth;
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
            resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth*window.devicePixelRatio,window.innerHeight * window.devicePixelRatio)},
            s_time:{type:'f',value:0},
            tri_height:{type:"f",value:this.tri_height},
            rgb:{type:'v3',value:color},
            z_time:{type:"f",value:0},
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
    for (var i = 0; i < ids.length / position.count; i++) {
      const r = Math.random() * 1000 + 10;
      for (var j = 0; j < position.count; j++) {
        rand_Scale.push(r)
      }
    }

    geometry.addAttribute('position',new THREE.BufferAttribute(new Float32Array(p),3))
    geometry.addAttribute('uv',new THREE.BufferAttribute(new Float32Array(u),2))
    geometry.addAttribute('normal',new THREE.BufferAttribute(new Float32Array(n),3))
    geometry.addAttribute('margin',new THREE.BufferAttribute(new Float32Array(m),2))
    geometry.addAttribute('diff',new THREE.BufferAttribute(new Float32Array(diff),2))
    geometry.addAttribute('ids',new THREE.BufferAttribute(new Float32Array(ids),1))
    geometry.addAttribute('scale',new THREE.BufferAttribute(new Float32Array(s),1))
    geometry.addAttribute('is_smalls',new THREE.BufferAttribute(new Float32Array(is_smalls),1))
    geometry.addAttribute('rand_Scale',new THREE.BufferAttribute(new Float32Array(rand_Scale),1))
    geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index), 1));
    
    return geometry;
  }


  lineSetup(color){
    this.line = new LineController(this.NUM,color);
    this.mesh.add(this.line.mesh)
  }


  show(){
    const tl = new TimelineMax();
    
    tl
    .set(this.mesh.children[0].material.uniforms.time,{value:0})
    .set(this.mesh.children[0].material.uniforms.s_time,{value:0})
    .set(this.mesh.children[0].material.uniforms.z_time,{value:0})

    .to(this.mesh.children[0].material.uniforms.time,1.2,{
      value:1.0,
      ease: Expo.easeInOut
    }, 0.0)
    .to(this.mesh.children[0].material.uniforms.s_time, 1.2,{
      value:1.0,
      ease: Expo.easeInOut
    }, 0.8)
    
  }


  // splash shape
  show2(){
    const tl = new TimelineMax();
    tl
      .to(this.mesh.children[0].material.uniforms.s_time,2.6,{
        value:0,
        ease: Expo.easeInOut
      })
      .to(this.mesh.children[0].material.uniforms.z_time,1.5,{
        value:1.2,
        // x:10000,
        ease: Expo.easeOut,
      },1.4)

      .to(this.mesh.children[0].material.uniforms.z_time,1,{
        value:120.0,
        // x:10000,
        ease: Expo.easeInOut,
      },2.8)
      .add(e=>{
        // this.line.show();
      },2.9)


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
        this.setGeometry(mesh.geometry);
        mesh.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth*window.devicePixelRatio,window.innerHeight * window.devicePixelRatio);
        mesh.material.uniforms.tri_height.value = this.tri_height;
      }
    })
    
  }








  setEvent(){


  }
}
