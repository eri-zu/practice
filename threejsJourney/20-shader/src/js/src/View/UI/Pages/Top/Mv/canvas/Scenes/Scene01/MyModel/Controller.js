//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import testVertexShader from "./shaders/test/vertex.glsl";
import testFragmentShader from "./shaders/test/fragment.glsl";

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
    this.loadTexture();
    this.ready();
    this.add();
  }

  loadTexture() {
    this.textureLoader = new THREE.TextureLoader();
  }

  ready() {
    /**
     * geometry
     */
    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32); // w, h, wseg, hseg

    /**
     * material
     * RawShaderMaterialになってもmaterial propertyのうちいくつかは引き継がれる
     * map, alphamap, opacity, colorらへんは無理
     */
    this.material = new THREE.RawShaderMaterial({
      vertexShader: testVertexShader,
      fragmentShader: testFragmentShader,
      side: THREE.DoubleSide, // 裏表描画
    });

    /**
     * mesh
     */
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
