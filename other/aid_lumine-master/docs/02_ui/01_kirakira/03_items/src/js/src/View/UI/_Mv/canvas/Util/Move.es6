//--------------------------------------------------
//
//  Move
//
//--------------------------------------------------

export default class Move {

  constructor(x, y, z) {

    // current
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;

    // default
    this.defx = 0;
    this.defy = 0;
    this.defz = 0;

    // target
    this.tx = 0;
    this.ty = 0;
    this.tz = 0;

    // prev
    this.px = x || 0;
    this.py = y || 0;
    this.pz = z || 0;

    // force
    this.fx = 0;
    this.fy = 0;
    this.fz = 0;

    // acceleration
    this.ax = 0;
    this.ay = 0;
    this.az = 0;

    // velocity
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;

    this.mass = 1;

    this.FRICTION = 0.79;
    this.EASING = 0.18;

    this.isRemove = false;



    this.setup();

  }

  setup () {

 

  }

  applyForce(f) {

    this.fx += f;
    this.fx /= this.mass;

  }

  update() {

    this.fx *= 0;

  }

  setTarget(x, y, z) {

    this.tx = x;
    this.ty = y;
    this.tz = z;

  }

  spring() {

    var target = this.tx + this.fx;
    this.ax = (target - this.x) * this.EASING;
    this.vx += this.ax;
    this.vx *= this.FRICTION;
    this.x += this.vx;

  }

  ease() {

    this.x += (this.tx - this.x) * this.EASING;
    this.y += (this.ty - this.y) * this.EASING;
    this.z += (this.tz - this.z) * this.EASING;

  }


}