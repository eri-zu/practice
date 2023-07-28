//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import { DoubleSide } from "three";
import * as dat from "lil-gui";
export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
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

    const gui = new dat.GUI();
    gui.add(this.material, "metalness").min(0).max(1).step(0.0001);
    gui.add(this.material, "roughness").min(0).max(1).step(0.0001);
    gui.add(this.material, "displacementScale").min(0).max(1).step(0.0001);
  }

  loadTexture() {
    // const textureLoader = new THREE.TextureLoader();

    // this.doorColorTexture = textureLoader.load(
    //   "./assets/resource/textures/door/color.jpg"
    // );
    // this.doorAlphaTexture = textureLoader.load(
    //   "./assets/resource/textures/door/alpha.jpg"
    // );
    // this.matCapTexture = textureLoader.load(
    //   "./assets/resource/textures/matcaps/1.png"
    // );
    // this.gradientTexture = textureLoader.load(
    //   "./assets/resource/textures/gradients/5.jpg"
    // );
    // this.ambientOcclusionTexture = textureLoader.load(
    //   "./assets/resource/textures/door/ambientOcclusion.jpg"
    // );
    // this.doorHeightTexture = textureLoader.load(
    //   "./assets/resource/textures/door/height.jpg"
    // );
    // this.doorMetalnessTexture = textureLoader.load(
    //   "./assets/resource/textures/door/metalness.jpg"
    // );
    // this.doorRoughnessTexture = textureLoader.load(
    //   "./assets/resource/textures/door/roughness.jpg"
    // );
    // this.doorNormalTexture = textureLoader.load(
    //   "./assets/resource/textures/door/normal.jpg"
    // );

    // 色増やす
    // this.gradientTexture.minFilter = THREE.NearestFilter;
    // this.gradientTexture.magFilter = THREE.NearestFilter;
    // this.gradientTexture.generateMipmaps = false;

    const cubeTexture = new THREE.CubeTextureLoader();

    this.environmentMapTexture = cubeTexture.load([
      "./assets/resource/textures/environmentMaps/0/px.jpg", // positive x
      "./assets/resource/textures/environmentMaps/0/nx.jpg", // negative x
      "./assets/resource/textures/environmentMaps/0/py.jpg", // positive y
      "./assets/resource/textures/environmentMaps/0/ny.jpg", // negative y
      "./assets/resource/textures/environmentMaps/0/pz.jpg", // positive z
      "./assets/resource/textures/environmentMaps/0/nz.jpg", // negative z
    ]);
  }

  ready() {
    // const material = new THREE.MeshBasicMaterial({
    //   map: this.doorColorTexture,
    // });
    // const material = new THREE.MeshBasicMaterial();
    // material.map = this.doorColorTexture;
    // // material.color.set("red");
    // // material.color = new THREE.Color("red");
    // // material.wireframe = true;
    // material.transparent = true;
    // // material.opacity = 0.5;
    // material.alphaMap = this.doorAlphaTexture;
    // material.side = DoubleSide;

    // const material = new THREE.MeshNormalMaterial();
    // material.flatShading = true;

    // const material = new THREE.MeshMatcapMaterial();
    // material.matcap = this.matCapTexture;

    // near white、遠かったら灰色・黒
    // fog
    // const material = new THREE.MeshDepthMaterial();

    // const material = new THREE.MeshLambertMaterial();

    // const material = new THREE.MeshPhongMaterial();
    // material.shininess = 100;
    // material.specular = new THREE.Color("red");

    // const material = new THREE.MeshToonMaterial();
    // material.gradientMap = this.gradientTexture;

    // this.material = new THREE.MeshStandardMaterial();
    // this.material.metalness = 0;
    // this.material.roughness = 1;
    // this.material.map = this.doorColorTexture;
    // this.material.displacementMap = this.doorHeightTexture;
    // this.material.displacementScale = 0.05;
    // this.material.metalnessMap = this.doorMetalnessTexture;
    // this.material.roughnessMap = this.doorRoughnessTexture;
    // this.material.normalMap = this.doorNormalTexture;
    // this.material.normalScale.set(0.5, 0.5);
    // this.material.transparent = true;
    // this.material.alphaMap = this.doorAlphaTexture;

    this.material = new THREE.MeshStandardMaterial();
    this.material.metalness = 0.7;
    this.material.roughness = 0.2;
    this.material.envMap = this.environmentMapTexture;

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 64, 64),
      this.material
    );
    this.sphere.position.x = -1.5;

    this.plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 100, 100),
      this.material
    );

    this.torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.2, 64, 128),
      this.material
    );

    this.torus.position.x = 1.5;

    // this.sphere.geometry.setAttribute(
    //   "uv2",
    //   new THREE.BufferAttribute(this.sphere.geometry.attributes.uv.array, 2)
    // );
    // this.plane.geometry.setAttribute(
    //   "uv2",
    //   new THREE.BufferAttribute(this.plane.geometry.attributes.uv.array, 2)
    // );
    // this.torus.geometry.setAttribute(
    //   "uv2",
    //   new THREE.BufferAttribute(this.torus.geometry.attributes.uv.array, 2)
    // );

    this.material.aoMap = this.ambientOcclusionTexture;
    this.material.aoMapIntensity = 1;
  }

  add() {
    this.scene.add(this.sphere, this.plane, this.torus);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    console.log(elapsedTime);

    this.sphere.rotation.x = elapsedTime * 0.1;
    this.plane.rotation.x = elapsedTime * 0.1;
    this.torus.rotation.x = elapsedTime * 0.1;

    this.sphere.rotation.y = elapsedTime * 0.15;
    this.plane.rotation.y = elapsedTime * 0.15;
    this.torus.rotation.y = elapsedTime * 0.15;
  }

  draw() {}

  timeline() {}

  onResize() {}
}
