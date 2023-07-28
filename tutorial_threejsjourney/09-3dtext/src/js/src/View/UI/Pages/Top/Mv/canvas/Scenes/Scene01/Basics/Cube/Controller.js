//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import typefaceFont from "three/examples/fonts/helvetiker_regular.typeface.json";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.loadTexture();

    // textMaterialとdonutMaterial共通して使う
    this.material = new THREE.MeshMatcapMaterial({
      matcap: this.matcapTexture,
    });

    this.loadFont();
    this.createTorus();

    // const axeshelper = new THREE.AxesHelper();
    // this.scene.add(axeshelper);
    // this.ready();
    // this.add();
  }

  loadTexture() {
    const textureLoader = new THREE.TextureLoader();

    this.matcapTexture = textureLoader.load(
      "./assets/resource/textures/matcaps/5.png"
    );
  }

  loadFont() {
    // font loader用意
    const fontLoader = new FontLoader();

    fontLoader.load(
      // resource URL
      "./assets/resource/fonts/helvetiker_regular.typeface.json",

      // load完了したらコールバック
      (font) => {
        // textGeometry
        this.createText(font);
      }
    );
  }

  createText(font) {
    // textGeometry
    const textGeometry = new TextGeometry("Hello Three.js!", {
      font: font, // 引数でfont取得可能
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true, // ベベル（面取り）
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 3,
    });

    // sphere bounding boxとかbox bounding boxとか色々ある
    // defaltはsphere bounding box
    // boudning box 使ってobjの大きさを知って真ん中に配置することができる
    // textGeometry.computeBoundingBox();
    // console.log(textGeometry.boundingBox); // max & min propertyを持つ

    // // bevelSizeの分引いて正確に真ん中に
    // textGeometry.translate(
    //   -(textGeometry.boundingBox.max.x - 0.02) * 0.5,
    //   -(textGeometry.boundingBox.max.y - 0.02) * 0.5,
    //   -(textGeometry.boundingBox.max.z - 0.02) * 0.5
    // );

    textGeometry.center();

    // mesh
    this.textMesh = new THREE.Mesh(textGeometry, this.material);

    this.scene.add(this.textMesh);
  }

  createTorus() {
    console.time("donuts");

    // TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
    const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);

    for (let i = 0; i < 1000; i++) {
      const donutMesh = new THREE.Mesh(donutGeometry, this.material);

      donutMesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );

      donutMesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );

      const scale = Math.random();
      donutMesh.scale.set(scale, scale, scale);

      this.scene.add(donutMesh);
    }

    console.timeEnd("donuts");
  }

  ready() {}

  add() {}

  update() {
    this.textMesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
