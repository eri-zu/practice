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

    this.isDashed = false;

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

    this.divide = 50;
    this.progress = 0;

    // this.container = new THREE.Object3D();

    this.geometry = new THREE.Geometry();

    // straight
    var s = new THREE.Vector3(-100,-100,-100);
    var e = new THREE.Vector3(100,100,100);
    this.curve = new THREE.LineCurve3(s, e);
    // create geometry
    this.geometry.vertices.push(this.curve.v1);
    this.geometry.vertices.push(this.curve.v2);

    // log(this.line.getPoint(0.7));
    // log(this.line.getPoints(50));


    // material    
    var mat = new THREE.LineBasicMaterial( {
                    color: 0xffffff,
                    linewidth: 1,
                    linecap: 'round', //ignored by WebGLRenderer
                    linejoin:  'round' //ignored by WebGLRenderer
                  });

    this.mesh = new THREE.Line(this.geometry, mat);

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);

    this.updateVertex(this.progress);

  }

  draw() {


  }

  timeline() {

    var tl = new TimelineMax({repeat: -1, yoyo: true});

    tl
      .to(this, 1.0, {
        progress: 1,
        ease: Expo.easeInOut,
      })

  }

  updateVertex(p) {

    this.geometry.verticesNeedUpdate = true;
    this.geometry.vertices = [];

    for (var i = 0; i < this.divide; i++) {

      var e = p * (i / this.divide);

      var v = this.curve.getPoint(e);
      this.geometry.vertices.push(new THREE.Vector3(v.x, v.y, v.z));
      
    }

  }

  onResize() {

  }

}