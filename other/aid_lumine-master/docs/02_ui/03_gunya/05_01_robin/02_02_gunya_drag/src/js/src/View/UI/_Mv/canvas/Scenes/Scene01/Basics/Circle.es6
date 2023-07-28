//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Plane extends Base {

  constructor(scene, camera) {

    super();

    this.scene = scene;
    this.camera = camera;

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

    // this.container = new THREE.Object3D();

    // circle
    var geometry = new THREE.CircleGeometry( 5, 32 );
    var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide});

    this.mesh = new THREE.Mesh( geometry, material );

    // ring
    var geometry = new THREE.RingGeometry( 10, 15, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );

    this.mesh02 = new THREE.Mesh( geometry, material );

  }

  add() {

    this.scene.add(this.mesh, this.mesh02);

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