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
    this.container = new THREE.Object3D();

    var geo = new THREE.IcosahedronGeometry(10, 0); // IcosahedronGeometry(radius, detail)
    // var geo = new THREE.OctahedronGeometry(10, 0); // OctahedronGeometry(radius, detail)
    // var geo = new THREE.TetrahedronGeometry(10, 0); // TetrahedronGeometry(radius, detail)

    // var mat = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide ,transparent: true} );
    var mat = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      shininess: 5,
      // emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 1,
      wireframe: false,
    });

    // box
    var mesh01 = new THREE.Mesh(geo, mat);

    // line
    var mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 1,
      wireframe: true,
    });
    var mesh02 = new THREE.Mesh(geo, mat);
    mesh02.scale.set(1.01, 1.01, 1.01);

    // this.container.add(mesh01)
    // this.container.add(mesh02)
    this.container.add(mesh01, mesh02);
  }

  add() {
    this.scene.add(this.container);
  }

  update() {
    this.container.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {
    var tl = new TimelineMax({ repeat: -1, yoyo: true });

    tl.to(this.container.scale, 1.8, {
      x: 2,
      y: 2,
      z: 2,
      ease: Expo.easeInOut,
      onComplete: () => {},
    });
  }

  onResize() {}
}
