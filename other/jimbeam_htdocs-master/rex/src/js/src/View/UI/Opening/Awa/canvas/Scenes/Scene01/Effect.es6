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
    // this.RGBShiftPass = new THREE.ShaderPass(THREE.RGBShiftShader);
    gb.zbp = this.ZoomBlurPass = new THREE.ShaderPass(THREE.ZoomBlurShader);

    // glow
      // bright
      // blurh
      // blurv
      // bloom
    // this.BrightPass = new THREE.ShaderPass(THREE.BrightShader);
    // this.BlurhPass = new THREE.ShaderPass(THREE.BlurShader);
    // this.BlurvPass = new THREE.ShaderPass(THREE.BlurShader);
    // this.BloomPass = new THREE.ShaderPass(THREE.BloomShader);

    // ------------------------------------------------------------
    //  各Pass param
    // ------------------------------------------------------------
    // 初期値設定
    this.p = {

          ZoomBlurPass_show: true,
          ZoomBlurPass_resolution: new THREE.Vector2(gb.r.w, gb.r.h),
          ZoomBlurPass_center: new THREE.Vector2(gb.r.w / 2, gb.r.h / 2),
          ZoomBlurPass_strength: 0.0,

        };
    this.onParamsChange()
    this.onTogglePass();

    if (this.isGUI) this.GUISetting();
    
  }

  onParamsChange() {
    
    this.ZoomBlurPass.uniforms.center.value = this.p.ZoomBlurPass_center;
    this.ZoomBlurPass.uniforms.strength.value = this.p.ZoomBlurPass_strength;

  }

  onTogglePass(){
    //Add Shader Passes to Composer
    //order is important 
    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.setSize(gb.r.w * 2, gb.r.h * 2);
    // this.BrightPass.setSize(gb.r.w / 4, gb.r.h / 4);
    // this.BlurhPass.setSize(gb.r.w / 4, gb.r.h / 4);
    // this.BlurvPass.setSize(gb.r.w / 4, gb.r.h / 4);
    // this.BloomPass.setSize(gb.r.w / 4, gb.r.h / 4);
    this.composer.addPass(this.renderPass);

    // ------------ add pass start ------------ 
    if (this.p.ZoomBlurPass_show) this.composer.addPass(this.ZoomBlurPass);

    // ------------ add pass end ------------ 
    this.composer.addPass(this.copyPass);
    this.copyPass.renderToScreen = true;

  }

  GUISetting() {

    var gui = new dat.GUI();
    // ------------------------------------------------------------
    //  各Pass param setting
    // ------------------------------------------------------------
    var f3 = gui.addFolder('zoomblur');
    f3.add(this.p, 'ZoomBlurPass_show').onChange(this.onTogglePass.bind(this));

  }

  setEvents() {

  }

}