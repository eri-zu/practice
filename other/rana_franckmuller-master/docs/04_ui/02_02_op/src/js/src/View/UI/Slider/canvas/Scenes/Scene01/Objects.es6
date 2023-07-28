// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

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

    // ready
    this.ready();

    // add
    this.add();

  }


  ready() {


  }

  add() {

    this.Img = new Img(this.scene, this.camera);

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