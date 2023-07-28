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

    this.ready();

    this.add();

    this.loopStart = true;

  }

  ready() {

    // this.container = new THREE.Object3D();

    var geometry = new THREE.Geometry();

    var point = new THREE.Vector3();
    var direction = new THREE.Vector3();

    for ( var i = 0; i < 50; i ++ ) {

      direction.x += Math.random() - 0.5;
      direction.y += Math.random() - 0.5;
      direction.z += Math.random() - 0.5;
      direction.normalize().multiplyScalar( 10 );

      point.add( direction );

      geometry.vertices.push( point.clone() );

    }

    geometry.center();

    if (!this.isDashed) {

      var mat = new THREE.LineBasicMaterial( {
                      color: 0xffffff,
                      linewidth: 1,
                      linecap: 'round', //ignored by WebGLRenderer
                      linejoin:  'round' //ignored by WebGLRenderer
                    });
      this.mesh = new THREE.Line(geometry, mat);

    } else {

      var mat = new THREE.LineDashedMaterial( {
                      color: 0xff0000,
                      linewidth: 1,
                      scale: 1,
                      dashSize: 3,
                      gapSize: 1,
                    } );

      this.mesh = new THREE.LineSegments(geometry, mat);

    }

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