// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";

// basic objects
// object
// import Point from './Basics/Point.js';
// import Line from './Basics/Line.js';
// import CurvedLine from './Basics/CurvedLine.js';
// import Triangle from './Basics/Triangle.js';
// import Plane from './Basics/Plane.js';
// import Cube from './Basics/Cube/Cube_shaderMaterial.js';
// import Cube from "./Basics/Cube/Controller.js";
// import Polygon from './Basics/Polygon.js';
// import Circle from './Basics/Circle.js';
// import Img from './Basics/Img/Img_shaderMaterial.js';
// import Text from './Basics/Text.js';
import MyGeometry from "./MyGeometry/MyGeometry.js";

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
  }

  ready() {}

  add() {
    // basic
    // this.Point = new Point(this.scene, this.camera);
    // this.Line = new Line(this.scene, this.camera);
    // this.CurvedLine = new CurvedLine(this.scene, this.camera);
    // this.Triangle = new Triangle(this.scene, this.camera);
    // this.Plane = new Plane(this.scene, this.camera);
    // this.Cube = new Cube(this.scene, this.camera, this.renderer);
    // this.Polygon = new Polygon(this.scene, this.camera);
    // this.Circle = new Circle(this.scene, this.camera);
    // this.Img = new Img(this.scene, this.camera);
    // this.Text = new Text(this.scene, this.camera);
    // custom
    // this.sLine = new StraightLineAnimation(this.scene, this.camera);
    // this.cLine = new CurveLineAnimation(this.scene, this.camera);
    // this.Plane_Full = new Plane_Full(this.scene, this.camera);

    this.myGeometry = new MyGeometry(this.scene, this.camera, this.renderer);
  }

  update() {}
  draw() {}

  show() {}

  hide() {}
}
