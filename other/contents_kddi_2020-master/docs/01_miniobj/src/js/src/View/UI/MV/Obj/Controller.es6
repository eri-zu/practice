import frag from './Shader/frag.frag';
import vert from './Shader/vert.vert';
import vert_mini from './Shader/vert_mini.vert';
import LineController from './Line/Controller.es6'
import getGeometry from './getGeometry.es6'
import getGeometry_random from './getGeometry_random.es6'
export default class Controller {
  constructor(r = 100,is_random = false) {
    this.r = r;
    this.is_random = is_random;
    this.SEGMENT = 3;
    this.naisetsu = this.r * 2 * Math.sin(Math.PI / this.SEGMENT);
    this.tri_height = this.r * 1.5 ;

    this.Y_NUM = is_random ?
      window.innerWidth / 300 :
      Math.floor(window.innerHeight / this.tri_height) + 2;
    this.X_NUM = is_random ?
      window.innerWidth / 300 :
      Math.floor(window.innerWidth / this.naisetsu) * 2 + 10;
    this.NUM = this.X_NUM * this.Y_NUM;

    this.setup();
    this.setEvent();
  }


  setup(){
    const param = {r:this.r, segment:this.SEGMENT, ynum : this.Y_NUM, xnum : this.X_NUM, num:this.NUM, tri_height:this.tri_height, naisetsu:this.naisetsu}
    const geometry = this.is_random ? getGeometry_random(param) : getGeometry(param);
    const material = new THREE.ShaderMaterial({
        vertexShader: this.is_random ? vert_mini : vert,
        fragmentShader: frag,
        uniforms: {
            time: { type: 'f', value: 0 },
            resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth*window.devicePixelRatio,window.innerHeight * window.devicePixelRatio)},
            s_time:{type:'f',value:0},
            tri_height:{type:"f",value:this.tri_height},
            rgb:{type:'v3',value:new THREE.Vector3((101/255),(251/255),(253/255))},
            z_time:{type:"f",value:0},
            num : {type:"f",value:this.NUM},
        }
    });
    this.mesh = new THREE.Group();
    this.mesh.add(new THREE.Mesh( geometry, material ));
    if(!this.is_random)this.lineSetup();
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
      if(!this.is_random)this.line.show();
    },3.3)
  }


  show_random(){
    const tl = new TimelineMax();
    tl.to(this.mesh.children[0].material.uniforms.time,3,{
      value:1.0,
      ease: Power1.easeInOut
    })
    .to(this.mesh.children[0].material.uniforms.s_time,.5,{
      value:1.0,
      ease: Expo.easeInOut
    },0)
    .to(this.mesh.children[0].material.uniforms.s_time,1,{
      value:0,
      // x:10000,
      ease: Expo.easeInOut,
    },1.9)
  }








  setEvent(){


  }
}
