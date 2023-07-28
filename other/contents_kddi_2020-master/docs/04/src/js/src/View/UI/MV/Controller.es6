import SetupController from './three_setup/Controller.es6';
import Obj from './Obj/Controller.es6';
import Rand_Obj from './Rand_Obj/Controller.es6';
import Text from './Text/Controller.es6';
import MainText from './MainText/Controller.es6';
export default class Controller {
  constructor() {
    this.setup();
    this.setEvent();
  }


  setup(){
    this.setupController = new SetupController($('.canvas'),true)
    window.g = {
      cameraPosi : this.setupController.base.camera.position
    }
    this.obj = new Obj();
    this.rand_Obj = new Rand_Obj();
    this.text = new Text(()=>{
      this.maintext = new MainText(()=>{
        this.ready();
      })
    })

    // this.setupController.base.scene.add(this.rand_Obj.line)

  }


  ready(){
    this.setupController.base.scene.add(this.obj.mesh)
    this.setupController.base.scene.add(this.rand_Obj.mesh)
    this.setupController.base.scene.add(this.text.mesh)
    this.setupController.base.scene.add(this.maintext.mesh)
    this.timeline();
  }


  setEvent(){

  }


  timeline(){
    const tl = new TimelineMax();

    tl.add(e=>{
      this.text.show(1)
    })
    .add(e=>{
      this.text.hide(1)
    },1.2)
    .add(e=>{
      this.text.show(2)
    },0.7)
    .add(e=>{
      this.text.hide(2)
    },1.6)
    .add(e=>{
      this.text.show(3)
    },1.1)
    .add(e=>{
      this.text.hide(3)
    },2.1)
    .add(e=>{
      this.maintext.show();
    },2.5)

    // tl.add(e=>{
    //   this.rand_Obj.show()
    // })
    // .add(e=>{
    //   this.obj.show()
    // },.5)
    // .add(e=>{
    //   this.obj.show2()
    // },3.1)

  }
}
