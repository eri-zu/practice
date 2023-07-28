//--------------------------------------------------
//
//  Light
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import * as dat from "lil-gui";

export default class Light extends Base {
  constructor(scene) {
    super();

    this.gui = new dat.GUI();

    this.scene = scene;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.ready();

    this.add();
    // this.addHelper();

    this.loopStart = true;

    // this.param();
  }

  ready() {
    // directional light 並行光源 (太陽の光とか)
    // 光源からの距離に関係なく等しい力 光の方向は同じ
    // DirectionalLight( color : Integer, intensity : Float )
    this.directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3);
    this.directionalLight.position.set(1, 0.25, 0);
    this.gui.add(this.directionalLight, "intensity").min(0).max(1).step(0.01);

    // ambient 環境光源
    // 部屋の電気みたいな 空間全体に均等に光を当てる
    // AmbientLight( color : Integer, intensity : Float )
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.gui.add(this.ambientLight, "intensity").min(0).max(1).step(0.01);

    // hemisphere 半球光源
    // 環境光源に似てるが、下から当てる光と上から当てる光の色を変えることができる
    // HemisphereLight( skyColor : Integer, groundColor : Integer, intensity : Float )
    this.hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3);

    // point 点光源
    // 裸電球みたいな
    // PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
    // 距離によって光がどのように弱くなるか、distanceとdecayで調整することも可能
    this.pointLight01 = new THREE.PointLight(0xff9000, 0.5);
    this.pointLight01.position.set(1, -0.5, 1);

    // rectAreaLight 矩形光源
    // photoshooting用のライトみたいなやつ
    // new THREE.RectAreaLight(色, 光の強さ, 幅, 高さ)
    this.rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1);
    this.rectAreaLight.position.set(-1.5, 0, 1.5);
    this.rectAreaLight.lookAt(0, 0, 0);

    // spotLight
    // color: the color
    // intensity: the strength
    // distance: the distance at which the intensity drops to 0
    // angle: how large is the beam
    // penumbra: ライトのエッジのボケ
    // decay: how fast the light dims
    this.spotLight = new THREE.SpotLight(
      0x78ff00,
      0.5,
      10,
      Math.PI * 0.1,
      0.25,
      1
    );
    this.spotLight.position.set(0, 2, 3);

    console.log(this.spotLight.target); // spotlightはこのtargetをずっとをみてる
    this.spotLight.target.position.x = -0.75; // targetをずらす

    // this.spotLight.intensity = 1.5;
    // this.spotLight.distance = 0.0;
    // this.spotLight.angle = 0.3;
    // this.spotLight.penumbra = 0.5;
    // this.spotLight.decay = 1.0;

    // spot light target
    // var target = new THREE.Object3D();
    // this.scene.add(target);
    // this.spotLight.target = target;

    // shadow
    // this.spotLight.castShadow = true;
    // this.spotLight.shadow.mapSize.width = 1024;
    // this.spotLight.shadow.mapSize.height = 1024;
    // this.spotLight.shadow.camera.near = 500;
    // this.spotLight.shadow.camera.far = 4000;
    // this.spotLight.shadow.camera.fov = 30;
  }

  add() {
    this.scene.add(this.directionalLight);
    this.scene.add(this.ambientLight);
    this.scene.add(this.hemisphereLight);
    this.scene.add(this.pointLight01);
    this.scene.add(this.rectAreaLight);
    this.scene.add(this.spotLight);
    this.scene.add(this.spotLight.target);
  }

  addHelper() {
    // directional
    // var dll = new THREE.DirectionalLightHelper(this.directionalLight, 20, '#ff0000');
    // this.scene.add(dll);
    // point
    // var sphereSize = 10;
    // var pll01 = new THREE.PointLightHelper( this.pointLight01, sphereSize );
    // this.scene.add(pll01);
    // var pll02 = new THREE.PointLightHelper( this.pointLight02, sphereSize );
    // this.scene.add(pll02);
    // var pll03 = new THREE.PointLightHelper( this.pointLight03, sphereSize );
    // this.scene.add(pll03);
    // spot
    // this.slh = new THREE.SpotLightHelper(this.spotLight, '#ffffff');
    // this.scene.add(this.slh);
  }

  updateRotate() {
    var rotateX = gb.in.u.radian(gb.in.up.frame / 1);
    var rotateY = gb.in.u.radian(gb.in.up.frame / 1);
    var rotateZ = gb.in.u.radian(gb.in.up.frame / 1);
    // var rotateY = 0;
    // var rotateZ = 0;

    this.scene.rotation.set(rotateX, rotateY, rotateZ);
  }

  update() {
    if (this.slh) this.slh.update();
  }

  param() {
    this.param_spot = {
      color: "#ffffff",
      x: 0.0,
      y: 0.0,
      z: 300.0,
      angle: Math.PI / 3,
      intensity: 1.0,
      distance: 0.0,
      decay: 1.0,
      penumbra: 0.0,
    };

    var gui = new dat.GUI();

    // init
    this.spotLight.position.set(
      this.param_spot.x,
      this.param_spot.y,
      this.param_spot.z
    );
    this.spotLight.color = new THREE.Color(this.param_spot.color);
    this.spotLight.angle = this.param_spot.angle;
    this.spotLight.intensity = this.param_spot.intensity;
    this.spotLight.distance = this.param_spot.distance;
    this.spotLight.decay = this.param_spot.decay;
    this.spotLight.penumbra = this.param_spot.penumbra;

    gui.addColor(this.param_spot, "color").onChange((v) => {
      this.spotLight.color.setHex(v);
    });
    gui.add(this.param_spot, "x", -200, 200, 1).onChange((v) => {
      this.spotLight.position.x = v;
    });
    gui.add(this.param_spot, "y", -200, 200, 1).onChange((v) => {
      this.spotLight.position.y = v;
    });
    gui.add(this.param_spot, "z", -1000, 1000, 1).onChange((v) => {
      this.spotLight.position.z = v;
    });
    gui.add(this.param_spot, "angle", 0, Math.PI / 2, 0.01).onChange((v) => {
      this.spotLight.angle = v;
    });
    gui.add(this.param_spot, "intensity", 0, 10, 0.1).onChange((v) => {
      this.spotLight.intensity = v;
    });
    gui.add(this.param_spot, "distance", 0, 1000, 1.0).onChange((v) => {
      this.spotLight.distance = v;
    });
    gui.add(this.param_spot, "decay", 0, 10, 0.1).onChange((v) => {
      this.spotLight.decay = v;
    });
    gui.add(this.param_spot, "penumbra", 0, 2, 0.01).onChange((v) => {
      this.spotLight.penumbra = v;
    });
  }
}
