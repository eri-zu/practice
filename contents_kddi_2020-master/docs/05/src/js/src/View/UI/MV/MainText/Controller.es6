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
            time: { type: 'f', value: 5.0 },
            resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth*window.devicePixelRatio,window.innerHeight * window.devicePixelRatio)},
            uTex:{type:'t',value:this.textures},
            w: { type: 'f', value: .1 },
            threshold:{ type: 'f', value: 1.0 },
            is_show:{ type: 'f', value: 0.0 },
            blocksize:{ type: 'f', value: 100.0 },
        },
        transparent: true,
        depthTest:false,
    });
    this.mesh = new THREE.Mesh(geometry,material);
    this.wrap = new THREE.Group()
    this.wrap.scale.set(1.2,1.2,1.2);
    this.mesh.scale.set(1.5,1.5,1.5);
    this.mesh.material.uniforms.time.value = 5.0;


    this.wrap.add(this.mesh);
    this.cb()
  }


  show(){
    const tl = new TimelineMax();
    const time = 1;
    tl
      .set(this.mesh.material.uniforms.is_show,{
        value:1
      })

      // rgb shift
      .to(this.mesh.material.uniforms.time,2.0,{
        value:1.0,
        ease:Expo.easeOut
      },0.0)

      // scale
      .to(this.mesh.scale,.9,{
        x:1.0,
        y:1.0,
        z:1.0,
        ease:Expo.easeOut
      },0.0)
      .to(this.wrap.scale,5.0,{
        x:1.0,
        y:1.0,
        z:1.0,
        ease:Power0.easeNone
      },0.0)
      .add(e=>{
        this.timeline(time)
      })

  }


  hide(time =1){
    const tl = new TimelineMax();
    // tl.to(this.mesh.position,time,{
    //   z:-500,
    //   ease:Power4.easeOut
    // })
    tl.to(this.mesh.position,.5,{
      z:-1000,
      ease:Power4.easeInOut
    })
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
