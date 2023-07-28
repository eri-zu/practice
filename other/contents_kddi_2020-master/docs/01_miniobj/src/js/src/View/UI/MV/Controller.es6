import SetupController from './three_setup/Controller.es6';
import Obj from './Obj/Controller.es6';
export default class Controller {
  constructor() {
    this.setup();
    this.setEvent();
  }


  setup(){
    this.setupController = new SetupController($('.canvas'),true)
    this.obj = new Obj();
    this.obj2 = new Obj(10,true);
    this.setupController.base.scene.add(this.obj.mesh)
    this.setupController.base.scene.add(this.obj2.mesh)
    const tl = new TimelineMax();
    tl.add(e=>{

      this.obj.show()
    })
    .add(e=>{

      this.obj.show2()

    },3)
    .add(e=>{
      this.obj2.show_random()
    },4)
  }


  setEvent(){

  }
}
