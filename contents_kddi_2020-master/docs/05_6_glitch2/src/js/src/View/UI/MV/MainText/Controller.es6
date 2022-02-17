import frag from './Shader/frag.frag';
import vert from './Shader/vert.vert';
export default class Controller {
  constructor(texture) {
    this.textures = texture;
    this.size = 1024;
    this.setup();
    this.setEvent();


  }


  setup(){
    this.ready()
  }
  
  
  getPer(point = 100){
    if(window.innerWidth > 1023){
      return point;
    }else{
      return point / 1023 * window.innerWidth;
    }
  }

  ready(){
    // console.log(this.textures);
    const per = this.textures.image.naturalHeight / this.textures.image.naturalWidth;
    const w_per = this.getPer(1);
    const geometry = new THREE.PlaneBufferGeometry( this.size * w_per,per * this.size * w_per);
    const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
            time: { type: 'f', value: 5.0 },
            amount: { type: 'f', value: 0.0},
            angle: { type: 'v2', value: new THREE.Vector3(Math.random()*Math.PI*2, 0, .5 + Math.random() * 0.5)},
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
    
    this.mesh.material.uniforms.time.value = 5.0;


    this.wrap.add(this.mesh);
  }


  show(p){
    const tl = new TimelineMax();
    const time = 1;
    this.wrap.scale.set(1.15,1.15,1.15);
    this.mesh.scale.set(1.5,1.5,1.5);
    this.mesh.position.z = 0.0;
    this.mesh.position.y = 10.0;

    tl
      .add(()=>{

        p.glitchShow(0.125, 0.1 + Math.random() * 0.1, 0.2, 70);

        // 回数
        var delay = 0.2;
        for (var i = 0; i < 2; i++) {

          var dd = 0.0;
          delay += dd + Math.random() * .5;
          if (i==0) dd = 0;
          var len = Math.floor(3 + Math.random() * 3);
          var d=delay;
          var s=0.01;

          // glitch数
          for (var j = 0; j < len; j++) {

            var dStren = 0.06;
            var strength = 0.02 + 0.03;
            if (Math.random()<.3) dStren = 0.15;
            if (Math.random()<.4) strength = 0.05 + 0.03;
            if (Math.random()<.05) strength = 0.07 + 0.03;

            d+=(0.02 + Math.random()*dStren);
            s+=(Math.random()-.5)*strength;
            if (j==len-1) s=0.0;
            
            TweenMax.set(this.mesh.material.uniforms.amount,{value: s,delay:d})
            TweenMax.set(this.mesh.material.uniforms.angle.value,{x: (Math.random()-.5) * Math.PI * 2,delay:d})
            
          }
          
        }

        // flash
        var tl2 = new TimelineMax();
        for (var j = 0; j < 6; j++) {
          if(j%2 == 0){ 
            tl2.set(this.mesh.material.uniforms.is_show,{
              value:0
            },j * .02 + j * .01)
          }else{
            tl2.set(this.mesh.material.uniforms.is_show,{
              value:1
            },j*.02 + j * .01)
          }  
        }

      }, 0.0)

      // rgb shift
      .add(()=>{

        TweenMax.killTweensOf(this.mesh.material.uniforms.amount)
        TweenMax.killTweensOf(this.mesh.material.uniforms.angle.value)

        var delay = 0;

        // 回数
        for (var i = 0; i < 2; i++) {

          var dd = 0;
          if (i>0) dd = 2.2;
          delay += dd + Math.random() * .5;
          if (i==2) delay = 5.2 
          var len = Math.floor(3 + Math.random() * 3);
          var d=delay;
          var s=0.01;

          // effect
          var tle = new TimelineMax();
          tle
            .add(()=>{
              p.glitchShow(.1+Math.random()*0.2, 0.02 + Math.random() * 0.03);
            }, d)

          // glitch数
          for (var j = 0; j < len; j++) {

            var dStren = 0.06;
            var strength = 0.02;
            if (Math.random()<.3) dStren = 0.15;
            if (Math.random()<.4) strength = 0.05;
            if (Math.random()<.05) strength = 0.07;

            d+=(0.02 + Math.random()*dStren);
            s+=(Math.random()-.5)*strength;
            if (j==len-1) s=0.0;
            
            TweenMax.set(this.mesh.material.uniforms.amount,{value: s,delay:d})
            TweenMax.set(this.mesh.material.uniforms.angle.value,{x: (Math.random()-.5) * Math.PI * 2,delay:d})
            
          }
          
        }

        // 最後は、弾けるタイミングに合わせる
        var tll = new TimelineMax();
        tll
          .add(()=>{

            // effect
            p.glitchShowCut(0.125, 0.2 + Math.random() * 0.1, 0.0);
            p.glitchShow(0.125, 0.2 + Math.random() * 0.1, 0.125);

            var len = Math.floor(4);
            var d=0;
            var s=0.01;
            // glitch数
            for (var j = 0; j < len; j++) {

              var dStren = 0.06;
              var strength = 0.02 + 0.1;
              if (Math.random()<.3) dStren = 0.15;
              if (Math.random()<.4) strength = 0.05 + 0.1;
              if (Math.random()<.05) strength = 0.07 + 0.1;

              d+=(0.02 + Math.random()*dStren);
              s+=(Math.random()-.5)*strength;
              if (j==len-1) s=0.0;
              
              TweenMax.set(this.mesh.material.uniforms.amount,{value: s,delay:d})
              TweenMax.set(this.mesh.material.uniforms.angle.value,{x: (Math.random()-.5) * Math.PI * 2,delay:d})
              
            }
          }, 5.23)


      }, 0.0)

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
        ease:Power0.easeNone,
        onStart: ()=>{

          // var len = 3;
          // var d = 0;
          // var dStren = 1.0 + Math.random() * 1;
          // var tl = new TimelineMax();
          // for (var i = 0; i < 5; i++) {
          //   d += dStren
          //   tl
          //     .add(()=>{
          //       // effect
          //       p.glitchShow(.1+Math.random()*0.2, 0.01 + Math.random() * 0.02);
          //     }, d)
          // }

        }

      },0.0)

      // cameraが引くことで小さくなりすぎないように
      .to(this.mesh.scale,1.5,{
        x:1.4,
        y:1.4,
        z:1.4,
        ease:Expo.easeInOut
      },0.0 + 2.6 + 2.0)

      .add(e=>{
        this.timeline(time)
      })

  }


  hide(p){
    const tl = new TimelineMax();
    // tl.to(this.mesh.position,time,{
    //   z:-500,
    //   ease:Power4.easeOut
    // })
    tl
      // z
      .to(this.mesh.position,.5,{
        z:-window.g.camera.far,
        ease:Power4.easeInOut
      }, 0.0)

      // flash
      .add(()=>{

        // effect
        p.glitchShow(1, 0.02 + Math.random() * 0.03);

        var tl2 = new TimelineMax();
        for (var j = 0; j < 3; j++) {
          if(j%2 == 0){ 
            tl2.set(this.mesh.material.uniforms.is_show,{
              value:0
            },j * .02 + j * .01)
          }else{
            tl2.set(this.mesh.material.uniforms.is_show,{
              value:1
            },j*.02 + j * .01)
          }  
        }

        // gtlich
        var len = Math.floor(3 + Math.random() * 3);
        var d=0;
        var s=0.01;

        // glitch数
        for (var j = 0; j < len; j++) {

          var dStren = 0.06;
          var strength = 0.02;
          if (Math.random()<.3) dStren = 0.15;
          if (Math.random()<.4) strength = 0.05;
          if (Math.random()<.05) strength = 0.07;

          d+=(0.02 + Math.random()*dStren);
          s+=(Math.random()-.5)*strength;
          if (j==len-1) s=0.0;
          
          TweenMax.set(this.mesh.material.uniforms.amount,{value: s,delay:d})
          TweenMax.set(this.mesh.material.uniforms.angle.value,{x: (Math.random()-.5) * Math.PI * 2,delay:d})
          
        }

      }, 0.0)

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
  
  resize(){
    const per = this.textures.image.naturalHeight / this.textures.image.naturalWidth;
    const w_per = this.getPer(1);
    const geometry = new THREE.PlaneBufferGeometry( this.size * w_per,per * this.size * w_per);
    this.mesh.geometry.dispose();
    this.mesh.geometry = geometry
  }


  timeline(time){
    const tl = new TimelineMax();
    tl.to(this.mesh.material.uniforms.time,time*2,{
      value:6.0,
      ease:Power4.easeInOut
    })
  }
}
