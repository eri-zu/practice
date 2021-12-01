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
    // 三角形を作る

    // ①vetex info
    const positionsArray = new Float32Array(9); // lengthが9

    // 1つ目のvertex
    positionsArray[0] = 0; // x
    positionsArray[1] = 0; // y
    positionsArray[2] = 0; // z

    // 2つ目のvertex
    positionsArray[3] = 0; // x
    positionsArray[4] = 1; // y
    positionsArray[5] = 0; // z

    // 3つ目のvertex
    positionsArray[6] = 1; // x
    positionsArray[7] = 0; // y
    positionsArray[8] = 0; // z

    // ダイレクトに以下のように書くのもあり
    // const positionsArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

    // ②convert float32Array to bufferAttribute
    // new THREE.BufferAttribute( array : TypedArray, itemSize : Integer, normalized : Boolean )
    // itemSize -- the number of values of the array that should be associated with a particular vertex.
    const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

    // ③create mesh
    const geometry = new THREE.BufferGeometry(); // 空のbuffergeometry
    geometry.setAttribute("position", positionsAttribute);

    // ④create material
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });

    // ⑤create mesh
    this.mesh = new THREE.Mesh(geometry, material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    // this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
