// const MeshLine = require( 'three.meshline' );
export default class Rand_Obj {
  constructor() {
    // https://github.com/spite/THREE.MeshLine
    // SplineCurve
    // 2d
    this.NUM = 3;
    const per = this.getPer(1);
    this.r = 100 * per;
    this.SEGMENT = 3;
    this.LINE_WIDTH = 10;
    this.naisetsu = (this.r * 3 ) / Math.sqrt(3);
    this.tri_height = this.r * 1.5 ;
    this.scales = [1.2,0.7,4];
    this.showCount = 10;
    this.colors = [
      new THREE.Color(0x3afffe)
    ]
    this.positions = [
      {x:-300 * per,y:0,z:0},
      {x:(-300 * per + this.naisetsu * 1.1),y:this.r * 1.6 * per,z:0},
      {x:400 * per,y:-this.r * 1.5* per,z:0}
    ]
    this.rotation = [
      Math.PI*.5,Math.PI * (30/180) ,Math.PI* (150/180) * -1
    ]
    this.setup()
  }
  
  getPer(point = 100){
    if(window.innerWidth > 1023){
      return point;
    }else{
      return point / 1023 * window.innerWidth;
    }
  }


  setup(){
    this.mesh = new THREE.Group();
    this.lines = [];
    for (var j = 0; j < this.NUM; j++) {
      const geometry = new THREE.Geometry();
      const posi = this.getVertice(this.scales[j],this.rotation[j])
      this.fillObj(this.scales[j],this.rotation[j],this.positions[j]);
      posi.map((e,i)=>{

        var v = i == posi.length -1 ? new THREE.Vector3( posi[0].x, posi[0].y,0) : new THREE.Vector3( e.x, e.y,0);
        // console.log(v);
        geometry.vertices.push( v );
      })

      const  line = new MeshLine();
      line.setGeometry( geometry,p=>{
        return this.LINE_WIDTH
      });
      const material = new MeshLineMaterial({
        color:this.colors[0],
        resolution:new THREE.Vector2(window.innerWidth,window.innerHeight),
        sizeAttenuation:false,
        opacity: 0,
        depthWrite: false,
  	    depthTest: true,
        dashArray:2,
        dashOffset: 0,
  	    transparent: true,
      });

      const mesh = new THREE.Mesh( line.geometry, material );
      mesh.name = 'line'
      mesh.position.set(this.positions[j].x,this.positions[j].y,this.positions[j].z);
      // console.log(mesh);
      this.mesh.add(mesh);
    }
    
    for (var i = 0; i < this.NUM; i++) {
      const l = this.mesh.children[2 * i + 1];
      const p1 = [l.geometry.attributes.position.array[0],l.geometry.attributes.position.array[1],l.geometry.attributes.position.array[2]];
      const p2 = [l.geometry.attributes.position.array[6],l.geometry.attributes.position.array[7],l.geometry.attributes.position.array[8]];
      const v = [p1[0] - p2[0],p1[1] - p2[1],p1[2] - p2[2]];
      const nv = [v[0] * -15,v[1] * -15,0];
      const p = [nv[0] + p1[0],nv[1] + p1[1],nv[2] + p1[2]];
      const geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(p1[0],p1[1],p1[2]))
      geometry.vertices.push(new THREE.Vector3(p[0],p[1],p[2]));
      const  line = new MeshLine();
      line.setGeometry( geometry,p=>{
        return this.LINE_WIDTH / 2
      });
      const material = new MeshLineMaterial({
        color:this.colors[0],
        resolution:new THREE.Vector2(window.innerWidth,window.innerHeight),
        sizeAttenuation:false,
        // opacity: 0,
        depthWrite: false,
  	    depthTest: true,
        dashArray:2,
        dashOffset: 0,
  	    transparent: true,
      });
      const mesh = new THREE.Mesh( line.geometry, material );
      mesh.name = 'l'
      mesh.position.set(this.positions[i].x,this.positions[i].y,this.positions[i].z);
      this.lines.push(mesh)
      this.mesh.add(mesh);
    }
  }


  getVertice(scale = 1,rotation = Math.PI * .5){
    const base_geometry = new THREE.CircleBufferGeometry(this.r * scale, this.SEGMENT,rotation);
    const r = [];
    // console.log(base_geometry);
    const p = base_geometry.index.array.filter((item,i) => {
      if(item > 0)return item
    }).filter((x, i, self)=> {return self.indexOf(x) === i;})
    base_geometry.attributes.position.array.map((e,i)=>{
      const index = Math.floor(i/3)
      const is_p = p.indexOf(index)>=0;
      if(!is_p)return;
      const ar = index - 1;
      if(!r[ar])r.push({x:0,y:0,z:0});
      if(i%3 == 0)r[ar].x = e;
      if(i%3 == 1)r[ar].y = e;
      if(i%3 == 2)r[ar].z = e;
    })
    return r;
  }


  fillObj(scale = 1,rotation = Math.PI * .5,position){
    const geometry = new THREE.CircleBufferGeometry(this.r * scale, this.SEGMENT,rotation);
    const material = new THREE.MeshBasicMaterial({
      color:this.colors[0],
      transparent: true,
      opacity:0,
      depthTest: true,
    })
    const mesh = new THREE.Mesh(geometry, material );
    mesh.name = 'fill'
    mesh.position.set(position.x,position.y,position.z);
    this.mesh.add(mesh);
  }



  show(){
    const tl = new TimelineMax();
    const objs = [];
    this.mesh.children.map((e,i)=>{
      const index = Math.floor(i*.5);
      if(!objs[index]){
        objs[index] = {};
      }
      objs[index][e.name] = e;
    })
    // console.log(this.lines);
    tl


      


    // 真ん中の三角形
    .to(this.lines[1].material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },.0)
    .to(this.lines[1].material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },.1)
    .add(e=>{
      this.rotateShow(objs[1])
    },.3)

    // 左側の三角形
    .to(this.lines[0].material.uniforms.dashOffset,.2,{
      value:1,
      ease:Power4.easeOut
    },.6 - 0.3)
    .to(this.lines[0].material.uniforms.dashOffset,.3,{
      value:2,
      ease:Power4.easeOut
    },.7 - 0.3)
    .add(e=>{
      this.moveShow(objs[0]);
    },.6 - 0.3)

    // 右側の三角形
    // .to(this.lines[2].material.uniforms.dashOffset,.2,{
    //   value:1,
    //   ease:Power4.easeOut
    // },0)
    // .to(this.lines[2].material.uniforms.dashOffset,.3,{
    //   value:2,
    //   ease:Power4.easeOut
    // },.2)
    .add(e=>{
      this.zoomShow(objs[2])
    },.7)

    
  }
  zoomShow(objs){
    // console.log(objs);
    const tl = new TimelineMax();

    tl
      // show
      .set(objs.line.material,{
        opacity:1
      }, 0.0)

      // 線が伸びる
      .to(objs.line.material.uniforms.dashOffset,.4,{
        value:1,
        ease:Expo.easeOut,
      }, 0.0)
      .to(objs.line.material.uniforms.dashOffset,.5,{
        value:2,
        ease:Expo.easeOut,
      }, 0.5)
      
      // .to(objs.fill.material,.2,{
      //   opacity:1,
      //   ease:Power2.easeInOut
      // },1.0)

      // flash
      .add(()=>{
        for (var j = 0; j < 7; j++) {
          if(j%2 == 0){
            TweenMax.set(objs.fill.material,{
              opacity:0,
              delay: j * .03
            })
          }else{
            TweenMax.set(objs.fill.material,{
              opacity:1,
              delay: j * .03
            })
          }  
        }
      }, 0.2)


  }
  
  moveShow(objs){
    const tl = new TimelineMax();
    tl
      .to(objs.line.material,.2,{
        opacity:1
      },0)

      // 線を伸ばす
      .to(objs.line.material.uniforms.dashOffset,.2,{
        value:1,
        ease:Expo.easeInOut
      },.2)
      .to(objs.line.material.uniforms.dashOffset,.2,{
        value:2,
        ease:Expo.easeInOut
      },.4)

      // flash
      .add(()=>{
        for (var j = 0; j < 7; j++) {
          if(j%2 == 0){
            TweenMax.set(objs.fill.material,{
              opacity:0,
              delay: j * .03
            })
          }else{
            TweenMax.set(objs.fill.material,{
              opacity:1,
              delay: j * .03
            })
          }  
        }
      }, 0.5)

  }
  
  
  rotateShow(objs){
    const tl = new TimelineMax();
    tl
      .set(objs.line.material,{opacity:1})

      // rotate
      .to(objs.fill.rotation,.3,{
        z: - Math.PI * 2,
        ease:Expo.easeOut
      },0)

      // flash
      .add(()=>{
        for (var j = 0; j < 7; j++) {
          if(j%2 == 0){
            TweenMax.set(objs.fill.material,{
              opacity:0,
              delay: j * .03
            })
          }else{
            TweenMax.set(objs.fill.material,{
              opacity:1,
              delay: j * .03
            })
          }  
        }
      }, 0.2)

      // 線伸ばす
      .to(objs.line.material.uniforms.dashOffset,.4,{
        value:1,
        ease:Expo.easeOut
      },.0)
      .to(objs.line.material.uniforms.dashOffset,.2,{
        value:2,
        ease:Expo.easeOut
      },.2)

  }
  
  






  hide(){
    const tl = new TimelineMax();
    const objs = [];
    this.mesh.children.map((e,i)=>{
      const index = Math.floor(i*.5);
      if(!objs[index]){
        objs[index] = {};
      }
      objs[index][e.name] = e;
    })

    objs.map((e,i)=>{
      if(i > 2)return;

      tl.to(e.fill.material,.1,{
        opacity:0,
        ease:Expo.easeInOut,
      },i * .01)
      if(e.line.material.uniforms.dashOffset.value >= 2)e.line.material.uniforms.dashOffset.value = 1
      tl.to(e.line.material.uniforms.dashOffset,.3,{
        value:2.1,
        ease:Power4.easeOut,
      },i * .01 + .1)
    })

  }
  
  
  resize(){
    this.mesh.children.map(mesh=>{
      if(mesh.name == 'line'){
        mesh.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth,window.innerHeight);
      }
    })
    this.lines.map(mesh=>{
      mesh.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth,window.innerHeight);
    })
    const per = this.getPer(1);
    this.r = 100 * per;
    this.naisetsu = (this.r * 3 ) / Math.sqrt(3);
    this.positions = [
      {x:-300 * per,y:0,z:0},
      {x:(-300 * per + this.naisetsu * 1.1),y:this.r * 1.6 * per,z:0},
      {x:400 * per,y:-this.r * 1.5* per,z:0}
    ]
    this.mesh.children.map((mesh,index)=>{
      if(mesh.name == 'fill'){
        const scale = this.scales[index/2]
        const rotation = this.rotation[index/2]
        mesh.geometry.dispose();
        mesh.geometry = new THREE.CircleBufferGeometry(this.r * scale, this.SEGMENT,rotation);
        mesh.position.set(this.positions[index/2].x,this.positions[index/2].y,this.positions[index/2].z);
      }
      if(mesh.name == 'line'){
        const geometry = new THREE.Geometry();
        const i = (index - 1)/2;
        
        const posi = this.getVertice(this.scales[i],this.rotation[i])
        posi.map((e,i)=>{
          var v = i == posi.length -1 ? new THREE.Vector3( posi[0].x, posi[0].y,0) : new THREE.Vector3( e.x, e.y,0);
          geometry.vertices.push( v );
        })
        const  line = new MeshLine();
        line.setGeometry(geometry,p=>{
          return this.LINE_WIDTH
        })
        mesh.geometry.dispose();
        mesh.geometry = line.geometry
        mesh.position.set(this.positions[i].x,this.positions[i].y,this.positions[i].z);
      }
      if(mesh.name == 'l'){
        const l = this.mesh.children[2 * (index-6) + 1];
        const p1 = [l.geometry.attributes.position.array[0],l.geometry.attributes.position.array[1],l.geometry.attributes.position.array[2]];
        const p2 = [l.geometry.attributes.position.array[6],l.geometry.attributes.position.array[7],l.geometry.attributes.position.array[8]];
        const v = [p1[0] - p2[0],p1[1] - p2[1],p1[2] - p2[2]];
        const nv = [v[0] * -15,v[1] * -15,0];
        const p = [nv[0] + p1[0],nv[1] + p1[1],nv[2] + p1[2]];
        const geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(p1[0],p1[1],p1[2]))
        geometry.vertices.push(new THREE.Vector3(p[0],p[1],p[2]));
        const  line = new MeshLine();
        line.setGeometry( geometry,p=>{
          return this.LINE_WIDTH / 2
        });
        mesh.geometry.dispose();
        mesh.geometry = line.geometry
        mesh.position.set(this.positions[index-6].x,this.positions[index-6].y,this.positions[index-6].z);
      }
    })
    
  }


}
