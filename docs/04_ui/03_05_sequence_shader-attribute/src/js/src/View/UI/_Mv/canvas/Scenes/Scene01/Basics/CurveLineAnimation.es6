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

    // this.container = new THREE.Object3D();

    this.divide = 500;
    this.s = 0;
    this.e = 0;


    this.geometry = new THREE.Geometry();


    // set points
    // create geometry

    // curve
    // this.curve = new THREE.CatmullRomCurve3([
    //   new THREE.Vector3( -10, 0, 10 ),
    //   new THREE.Vector3( -5, 5, 5 ),
    //   new THREE.Vector3( 0, 0, 0 ),
    //   new THREE.Vector3( 5, -5, 5 ),
    //   new THREE.Vector3( 10, 0, 10 )
    // ]);
    // this.curve = new THREE.SplineCurve( [
    //   new THREE.Vector2( -10, 0 ),
    //   new THREE.Vector2( -5, 5 ),
    //   new THREE.Vector2( 0, 0 ),
    //   new THREE.Vector2( 5, -5 ),
    //   new THREE.Vector2( 10, 0 )
    // ]);
    // this.curve = new THREE.CubicBezierCurve3(
    //   new THREE.Vector3( -10, 0, 0 ),
    //   new THREE.Vector3( -5, 15, 0 ),
    //   new THREE.Vector3( 20, 15, 0 ),
    //   new THREE.Vector3( 10, 0, 0 )
    // );

    // random points
    var len = 30;
    var points = [];
    for ( var i = 0; i < len; i ++ ) {

      var x = (Math.random() - 0.5) * 1000;
      var y = (Math.random() - 0.5) * 1000;
      var z = (Math.random() - 0.5) * 1000;

      var v = new THREE.Vector3(x, y, z)

      points.push(v);

    }
    this.curve = new THREE.CatmullRomCurve3(points);
    this.curve.curveType = 'centripetal';
    // this.curve.curveType = 'chordal';
    // this.curve.curveType = 'catmullrom';
    // this.curve.tension = 0.5;
    var ps = this.curve.getPoints(50);
    this.geometry.setFromPoints =  function ( points ) {

      this.vertices = [];

      for ( var i = 0, l = points.length; i < l; i ++ ) {

        var point = points[ i ];
        this.vertices.push( new THREE.Vector3( point.x, point.y, point.z || 0 ) );

      }

      return this;

    }
    this.geometry = this.geometry.setFromPoints(ps);

    log(this.geometry);
    


    // material    
    var mat = new THREE.LineBasicMaterial( {
                    color: 0xffffff,
                    linewidth: 4,
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

    this.updateVertex();

  }

  draw() {


  }

  timeline() {

    var tl01 = new TimelineMax({repeat: 0, yoyo: true});

    tl01
      .to(this, 6.0, {
        e: 1,
        ease: Expo.easeInOut,
      })

    // var tl02 = new TimelineMax({repeat: 0, yoyo: true, delay: 1.4});

    // tl02
    //   .to(this, 6.0, {
    //     s: 1,
    //     ease: Expo.easeInOut,
    //   })
    
  }

  updateVertex() {

    this.geometry.verticesNeedUpdate = true;
    this.geometry.vertices = [];

    for (var i = 0; i < this.divide; i++) {

      var s = this.s;
      var e = this.e * (i / this.divide);
      var t = gb.u.m.clamp(s + e, 0.0, 1.0);

      var v = this.curve.getPoint(t);
      this.geometry.vertices.push(new THREE.Vector3(v.x, v.y, v.z));
      
    }

  }

  onResize() {

  }

}