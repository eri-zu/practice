// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Awa_last from './Awa_last/Controller.es6';
import Awa_speed from './Awa_speed/Controller.es6';
import Awa_first from './Awa_first/Controller.es6';

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

    this.awa_last = new Awa_last(this.scene, this.camera, this.renderer);
    this.awa_speed = new Awa_speed(this.scene, this.camera, this.renderer);
    this.awa_first = new Awa_first(this.scene, this.camera, this.renderer);

  }


  update() {

    

  }
　
  draw() {


  }

  show() {

    var tl = new TimelineMax({delay: 1.0});

    tl
      .add(()=>{

        this.awa_first.timeline();

      }, 0.0)
      .add(()=>{

        this.awa_speed.timeline();

      }, 0.5 + .4)
      .add(()=>{

        this.awa_last.timeline();

      }, 1.8)

  }

  hide() {

 
  }

  setEvents() {

    super.setEvents();

  }

}