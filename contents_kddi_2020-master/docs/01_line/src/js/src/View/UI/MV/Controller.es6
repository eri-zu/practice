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
    this.setupController.base.scene.add(this.obj.mesh)
    const tl = new TimelineMax();
    tl.add(e=>{

      this.obj.show()
    })
    .add(e=>{
      this.obj.show2()

    },3)
  }


  setEvent(){

  }
}
