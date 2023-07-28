//--------------------------------------------------
//
//  Effect
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Effect extends Base {

  constructor(isEffect=false, isGUI=false, renderer, scene, camera) {

    super();

    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.isEffect = isEffect;
    this.isGUI = isGUI;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.isControl = true;

    this.index = 0;


    // obj
    var loader = new THREE.TextureLoader();
    loader.crossOrigin = "";
    this.texture1 = loader.load('./assets/resource/img/img05.jpeg');
    this.texture2 = loader.load('./assets/resource/img/img06.jpeg');

    this.dispList = [];
    for (var i = 0; i < 17; i++) {

      var ext = '.jpg';
      if (i==3||i==4) ext = '.png';

      var disp = loader.load('./assets/resource/img/displacement/'+(i+1)+ext);
      disp.wrapS = disp.wrapT = THREE.RepeatWrapping;
      this.dispList.push(disp);
    }
    
    log(this.dispList);

    

    
    this.texture1.magFilter = this.texture2.magFilter = THREE.LinearFilter;
    this.texture1.minFilter = this.texture2.minFilter = THREE.LinearFilter;

    // texture1.anisotropy = renderer.getMaxAnisotropy();
    // texture2.anisotropy = renderer.getMaxAnisotropy();


    if (this.isEffect) this.EffectCompose();

  }

  update() {

    // this.SamplePass.uniforms.t.value = (Math.sin(gb.up.frame/100) + 1) / 2;
    // this.SamplePass.uniforms.baseTime.value = (Math.cos(gb.up.frame/80) + 1) / 2;

  }
  
  EffectCompose() {

    // effect composer
    this.composer = new THREE.EffectComposer(this.renderer);
    // add render pass
    this.renderPass = new THREE.RenderPass(this.scene, this.camera)
    this.composer.addPass(this.renderPass);
    this.copyPass = new THREE.ShaderPass(THREE.CopyShader); // last pass

    // ------------------------------------------------------------
    //  ??Pass
    // ------------------------------------------------------------
    // this.RGBShiftPass = new THREE.ShaderPass(THREE.RGBShiftShader);
    this.SamplePass = new THREE.ShaderPass(THREE.SampleShader);


    // ------------------------------------------------------------
    //  ??Pass param
    // ------------------------------------------------------------
    // ????????
    this.p = {

          // RGBShift
          RGB_show: true,
          RGB_angle: 0.0,
          RGB_amount: 0.013,
          RGB_brightness: 3.0,

          // Sample
          Sample_show: true,
          Sample_effectFactor: 1.0,
          Sample_dispFactor: 0.0,
          Sample_texture : this.texture1,
          Sample_texture2 : this.texture2,
          Sample_disp : this.dispList[0],
          Sample_resolution : new THREE.Vector2(gb.r.w, gb.r.h),
          Sample_imageResolution : new THREE.Vector2(this.texture1.image.width, this.texture1.image.height),

        };

        log(this.p);

    this.onParamsChange()
    this.onTogglePass();

    if (this.isGUI) this.GUISetting();
    
  }

  onParamsChange() {
    
    // this.RGBShiftPass.uniforms.angle.value = this.p.RGB_angle;
    // this.RGBShiftPass.uniforms.amount.value = this.p.RGB_amount;
    // this.RGBShiftPass.uniforms.brightness.value = this.p.RGB_brightness;
    this.SamplePass.uniforms.effectFactor.value = this.p.Sample_effectFactor;
    this.SamplePass.uniforms.dispFactor.value = this.p.Sample_dispFactor;
    this.SamplePass.uniforms.texture.value = this.p.Sample_texture;
    this.SamplePass.uniforms.texture2.value = this.p.Sample_texture2;
    this.SamplePass.uniforms.disp.value = this.p.Sample_disp;

    this.SamplePass.uniforms.resolution.value.x = this.p.Sample_resolution.x;
    this.SamplePass.uniforms.resolution.value.y = this.p.Sample_resolution.y;
    this.SamplePass.uniforms.imageResolution.value.x = this.p.Sample_imageResolution.x;
    this.SamplePass.uniforms.imageResolution.value.y = this.p.Sample_imageResolution.y;

  }

  onTogglePass(){
    //Add Shader Passes to Composer
    //order is important 
    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.setSize(gb.r.w * window.devicePixelRatio, gb.r.h * window.devicePixelRatio);
    // this.composer.setSize(gb.r.w * 1.2, gb.r.h * 1.2);
    // this.composer.setSize(gb.r.w, gb.r.h);
    this.composer.addPass(this.renderPass);

    // ------------ add pass start ------------ 
    // if (this.p.RGB_show) this.composer.addPass(this.RGBShiftPass);
    if (this.p.Sample_show) this.composer.addPass(this.SamplePass);

    log(this.dispList[Number(this.index)], Number(this.index));
    this.SamplePass.uniforms.disp.value = this.p.Sample_disp = this.dispList[Number(this.index)];

    // ------------ add pass end ------------ 
    this.composer.addPass(this.copyPass);
    this.copyPass.renderToScreen = true;

  }

  GUISetting() {

    var gui = new dat.GUI();
    // ------------------------------------------------------------
    //  ??Pass param setting
    // ------------------------------------------------------------
    // var f2 = gui.addFolder('RGBShift');
    // f2.add(this.p, 'RGB_show').onChange(this.onTogglePass.bind(this));
    // f2.add(this.p, 'RGB_angle', 0.0, Math.PI * 2).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    // f2.add(this.p, 'RGB_amount', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));

    this.index = 0;
    var f2 = gui.addFolder('Sample');
    f2.add(this.p, 'Sample_show').onChange(this.onTogglePass.bind(this));
    f2.add(this.p, 'Sample_effectFactor', 0.0, 5).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f2.add(this.p, 'Sample_dispFactor', 0.0, 1).step(0.01).listen().onChange(this.onParamsChange.bind(this));

    f2.add(this, 'index', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]).onChange(this.onTogglePass.bind(this));

  }

}