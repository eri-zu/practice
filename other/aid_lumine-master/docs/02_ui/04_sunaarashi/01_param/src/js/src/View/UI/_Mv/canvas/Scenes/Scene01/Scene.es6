//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

import _Scene from '../Objects_common/_Scene.es6';
import _Camera from '../Objects_common/_Camera.es6';
import _Light from '../Objects_common/_Light.es6';
import Objects from './Objects.es6';

export default class Scene extends Base {

  constructor(renderer) {

    super();

    this.isUEv = true; // update

    this.renderer = renderer;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isControl = true;
    this.isEffectComposer = false;
    this.isGUI = false;

    // obj生成
    this.add();    

  }

  add() {

    // scene
    this.scene = new _Scene();
    this.scene = this.scene.scene;
    // this.scene.fog = new THREE.FogExp2( 0x000000, 0.0004 );

    // camera
    gb.camera = new _Camera(this.scene);
     this.camera = gb.camera.camera;

    // light
    this.light = new _Light(this.scene);

    // objects
    this.obj = new Objects(this.scene, this.camera, this.renderer);

    // effect
    if (this.isEffectComposer) this.EffectCompose();

    // control
    if (this.isControl) {
      this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
      this.controlSetting();
    }

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
    this.RGBShiftPass = new THREE.ShaderPass(THREE.RGBShiftShader);


    // ------------------------------------------------------------
    //  各Pass param
    // ------------------------------------------------------------
    // 初期値設定
    this.p = {

          // RGBShift
          RGBShiftPass_show: true,
          RGBShiftPass_angle: 0.0,
          RGBShiftPass_amount: 0.013,
          RGBShiftPass_brightness: 3.0,

        };
    this.onParamsChange()
    this.onTogglePass();

    if (this.isGUI) this.GUISetting();
    
  }

  onParamsChange() {
    
    this.RGBShiftPass.uniforms.angle.value = this.p.RGBShiftPass_angle;
    this.RGBShiftPass.uniforms.amount.value = this.p.RGBShiftPass_amount;
    this.RGBShiftPass.uniforms.brightness.value = this.p.RGBShiftPass_brightness;

  }

  onTogglePass(){
    //Add Shader Passes to Composer
    //order is important 
    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.setSize(gb.r.w * window.devicePixelRatio, gb.r.h * window.devicePixelRatio);
    this.composer.addPass(this.renderPass);

    // ------------ add pass start ------------ 
    if (this.p.RGBShiftPass_show) this.composer.addPass(this.RGBShiftPass);



    // ------------ add pass end ------------ 
    this.composer.addPass(this.copyPass);
    this.copyPass.renderToScreen = true;

  }

  update() {

    if (this.isControl) this.controls.update();

  }

  draw() {

    if (this.isEffectComposer) {

      this.composer.render();

    } else {

      this.renderer.render(this.scene, this.camera);  

    }

  }

  show() {

    
  }

  hide() {



  }

  state() {

  }

  controlSetting() {


    this.controls.rotateSpeed = 3.0; //回転させるときの速さ
    this.controls.zoomSpeed = 1.2; //ズームするときの速さ
    this.controls.panSpeed = 0.3; //パンするときの速さ

    this.controls.staticMoving = false;
    this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;
     
    this.controls.noRotate = false; //trueで回転操作を不可にする
    this.controls.noZoom = false; //trueでズーム操作を不可にする
    this.controls.noPan = true; //trueでパンの操作を不可にする

    this.controls.minDistance = 0; //近づける距離の最小値
    this.controls.maxDistance = Infinity; //遠ざかれる距離の最大値
    // this.controls.maxDistance = 100; //遠ざかれる距離の最大値

  }

  GUISetting() {

    var gui = new dat.GUI();
    // ------------------------------------------------------------
    //  各Pass param setting
    // ------------------------------------------------------------
    var f2 = gui.addFolder('RGBShift');
    f2.add(this.p, 'RGBShiftPass_show').onChange(this.onTogglePass.bind(this));
    f2.add(this.p, 'RGBShiftPass_angle', 0.0, Math.PI * 2).step(0.01).listen().onChange(this.onParamsChange.bind(this));
    f2.add(this.p, 'RGBShiftPass_amount', 0.0, 1.0).step(0.01).listen().onChange(this.onParamsChange.bind(this));


  }

  onResize() {

    var w = gb.r.w * window.devicePixelRatio;
    var h = gb.r.h * window.devicePixelRatio;

    gb.camera.onResize();

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

  }

  setEvents() {

  }

}