import SetupController from './three_setup/Controller.es6';
import Obj from './Obj/Controller.es6';
import Rand_Obj from './Rand_Obj/Controller.es6';
export default class Controller {
  constructor() {
    this.setup();
    this.setEvent();
  }


  setup(){
    this.setupController = new SetupController($('.canvas'),true)
    this.obj = new Obj();
    this.rand_Obj = new Rand_Obj();
    this.setupController.base.scene.add(this.obj.mesh)
    this.setupController.base.scene.add(this.rand_Obj.mesh)
    // this.setupController.base.scene.add(this.rand_Obj.line)
    this.timeline();
  }


  setEvent(){

  }


  timeline(){
    const tl = new TimelineMax();
    tl.add(e=>{
      this.rand_Obj.show()
    })
    .add(e=>{
      this.rand_Obj.hide()
    },2.3)
    .add(e=>{
      // this.obj.show()
    },3.1)
    .add(e=>{
      // this.obj.show2()
    },6)
  }
}
