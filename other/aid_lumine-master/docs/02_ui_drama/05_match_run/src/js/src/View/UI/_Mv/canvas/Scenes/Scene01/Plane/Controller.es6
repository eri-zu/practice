//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Plane extends Base {

  constructor(scene, camera, src) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.src = src;

    this.setup();
    this.setEvents();

    this.timeline();   

  }

  setup() {

    this.isUEv = true;
    this.isREv = true;

    this.ready();

  }

  ready() {

    // this.container = new THREE.Object3D();

    var w = 500;
    var h = 500;

    var geo = new THREE.PlaneGeometry(w, h, 10, 10);

    var mat = new THREE.MeshBasicMaterial({side: THREE.DoubleSide ,transparent: true, color:'#ff0000'});

    this.mesh = new THREE.Mesh(geo, mat);

    var scale = 1;
    this.mesh.scale.set(scale, scale , 1);
    
    // add      
    this.add();

      // this.onResize();


    this.vec = new THREE.Vector3();

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {


  }

  draw() {



  }

  timeline() {

  }

  onResize() {


  }

}