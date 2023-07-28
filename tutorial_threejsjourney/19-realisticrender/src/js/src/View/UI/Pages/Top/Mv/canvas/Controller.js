//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import Scene01 from "./Scenes/Scene01/Scene.js";
// import Scene02 from './Scenes/Scene02/Scene.js';
import * as THREE from "three";
import * as dat from "lil-gui";

export default class Content extends Base {
  constructor($wrap = $("body"), id = "cv") {
    super();

    this.isUEv = true; // update
    this.isREv = true; // update

    gb.gui = new dat.GUI();

    this.$wrap = $wrap;
    this.id = id;

    this.setup();
    this.setEvents();
  }

  setup() {
    // canvas size
    this.w = gb.r.w;
    this.h = gb.r.h;

    this.isRetina = true;

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    if (this.isRetina) this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(gb.r.w, gb.r.h);
    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 3;
    // this.renderer.setClearColor(0xffffff, 1.0);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    // guiでセレクトできるようにする
    gb.gui
      .add(this.renderer, "toneMapping", {
        No: THREE.NoToneMapping,
        Linear: THREE.LinearToneMapping,
        Reinhard: THREE.ReinhardToneMapping,
        Cineon: THREE.CineonToneMapping,
        ACESFilmic: THREE.ACESFilmicToneMapping,
      })
      .onFinishChange(() => {
        // 環境マップは変更されるが、モデルのテクスチャは変わらないのupdateする必要性
        gb.MyObj.updateAllMaterials();
      });

    gb.gui.add(this.renderer, "toneMappingExposure").min(0).max(10).step(0.001);

    // append
    this.$wrap.prepend(this.renderer.domElement);

    // set style
    $(this.renderer.domElement)
      .css({ position: "absolute", top: 0, left: 0, "z-index": 1, opacity: 1 })
      .attr("id", this.id);

    // obj
    this.add();

    this.loopStart = true;
  }

  add() {
    this.scene01 = new Scene01(this.renderer);
    // this.scene02 = new Scene02(this.renderer);
  }

  update() {
    this.scene01.update();
    // this.scene02.update();
  }

  draw() {
    this.scene01.draw();
    // this.scene02.draw();
  }

  timeline() {}

  onResize() {
    var w = gb.r.w;
    var h = gb.r.h;

    this.scene01.onResize();

    this.renderer.setSize(w, h);
    if (this.scene01.isEffectComposer) {
      this.scene01.composer.setSize(
        w * window.devicePixelRatio,
        h * window.devicePixelRatio
      );
    }
  }
}
