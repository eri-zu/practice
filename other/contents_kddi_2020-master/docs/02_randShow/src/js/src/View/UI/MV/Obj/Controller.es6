import frag from './Shader/frag.frag';
import vert from './Shader/vert.vert';
import LineController from './Line/Controller.es6'
export default class Controller {
  constructor() {
    this.r = 100;
    this.SEGMENT = 3;
    this.naisetsu = this.r * 2 * Math.sin(Math.PI / this.SEGMENT);
    this.tri_height = this.r * 1.5 ;

    this.Y_NUM = Math.floor(window.innerHeight / this.tri_height) + 2;
    this.X_NUM = Math.floor(window.innerWidth / this.naisetsu) * 2 + 10;
    this.NUM = this.X_NUM * this.Y_NUM;

    this.setup();

    this.setEvent();
  }


  setup(){

    const base_geometry = new THREE.CircleBufferGeometry(this.r, this.SEGMENT,Math.PI *0.5 );
    const base_geometry2 = new THREE.CircleBufferGeometry(this.r, this.SEGMENT,Math.PI * 1.5 );
    const geometry =  new THREE.BufferGeometry();

    const position = base_geometry.attributes.position;
    const position2 = base_geometry2.attributes.position;
    const normal = base_geometry.attributes.normal;
    const uv = base_geometry.attributes.uv;
    const indexes = base_geometry.index;

    const p = [];
    const n = [];
    const u = [];
    const s = [];
    const m = [];
    const diff = [];
    const index = [];
    const is_smalls = [];

    const base_m = -window.innerWidth * 0.5;
    const base_y = window.innerHeight * 0.5;
    const c = indexes.count / 3 + 2;

    for (var _y = 0; _y < this.Y_NUM; _y++) {
      for (var _x = 0; _x < this.X_NUM; _x++) {
        const is_small = _x%2 == 0;
        const scale = is_small ? 0.25 : 0.5;
        const _margin_y = base_y - _y *this.tri_height ;
        const _d = -this.naisetsu*.5 * (_y % 2);
        position.array.map((e,j)=>{
          const ep = is_small ? e : position2.array[j];
          if(j%3 == 0){
            s.push(scale);
            m.push(base_m + _x * this.naisetsu * 0.5);
            diff.push(_d)
            is_smalls.push(is_small);
          }
          if(j%3 == 1){
            m.push(_margin_y);
            diff.push(0)
          }
          p.push(ep);
        })


        uv.array.map(e=>{
          u.push(e)
        })


        normal.array.map(e=>{
          n.push(e);
        })
      }
    }
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
      const r = Math.random() * 1000 + 100;
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

    const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
            time: { type: 'f', value: 0 },
            resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth*window.devicePixelRatio,window.innerHeight * window.devicePixelRatio)},
            s_time:{type:'f',value:0},
            tri_height:{type:"f",value:this.tri_height},
            rgb:{type:'v3',value:new THREE.Vector3((101/255),(251/255),(253/255))},
            z_time:{type:"f",value:0},
        }
    });
    this.mesh = new THREE.Group();
    this.mesh.add(new THREE.Mesh( geometry, material ));
    this.lineSetup(p);

  }


  lineSetup(){
    this.line = new LineController(this.NUM);
    this.mesh.add(this.line.mesh)
  }


  show(){
    const tl = new TimelineMax();
    tl.to(this.mesh.children[0].material.uniforms.time,1.5,{
      value:1.0,
      ease: Expo.easeInOut
    })
    .to(this.mesh.children[0].material.uniforms.s_time,0.5,{
      value:1.0,
      ease: Expo.easeInOut
    },2.0)

    return 2.5;
  }


  // splash shape
  show2(){
    const tl = new TimelineMax();
    tl.to(this.mesh.children[0].material.uniforms.s_time,2.6,{
      value:0,
      ease: Expo.easeInOut
    })
    .to(this.mesh.children[0].material.uniforms.z_time,1.5,{
      value:1.0,
      // x:10000,
      ease: Expo.easeOut,
    },1.4)

    .to(this.mesh.children[0].material.uniforms.z_time,1,{
      value:10.0,
      // x:10000,
      ease: Expo.easeInOut,
    },2.9)
    .add(e=>{
      this.line.show();
    },3)


  }








  setEvent(){


  }
}
