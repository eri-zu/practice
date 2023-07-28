// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// basic objects
// object
// import Point from './Basic/Point.es6';
// import Line from './Basic/Line.es6';
// import CurvedLine from './Basic/CurvedLine.es6';
// import Triangle from './Basic/Triangle.es6';
// import Plane from './Basic/Plane.es6';
// import Cube from './Basic/Cube/Cube_shaderMaterial.es6';
// import Cube from './Cube/Cube.es6';
// import Polygon from './Basic/Polygon.es6';
// import Circle from './Basic/Circle.es6';
// import Img from './Basic/Img/Img_shaderMaterial.es6';
// import Img from './Basics/Img/Img.es6';
// import Text from './Basic/Text.es6';

// each object shader
import Img from './Img/Controller.es6';

// custom Imgs

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

  }


  ready() {


  }

  add() {

    // basic
    // this.Point = new Point(this.scene, this.camera);
    // this.Line = new Line(this.scene, this.camera);
    // this.CurvedLine = new CurvedLine(this.scene, this.camera);
    // this.Triangle = new Triangle(this.scene, this.camera);
    // this.Img = new Img(this.scene, this.camera);
    this.Img = new Img(this.scene, this.camera, './assets/resource/img/hero.jpg');
    // this.Polygon = new Polygon(this.scene, this.camera);
    // this.Circle = new Circle(this.scene, this.camera);
    // this.Img = new Img(this.scene, this.camera);
    // this.Text = new Text(this.scene, this.camera);

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