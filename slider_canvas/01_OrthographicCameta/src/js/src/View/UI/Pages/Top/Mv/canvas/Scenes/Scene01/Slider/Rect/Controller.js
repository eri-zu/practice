//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";
import gsap from "gsap";
import * as THREE from "three";

export default class Slider extends Base {
  constructor(scene, camera, renderer, path) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.path = path;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.loadTexture();
    this.ready();
    this.add();
  }

  loadTexture() {
    this.textureLoader = new THREE.TextureLoader();
    this.texture = this.textureLoader.load(this.path);
  }

  ready() {
    // geometry
    const geometry = new THREE.PlaneGeometry(4, 2);

    // material
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: this.texture,
    });

    // mesh
    this.mesh = new THREE.Mesh(geometry, material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}