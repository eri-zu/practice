// const MeshLine = require( 'three.meshline' );
export default class Rand_Obj {
  constructor() {
    // https://github.com/spite/THREE.MeshLine
    // SplineCurve
    // 2d
    this.NUM = 3;
    this.r = 100;
    this.SEGMENT = 3;
    this.LINE_WIDTH = 10;
    this.naisetsu = (this.r * 3 ) / Math.sqrt(3);
    this.tri_height = this.r * 1.5 ;
    this.scales = [1,0.5,4];
    this.showCount = 10;
    this.colors = [
      new THREE.Color(0x3afffe)
    ]
    this.positions = [
      {
        x:-300,
        y:0,
        z:0
      },
      {
        x:-300 + this.naisetsu * .5,
        y:this.r * 0.5,
        z:0
      },
      {
        x:400,
        y:-this.r * .5,
        z:0
      }
    ]
    this.rotation = [
      Math.PI*.5,Math.PI * (30/180) ,Math.PI*.5
    ]
    this.setup()
  }


  setup(){
    this.mesh = new THREE.Group();
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
        dashOffset: 1,
  	    transparent: true,
      });

      const mesh = new THREE.Mesh( line.geometry, material );
      mesh.name = 'line'
      mesh.position.set(this.positions[j].x,this.positions[j].y,this.positions[j].z);
      // console.log(mesh);
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

    this.mesh.children.map((e,i)=>{
      tl.to(e.material,.3,{
        opacity:1,
        ease:Expo.easeIn,
      },i * .1)
      if(e.name == 'fill'){
        tl.to(e.material,.3,{
          opacity:0,
          ease:Expo.easeOut,
        },i * .1 + .3)
      }
      if(e.name == 'line'){
        const r = Math.random() * 2 -1;
        tl.to(e.rotation,.2,{
          // z:Math.PI * -.05,
          ease:Power4.easeIn,
        },i * .1 + 1)
        .to(e.material.uniforms.dashOffset,.5,{
          value:2,
          ease:Power2.easeIn,
        },i * .1 + .8)
      }

    })
  }





  hide(){
    const tl = new TimelineMax();
    this.mesh.children.map((e,i)=>{
      if(e.name == 'fill'){
        tl.to(e.material,.5,{
          opacity:0,
          ease:Expo.easeInOut,
        },i * .1 + .1)
      }else{
        tl.to(e.material.uniforms.dashOffset,.3,{
          value:2,
          ease:Power2.easeOut,
        },i * .1)
      }

    })
  }


}