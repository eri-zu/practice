// import {DataTexture,RGBFormat,Math as _Math,FloatType} from '../three_setup/modules/three-m.es6';
import glitch from './Shader/glitch.frag';
// import {FXAAShader} from './Shader/FXAAShader.js';
export default class Controller{
  constructor() {
    this.time = 0;
    this.init();
    this.setEvent();
    
  }


  init(){
    this.name = '01Controller';
    this.glitchPass = {
      fragmentShader:glitch,
      uniforms:{
        resolution:{
          value:new THREE.Vector2(window.innerWidth,window.innerHeight),
          type:'v2'
        },
        time:{
          value:0.0,
          type:'f'
        },
        blockSize:{
          value:100,
          type:'f'
        },
        threshold:{
          value:0.0,
          type:'f'
        },
        slideWidth:{
          value:0.0,
          type:'f'
        },

      }
    };
    
    // FXAAShader.uniforms.resolution.value = new THREE.Vector2(
    //   1/(window.innerWidth*window.devicePixelRatio),
    //   1/(window.innerHeight*window.devicePixelRatio)
    // )
    // 
  

    // this.pp_params = [FXAAShader,this.glitchPass];
    this.pp_params = [this.glitchPass];
  }
  
  glitchShow(dur, val=.025, delay=0, blockSize=100){

    const tl = new TimelineMax({delay:delay});
    const uniforms = this.glitchPass.uniforms

    uniforms.blockSize.value = blockSize;

    tl
      .set(uniforms.slideWidth,{
        value:val
      },0.0)

      .to(uniforms.time, dur,{
        value:'+=1'
      },0.0)
      .set(uniforms.threshold,{
        value:.8
      },0.0)
      .to(uniforms.slideWidth, dur,{
        value:0
      },0.0)

      // end
      .set(uniforms.threshold,{
        value:0
      })
      .set(uniforms.slideWidth,{
        value:0
      })

  }

  glitchShowCut(dur=0, val=.025, delay=0){

    const tl = new TimelineMax({delay:delay});
    const uniforms = this.glitchPass.uniforms

    uniforms.blockSize.value = 10;

    tl
      .set(uniforms.slideWidth,{
        value:val
      },0.0)

      .to(uniforms.time, dur,{
        value: Math.random()
      },0.0)
      .set(uniforms.threshold,{
        value:.8
      },0.0)


  }

  setEvent(){
  
  }
  
  
  timeline(){
    
  }



  reset(){

  }


  update(){
    console.log('update');
  }








}
