//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// import Base from "@BALANCeLibs/Base.js";
import * as m from "@BALANCeLibs/Util/Math.js";

export default class Controller {
  constructor(item, i, randomStrengthY) {
    this.item = item;
    this.i = i;
    this.randomStrengthY = randomStrengthY;
    this.randomStrengthY = randomStrengthY;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setParameter();
  }

  setParameter() {
    const randomNum = m.random(1, 1.5);

    // pos
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 2 * this.randomStrengthY;
    this.ry = 3 * this.randomStrengthY;
    this.rz = 10 * 10;
    // rotation
    this.rotateX = 0;
    this.rotateY = 0;
    this.rotateZ = 0;
    // scale
    this.scaleX = 0;
    this.scaleY = 0;

    // start degree
    const numbers = [];
    for (let i = 0; i < 12; i++) {
      numbers.push(i);
    }
    this.randomNum = m.shuffle(numbers);
    this.degree = this.i * 10; // アニメーション開始ずらす

    // indexでずらす
    this.direction = this.i % 2 == 0 ? 1 : -1;
    this.offset = (this.i * Math.PI) / 17;

    this.speed = {
      x: 0.01 * randomNum,
      y: 0.015 * randomNum,
      z: 0.012 * randomNum,
      rotateX: 0.02,
      rotateY: 0.02,
      rotateZ: 0.02,
      scaleY: 0.02,
    };
  }

  onResize() {
    this.setParameter();
  }

  update() {
    this.x += this.speed.x;
    this.y += this.speed.y;
    // this.z += this.speed.z;
    this.rotateX += this.speed.rotateX;
    this.rotateY += this.speed.rotateY;
    this.rotateZ += this.speed.rotateZ;
    this.scaleY += this.speed.scaleY;

    // pos
    const x = (Math.sin(this.x + this.degree) + this.direction) * this.rx; // 内側に近づく
    const y = Math.sin(this.y + this.degree + this.offset) * this.ry;
    const z = Math.sin(this.z + this.degree) * this.rz;

    // rotation
    const rotateX = (Math.sin(this.rotateX + this.degree) - 0.3) * 4;
    const rotateY =
      (Math.cos(this.rotateY + this.degree) + 0.7) * 10 * this.direction; // 内側よりに回転
    const rotateZ = (Math.cos(this.rotateZ + this.degree) - 0) * 0.1;

    // scale
    const scaleY = m.map(
      (Math.sin(this.scaleY + this.degree) + 1) * 0.5,
      0.95,
      1.05,
      0,
      1
    );

    this.item.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scaleY(${scaleY})`;

    // this.item.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scaleY(${scaleY})`;
  }

  setEvents() {}
}
