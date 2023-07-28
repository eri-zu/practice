//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import PostEffect from "./PostEffect.js";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.isPostEffect = true;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();

    this.add();

    this.loopStart = true;
  }

  ready() {
    if (!this.isPostEffect) {
      // this.container = new THREE.Object3D();

      var geometry = new THREE.BoxGeometry(5, 5, 5);
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.mesh = new THREE.Mesh(geometry, material);
    } else {
      var geometry = new THREE.BoxGeometry(5, 5, 5);
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.m = new THREE.Mesh(geometry, material);

      // post effect
      this.renderPE = new THREE.WebGLRenderTarget(gb.r.w * 2, gb.r.h * 2);
      this.scenePE = new THREE.Scene();
      this.cameraPE = new THREE.PerspectiveCamera(
        45,
        gb.r.w / gb.r.h,
        1,
        100000
      );
      this.cameraPE.position.set(0, 0, 100);
      this.cameraPE.lookAt(new THREE.Vector3());

      this.PE = new PostEffect(this.renderPE.texture);
      var scale = 100;
      this.PE.mesh.scale.set(gb.r.w / scale, gb.r.h / scale, 1);
    }
  }

  add() {
    if (!this.isPostEffect) {
      this.scene.add(this.mesh);
    } else {
      this.scenePE.add(this.m);
      this.scene.add(this.PE.mesh);
    }
  }

  update() {
    if (!this.isPostEffect) {
      this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
    } else {
      this.m.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
      this.renderer.render(this.scenePE, this.cameraPE, this.renderPE);
    }
  }

  draw() {}

  timeline() {}

  onResize() {}
}
