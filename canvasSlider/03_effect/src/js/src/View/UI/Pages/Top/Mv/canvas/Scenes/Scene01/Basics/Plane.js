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

    this.add();

    this.loopStart = true;
  }

  ready() {
    // this.container = new THREE.Object3D();

    var geo = new THREE.PlaneGeometry(1000, 1000, 100, 100);

    var mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geo, mat);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);
  }

  draw() {}

  timeline() {
    // var tl = new TimelineMax({repeat: -1, yoyo: true});
    // tl
    //   .to(this.mesh.scale, 1.8, {
    //     x: 0,
    //     ease: Expo.easeInOut,
    //     onComplete: ()=>{
    //     }
    //   })
  }

  onResize() {}
}
