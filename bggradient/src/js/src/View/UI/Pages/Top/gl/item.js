import {
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  LinearFilter,
  Texture,
  TextureLoader,
  Vector3,
  LinearSRGBColorSpace,
} from "three";
import { itemConfig } from "./item-config";
import { gsap } from "gsap";
const lerp = (a, b, t) => a + (b - a) * t;
const BP = 768;
export class Item extends Mesh {
  constructor(config) {
    const g = new PlaneGeometry();
    const m = new MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      // color: 0xff0000,
    });
    super(g, m);
    this.config = config;

    this.size = {
      w: 0,
      h: 0,
    };
    this.speed = 1;
  }

  async load() {
    const loader = new TextureLoader();
    const texture = await loader.loadAsync(this.config.img);
    texture.magFilter = LinearFilter;
    texture.minFilter = LinearFilter;
    texture.colorSpace = LinearSRGBColorSpace;
    this.material.map = texture;
  }

  onResize(w, end, h) {
    let baseW = 0;
    const aspe =
      this.material.map.source.data.height /
      this.material.map.source.data.width;
    if (window.innerWidth < BP) {
      itemConfig.forEach((item) => {
        if (item.id < this.config.id) {
          baseW += item.spWidth;
          baseW += item.spLeft;
        }
      });
      const width = this.config.spWidth;
      const height = width * aspe;
      const g = new PlaneGeometry(width, height);
      this.geometry.dispose();
      this.geometry = g;
      const y = h * 0.5 - height * 0.5 - this.config.spTop;
      const x =
        -window.innerWidth * 0.5 + width * 0.5 + baseW + this.config.spLeft;
      this.position.copy(new Vector3(x, y, 0));
      this.endPosition = end;
      this.size = {
        w: width,
        h: height,
      };
    } else {
      itemConfig.forEach((item) => {
        if (item.id < this.config.id) {
          baseW += item.width;
          baseW += item.left;
        }
      });

      const width = this.config.width * w;
      const height = aspe * width;

      const g = new PlaneGeometry(width, height);

      this.geometry.dispose();

      this.geometry = g;

      const y = h * 0.5 - height * 0.5 - this.config.top * w;
      const x = -w * 0.5 + width * 0.5 + this.config.left * w + 14 + baseW * w;
      this.position.copy(new Vector3(x, y, 0));
      this.endPosition = end * w;

      this.size = {
        w: width,
        h: height,
      };
    }
  }

  onUpdate(t, baseSpeed, w) {
    // return;
    if (!t) return;
    const speed = t * 6 * w * 0.5;

    this.speed = lerp(this.speed, baseSpeed + 1, 0.05);

    this.position.x -= speed * 0.01 * this.speed;
    if (this.position.x + this.size.w < window.innerWidth * -0.5) {
      this.position.x += this.endPosition;
    }
  }

  show() {
    const tl = gsap.timeline();

    tl.to(this.material, 1.1, {
      opacity: 1,
      ease: "power2.inOut",
    });
    return tl;
  }
}
