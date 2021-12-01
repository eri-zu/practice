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
    // 三角形をいっぱい作る
    const count = 500;

    // ①vetex info
    // 50個に三角形は、一つにつき3個の頂点を持ち、各頂点はx, y, z座標を持つ
    const positionsArray = new Float32Array(count * 3 * 3);

    for (let i = 0; i < count * 3 * 3; i++) {
      positionsArray[i] = (Math.random() - 0.5) * 4;
    }

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
