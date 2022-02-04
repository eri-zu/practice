//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import testVertexShader from "./shaders/test/vertex.glsl";
import testFragmentShader from "./shaders/test/fragment.glsl";
import * as dat from "lil-gui";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.gui = new dat.GUI();
    this.clock = new THREE.Clock();

    this.isUEv = true;

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
    this.flagTexture = this.textureLoader.load(
      "./assets/resource/img/flag-french.jpg"
    );
  }

  ready() {
    /**
     * geometry
     */
    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32); // w, h, wseg, hseg

    /**
     * attribute
     */

    const count = this.geometry.attributes.position.count;
    const randoms = new Float32Array(count); // lengthがcountのarrayを作成
    for (let i = 0; i < count; i++) {
      randoms[i] = Math.random();
    }

    // geometryにaRandomという名前でnew THREE.BufferAttribute(randoms, 1)というvalue を持つattributeを作る
    this.geometry.setAttribute(
      "aRandom", //name
      new THREE.BufferAttribute(randoms, 1) // randomsという配列をbufferattributeに変換
    );

    console.log(this.geometry);

    /**
     * material
     * RawShaderMaterialになってもmaterial propertyのうちいくつかは引き継がれる
     * map, alphamap, opacity, colorらへんは無理
     */
    this.material = new THREE.RawShaderMaterial({
      vertexShader: testVertexShader,
      fragmentShader: testFragmentShader,
      uniforms: {
        uFrequeny: { value: new THREE.Vector2(10, 5) }, // objectで渡すこと（typeはもう渡さなくていい）
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("orange") },
        uTexture: { value: this.flagTexture },
      },
      side: THREE.DoubleSide, // 裏表描画
      transparent: true,
    });

    this.gui
      .add(this.material.uniforms.uFrequeny.value, "x")
      .min(0)
      .max(20)
      .step(0.01)
      .name("frequencyX");
    this.gui
      .add(this.material.uniforms.uFrequeny.value, "y")
      .min(0)
      .max(20)
      .step(0.01)
      .name("frequencyY");

    /**
     * mesh
     */
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.y = 2 / 3;
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();

    // update material
    this.material.uniforms.uTime.value = elapsedTime;
  }

  draw() {}

  timeline() {}

  onResize() {}
}
