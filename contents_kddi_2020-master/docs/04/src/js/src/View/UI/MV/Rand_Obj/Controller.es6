export default class Rand_Obj {
  constructor() {
    this.NUM = 3;
    this.r = 100;
    this.SEGMENT = 3;
    this.naisetsu = (this.r * 3 ) / Math.sqrt(3);
    this.tri_height = this.r * 1.5 ;
    this.sclaes = [1,0.5,4];
    this.positions = [
      {
        x:-300,
        y:0
      },
      {
        x:-300 + this.naisetsu * .5,
        y:this.r * 0.5
      },
      {
        x:400,
        y:0
      }
    ]
    this.rotation = [
      0,Math.PI,0
    ]
    this.setup()
  }


  setup(){
    this.mesh = new THREE.Group();
    for (var i = 0; i < this.NUM; i++) {
      // if(this.sclaes[i] == 0)return;
      const g = new THREE.CircleBufferGeometry(this.r, this.SEGMENT,Math.PI *0.5 );
      const material = new THREE.LineBasicMaterial( {
        color: 0x65fbfd,
        linewidth: 10,
        opacity:0
       } );
      const edges = new THREE.EdgesGeometry( g );
      var line = new THREE.LineSegments(edges,material);
      line.scale.set(this.sclaes[i],this.sclaes[i],this.sclaes[i]);
      // line.scale.set(1);
      line.position.set(
        this.positions[i].x,this.positions[i].y,0
      )
      line.rotation.set(
        0,0,this.rotation[i]
      )
      this.mesh.add(line);
    }

  }


  show(){
    const tl = new TimelineMax();
    this.mesh.children.map((e,i)=>{
      tl.to(e.material,1,{
        opacity:1
      },i*0.1)
      .to(e.scale,0.2,{
        x:0.00001,
        y:0.00001,
        z:0.00001,
        ease: Power4.easeOut
      },1 + i*.1)
    })
  }


}
