// ------------------------------------------------------------
//
//  Objects
//
// ------------------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// import PointsCurl from './PointsCurl/Controller.es6';
// import Globe from './Globe/Controller.es6';
// import ObjectParticle from './ObjectParticle/Controller.es6';
import PE from './PE/Controller.es6';
import Awa from './Awa/Controller.es6';

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

    // this.awa = new Awa(this.scene, this.camera, this.renderer);
    // this.awa.timeline();

    // timeline
    // var tl = new TimelineMax({delay: 1.0});
    // tl
    //   .add(()=>{

    //     gb.v.load();

    //   }, 0.0)
    //   .add(()=>{

    //     this.renderer.setClearColor(0xFCE85E, 0.0);
    //     $('canvas').css({position: 'absolute','z-index': 5});

    //     this.awa.timeline();

    //   }, 0.0 + 3.0)

    // new Awa(this.scene, this.camera, this.renderer);

    this.pe = new PE(this.scene, this.camera, this.renderer);

  }


  update() {

    

  }
　
  draw() {


  }

  show() {


  }

  hide() {

 
  }

  setEvents() {

    super.setEvents();

  }

}