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
    this.obj.mesh.position.z = 0;
    this.maintext.mesh.position.z = 10;
    this.setupController.base.scene.add(this.obj.mesh)
    this.setupController.base.scene.add(this.rand_Obj.mesh)
    this.setupController.base.scene.add(this.text.mesh)
    this.setupController.base.scene.add(this.maintext.wrap)

    this.timeline();
  }


  setEvent(){

  }


  timeline(){
    const tl = new TimelineMax({delay: .5});

    tl
      .add(e=>{
        this.text.show(1)
      },0)
      .add(e=>{
        this.text.hide(1)
      },.55)
      .add(e=>{
        this.text.show(2)
      },.55)
      .add(e=>{
        this.text.hide(2)
      },.95)
      .add(e=>{
        this.text.show(3)
      },.95)
      .add(e=>{
        this.text.hide(3)
      },1.3 + 0.1)
      .add(e=>{
        this.rand_Obj.show()
      },1.1 + 0.1)
      .add(e=>{
        this.rand_Obj.hide()
      },2.4 + 0.1)
      .add(e=>{
        this.maintext.show();
      },1.5 + 0.1)
      .add(e=>{
        this.obj.show()
      },2.3 + 0.1)
      .add(e=>{
        this.obj.show2()
      },4.0 + 0.1)
      .add(e=>{
        this.cameraMove();
      },4.5 + 0.1)
      .add(e=>{
        this.maintext.hide(1)
      },7.0 + 0.1)

  }



  cameraMove(){
    const tl = new TimelineMax();
    tl.to(this.setupController.base.camera.position,1,{
      ease:Expo.easeIn,
      z:this.setupController.base.camera.position.z * 1.2
    })
    // .to(this.setupController.base.camera.position,1.5,{
    //   ease:Expo.easeOut,
    //   z:this.setupController.base.camera.position.z * .8
    // })
  }
}
