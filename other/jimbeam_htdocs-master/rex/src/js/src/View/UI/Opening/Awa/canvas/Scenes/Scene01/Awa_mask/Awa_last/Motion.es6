//--------------------------------------------------
//
//  Motion
//
//--------------------------------------------------

import * as m from 'Util/Math/index.es6';
import v from 'Util/Val.es6';

export default class Motion {

  constructor(parent) {

    this.p = parent;
    this.v = new v();

  }

  // ------------------------------------------------------------
  // circle
  // ------------------------------------------------------------
  setupUpdateCircle() {

    var x,y;
    var w = gb.r.w, h = gb.r.h;
    var radius=0,radiusOut=0,radiusIn=0,radian=0,step=0;

    for (var i = 0; i < this.p.num; i++) {

      var c = 0.65;
      if (i<this.p.num/2) var r = 0.05;
      else var r = 0.03 + 0.01 * Math.random();
      
      radiusOut = Math.min(w, h) * (c + r);
      radiusIn  = Math.min(w, h) * (c - r);

      radius = (i%2 == 0)? radiusOut: radiusIn;
      step = 3 + Math.random() * 5;
      radian = m.radian(i + step);
      x = Math.sin(radian) * radius;
      y = Math.cos(radian) * radius;

      this.p.ps[i].x = x;
      this.p.ps[i].y = y;
      this.p.ps[i].radian = radian;
      this.p.ps[i].vradian = step;
      this.p.ps[i].radius = radius;

    };

  }

  updateCircle() {

    var sin = this.p.v.sin(gb.up.frame/100);

    for (var i = 0; i < this.p.num; i++) {

      var radian = this.p.ps[i].radian += this.p.ps[i].vradian;
      // var radius = this.p.ps[i].radius = 50 + sin * 10;
      var radius = this.p.ps[i].radius;

      this.p.positions[i*3+0] = Math.cos(radian) * radius;
      this.p.positions[i*3+1] = 0;
      this.p.positions[i*3+2] = Math.sin(radian) * radius;

    };

    this.p.geometry.attributes.position.needsUpdate = true;

  }

  updateMove() {

    for (var i = 0; i < this.p.num; i++) {

      this.p.positions[i*3+0] = this.p.ps[i].x;
      this.p.positions[i*3+1] = this.p.ps[i].y;
      this.p.positions[i*3+2] = this.p.ps[i].z;

    };

    this.p.geometry.attributes.position.needsUpdate = true;

  }

  // ------------------------------------------------------------
  // size
  // ------------------------------------------------------------
  updateCircleSize() {

    var size = this.v.noise(gb.up.frame/500) * 10;
    this.p.mesh.material.size = size;

    this.p.geometry.attributes.position.needsUpdate = true;

  }

  // ------------------------------------------------------------
  // sphere
  // ------------------------------------------------------------
  updateSphere() {

    var vRadian = m.radian(gb.up.frame*2.6);

    for (var i = 0; i < this.p.num; i++) {

      var p = this.p.ps[i];

      // update
      p.sphere(vRadian);

      // draw
      this.p.positions[i*3+0] = p.x;
      this.p.positions[i*3+1] = p.y;
      this.p.positions[i*3+2] = p.z;

    };

    this.p.geometry.attributes.position.needsUpdate = true;

  }

  // ------------------------------------------------------------
  // random walk
  // ------------------------------------------------------------
  updateRandomWalk() {

    for (var i = 0; i < this.p.num; i++) {

      var p = this.p.ps[i];

      var stepx = m.range(1);
      var stepy = m.range(1);
      
      // var stepsize = this.v.montecarlo()*10;
      var stepsize = this.v.montecarlo()*Math.random()*10;
      stepx *= stepsize;
      stepy *= stepsize;

      p.x += stepx;
      p.y += stepy;
      p.z = 0;

      this.p.positions[i*3+0] = p.x;
      this.p.positions[i*3+1] = p.y;
      this.p.positions[i*3+2] = p.z;

    };

    this.p.geometry.attributes.position.needsUpdate = true;

  }

  // ------------------------------------------------------------
  // gunya
  // ------------------------------------------------------------
  setupGunya() {

    for (var i = 0; i < this.p.num; i++) {

      var p = this.p.ps[i];

      p.x = m.range(40)*0.5*Math.random();
      p.y = m.range(40)*0.5*Math.random();
      p.z = 0;

      this.p.positions[i*3+0] = p.x;
      this.p.positions[i*3+1] = p.y;
      this.p.positions[i*3+2] = p.z;

    }

  }
  resetGunya(i) {

    var p = this.p.ps[i];

    // p.x = gb.in.u.range(100)*Math.random();
    // p.y = gb.in.u.range(70)*Math.random();
    // p.z = 0;

    // p.x = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+0];
    // p.y = this.satellitePos[Math.floor(this.satellitePos.length*Math.random())*3+1];
    // p.z = 0;

    // p.x = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+0];
    // p.y = this.satellitePos[Math.floor(this.satellitePos.length/3*Math.random())*3+1];
    // p.z = 0;

    p.x = m.range(gb.r.w/2)*Math.random();
    p.y = m.range(gb.r.h/2)*Math.random();
    p.z = 0;

    this.p.positions[i*3+0] = p.x;
    this.p.positions[i*3+1] = p.y;
    this.p.positions[i*3+2] = p.z;

  }
  // ぐにゃぐにゃ
  updateGunya() {

    var vRadian = m.radian(gb.up.frame*2);
    
    for (var i = 0; i < this.p.num; i++) {

      var p = this.p.ps[i];

      p.gunya(vRadian,this.p.zoff);
      if (p.boundary()) this.resetGunya(i);

      // if (i < this.p.num/4) {

      //   this.p.positions[i*3+0] = p.x;
      //   this.p.positions[i*3+1] = -70;
      //   this.p.positions[i*3+2] = p.z;

      // };
  
      // if (i > this.p.num/4 && i < this.p.num/4*2 ) {

      //   this.p.positions[i*3+0] = p.defRight * gb.in.camera.valForParticle;
      //   this.p.positions[i*3+1] = p.y;
      //   this.p.positions[i*3+2] = p.z;

      // };
  
      // if (i > this.p.num/4*2 && i < this.p.num/4*3 ) {

      //   this.p.positions[i*3+0] = p.x;
      //   this.p.positions[i*3+1] = 70;
      //   this.p.positions[i*3+2] = p.z;

      // };
  
      // if (i > this.p.num/4*3 && i < this.p.num ) {

      //   this.p.positions[i*3+0] = p.defLeft * gb.in.camera.valForParticle;
      //   this.p.positions[i*3+1] = p.y;
      //   this.p.positions[i*3+2] = p.z;

      // };


      this.p.positions[i*3+0] = p.x;
      this.p.positions[i*3+1] = p.y;
      this.p.positions[i*3+2] = p.z;

    }

    this.p.zoff += 0.002;
    this.p.geometry.attributes.position.needsUpdate = true;

  }

}