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

    this.isUEv = true;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.clock = new THREE.Clock();

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
    const textureLoader = new THREE.TextureLoader();

    this.particleTexture = textureLoader.load(
      "./assets/resource/img/particles/2.png"
    );
  }

  ready() {
    // this.cube = new THREE.Mesh(
    //   new THREE.BoxGeometry(),
    //   new THREE.MeshBasicMaterial()
    // );

    // basic particle
    // const particleGeometry = new THREE.SphereGeometry(1, 32, 32);
    // const particleMaterial = new THREE.PointsMaterial({
    //   size: 0.02,
    //   sizeAttenuation: true, // カメラの奥行き(遠近感でる)
    // });

    // this.particle = new THREE.Points(particleGeometry, particleMaterial);

    // 空のgeometryを用意
    this.particleGeometry = new THREE.BufferGeometry();

    // 頂点情報作成
    this.count = 20000;
    const positions = new Float32Array(this.count * 3); // 一つの頂点につき、(x, y, z)の座標情報を持つので
    const colors = new Float32Array(this.count * 3); // 一つの頂点につき、(x, y, z)の座標情報を持つので

    for (let i = 0; i < positions.length; i++) {
      // position
      positions[i] = (Math.random() - 0.5) * 10; // 散らす

      // color
      colors[i] = Math.random();
    }

    // 頂点情報をbufferAttributeに変換して、geometryにposition属性として追加
    this.particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // 色の数字情報をbufferAttributeに変換して、geometryにcolor属性として追加
    this.particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      // color: "#ff88cc",
      // map: this.particleTexture,
      alphaMap: this.particleTexture, // textureの背景を透明にする
      transparent: true,
      // alphaTest: 0.001, // alphaが0.001以下の場合描画されない ..でもエッジまで完全に透明にできない
      // depthTest: false, // 奥の物体が手前の物体を上書きするのを防ぐのをfalse  ..でも他のobjectも描画するとバグる
      depthWrite: false, // 面と面が重なってみるとき、影に隠れた面を描画させないようにするかどうか（depthbufferを書き込むかどうか）
      blending: THREE.AdditiveBlending, // 重なったところが発光して見える
      vertexColors: true,
    });

    this.particle = new THREE.Points(this.particleGeometry, particleMaterial);
  }

  add() {
    this.scene.add(this.particle, this.cube);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      const x = this.particleGeometry.attributes.position.array[i3];

      // y座標動かす
      // タイミングを少しずらす
      this.particleGeometry.attributes.position.array[i3 + 1] = Math.sin(
        elapsedTime + x
      );
    }

    this.particleGeometry.attributes.position.needsUpdate = true;

    // this.particle.position.y = -elapsedTime * 0.02;

    console.log(elapsedTime);
  }

  timeline() {}

  onResize() {}
}
