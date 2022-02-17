import frag from './Shader/frag.frag';
import vert from './Shader/vert.vert';
export default class Obj {
  constructor(textures,position,kangi_num) {
    //https://pixijs.io/pixi-filters/tools/demo/

    this.WIDTH = 1024;
    this.size = 100;
    this.textures = textures;
    this.position = position;
    this.kangi_num = kangi_num;
    this.ready()
  }


  setup(){

    this.ready()
  }

  ready(){
    this.mesh = new THREE.Group()
    // console.log(window.g.cameraPosi);
    this.textures.map((t,i)=>{
      console.log(t)
      const geometry = new THREE.PlaneBufferGeometry(this.size,this.size);
      const material = new THREE.ShaderMaterial({
          vertexShader: vert,
          fragmentShader: frag,
          uniforms: {
              time: { type: 'f', value: 0 },
              resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth*window.devicePixelRatio,window.innerHeight * window.devicePixelRatio)},
              uTex:{type:'t',value:t},
              imageResolution:{type:'v2',value:new THREE.Vector2(this.WIDTH,this.WIDTH)},
              is_show:{ type: 'f', value: 0.0 },
              is_kangi:{type:'f',value : i<this.kangi_num ? 1.0 : 0.0},
              threshold:{ type: 'f', value: 0.0 },
              w:{type:'f',value: .2 }
          },
          transparent: true,
          depthTest:true,
          // opacity:0

      });
      const mesh  = new THREE.Mesh(geometry,material);
      this.mesh.position.z = (10 - i);
      var wrap = new THREE.Group()
      wrap.add(mesh);
      this.mesh.add(mesh)
    })

  }




  show(){
    const tl = new TimelineMax();
    this.setPosition(tl)
    const p = this.position;
    this.mesh.children.map((e,i)=>{
      // if(i>2)return ;
      const d = i * .05;
      // console.log(i);
      tl.set(e.material.uniforms.is_show,{
        value:1
      },d)

      // pos
      .to(e.position,.4,{
        x:'+=' + -50,
        ease:Expo.easeOut
      },d)
      .to(e.parent.position, 12.0,{
        x:'+=' + -400,
        ease:Power0.easeNone
      },0)
      // pos + rgbshit
      .to(e.material.uniforms.time, .7,{
        value:9,
        ease:Expo.easeIn
      },d)
    })
  }


  hide(){
    const tl = new TimelineMax();
    const time = 0.1;
    this.mesh.children.map((e,i)=>{
      const d = i * .1;

      tl
      // .set(e.material.uniforms.is_kangi,{
      //   value:1
      // },0)
      // .to(e.material.uniforms.time,time,{
      //   value:2.0
      // },0)
      .to(e.material.uniforms.threshold,time,{
        value:1.0,
        ease:Power4.easeOut
      },0)
      .to(e.material.uniforms.w,time,{
        value:11.0,
        ease:Power4.easeOut
      },0)
      .to(e.material.uniforms.is_show,.1,{
        value:0
      },time - 0.01)
    })
  }




  setPosition(tl){
    // const num = 2;
    const p = this.position;
    this.mesh.children.map((e,i)=>{
      if(!p[i])return;
      tl.set(e.position,{
        x:p[i].x + 80,
        y:p[i].y,
        // z:
      })
      .set(e.scale,{
        x:p[i].s,
        y:p[i].s,
        // z:p[i].s,
      })

    })
  }
}
