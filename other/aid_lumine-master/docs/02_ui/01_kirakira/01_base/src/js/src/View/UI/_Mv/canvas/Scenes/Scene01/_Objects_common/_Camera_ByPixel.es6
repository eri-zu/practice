//--------------------------------------------------
//
//  Camera
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Camera extends Base {  

  constructor(scene) {

    super();

    this.scene = scene;

    this.setup();
    this.setEvents();

  }

  setup() {

    this.isUEv = true;

    this.x = 0;
    this.y = 0;
    this.z = 100;
    this.lookx = 0;
    this.looky = 0;
    this.lookz = 0;

    this.fov    = 45;
    this.aspect = gb.r.w / gb.r.h;
    this.near   = 1;
    this.far    = 50000;

    this.ready();

  }

  ready() {

    this.camera = new THREE.PerspectiveCamera( this.fov, this.aspect, this.near, this.far );
    this.camera.position.set(this.x ,this.y, this.z)

    // ピクセル等倍
    this.setCameraByPixel();    

    this.updateFrustum();

    this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
    this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
    this.depth = this.frustum.planes[4].constant + this.frustum.planes[5].constant;

  }

  update() {

    this.camera.lookAt( this.scene.position );

  }

  updateFrustum() {

    this.frustum = new THREE.Frustum();
    this.cameraViewProjectionMatrix = new THREE.Matrix4();

    this.camera.updateMatrixWorld(); // make sure the camera matrix is updated
    this.camera.matrixWorldInverse.getInverse( this.camera.matrixWorld );
    this.cameraViewProjectionMatrix.multiplyMatrices( this.camera.projectionMatrix, this.camera.matrixWorldInverse );
    this.frustum.setFromMatrix( this.cameraViewProjectionMatrix );

  }

  setCameraByPixel() {

    var fov = this.fov;
    var vFOV = fov * (Math.PI / 180); // convert to radians
    var vpHeight = gb.r.h // viewport height;
    var z = vpHeight / (2 * Math.tan(vFOV / 2) );
    this.z = z;
    this.camera.position.set(0, 0, z);
    this.camera.lookAt(new THREE.Vector3());

    // var param = {
    //   "fov": 45,
    // };

    // var gui = new dat.GUI();

    // // 最初のset
    // this.camera.fov = param.fov;
    
    // gui.add(param, "fov", 0, 90, 0.1).onChange((v)=>{
    //   this.camera.fov = v;
    //   this.camera.updateProjectionMatrix();
    // });


  }

  onResize() {

    this.setCameraByPixel();

    // frustum
    this.updateFrustum();

    this.w = this.frustum.planes[0].constant + this.frustum.planes[1].constant;
    this.h = this.frustum.planes[2].constant + this.frustum.planes[3].constant;
    this.depth = this.frustum.planes[4].constant + this.frustum.planes[5].constant;
  }

}
