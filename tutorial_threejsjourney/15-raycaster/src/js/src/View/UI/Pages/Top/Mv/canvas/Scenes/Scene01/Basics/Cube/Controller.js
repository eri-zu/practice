//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import { SphereBufferGeometry } from "three";
export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.isUEv = true;
    this.isMEv = true;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.clock = new THREE.Clock();
    this.currentIntersect = null;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.ready();
    this.add();
  }

  ready() {
    this.object1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: "#ff0000" })
    );
    this.object1.position.x = -2;

    this.object2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: "#ff0000" })
    );
    this.object3 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: "#ff0000" })
    );
    this.object3.position.x = 2;

    // --------------------------
    // raycaster
    // --------------------------
    this.raycaster = new THREE.Raycaster();
    // const rayOrigin = new THREE.Vector3(-3, 0, 0);
    // const rayDirection = new THREE.Vector3(10, 0, 0); // normalize化しないとだめ
    // rayDirection.normalize();
    // console.log(rayDirection.length); // normalizeしたら1になる

    // raycaster.set(rayOrigin, rayDirection);

    // const intersect = raycaster.intersectObject(this.object2);
    // const intersects = raycaster.intersectObjects([
    //   this.object1,
    //   this.object2,
    //   this.object3,
    // ]);

    // console.log(intersect);
    // objectは以下の情報を持つ
    // distance: the distance between the origin of the ray and the collision point.
    // face: what face of the geometry was hit by the ray.
    // faceIndex: the index of that face.
    // object: what object is concerned by the collision.
    // point: a Vector3 of the exact position in 3D space of the collision.
    // uv: the UV coordinates in that geometry.

    // --------------------------
    // mouse
    // --------------------------
    this.mouse = new THREE.Vector2();
  }

  add() {
    this.scene.add(this.object1, this.object2, this.object3);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();

    // animate
    this.object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5;
    this.object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5;
    this.object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5;

    // cast a ray
    // const rayOrigin = new THREE.Vector3(-3, 0, 0);
    // const rayDirection = new THREE.Vector3(1, 0, 0); // normalize化しないとだめ
    // rayDirection.normalize();

    // this.raycaster.set(rayOrigin, rayDirection);

    // 光線とぶつかったオブジェクトを得る
    // const objectsToTest = [this.object1, this.object2, this.object3];
    // const intersects = this.raycaster.intersectObjects(objectsToTest);

    // console.log(intersects.length); // rayと衝突しているobejctの数

    // //赤色に変更
    // for (const object of objectsToTest) {
    //   object.material.color.set("#ff0000");
    // }

    // // ray上のものは青色に変更
    // for (const intersect of intersects) {
    //   intersect.object.material.color.set("#0000ff");
    // }

    // マウス位置からまっすぐ伸びる光線ベクトルを作成
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const objectsToTest = [this.object1, this.object2, this.object3];
    const intersects = this.raycaster.intersectObjects(objectsToTest);

    console.log(intersects.length); // rayと衝突しているobejctの数

    //赤色に変更
    for (const object of objectsToTest) {
      object.material.color.set("#ff0000");
    }

    // ray上のものは青色に変更
    for (const intersect of intersects) {
      intersect.object.material.color.set("#0000ff");
    }

    // If there is one object intersecting, but there wasn't one before, it means a mouseenter has happened on that object.
    // If no object intersects, but there was one before, it means a mouseleave has happened.
    if (intersects.length) {
      if (!this.currentIntersect) {
        console.log("mouse enter");
      }
      this.currentIntersect = intersects[0];
    } else {
      if (this.currentIntersect) {
        console.log("mouse leave");
      }
      this.currentIntersect = null;
    }
  }

  draw() {}

  timeline() {}

  onMouseMove(e) {
    // // -1から1の値に置き換える
    this.mouse.x = (e.clientX / gb.r.w) * 2 - 1;
    this.mouse.y = -(e.clientY / gb.r.h) * 2 + 1; // 上をマイナスに、下をプラスに
  }

  onResize() {}

  setEvents() {
    super.setEvents();

    window.addEventListener("click", (e) => {
      console.log("aaaaaaaa");
      if (this.currentIntersect) {
        switch (this.currentIntersect.object) {
          case this.object1:
            console.log("click object1");
            break;
          case this.object2:
            console.log("click object2");
            break;
          case this.object3:
            console.log("click object3");
            break;
          default:
            break;
        }
      }
    });
  }
}
