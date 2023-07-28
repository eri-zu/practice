import frag from './Shader/frag.frag';
import vert from './Shader/vert.vert';
export default class Controller {
  constructor(cb) {
    this.cb = cb;
    this.imgpath = './assets/img/main.png';
    this.loader = new THREE.TextureLoader();
    this.setup();
    this.setEvent();


  }


  setup(){
    this.loader.load(this.imgpath,t=>{
      this.textures = t;
      this.ready();
    })
  }


  ready(){
    // console.log(this.textures);
    const per = this.textures.image.naturalHeight / this.textures.image.naturalWidth;
    const geometry = new THREE.PlaneBufferGeometry( window.innerWidth * .8,per * window.innerWidth * .8);
    const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
            time: { type: 'f', value: 0.0 },
            resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth*window.devicePixelRatio,window.innerHeight * window.devicePixelRatio)},
            uTex:{type:'t',value:this.textures},
            w: { type: 'f', value: .1 },
            threshold:{ type: 'f', value: 1.0 },
            is_show:{ type: 'f', value: 0.0 },
            blocksize:{ type: 'f', value: 100.0 },
        },
        transparent: true,
        depthTest:true,
    });
    this.mesh = new THREE.Mesh(geometry,material);
    this.cb()
  }


  show(){
    const tl = new TimelineMax();
    const time = 1;
    tl.set(this.mesh.material.uniforms.is_show,{
      value:1
    })
    .to(this.mesh.material.uniforms.time,time,{
      value:5.0,
      ease:Power4.easeInOut
    })
    .add(e=>{
      this.timeline(time)
    })

  }


  hide(){

  }


  rgbShiftHide(){
    const tl = new TimelineMax();
    tl.to(this.mesh.material.uniforms.time,.2,{
      value:0.0,
      ease:Power4.easeInOut
    })
  }


  setEvent(){

  }


  timeline(time){
    const tl = new TimelineMax();
    tl.to(this.mesh.material.uniforms.time,time*2,{
      value:6.0,
      ease:Power4.easeInOut
    })
  }
}
