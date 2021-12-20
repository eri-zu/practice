//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import * as dat from "lil-gui";
import gsap from "gsap";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.gui = new dat.GUI();
    this.clock = new THREE.Clock();
    this.previousTime = 0;

    this.isUEv = true;
    this.isSEv = true;
    this.isMEv = true;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.cursor = {
      x: 0,
      y: 0,
    };

    this.currentSection = 0;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.loadTexture();
    this.setParameters();
    this.readyCamera();
    this.ready();
    this.add();
  }

  setParameters() {
    this.parameters = {
      materialColor: "#ffeded",
    };
  }

  loadTexture() {
    this.textureloader = new THREE.TextureLoader();
    this.gradientTexture = this.textureloader.load(
      "./assets/resource/img/gradients/3.jpg"
    );
    this.gradientTexture.magFilter = THREE.NearestFilter;
  }

  readyCamera() {
    this.cameraGroup = new THREE.Group();
    this.cameraGroup.add(this.camera);
  }

  ready() {
    // material
    const material = new THREE.MeshToonMaterial({
      color: this.parameters.materialColor,
      gradientMap: this.gradientTexture,
    });

    // distance
    // 各オブジェクト間の距離
    this.objectDistance = 4;

    // meshes
    this.mesh1 = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.4, 16, 60),
      material
    );
    this.mesh1.position.y = -this.objectDistance * 0;
    this.mesh1.position.x = 2;

    this.mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material);
    this.mesh2.position.y = -this.objectDistance * 1; // マイナスであれば下
    this.mesh2.position.x = -2;

    this.mesh3 = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
      material
    );
    this.mesh3.position.y = -this.objectDistance * 2;
    this.mesh3.position.x = 2;

    this.sectionMeshes = [this.mesh1, this.mesh2, this.mesh3];

    // particle
    const particlcount = 100;
    const positions = new Float32Array(particlcount * 3);

    for (let i = 0; i < particlcount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] =
        this.objectDistance * 0.5 -
        Math.random() * this.objectDistance * this.sectionMeshes.length; // ページ一番上から一番下まで
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: this.parameters.materialColor,
      sizeAttenuation: true,
      size: 0.03,
    });

    this.particles = new THREE.Points(particleGeometry, particleMaterial);

    // gui color
    this.gui.addColor(this.parameters, "materialColor").onChange(() => {
      material.color.set(this.parameters.materialColor);
      particleMaterial.color.set(this.parameters.materialColor);
    });
  }

  add() {
    this.scene.add(
      this.cameraGroup,
      this.mesh1,
      this.mesh2,
      this.mesh3,
      this.particles
    );
  }

  onScroll() {
    this.scrollY = window.scrollY;

    const newSection = Math.round(this.scrollY / gb.r.h); // return 0, 1, 2 ：現在のセクションがわかる

    // 現在のセクションと新しいセクションが一致するか調べる
    if (newSection !== this.currentSection) {
      // 新しいセクションに入った
      this.currentSection = newSection;

      console.log("changed", this.currentSection);

      gsap.to(this.sectionMeshes[this.currentSection].rotation, 1.5, {
        x: "+=6",
        y: "+=3",
        ease: "power2.inOut",
      });
    }
  }

  onMouseMove(e) {
    // -0.5 - 0.5の値を返す
    this.cursor.x = e.clientX / gb.r.w - 0.5;
    this.cursor.y = e.clientY / gb.r.h - 0.5;

    // console.log(this.cursor.x, this.cursor.y);
  }

  update() {
    this.elapsedTime = this.clock.getElapsedTime();
    this.deltaTime = this.elapsedTime - this.previousTime; // 前のフレームから次のフレームに移行する時間（0.016sくらい）
    this.previousTime = this.elapsedTime;

    // meshを回転
    for (const mesh of this.sectionMeshes) {
      // mesh.rotation.x = this.elapsedTime * 0.1;
      // mesh.rotation.y = this.elapsedTime * 0.12;
      mesh.rotation.x += this.deltaTime * 0.1;
      mesh.rotation.y += this.deltaTime * 0.12;
    }

    // カメラをスクロールに合わせて動かす
    // webGLでは、したがマイナスなのでvalueをinvert
    // -this.scrollY / gb.r.h :  window.innerHeightに対してどれくらいスクロールしたか
    // 欲しい値は、2つ目のセクションにカメラがある時、this.camera.positon.y = -4 , 3つ目のセクションでthis.camera.position.y = -8
    this.camera.position.y = (-this.scrollY / gb.r.h) * this.objectDistance;

    // parallax
    const parallaxX = this.cursor.x * 0.5;
    const parallaxY = -this.cursor.y * 0.5; // invert

    // this.cameraGroup.position.x = parallaxX; // cameraを動かすと、スクロールしてもカメラ動かすことができなくなってしまうので、cameragroupにparalaxかける
    // this.cameraGroup.position.y = parallaxY;

    // this.cameraGroup.position.x +=
    //   (parallaxX - this.cameraGroup.position.x) * 0.1;
    // this.cameraGroup.position.y +=
    //   (parallaxY - this.cameraGroup.position.y) * 0.1;

    this.cameraGroup.position.x +=
      (parallaxX - this.cameraGroup.position.x) * 5 * this.deltaTime;
    this.cameraGroup.position.y +=
      (parallaxY - this.cameraGroup.position.y) * 5 * this.deltaTime;
  }

  setEvents() {
    super.setEvents();
  }

  draw() {}

  timeline() {}

  onResize() {}
}
