//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Plane extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    this.timeline();   

  }

  setup() {

    this.ready();

    this.add();

    this.loopStart = true;

  }

  ready() {

    var geometry = new THREE.BoxGeometry( 5, 5, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    this.mesh = new THREE.Mesh(geometry, material);

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);  

  }

  draw() {



  }

  timeline() {

  }

  onResize() {

  }

}