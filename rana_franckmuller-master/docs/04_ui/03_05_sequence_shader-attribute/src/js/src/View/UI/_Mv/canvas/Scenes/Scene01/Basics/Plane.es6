//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

export default class Plane extends Base {

  constructor(scene, camera) {

    super();

    this.scene = scene;
    this.camera = camera;

    this.setup();
    this.setEvents();

    this.timeline();   

  }

  setup() {

    this.isUEv = true;
    this.cnt = 0;

    this.ready();

    this.add();

  }

  ready() {

    this.$text = $('.text');
    this.w = this.$text.width();
    this.h = this.$text.height();

    this.sw = gb.rm.l.list[0].width;
    this.sh = gb.rm.l.list[0].height;

    log(this.sw, this.sh);
    log(this.w, this.h);


    this.adjust = 2;

    // this.container = new THREE.Object3D();

    var geo = new THREE.PlaneGeometry(this.sw, this.sh, 1, 1);

    this.texture = new THREE.CanvasTexture(this.generateSprite());
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.minFilter = THREE.LinearFilter;

    var mat = new THREE.MeshPhongMaterial( { color: 0xffffff, side: THREE.DoubleSide ,transparent: true, map: this.texture} );

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.z = 0;


    this.onResize();

  }

  add() {

    this.scene.add(this.mesh);

  }

  update() {

    // this.mesh.rotation.set(gb.up.frame/100,gb.up.frame/50,0);

  }

  draw() {

    // 間引き
    if (gb.up.frame%3==0) this.cnt++;


    var total = gb.rm.l.list.length;
    
    var img = gb.rm.l.list[this.cnt%total];
    this.ctx.drawImage(img, 0, 0, this.sw, this.sh, 0, 0, this.sw, this.sh);

    this.mesh.material.map.needsUpdate = true;

  }

  timeline() {

    // var tl = new TimelineMax({repeat: -1, yoyo: true});

    // tl
    //   .to(this.mesh.scale, 1.8, {
    //     x: 0,
    //     ease: Expo.easeInOut,
    //     onComplete: ()=>{
          
    //     }
    //   })

  }

  generateSprite() {

    var canvas = document.createElement( 'canvas' );
    canvas.width = this.sw * this.adjust;
    canvas.height = this.sh * this.adjust;

    this.ctx = canvas.getContext( '2d' );
    this.ctx.scale(2,2);


    return canvas;

  }

  onResize() {

    this.ratioW = this.w / this.h;
    this.ratio = this.sw / this.sh;

    // size cover
    if (this.ratioW > this.ratio) {

      var scale = this.w / this.sw;
      log('1', scale)
      this.mesh.scale.set(scale, scale, 1);

    } else if ( this.ratioW <= this.ratio) {

      var scale = this.h / this.sh;
      log('2', scale)
      this.mesh.scale.set(scale, scale , 1);

    }

  }

}