class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static lerp(v1, v2, t) {
    const x = v1.x + (v2.x - v1.x) * t;
    const y = v1.y + (v2.y - v1.y) * t;
    return new Vector2(x, y);
  }

  static length(v1, v2) {
    if (!v2) v2 = { x: 0, y: 0 };
    return Math.pow(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2), 0.5);
  }

  static sub(v1, v2) {
    return new Vector2(v2.x - v1.x, v2.y - v1.y);
  }

  static isContainTwoVector(v, topLeft, bottomRight) {
    const isTopLeft = v.x > topLeft.x && v.y > topLeft.y;
    const isBottomRight = v.x < bottomRight.x && v.y < bottomRight.y;

    return isTopLeft && isBottomRight;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  normalize() {
    const l = Vector2.length(this);
    this.x = this.x / l;
    this.y = this.y / l;
    return this;
  }

  getMiddle(point) {
    const x = (point.x - this.x) * 0.5;
    const y = (point.y - this.y) * 0.5;
    return new Vector2(x + this.x, y + this.y);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  copy(v) {
    this.x = v.x;
    this.y = v.y;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  multiplyScalar(f) {
    this.x *= f;
    this.y *= f;
    return this;
  }

  angle(p) {
    const v = Vector2.sub(this, p);
    const r = Math.atan2(v.y, v.x);
    return r + Math.PI;
  }
}

export default Vector2;
