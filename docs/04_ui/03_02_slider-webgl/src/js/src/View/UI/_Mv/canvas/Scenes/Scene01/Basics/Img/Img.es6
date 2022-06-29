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

    this.ready();

    this.loopStart = true;

  }

  ready() {

    // this.container = new THREE.Object3D();

    var geo = new THREE.PlaneGeometry(100, 100, 10, 10);

    var t = new THREE.TextureLoader();
    var onLoad = ()=>{

      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;

      var mat = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide ,transparent: true} );    

      this.mesh = new THREE.Mesh(geo, mat);

      var rate = texture.image.height / texture.image.width;
      var scale = 1;
      this.mesh.scale.set(scale, scale * rate , 1);
      
      // add      
      this.add();

    }
    var texture = t.load(this.src, onLoad);


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