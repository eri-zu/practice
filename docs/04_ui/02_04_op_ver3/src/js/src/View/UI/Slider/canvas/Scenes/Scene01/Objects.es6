// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// import Img from './Img/Controller.es6';
import Img from './Img/Controller.es6';

export default class Objects extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isREv = true;

    this.num = 0;

    // ready
    this.ready();

    // add
    this.add();

  }


  ready() {


  }

  add() {

    this.imgList = [];
    this.Img1 = new Img(this.scene, this.camera, 1);    
    this.Img2 = new Img(this.scene, this.camera, 2);    
    this.Img3 = new Img(this.scene, this.camera, 3);    

    this.imgList.push(this.Img1,this.Img2,this.Img3);

  }

  update() {

    

  }
　
  draw() {


  }

  show() {

    var tl = new TimelineMax();
    var len = this.imgList.length;

    tl
      .add(()=>{

        for (var i = 0; i < len; i++) {
          
          var img = this.imgList[i];
          img.show(0.4 * (len - i));
          
        }        
      
      }, 0.0)
      .add(()=>{

        for (var i = 0; i < len; i++) {
          
          var img = this.imgList[i];
          if (i!==0) img.hide();
          
        }                       
      
      }, 3.0)

  }

  next(num) {

    this.num = num;
    var tl = new TimelineMax();

    tl
      .add(()=>{

        this.imgList[num].next(0.7, this.imgList.length);

      }, 0.0)
      .add(()=>{

        for (var i = 0; i < this.imgList.length; i++) {
          var img = this.imgList[i];
          if (num!==i) img.mesh.position.z = i * 0.01;
        }

        log(111);

      }, 0.0)

  }

  hide() {

 
  }

  onResize() {

    for (var i = 0; i < this.imgList.length; i++) {
      var img = this.imgList[i];
      if (this.num==i) img.onResize(true);
      else img.onResize(false);
    }

  }

}