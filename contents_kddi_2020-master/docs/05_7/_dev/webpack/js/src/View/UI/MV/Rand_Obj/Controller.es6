// const MeshLine = require( 'three.meshline' );
import * as basePosi from './GetBasePosition.es6';
import * as showAnimation from './ShowAnimation.es6';
export default class Rand_Obj {
  constructor(key="tri") {
    
    this.key = key;
    
    
    const per = this.getPer(1);
    this.r = 100 * per;
    this.LINE_WIDTH = 10;
    this.naisetsu = (this.r * 3 ) / Math.sqrt(3);
    this.tri_height = this.r * 1.5;
    
    
    if(this.key =='tri'){
      this.NUM = 3;
      this.SEGMENT = 3;
      this.COLOR = new THREE.Color(0x3afffe)
      this.positions = [
        {x:-300 * per,y:0,z:0},
        {x:(-300 * per + this.naisetsu * 1.1),y:this.r * 1.6 * per,z:0},
        {x:400 * per,y:-this.r * 1.5* per,z:0}
      ]
      this.rotation = [
        Math.PI*.5,Math.PI * (30/180) ,Math.PI*.5
      ]
      this.scales = [1.2,0.7,4];
    }else if(this.key == 'rect'){
      this.SEGMENT = 4;
      this.NUM = 2;
      this.COLOR = new THREE.Color(0x59ef07);
      this.positions = [
        {x:-400 * per,y:0,z:0},
        {x:500*per,y:this.r * .5 * per,z:0},
      ]
      this.rotation = [
        Math.PI*.5,Math.PI*1.5
      ]
      this.scales = [4,1];
    }else if(this.key == 'hexagon'){
      this.SEGMENT = 6;
      this.NUM = 5;
      this.COLOR = new THREE.Color(0xfd49d7);
      this.positions = [
        {x:-200 * per,y:0,z:0},
        {x:400*per,y:this.r * 1 * per,z:0},
        {x:375 * per,y:this.r * .65,z:0},
        {x:250*per,y:this.r * 1.5 * per,z:0},
        {x:-100*per,y:this.r * -.5 * per,z:0},
        
      ]
      this.rotation = [
        Math.PI*.5,Math.PI*1.5,Math.PI*.5,Math.PI*1.5,Math.PI*.5
      ]
      this.scales = [1.7,.2,.2,.2,4];
    }
    
    
    
    
    this.showCount = 10;
    
    
    
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
      
      const posi = basePosi.getTriangle({
        s:this.scales[j],
        r:this.r,
        rotation:this.rotation[j],
        segment:this.SEGMENT
      })
      
      this.fillObj(this.scales[j],this.rotation[j],this.positions[j]);
      
      const [mesh,lineposi,geo] = this.lineObj(posi);
      mesh.position.set(this.positions[j].x,this.positions[j].y,this.positions[j].z);
      this.mesh.add(mesh);
      const [mesh2,geo2] = this.lineObj2(lineposi,j);
      mesh2.position.set(this.positions[j].x,this.positions[j].y,this.positions[j].z);
      this.mesh.add(mesh2);
    }
  }

  fillObj(scale = 1,rotation = Math.PI * .5,position){
    const geometry = new THREE.CircleBufferGeometry(this.r * scale, this.SEGMENT,rotation);
    const material = new THREE.MeshBasicMaterial({
      color:this.COLOR,
      transparent: true,
      opacity:0,
      depthTest: true,
    })
    const mesh = new THREE.Mesh(geometry, material );
    mesh.name = 'fill'
    mesh.position.set(position.x,position.y,position.z);
    this.mesh.add(mesh);
  }
  
  
  lineObj(posi){
    const geometry = new THREE.Geometry();
    posi.map((e,i)=>{
      var v = i == posi.length -1 ? new THREE.Vector3( posi[0].x, posi[0].y,0) : new THREE.Vector3( e.x, e.y,0);
      geometry.vertices.push( v );
    })
    const  line = new MeshLine();
    line.setGeometry( geometry,p=>{
      return this.LINE_WIDTH
    });
    const material = new MeshLineMaterial({
      color:this.COLOR,
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
    return [mesh,posi,geometry];
  }
  
  
  lineObj2(posi,index){
    const geometry = new THREE.Geometry();
    let p = [posi[0],posi[1]];
    if(index == 2 && this.key =='tri'){
      p = [posi[0],posi[2]]
    }
    
    const v1 = new THREE.Vector3( p[0].x, p[0].y,0);
    const v2 = new THREE.Vector3( p[1].x, p[1].y,0);
    const _v3 = v2.sub(v1).distanceTo(v1);
    const scalar = _v3 > 100 ? 10 : 100;
    // if()
    const v3 = v2.sub(v1).multiplyScalar(scalar).add(v1);
    
    geometry.vertices.push(v1 );
    geometry.vertices.push(v3 );
    const  line = new MeshLine();
    line.setGeometry( geometry,p=>{
      return this.LINE_WIDTH * .5
    });
    const material = new MeshLineMaterial({
      color:this.COLOR,
      resolution:new THREE.Vector2(window.innerWidth,window.innerHeight),
      sizeAttenuation:false,
      depthWrite: false,
      depthTest: true,
      dashArray:2,
      dashOffset: 0,
      transparent: true,
    });
    const mesh = new THREE.Mesh( line.geometry, material );
    mesh.name = 'l'
    return [mesh,geometry];
  }
  
  
  



  show(){
    if(this.key == 'tri')showAnimation.triangle(this.mesh);
    if(this.key == 'rect')showAnimation.rect(this.mesh);
    if(this.key == 'hexagon')showAnimation.hexagon(this.mesh);
    
  }


  resize(){
    this.mesh.children.map(mesh=>{
      if(mesh.name == 'line' || mesh.name == 'l'){
        mesh.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth,window.innerHeight);
      }
      
    })
    const per = this.getPer(1);
    this.r = 100 * per;
    this.naisetsu = (this.r * 3 ) / Math.sqrt(3);
    this.positions = [
      {x:-300 * per,y:0,z:0},
      {x:(-300 * per + this.naisetsu * 1.1),y:this.r * 1.6 * per,z:0},
      {x:400 * per,y:-this.r * 1.5* per,z:0}
    ]
    const objs = [];
    this.mesh.children.map((e,i)=>{
      const index = Math.floor(i/3);
      if(!objs[index]){
        objs[index] = {};
      }
      objs[index][e.name] = e;
    })
    objs.map((obj,index)=>{
      
      const scale = this.scales[index]
      const rotation = this.rotation[index]
      const posi = basePosi.getTriangle({
        s:this.scales[index],
        rotation:this.rotation[index],
        r:this.r,
        segment:this.SEGMENT
      })
      const [m,l_posi,geometry] = this.lineObj(posi)
      const [m2,geometry2] = this.lineObj2(l_posi,index);
      console.log();
      obj.l.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth,window.innerHeight);
      obj.line.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth,window.innerHeight);
      obj.fill.geometry.dispose();
      obj.fill.geometry = new THREE.CircleBufferGeometry(this.r * scale, this.SEGMENT,rotation);
      obj.fill.position.set(this.positions[index].x,this.positions[index].y,this.positions[index].z);
      obj.line.geometry.dispose();
      obj.line.geometry = m.geometry
      obj.line.position.set(this.positions[index].x,this.positions[index].y,this.positions[index].z);
      obj.l.geometry.dispose();
      obj.l.geometry = m2.geometry
      obj.l.position.set(this.positions[index].x,this.positions[index].y,this.positions[index].z);
    })
    
  }


}
