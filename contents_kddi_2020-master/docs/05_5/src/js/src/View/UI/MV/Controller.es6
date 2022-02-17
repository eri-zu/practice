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
    this.cz = this.setupController.base.camera.position.z
    window.g = {
      cameraPosi : this.setupController.base.camera.position,
      camera : this.setupController.base.camera
    }
    this.objs = [new Obj(3),new Obj(4),new Obj(6)]
    this.rand_Obj = new Rand_Obj();
    this.text = new Text(()=>{
      this.maintext = new MainText(()=>{
        this.ready();
        
      })
    })

    // this.setupController.base.scene.add(this.rand_Obj.line)

  }


  ready(){
    this.objs.map(e=>{
      e.mesh.position.z = 0;
      this.setupController.base.scene.add(e.mesh)
    })
    this.maintext.mesh.position.z = 10;
    
    this.setupController.base.scene.add(this.rand_Obj.mesh)
    this.setupController.base.scene.add(this.text.mesh)
    this.setupController.base.scene.add(this.maintext.wrap)
    this.c = 0;
    $(window).trigger('setup_mv');
    // this.show();
  }


  setEvent(){
    $(window).on('loadingEnd',e=>{
      this.show()
    })
    $(window).on('resize',e=>{
      this.resize();
    })
  }
  
  
  resize(){
    this.setupController.base.onWindowResize()
    this.objs.map(obj=>{
      obj.resize();
    })
    this.rand_Obj.resize();
    this.text.resize()
    this.maintext.resize();
  }
  
  
  show(){
    const tl = new TimelineMax({delay:1.5});
    // tl.add(e=>{
    //   this.objs[2].show()
    // })
    tl
      // show
      .add(e=>{
        this.text.show(1)
      },0.0)
      .add(e=>{
        this.text.show(2)
      },0.3)
      .add(e=>{
        this.text.show(3)
      },0.4) 
    
      // hide
      .add(e=>{
        this.text.hide(1)
      },1.0)
      .add(e=>{
        this.text.hide(2)
      },1.1)
      .add(e=>{
        this.text.hide(3)
      },1.2)
    
      .add(e=>{
        this.timeline();
      },1.0 + 0.0)
  }


  timeline(){
    const tl = new TimelineMax();

    tl
      // rand_Obj
      .add(e=>{
        this.rand_Obj.show()
      },0)
      .add(e=>{
        // this.rand_Obj.hide()
      },1.6 + .1)

      // mainText
      .add(e=>{
        this.maintext.show();
      },0.8 + 0.1)

      // obj
      .add(e=>{
        this.objs[this.c].show()
      },0.7 + 0.1)
      .add(e=>{
        this.objs[this.c].show2()
      },2.7 + 0.1)

      // cameramove
      .add(e=>{
        this.cameraMove();
      },3.4 + 0.1)
      .add(e=>{
        this.maintext.hide(1)
      },5.9 + 0.1)

      // loop
      .add(e=>{
        ++this.c;
        if(this.c == this.objs.length){
          this.c = 0;
        }
        this.objs.map(e=>{
          e.mesh.position.z = 0;
        })
        this.setupController.base.camera.position.z = this.cz;
        this.timeline()
      },7.0)

  }



  cameraMove(){
    const tl = new TimelineMax();
    tl
    .to(this.setupController.base.camera.position,1,{
      ease:Expo.easeIn,
      z:this.setupController.base.camera.position.z * 1.2
    })
    // .to(this.setupController.base.camera.position,1.5,{
    //   ease:Expo.easeOut,
    //   z:this.setupController.base.camera.position.z * .8
    // })
  }
}
