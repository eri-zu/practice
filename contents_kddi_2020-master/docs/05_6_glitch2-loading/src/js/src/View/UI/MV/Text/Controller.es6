import TextObj from './Obj/Controller.es6';
export default class Controller {
  constructor(textures) {
    this.textures = textures;
    this.setup();
    this.setEvent();


  }


  setup(){
    this.ready();
  }




  ready(){
    this.mesh = new THREE.Group()
    const per = this.getPer(1);
    const position = {
      t1:[
        {x:-300,y:300,s:3},
        {x:-300 + 100*1.25,y:220,s:2},
        {x:-300 + 100*2,y:220 - 100*.3,s:2},
      ],
      t2:[
        {x:300,y:200,s:4.5},
        {x:300 + 100 * 1.3,y:90,s:1.5},
        {x:300 + 100 * 0.5,y:20,s:1.5},
      ],
      t3:[
        {x:-200,y:100 - 30,s:4},
        {x:-200 + 110 * 1.4,y:20 - 30,s:2.5},
        {x:-200 + 100 + 170,y:60 - 30,s:1.5},
        {x:-200 + 100 + 170 + 100 * .5,y:20 - 30,s:1.5},
        {x:-200 + 100 + 170 + 100 * 1,y:50 - 30,s:1.5},
      ]
    }
    this.position = position;
    for (const key in position) {
      position[key].map(e=>{
        e.x *= per;
        e.y *= per;
      })
    }
    const t01 = this.textures.filter((t,i)=>{
      return i < 3;
    })
    this.text01 = new TextObj(t01,position.t1,1);
    this.mesh.add(this.text01.mesh);
    const t02 = this.textures.filter((t,i)=>{
      return i >= 3 && i < 6;
    })
    this.text02 = new TextObj(t02,position.t2,2);
    this.mesh.add(this.text02.mesh);

    const t03 = this.textures.filter((t,i)=>{
      return i >= 6 && i < this.textures.length;
    })
    this.text03 = new TextObj(t03,position.t3,2);
    this.mesh.add(this.text03.mesh);

    this.mesh.position.y = -100 * per;
  }
  
  getPer(point = 100){
    if(window.innerWidth > 1023){
      return point;
    }else{
      return point / 1023 * window.innerWidth;
    }
  }


  show(index = 1){
    const tl = new TimelineMax();
    tl.add(e=>{
      if(index == 1){
        this.text01.show()
      }
      if(index == 2){
        this.text02.show()
      }
      if(index == 3){
        this.text03.show(.03)
      }

    })
  }


  hide(index = 1){
    const tl = new TimelineMax();
    tl.add(e=>{
      if(index == 1){
        this.text01.hide()
      }
      if(index == 2){
        this.text02.hide()
      }
      if(index == 3){
        this.text03.hide()
      }
    })
  }


  setEvent(){

  }
  
  resize(){
    const per = this.getPer(1);
    for (const key in this.position) {
      this.position[key].map(e=>{
        e.x *= per;
        e.y *= per;
      })
    }
    this.text01.resize(this.position.t1)
    this.text02.resize(this.position.t2)
    this.text03.resize(this.position.t3)
  }


  timeline(){

  }
}
