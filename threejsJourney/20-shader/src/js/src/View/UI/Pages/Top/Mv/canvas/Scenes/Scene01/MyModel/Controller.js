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

    this.clock = new THREE.Clock();

    this.isUEv = true;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.loadTexture();
    this.ready();

    setTimeout(() => {
      this.setImage();
      this.add();
    }, 1000);
  }

  loadTexture() {
    this.textureLoader = new THREE.TextureLoader();
    this.flagTexture = this.textureLoader.load(
      "./assets/resource/img/flag-french.jpg"
      // "./assets/resource/img/slot.png"
    );
  }

  ready() {
    /**
     * geometry
     */
    this.geometry = new THREE.PlaneGeometry(1, 1, 30, 30); // w, h, wseg, hseg

    // const SEGX = 10;
    // const SEGY = 20;
    // this.geometry = new THREE.PlaneBufferGeometry(107, 268.5, SEGX, SEGY);

    /**
     * material
     * RawShaderMaterialになってもmaterial propertyのうちいくつかは引き継がれる
     * map, alphamap, opacity, colorらへんは無理
     */
    this.material = new THREE.RawShaderMaterial({
      vertexShader: testVertexShader,
      fragmentShader: testFragmentShader,
      uniforms: {
        uFrequeny: { value: new THREE.Vector2(10, 10) }, // objectで渡すこと（typeはもう渡さなくていい）
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector4() },
        uTexture: { value: this.flagTexture },
      },
      side: THREE.DoubleSide, // 裏表描画
      transparent: true,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // this.mesh.scale.y = 2 / 3;
  }

  setImage() {
    this.canvasAspect = gb.r.h / gb.r.w;
    this.imgAspect =
      this.flagTexture.image.height / this.flagTexture.image.width;

    let aspect1;
    let aspect2;

    if (this.canvasAspect > this.imgAspect) {
      aspect1 = (gb.r.w / gb.r.h) * this.imgAspect;
      aspect2 = 1;
    } else {
      aspect1 = 1;
      aspect2 = gb.r.h / gb.r.w / this.imgAspect;
    }

    this.material.uniforms.uResolution.value.x = gb.r.w;
    this.material.uniforms.uResolution.value.y = gb.r.h;
    this.material.uniforms.uResolution.value.z = aspect1;
    this.material.uniforms.uResolution.value.w = aspect2;
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
