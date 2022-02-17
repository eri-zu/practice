import SetupController from "./three_setup/Controller.es6";
import Obj from "./Obj/Controller.es6";
import Rand_Obj from "./Rand_Obj/Controller.es6";
import Text from "./Text/Controller.es6";
import MainText from "./MainText/Controller.es6";
import PostEffect from "./PostEffect/Controller.es6";

//loader
import ImgController from "./three_setup/Img/Controller.es6";

const UAParser = require("ua-parser-js");

export default class Controller {
  constructor() {
    this.setup();
    this.setEvent();
  }

  setup() {
    this.setupController = new SetupController($(".canvas"), false);
    this.is_showed = false;
    this.cz = this.setupController.base.camera.position.z;
    window.g = {
      cameraPosi: this.setupController.base.camera.position,
      camera: this.setupController.base.camera
    };
    this.objs = [new Obj(3), new Obj(6), new Obj(4)];
    this.rand_Obj = [
      new Rand_Obj("tri"),
      new Rand_Obj("hexagon"),
      new Rand_Obj("rect")
    ];
    const split = [];
    let maint;
    window.gb.textures.map(tex => {
      if (tex.name == "splitText") split.push(tex.texture);
      else maint = tex.texture;
    });
    this.text = new Text(split);
    this.maintext = new MainText(maint);
    this.ready();
  }

  ready() {
    this.objs.map(e => {
      e.mesh.position.z = 0;
      this.setupController.base.scene.add(e.mesh);
    });
    this.maintext.mesh.position.z = 10;
    this.rand_Obj.map(obj => {
      this.setupController.base.scene.add(obj.mesh);
    });

    this.setupController.base.scene.add(this.text.mesh);
    this.setupController.base.scene.add(this.maintext.wrap);
    this.c = 0;

    this.postEffect = new PostEffect();
    this.tpp = new TPP(
      this.setupController.base.renderer,
      this.postEffect.pp_params
    );
    this.setupController.base.tpp = this.tpp;

    this.show();
  }

  setEvent() {
    //throttle
    const result = UAParser();
    let w = window.innerWidth;
    $(window).on(
      "resize",
      $.throttle(500, e => {
        if (result.device.type == "mobile") {
          if (w != window.innerWidth) {
            this.resize();
            w = window.innerWidth;
          }
        } else {
          this.resize();
        }
      })
    );
  }

  resize() {
    // console.log('resize',window.innerHeight);
    let h = 0;
    if (window.innerWidth > 1024) h = window.innerHeight;
    else if (gb.conf.BUILT_IN) h = $(".mv").height();
    else h = window.innerHeight;
    $(".section01").height(h);
    this.setupController.base.onWindowResize();
    this.cz = this.setupController.base.camera.position.z;
    this.objs.map(obj => {
      obj.resize();
    });
    this.rand_Obj.map(obj => {
      obj.resize();
    });
    this.text.resize();
    this.maintext.resize();
  }

  show() {
    // this.rand_Obj[2].show()

    const tl = new TimelineMax({ delay: 0.0 });
    // this.objs[0].show()
    // tl.add(e=>{
    //   this.objs[2].show()
    // })
    tl
      // show
      .add(e => {
        this.postEffect.glitchShow(0.3);

        this.text.show(1);
      }, 0.0)
      .add(e => {
        this.postEffect.glitchShow(0.3);

        this.text.show(2);
      }, 0.4)
      .add(e => {
        this.postEffect.glitchShow(0.3);

        this.text.show(3);
      }, 0.7)

      // hide
      .add(e => {
        this.postEffect.glitchShow(0.4);

        this.text.hide(1);
      }, 1.0 + 0.2)
      .add(e => {
        this.text.hide(2);
      }, 1.2 + 0.2)
      .add(e => {
        this.text.hide(3);
      }, 1.3 + 0.2)

      .add(e => {
        this.timeline();
      }, 1.2 + 0.2);
  }

  timeline() {
    const tl = new TimelineMax();

    tl
      // rand_Obj
      .add(e => {
        this.rand_Obj[this.c].show();
      }, 0)

      // mainText
      .add(e => {
        this.maintext.show(this.postEffect);
        this.showContents();
      }, 0.8 + 0.1)

      // obj
      .add(e => {
        this.objs[this.c].show();
      }, 0.9 + 0.1)
      .add(e => {
        this.objs[this.c].show2();
      }, 2.7 + 0.3 + 2.0)

      // cameramove
      .add(e => {
        this.cameraMove();
      }, 3.2 + 0.3 + 2.0)

      // main text
      .add(e => {
        this.maintext.hide(this.postEffect);
      }, 5.9 + 0.0 + 2.0)
      // loop
      .add(e => {
        ++this.c;
        if (this.c == this.objs.length) {
          this.c = 0;
        }
        this.objs.map(e => {
          e.mesh.position.z = 0;
        });
        this.setupController.base.camera.position.z = this.cz;
        this.timeline();
      }, 6.0 + 0.0 + 2.0);
  }

  showContents() {
    if (gb.conf.BUILT_IN && !this.is_showed) {
      this.is_showed = true;
      // const tl = new TimelineMax();
      // tl.to('.blk_header',.8,{
      //   opacity:1,
      //   y:$('.blk_header').height(),
      //   ease:Power2.easeInOut
      // }, 0)
      // .to('.mv',.8,{
      //   opacity:1,
      //   y:0,
      //   ease:Power2.easeInOut
      // }, 0)

      $("body").addClass("openingDone");
    }
  }

  cameraMove() {
    const tl = new TimelineMax();
    tl.to(this.setupController.base.camera.position, 1.5, {
      z: this.setupController.base.camera.position.z * 1.5,
      ease: Expo.easeInOut
    });
  }

  render() {
    //post effectをかけるかどうか
    this.setupController.base.render(true);
  }
}
