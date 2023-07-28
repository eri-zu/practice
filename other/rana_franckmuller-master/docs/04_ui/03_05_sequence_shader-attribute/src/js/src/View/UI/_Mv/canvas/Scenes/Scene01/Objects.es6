// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// basic objects
// object
// import Point from './Basics/Point.es6';
// import Line from './Basic/Line.es6';
// import CurvedLine from './Basic/CurvedLine.es6';
// import Triangle from './Basic/Triangle.es6';
import Plane from './Plane/Controller.es6';
// import Cube from './Cube/Cube_PostEffect/Controller.es6';
// import Polygon from './Basic/Polygon.es6';
// import Circle from './Basic/Circle.es6';
// import Img from './Basic/Img/Img_shaderMaterial.es6';
// import Img from './Basics/Img/Img.es6';
// import Text from './Basic/Text.es6';
// import Sphere from './Sphere/Controller.es6';

// custom objects

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

    // ready
    this.ready();

    // add
    this.add();

    this.loopStart = true;

  }


  ready() {


  }

  add() {

    // basic
    // this.Point = new Point(this.scene, this.camera);
    // this.Line = new Line(this.scene, this.camera);
    // this.CurvedLine = new CurvedLine(this.scene, this.camera);
    // this.Triangle = new Triangle(this.scene, this.camera);
    // clearTimeout(this.Timer);
    // this.Timer = setTimeout(()=>{
      
      this.Plane1 = new Plane(this.scene, this.camera, './assets/resource/img/watch/PC_TOP_1.jpg');    
      this.Plane2 = new Plane(this.scene, this.camera, './assets/resource/img/watch/PC_TOP_2.jpg');    
      this.Plane3 = new Plane(this.scene, this.camera, './assets/resource/img/watch/PC_TOP_3.jpg');    

      var tl = new TimelineMax({delay: 2.0, repeat: -1, repeatDelay: 6.5 - 1.0});

      tl
        .add(()=>{

          this.Plane1.timeline();

        }, 0.0)
        .add(()=>{

          this.Plane2.timeline();

        }, 6.5 - 1.0 * 1)
        .add(()=>{

          this.Plane3.timeline();

        }, 6.5 * 2 - 1.0 * 2)

      
    // }, 3000);
    
    // this.Cube = new Cube(this.scene, this.camera, this.renderer);
    // this.Polygon = new Polygon(this.scene, this.camera);
    // this.Circle = new Circle(this.scene, this.camera);
    // this.Img = new Img(this.scene, this.camera);
    // this.Text = new Text(this.scene, this.camera);
    // this.Sphere = new Sphere(this.scene, this.camera);

    // custom
    // this.sLine = new StraightLineAnimation(this.scene, this.camera);
    // this.cLine = new CurveLineAnimation(this.scene, this.camera);
    // this.Plane_Full = new Plane_Full(this.scene, this.camera);

  }

  update() {

    

  }
　
  draw() {


  }

  show() {


  }

  hide() {

 
  }

}