//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";

export default class Controller extends Base {
  constructor(scene, objectDistance) {
    super();

    this.scene = scene;

    this.objectDistance = objectDistance;
    this.len = 3; // mesh個数

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.add();
  }

  setParameter() {
    const num = 200;
    this.positions = new Float32Array(num * 3);

    for (let i = 0; i < this.positions.length; i++) {
      this.positions[i * 3] = (Math.random() - 0.5) * 10;
      // yはいったん一番上において、したの最大値のところまで広がす（2 ~ -10）
      this.positions[i * 3 + 1] =
        this.objectDistance * 0.5 -
        Math.random() * this.objectDistance * this.len;
      this.positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
  }

  setGeometry() {
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.positions, 3)
    );
  }

  setMaterial() {
    this.material = new THREE.PointsMaterial({
      color: "#ffeded",
      sizeAttenuation: true, // 遠いものは小さくなる
      size: 0.03,
    });
  }

  setMesh() {
    this.mesh = new THREE.Points(this.geometry, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
