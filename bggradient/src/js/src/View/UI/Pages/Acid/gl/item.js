import {
  Mesh,
  RawShaderMaterial,
  PlaneGeometry,
  LinearFilter,
  TextureLoader,
  Vector3,
  LinearSRGBColorSpace,
} from "three";

export class Item extends Mesh {
  constructor(i, speed) {
    const g = new PlaneGeometry();
    const m = new RawShaderMaterial({
      transparent: true,
      opacity: 0,
    });
    super(g, m);

    this.i = i;
    this.speed = speed;
  }

  async load() {
    const loader = new TextureLoader();
    const texture = await loader.loadAsync(
      `/assets/resource/img/bg_kv${this.i + 1}.png`
    );
    // texture.magFilter = LinearFilter;
    // texture.minFilter = LinearFilter;
    // texture.colorSpace = LinearSRGBColorSpace;
    this.material.map = texture;
  }

  onResize(w, h, top, left, resetPos, itemW, itemH) {
    this.resetPos = resetPos;
    this.h = h;
    this.itemH = itemH;

    const g = new PlaneGeometry(itemW * 0.5, 30);
    this.geometry.dispose();
    this.geometry = g;

    const y = h * 0.5 - itemH * 0.5 - top;
    const x = 0 - w * 0.5 + itemW * 0.5 + left;
    this.position.copy(new Vector3(x, y, 0));

    this.size = { x: itemW, y: itemH };
  }

  onUpdate() {
    this.position.y += this.speed;

    if (this.position.y > this.h * 0.5 + this.itemH * 0.5) {
      this.position.y = this.h * 0.5 - this.itemH * 0.5 - this.resetPos;
    }
  }
}
