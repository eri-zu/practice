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
    this.textureloader = new THREE.TextureLoader();
    // this.bakedShadow = this.textureloader.load(
    //   "./assets/resource/img/textures/bakedShadow.jpg"
    // );
    this.simpleShadow = this.textureloader.load(
      "./assets/resource/img/textures/simpleShadow.jpg"
    );
  }

  ready() {
    const material = new THREE.MeshStandardMaterial();
    material.roughness = 0.7;

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      material
    );
    this.sphere.castShadow = true;

    this.plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
    this.plane.receiveShadow = true;

    this.plane.position.y = -0.55;
    this.plane.rotation.x = -Math.PI * 0.5;

    this.sphereShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.5, 1.5),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true, // alphamapとセット
        alphaMap: this.simpleShadow,
      })
    );
    this.sphereShadow.rotation.x = -Math.PI * 0.5;
    this.sphereShadow.position.y = this.plane.position.y + 0.01;

    // This is for static project..
    // 物体動かした時ついてこない
    // this.plane = new THREE.Mesh(
    //   new THREE.PlaneGeometry(5, 5),
    //   new THREE.MeshBasicMaterial({
    //     map: this.bakedShadow,
    //   })
    // );
  }

  add() {
    // this.scene.add(this.sphere, this.cube, this.torus, this.plane);
    this.scene.add(this.sphere, this.sphereShadow, this.plane);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();

    this.sphere.position.x = Math.cos(elapsedTime) * 1.5;
    this.sphere.position.z = Math.sin(elapsedTime) * 1.5;
    this.sphere.position.y = Math.abs(Math.sin(elapsedTime * 3));

    this.sphereShadow.position.x = Math.cos(elapsedTime) * 1.5;
    this.sphereShadow.position.z = Math.sin(elapsedTime) * 1.5;
    this.sphereShadow.material.opacity = (1 - this.sphere.position.y) * 0.3;

    this.sphere.rotation.x = 0.15 * elapsedTime;
    this.sphere.rotation.y = 0.1 * elapsedTime;
  }

  draw() {}

  timeline() {}

  onResize() {}
}
