//--------------------------------------------------
//
//  Effect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Effect extends Base {

  constructor(isEffect=false, isGUI=false, renderer, scene, camera, texBase) {

    super();

    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.texBase = texBase;

    this.isEffect = isEffect;
    this.isGUI = isGUI;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isControl = true;

    if (this.isEffect) this.EffectCompose();

  }
  
  EffectCompose() {

    // effect composer
    this.composer = new THREE.EffectComposer(this.renderer);
    // add render pass
    this.renderPass = new THREE.RenderPass(this.scene, this.camera)
    this.composer.addPass(this.renderPass);
    this.copyPass = new THREE.ShaderPass(THREE.CopyShader); // last pass

    // ------------------------------------------------------------
    //  各Pass
    // ------------------------------------------------------------
    // sample
    this.RGBShiftPass = new THREE.ShaderPass(THREE.RGBShiftShader);

    // glow
      // bright
      // blurh
      // blurv
      // bloom
    this.BrightPass = new THREE.ShaderPass(THREE.BrightShader);
    this.BlurhPass = new THREE.ShaderPass(THREE.BlurShader);
    this.BlurvPass = new THREE.ShaderPass(THREE.BlurShader);
    this.BloomPass = new THREE.ShaderPass(THREE.BloomShader);

    // ------------------------------------------------------------
    //  各Pass param
    // ------------------------------------------------------------
    // 初期値設定
    this.p = {

          blurCount: 3,

          // RGBShift
          RGB_show: false,
          RGB_angle: 0.0,
          RGB_amount: 0.013,
          RGB_brightness: 3.0,

          // Bright
          Bright_show: true,
          Bright_minBright: 0.2,

          // Blurh
          Blurh_show: true,
          Blurh_resolution: new THREE.Vector2(window.innerWidth / 10, window.innerHeight / 10),
          Blurh_direction: new THREE.Vector2(1.0, 0.0),

          // Blurv
          Blurv_show: true,
          Blurv_resolution: new THREE.Vector2(window.innerWidth / 10, window.innerHeight / 10),
          Blurv_direction: new THREE.Vector2(0.0, 1.0),

          // Bloom
          Bloom_show: true,
          Bloom_tone: 0.7,
          Bloom_strength: 3,
          Bloom_texBase: this.texBase,

        };
    this.onParamsChange()
    this.onTogglePass();

    if (this.isGUI) this.GUISetting();
    
  }

  onParamsChange() {
    
    this.RGBShiftPass.uniforms.angle.value = this.p.RGB_angle;
    this.RGBShiftPass.uniforms.amount.value = this.p.RGB_amount;
    this.RGBShiftPass.uniforms.brightness.value = this.p.RGB_brightness;

    this.BrightPass.uniforms.minBright.value = this.p.Bright_minBright;

    this.BlurhPass.uniforms.resolution.value = this.p.Blurh_resolution;
    this.BlurhPass.uniforms.direction.value = this.p.Blurh_direction;

    this.BlurvPass.uniforms.resolution.value = this.p.Blurv_resolution;
    this.BlurvPass.uniforms.direction.value = this.p.Blurv_direction;

    this.BloomPass.uniforms.tone.value = this.p.Bloom_tone;
    this.BloomPass.uniforms.strength.value = this.p.Bloom_strength;
    this.BloomPass.uniforms.texBase.value = this.p.Bloom_texBase;

  }

  onTogglePass(){
    //Add Shader Passes to Composer
    //order is important 
    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.setSize(gb.r.w * window.devicePixelRatio / 2, gb.r.h * window.devicePixelRatio / 2);
    // this.BrightPass.setSize(gb.r.w / 4, gb.r.h / 4);
    // this.BlurhPass.setSize(gb.r.w / 4, gb.r.h / 4);
    // this.BlurvPass.setSize(gb.r.w / 4, gb.r.h / 4);
    // this.BloomPass.setSize(gb.r.w / 4, gb.r.h / 4);
    this.composer.addPass(this.renderPass);

    // ------------ add pass start ------------ 
    if (this.p.RGB_show) this.composer.addPass(this.RGBShiftPass);

    if (this.p.Bright_show) this.composer.addPass(this.BrightPass);

    for (var i = 0; i < this.p.blurCount; i++) {
      if (this.p.Blurh_show) this.composer.addPass(this.BlurhPass);
      if (this.p.Blurv_show) this.composer.addPass(this.BlurvPass);
    }
    

    if (this.p.Bloom_show) this.composer.addPass(this.BloomPass);

    // ------------ add pass end ------------ 
    this.composer.addPass(this.copyPass);
    this.copyPass.renderToScreen = true;

  }

  GUISetting() {

    var gui = new dat.GUI();
    // ------------------------------------------------------------
    //  各Pass param setting
    // ------------------------------------------------------------
    var f1 = gui.addFolder('RGBShift');
    f1.add(this.p, 'RGB_show').onChange(this.onTogglePass.bind(this));
    f1.add(this.p, 'RGB_angle', 0.0, Math.PI * 2).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f1.add(this.p, 'RGB_amount', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));

    var f2 = gui.addFolder('Bloom');
    f2.add(this.p, 'blurCount', 1, 20).step(1).onChange(this.onTogglePass.bind(this));
    f2.add(this.p, 'Bright_minBright', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f2.add(this.p, 'Bloom_tone', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f2.add(this.p, 'Bloom_strength', 0.0, 5.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));

  }

  setEvents() {

  }

}