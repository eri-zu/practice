import Base from '_MyLibs/Util/Base.es6';
import frag from './Shader/frag.frag';
import vert from './Shader/vert.vert';
export default class Obj extends Base {
  constructor(textures,position,kangi_num) {
    //https://pixijs.io/pixi-filters/tools/demo/

    super();

    this.WIDTH = 1024;
    this.size = this.getPer(100);
    this.textures = textures;
    this.position = position;
    this.kangi_num = kangi_num;
    this.ready()

    this.isUEv = true;

    this.setEvents();
  }

  ready(){
    this.mesh = new THREE.Group()
    // console.log(window.g.cameraPosi);
    this.textures.map((t,i)=>{
      const geometry = new THREE.PlaneBufferGeometry(this.size,this.size);
      const material = new THREE.ShaderMaterial({
          vertexShader: vert,
          fragmentShader: frag,
          uniforms: {
              time: { type: 'f', value: 3 },
              amount: { type: 'f', value: 0.02},
              angle: { type: 'v2', value: new THREE.Vector3(Math.random()*Math.PI*2, 0, .5 + Math.random() * 0.5)},
              uTex:{type:'t',value:t},
              is_show:{ type: 'f', value: 0.0 },
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
  
  
  getPer(point = 100){
    if(window.innerWidth > 1023){
      return point;
    }else{
      return point / 1023 * window.innerWidth;
    }
  }

  update() {

    this.mesh.children.map((e,i)=>{

      e.material.uniforms.angle.value.y += gb.up.delta;
    
    })    

  }


  show(val=.04){
    const tl = new TimelineMax();
    this.setPosition()
    const p = this.position;
    const per = this.getPer(1);
    this.mesh.children.map((e,i)=>{
      // if(i>2)return ;
      const d = i * val;
      // console.log(i);
      tl
        .set(e.material.uniforms.is_show,{
          value:1
        },d)

        // rgb shift 収束
        .add(()=>{

          var d1=Math.random()*0.035;
          var d2=d1 + Math.random()*0.035;
          var d3=d2 + Math.random()*0.035;
          var d4=d3 + Math.random()*0.035;
          
          var s1=0.01 + Math.random()*0.02;
          var s2=0.01 + Math.random()*0.02;
          var s3=0.01 + Math.random()*0.02;
          var s4=0.015;

          TweenMax.set(e.material.uniforms.amount,{value: s1,delay:d1})
          TweenMax.set(e.material.uniforms.amount,{value: s2,delay:d2})
          TweenMax.set(e.material.uniforms.amount,{value: s3,delay:d3})
          TweenMax.set(e.material.uniforms.amount,{value: s4,delay:d4})

          TweenMax.set(e.material.uniforms.angle.value,{x: Math.random() * Math.PI * 2,delay:d1})
          TweenMax.set(e.material.uniforms.angle.value,{x: Math.random() * Math.PI * 2,delay:d2})
          TweenMax.set(e.material.uniforms.angle.value,{x: Math.random() * Math.PI * 2,delay:d3})
          TweenMax.set(e.material.uniforms.angle.value,{x: 2.5,delay:d4})

        }, d + .05)
        
        // pos
        .to(e.position,.8,{
          x:'+=' + -100 * per,
          ease:Expo.easeOut
        },d)
        .to(e.parent.position, 20.0,{
          x:'+=' + -400 * per,
          ease:Power0.easeNone
        },.15)
         
        //flash
        .add(()=>{

          var tl2 = new TimelineMax();
          for (var j = 0; j < 4; j++) {
            if(j%2 == 0){ 
              tl2.set(e.material.uniforms.is_show,{
                value:0
              },d + j * .02 + j * .01)
            }else{
              tl2.set(e.material.uniforms.is_show,{
                value:1
              },d + j*.02 + j * .01)
            }  
          }

        }, 0.0)        
      
      
    })
    
  }


  hide(){
    const per = this.getPer(1);
    this.mesh.children.map((e,i)=>{

      const d = i * .03;
      const tl = new TimelineMax();

      tl
        // x
        .to(e.position,.4,{
          x:'+=' + -100 * per,
          ease:Expo.easeOut
        },d)

        // rgb shift 大きく
        .add(()=>{

          var d1=Math.random()*0.035;
          var d2=d1 + Math.random()*0.035;
          var d3=d2 + Math.random()*0.035;
          var d4=d3 + Math.random()*0.035;
          
          var s1=0.03 + Math.random()*0.02;
          var s2=0.03 + Math.random()*0.02;
          var s3=0.03 + Math.random()*0.02;
          var s4=0.03 + Math.random()*0.02;
          
          TweenMax.set(e.material.uniforms.amount,{value: s1,delay:d1})
          TweenMax.set(e.material.uniforms.amount,{value: s2,delay:d2})
          TweenMax.set(e.material.uniforms.amount,{value: s3,delay:d3})
          TweenMax.set(e.material.uniforms.amount,{value: s4,delay:d4})

          TweenMax.set(e.material.uniforms.angle.value,{x: Math.random() * Math.PI * 2,delay:d1})
          TweenMax.set(e.material.uniforms.angle.value,{x: Math.random() * Math.PI * 2,delay:d2})
          TweenMax.set(e.material.uniforms.angle.value,{x: Math.random() * Math.PI * 2,delay:d3})
          TweenMax.set(e.material.uniforms.angle.value,{x: Math.random() * Math.PI * 2,delay:d4})

        }, d)


        // flash
        .add(()=>{

          var tl2 = new TimelineMax();
          for (var j = 0; j < 3; j++) {
            if(j%2 == 0){
              tl2.set(e.material.uniforms.is_show,{
                value:0
              },j*.01)
            }else{
              tl2.set(e.material.uniforms.is_show,{
                value:1
              },j*.01)
            }  
          }

        }, d)

    })
  }




  setPosition(){
    // const num = 2;
    const p = this.position;
    this.mesh.children.map((e,i)=>{
      if(!p[i])return;
      TweenMax.set(e.position,{
        x:p[i].x + this.getPer(120),
        y:p[i].y,
        // z:
      })
      TweenMax.set(e.scale,{
        x:p[i].s,
        y:p[i].s,
        // z:p[i].s,
      })

    })
  }
  
  
  resize(position){
    this.position = position;
    this.size = this.getPer(100);
    this.mesh.children.map(mesh=>{
      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneBufferGeometry(this.size,this.size);
    })
    this.setPosition()
  }
}
