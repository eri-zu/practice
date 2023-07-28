import {DataTexture,RGBFormat,Math as _Math,FloatType} from '../three_setup/modules/three-m.es6';
import glitch from './Shader/glitch.frag';
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
        tDip:this.generateHeightmap(64),
        byp:{type:'i' , value:1},
        amount:{type:'f', value:0},
        angle:{type:'f', value:0},
        seed:{type:'f', value:0},
        seed_x:{type:'f', value:0},
        seed_y:{type:'f', value:0},
        distortion_x:{type:'f', value:0},
        distortion_y:{type:'f', value:0},
        col_s:{type:'f', value:0},
      }
    };
    
    //trigger
    this.randX = _Math.randInt( 120, 240 );
  

    this.pp_params = [this.glitchPass];
  }
  
  
  generateHeightmap( dt_size ) {
		var data_arr = new Float32Array( dt_size * dt_size * 3 );
		var length = dt_size * dt_size;

		for ( var i = 0; i < length; i ++ ) {
			var val = _Math.randFloat( 0, 1 );
			data_arr[ i * 3 + 0 ] = val;
			data_arr[ i * 3 + 1 ] = val;
			data_arr[ i * 3 + 2 ] = val;
		}
    
    
		return new DataTexture( data_arr, dt_size, dt_size, RGBFormat, FloatType );
	}
  
  
  glitch(goWild){
    //goWild => true 永続的にだす
    
    this.glitchPass.uniforms.byp.value = 0;
    this.glitchPass.uniforms.seed.value = Math.random();
    if(this.time % this.randX == 0 ||  goWild){
      this.glitchPass.uniforms['amount'].value =  Math.random() / 100;
      this.glitchPass.uniforms[ 'angle' ].value = _Math.randFloat( - Math.PI, Math.PI );
      this.glitchPass.uniforms[ 'seed_x' ].value = _Math.randFloat( - .1, .1 );
      this.glitchPass.uniforms[ 'seed_y' ].value = _Math.randFloat( - .1, .1 );
			this.glitchPass.uniforms[ 'distortion_x' ].value = _Math.randFloat( 0, .1 );
			this.glitchPass.uniforms[ 'distortion_y' ].value = _Math.randFloat( 0, .1 );
      this.time = 0;
      this.randX = _Math.randInt( 120, 240 );
    }else if ( this.time % this.randX < this.randX / 5 ) {
      this.glitchPass.uniforms[ 'amount' ].value = Math.random() / 100;
			this.glitchPass.uniforms[ 'angle' ].value = _Math.randFloat( - Math.PI, Math.PI );
			this.glitchPass.uniforms[ 'distortion_x' ].value = _Math.randFloat( 0, .1 );
			this.glitchPass.uniforms[ 'distortion_y' ].value = _Math.randFloat( 0, .1 );
			this.glitchPass.uniforms[ 'seed_x' ].value = _Math.randFloat( - 0.3, 0.3 );
			this.glitchPass.uniforms[ 'seed_y' ].value = _Math.randFloat( - 0.3, 0.3 );
    }else if ( !goWild ) {
			this.glitchPass.uniforms[ 'byp' ].value = 1;
		}
    ++this.time;
  }
  
  
  glitchShow(time){
    const tl = new TimelineMax();
    const _t = {t:0}
    tl.set(this.glitchPass.uniforms.byp,{
      value:0
    })
    .to(_t,time,{
      t:1,
      onUpdate:e=>{
        this.glitchPass.uniforms.seed.value = Math.random();
        this.glitchPass.uniforms[ 'amount' ].value = Math.random() / 90;
  			this.glitchPass.uniforms[ 'angle' ].value = _Math.randFloat( - Math.PI, Math.PI );
  			this.glitchPass.uniforms[ 'distortion_x' ].value = _Math.randFloat( -1, 1 );
  			this.glitchPass.uniforms[ 'distortion_y' ].value = _Math.randFloat( -1, 1 );
  			this.glitchPass.uniforms[ 'seed_x' ].value = _Math.randFloat( - 0.3, 0.3 );
  			this.glitchPass.uniforms[ 'seed_y' ].value = _Math.randFloat( - 0.3, 0.3 );
      }
    })
    .set(this.glitchPass.uniforms.byp,{
      value:1
    })
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
