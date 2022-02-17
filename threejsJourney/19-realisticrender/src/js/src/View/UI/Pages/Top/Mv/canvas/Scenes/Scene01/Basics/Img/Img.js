//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
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

    this.loopStart = true;
  }

  ready() {
    // this.container = new THREE.Object3D();

    var geo = new THREE.PlaneGeometry(100, 100, 10, 10);

    var t = new THREE.TextureLoader();
    var onLoad = () => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;

      var mat = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
      });

      this.mesh = new THREE.Mesh(geo, mat);

      var rate = texture.image.height / texture.image.width;
      var scale = 1;
      this.mesh.scale.set(scale, scale * rate, 0);

      // add
      this.add();
    };
    var texture = t.load("/assets/resource/img/img.png", onLoad);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
