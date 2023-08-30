import { PerspectiveCamera, Vector3 } from "three";

const lookat = new Vector3(0, 0, 0);

export class Camera extends PerspectiveCamera {
  constructor() {
    super(60, 1, 0.1, 1000);
    this.lookAt(lookat);
  }

  onResize(w, h) {
    this.aspect = w / h;
    this.setPixelPosition(h);
  }

  setPixelPosition(h) {
    const fovRad = (this.fov / 2) * (Math.PI / 180);
    this.position.z = h / 2 / Math.tan(fovRad);
    this.updateProjectionMatrix();
  }
}
