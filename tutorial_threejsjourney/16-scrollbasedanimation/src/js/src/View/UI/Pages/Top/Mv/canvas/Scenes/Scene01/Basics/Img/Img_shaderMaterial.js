//--------------------------------------------------
//
// Plane 全画面
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";

import vs from "./shader.vs";
import fs from "./shader.fs";
import * as THREE from "three";
export default class Plane extends Base {
  constructor(scene, camera) {
    super();

    this.scene = scene;
    this.camera = camera;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();
  }

  ready() {
    // this.container = new THREE.Object3D();

    var geo = new THREE.PlaneBufferGeometry(2, 2, 100, 100);

    var t = new THREE.TextureLoader();
    var onLoad = () => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;

      this.uniforms = {
        time: { type: "f", value: 1.0 },
        frame: { type: "f", value: 0.0 },
        resolution: { type: "v2", value: new THREE.Vector2(gb.r.w, gb.r.h) },
        imageResolution: {
          type: "v2",
          value: new THREE.Vector2(texture.image.width, texture.image.height),
        },
        texture: { type: "t", value: texture },
        mouse: { type: "v2", value: new THREE.Vector2(0.5, 0.5) },
        opacity: { type: "f", value: 1.0 },
      };
      var mat = new THREE.ShaderMaterial({
        vertexShader: vs,
        fragmentShader: fs,
        uniforms: this.uniforms,
        transparent: true,
        depthTest: true,
        side: THREE.DoubleSide,
      });

      this.mesh = new THREE.Mesh(geo, mat);

      // add
      this.add();

      this.loopStart = true;
    };
    var texture = t.load("/assets/resource/img/img01.jpg", onLoad);
  }

  add() {
    this.scene.add(this.mesh);
  }

  update() {
    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);

    this.uniforms.frame.value += gb.up.delta / 100.0;
  }

  draw() {}

  timeline() {}

  onResize() {
    this.uniforms.resolution.value.x = gb.r.w;
    this.uniforms.resolution.value.y = gb.r.h;
  }
}
