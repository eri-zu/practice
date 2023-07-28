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

    var text = '藤井宗一郎';
    this.geo = new THREE.TextGeometry( text, {
      size: 5, height: 3, curveSegments: 12,
      // font: "helvetiker",
      font: "WebSubsetFont",
      weight: "normal", style: "normal",
      bevelEnabled: false, bevelThickness: 2, bevelSize: 2,
    });
    this.geo.center();

    this.mat = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    // this.mat = new THREE.MeshNormalMaterial( { wireframe: true } );
    // this.mat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    // this.mat = new THREE.MeshPhongMaterial({color: 0xff0000, shininess: 30, side: THREE.DoubleSide});
    
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    // this.mesh = new THREE.Line(this.geo, this.mat);

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);

  }

  draw() {



  }

  timeline() {

  }

  onResize() {

  }

}