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

    // 形状データを作成
    var geometry = new THREE.Geometry();
    var numParticles = 10000;
    var SIZE = 10000;

    for (var i = 0; i < numParticles; i++) {

      var x = SIZE * (Math.random() - 0.5);
      var y = SIZE * (Math.random() - 0.5);
      var z = SIZE * (Math.random() - 0.5);

      var pos = new THREE.Vector3(x, y, z);

      geometry.vertices.push(pos);

    }

    // texture生成
    var texture = new THREE.CanvasTexture(this.generateSprite());

    // マテリアル生成
    var size = 50;
    var material = new THREE.PointCloudMaterial({
      size: size,
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: false,
      map: texture
    });

    // 物体を作成
    this.mesh = new THREE.PointCloud(geometry, material);
    this.mesh.position.set(0, 0, 0);

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    this.mesh.rotation.set(gb.up.frame/1000,gb.up.frame/500,0);

  }

  draw() {


  }

  generateSprite() {

    var canvas = document.createElement( 'canvas' );
    canvas.width = 32;
    canvas.height = 32;

    var context = canvas.getContext( '2d' );
    var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
    // gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
    // gradient.addColorStop( 0.2, 'rgba(255,255,255,0.5)' );
    // gradient.addColorStop( 0.4, 'rgba(255,255,255,0.1)' );
    // gradient.addColorStop( 1, 'rgba(255,255,255,0.0)' );
    gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
    gradient.addColorStop( 0.2, 'rgba(255,50,0,1)' );
    gradient.addColorStop( 0.4, 'rgba(64,0,0,0.3)' );
    gradient.addColorStop( 1, 'rgba(64,0,0,0)' );

    context.fillStyle = gradient;
    context.fillRect( 0, 0, canvas.width, canvas.height );

    return canvas;

  }

  timeline() {

  }

  onResize() {

  }

}