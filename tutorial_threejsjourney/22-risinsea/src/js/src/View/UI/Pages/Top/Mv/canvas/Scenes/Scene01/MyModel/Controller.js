//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import waterVertexShader from "./shaders/water/vertex.glsl";
import waterFragmentShader from "./shaders/water/fragment.glsl";
import * as dat from "lil-gui";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.gui = new dat.GUI();
    this.debugObject = {};
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
    this.waterGeometry = new THREE.PlaneBufferGeometry(2, 2, 512, 512); // w, h, wseg, hseg

    this.debugObject.depthColor = "#186691";
    this.debugObject.surfaceColor = "#9bd8ff";

    /**
     * material
     * RawShaderMaterialになってもmaterial propertyのうちいくつかは引き継がれる
     * map, alphamap, opacity, colorらへんは無理
     */
    this.waterMaterial = new THREE.ShaderMaterial({
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: {
        uTime: { value: 0 },

        uBigWavesElevation: { value: 0.2 }, // 振幅
        uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) }, // 周期
        uBigWavesSpeed: { value: 0.75 },

        uSmallWaveElevation: { value: 0.15 },
        uSmallWaveFrequency: { value: 3 },
        uSmallWaveSpeed: { value: 0.2 },
        uSmallWaveIteration: { value: 4 },

        uDepthColor: { value: new THREE.Color(this.debugObject.depthColor) },
        uSurfaceColor: {
          value: new THREE.Color(this.debugObject.surfaceColor),
        },
        uColorOffset: { value: 0.08 },
        uColorMultiplier: { value: 5.0 },
      },
    });

    // debug
    this.gui
      .add(this.waterMaterial.uniforms.uBigWavesElevation, "value")
      .min(0)
      .max(1)
      .step(0.001)
      .name("uBigWavesElevation");
    this.gui
      .add(this.waterMaterial.uniforms.uBigWavesFrequency.value, "x")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uBigWavesFrequencyX");
    this.gui
      .add(this.waterMaterial.uniforms.uBigWavesFrequency.value, "y")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uBigWavesFrequencyY");
    this.gui
      .add(this.waterMaterial.uniforms.uBigWavesSpeed, "value")
      .min(0)
      .max(4)
      .step(0.001)
      .name("uBigWavesSpeed");

    this.gui
      .add(this.waterMaterial.uniforms.uSmallWaveElevation, "value")
      .min(0)
      .max(1)
      .step(0.001)
      .name("uSmallWaveElevation");
    this.gui
      .add(this.waterMaterial.uniforms.uSmallWaveFrequency, "value")
      .min(0)
      .max(30)
      .step(0.001)
      .name("uSmallWaveFrequency");
    this.gui
      .add(this.waterMaterial.uniforms.uSmallWaveSpeed, "value")
      .min(0)
      .max(4)
      .step(0.001)
      .name("uSmallWaveSpeed");
    this.gui
      .add(this.waterMaterial.uniforms.uSmallWaveIteration, "value")
      .min(0)
      .max(8)
      .step(1)
      .name("uSmallWaveIteration");

    this.gui
      .addColor(this.debugObject, "depthColor")
      .name("depthColor")
      .onChange(() => {
        this.waterMaterial.uniforms.uDepthColor.value.set(
          this.debugObject.depthColor // valueはthree.js のobj なのでset
        );
      });
    this.gui
      .addColor(this.debugObject, "surfaceColor")
      .name("surfaceColor")
      .onChange(() => {
        this.waterMaterial.uniforms.uSurfaceColor.value.set(
          this.debugObject.surfaceColor
        );
      });
    this.gui
      .add(this.waterMaterial.uniforms.uColorOffset, "value")
      .min(0)
      .max(1)
      .step(0.001)
      .name("uColorOffset");
    this.gui
      .add(this.waterMaterial.uniforms.uColorMultiplier, "value")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uColorMultiplier");

    /**
     * mesh
     */
    this.water = new THREE.Mesh(this.waterGeometry, this.waterMaterial);
    this.water.rotation.x = -Math.PI * 0.5;
  }

  add() {
    this.scene.add(this.water);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    this.waterMaterial.uniforms.uTime.value = elapsedTime;
  }

  draw() {}

  timeline() {}

  onResize() {}
}
