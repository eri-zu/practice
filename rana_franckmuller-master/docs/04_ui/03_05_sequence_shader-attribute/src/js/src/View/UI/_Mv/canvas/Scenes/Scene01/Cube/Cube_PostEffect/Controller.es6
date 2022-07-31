//--------------------------------------------------
//
//  PostEffect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import Scene_PE from './Scene_PE.es6';
import Bright from './Bright.es6';
import Blur from './Blur.es6';
import Bloom from './Bloom.es6';

export default class PostEffect extends Base {

  constructor(scene, camera, renderer) {

    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;
    this.blurCount = 3;

    this.ready();

    this.add();

    this.param();

  }

  ready() {

    // scene for post effect
    this.spe = new Scene_PE(this.scene, this.camera, this.renderer);

    // plane for post effect
    this.renderTarget = [
      new THREE.WebGLRenderTarget(gb.r.w / 4, gb.r.h / 4),
      new THREE.WebGLRenderTarget(gb.r.w / 4, gb.r.h / 4),
    ];
    this.Bright = new Bright(this.spe.tex);
    this.Blurh = new Blur(this.renderTarget[0].texture, new THREE.Vector2(1.0, 0.0));
    this.Blurv = new Blur(this.renderTarget[1].texture, new THREE.Vector2(0.0, 1.0));

    var texBase = this.spe.tex;
    var texLast = this.renderTarget[0].texture;
    this.Bloom = new Bloom(this.scene, this.camera, this.renderer, texBase, texLast);

  }

  add() {

    // this.spe.add();
    this.Bright.add();
    this.Blurh.add();
    this.Blurv.add();
    this.Bloom.add();

  }

  update() {

    this.spe.update();
    this.Bright.update();
    this.Blurh.update();
    this.Blurv.update();
    this.Bloom.update();

  }

  draw() {

    this.spe.draw();
    // for (var i = 0; i < this.blurCount; i++) {
      this.renderer.render(this.Bright.scene, this.Bright.camera, this.renderTarget[0]);
    // }
    for (var i = 0; i < this.blurCount; i++) {
      this.renderer.render(this.Blurh.scene, this.Blurh.camera, this.renderTarget[1]);
      this.renderer.render(this.Blurv.scene, this.Blurv.camera, this.renderTarget[0]);
    }

  }

  timeline() {


  }

  param() {

    this.p = {

        blurCount: 10,

        // Bright
        Bright_minBright: 0.0,

        // Bloom
        Bloom_tone: 0.3,
        Bloom_strength: 0.1,
        Bloom_fixBlur: 15.0,
        Bloom_contrast: 0.78,
        Bloom_bright: 0.8,

      };

    var gui = new dat.GUI();

    var f1 = gui.addFolder('Bloom');
    f1.add(this.p, 'blurCount', 0, 20).step(1).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this.p, 'Bright_minBright', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this.p, 'Bloom_tone', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this.p, 'Bloom_strength', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this.p, 'Bloom_fixBlur', 0.0, 100.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));

    f1.add(this.p, 'Bloom_contrast', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this.p, 'Bloom_bright', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));

    this.onParamsChange();

  }

  onParamsChange() {

    this.blurCount = this.p.blurCount;

    this.Bright.uniforms.minBright.value = this.p.Bright_minBright;

    this.Bloom.uniforms.tone.value = this.p.Bloom_tone;
    this.Bloom.uniforms.strength.value = this.p.Bloom_strength;
    this.Bloom.uniforms.fixBlur.value = this.p.Bloom_fixBlur;
    this.Bloom.uniforms.contrast.value = this.p.Bloom_contrast;
    this.Bloom.uniforms.bright.value = this.p.Bloom_bright;

  }

  onResize() {

    this.uniforms.resolution.value.x = gb.r.w;
    this.uniforms.resolution.value.y = gb.r.h;

  }

}