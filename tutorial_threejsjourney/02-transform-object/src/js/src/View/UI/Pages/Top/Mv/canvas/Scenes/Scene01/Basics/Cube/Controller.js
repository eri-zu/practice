//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();

    this.add();
  }

  ready() {
    // var geometry = new THREE.BoxGeometry(1, 1, 1); // ②objectを作成
    // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // this.mesh = new THREE.Mesh(geometry, material);

    // this.mesh.position.x = 0.7;
    // this.mesh.position.y = -0.6;
    // this.mesh.position.z = 1;

    // this.mesh.position.set(0.7, -0.6, 1);

    // this.mesh.scale.x = 2;
    // this.mesh.scale.y = 0.25;
    // this.mesh.scale.x = 0.5;

    // this.mesh.rotation.x = Math.PI * 0.25;
    // this.mesh.rotation.y = Math.PI * 0.25;

    // console.log(this.mesh.position.length());
    // console.log(this.mesh.position.distanceTo(this.camera.position));
    // console.log(this.mesh.position.normalize());
    // console.log(this.mesh.position.length());

    // グループ作成
    this.group = new THREE.Group();
    this.group.scale.y = 2;
    this.group.rotation.y = Math.PI * 0.2;

    const cube1 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );

    this.group.add(cube1);

    const cube2 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff00ff })
    );
    cube2.position.x = 2;

    this.group.add(cube2);

    const cube3 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x0000ff })
    );

    cube3.position.x = -2;

    this.group.add(cube3);

    this.camera.lookAt(this.group.position);
  }

  add() {
    // this.scene.add(this.mesh);
    this.scene.add(this.group);
  }

  update() {
    this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
