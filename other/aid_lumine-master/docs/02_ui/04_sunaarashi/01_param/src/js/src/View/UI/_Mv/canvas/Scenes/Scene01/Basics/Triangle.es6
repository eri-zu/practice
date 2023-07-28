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

    //ジオメトリ（形状）の宣言と生成
    var geometry = new THREE.Geometry();

    var length = 1;
    geometry.vertices[0] = new THREE.Vector3(0 ,length * Math.sqrt(3) ,0);
    geometry.vertices[1] = new THREE.Vector3(length, 0, 0);
    geometry.vertices[2] = new THREE.Vector3(-length, 0, 0);
    geometry.center();
    
    //面指定用頂点インデックスを追加   
    geometry.faces[0] = new THREE.Face3(0,1,2);


    var material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide});

    this.mesh = new THREE.Mesh(geometry, material);

    this.mesh.scale.set(10,10,10);

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