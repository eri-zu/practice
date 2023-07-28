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

    this.isUEv = true;

    this.ready();

    this.add();

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

    // scale
    this.mesh.scale.set(gb.param1.p3+0.01,gb.param1.p3+0.01,gb.param1.p3+0.01)

    // color
    var c = new THREE.Color('rgb('+Math.ceil(gb.param1.color2[0])+', '+Math.ceil(gb.param1.color2[1])+', '+Math.ceil(gb.param1.color2[2])+')');
    this.mesh.material.color = c; 

    this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);  

  }

  draw() {



  }

  timeline() {

  }

  onResize() {

  }

}