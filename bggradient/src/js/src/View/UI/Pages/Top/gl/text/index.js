import {
  LinearFilter,
  LinearSRGBColorSpace,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  RawShaderMaterial,
  TextureLoader,
  Vector2,
} from "three";

const colorTexPath = "/top/images/bg_kv.jpg";

import frag from "./shader.frag";
import vert from "./shader.vert";
const lerp = (a, b, t) => a + (b - a) * t;
import { gsap } from "gsap";

const paths = [
  "/top/images/img_kv_text.png",
  "/top/images/img_kv_text2.png",
  "/top/images/img_kv_text3.png",
];
export class Text extends Object3D {
  constructor() {
    super();

    this.meshs = paths.map(() => {
      const g = new PlaneGeometry();
      const m = new RawShaderMaterial({
        uniforms: {
          uTime: {
            value: 0,
          },
          uTex: {
            value: null,
          },
          uColorTex: {
            value: null,
          },
          resolution: {
            value: new Vector2(),
          },
          imageResolution: {
            value: new Vector2(),
          },
          uColorTime: {
            value: 0,
          },
          showY: {
            value: 1,
          },
        },
        vertexShader: vert,
        fragmentShader: frag,
        transparent: true,
      });
      const mesh = new Mesh(g, m);
      mesh.renderOrder = -1;
      return mesh;
    });

    // this.mesh = mesh;

    this.speed = 1;
    this.add(...this.meshs);
  }

  async load() {
    const loader = new TextureLoader();
    const textures = await Promise.all([
      ...paths.map((path) => loader.loadAsync(path)),
      loader.loadAsync(colorTexPath),
    ]);
    textures.forEach((t) => {
      t.magFilter = LinearFilter;
      t.minFilter = LinearFilter;
      t.colorSpace = LinearSRGBColorSpace;
    });

    this.meshs.forEach((mesh, i) => {
      mesh.material.uniforms.uColorTex.value = textures[3];
      mesh.material.uniforms.imageResolution.value.set(
        textures[i].source.data.width,
        textures[i].source.data.height
      );
      mesh.material.uniforms.uTex.value = textures[i];
    });
  }

  onResize(w, h) {
    const height = h / 3;
    this.meshs.forEach((mesh, i) => {
      const t = mesh.material.uniforms.uTex.value;
      const aspe = t.source.data.width / t.source.data.height;
      const width = Math.max(height * aspe, window.innerWidth);
      const g = new PlaneGeometry(width, height);
      const m = i == 0 ? 0 : (20 / 622) * h;
      mesh.geometry.dispose();
      mesh.geometry = g;
      mesh.material.uniforms.resolution.value.set(width, height);

      mesh.position.y = h * 0.5 - height * 0.5 - i * height + m;
      mesh.position.x = -w * 0.5 + width * 0.5;
    });

    // this.meshes.forEach((mesh) => {
    //   mesh.geometry.dispose();
    //   mesh.geometry = g;
    // });
  }

  onUpdate(t, baseSpeed, w) {
    // return;
    const speed = t * 6 * 0.01 * w * 0.5;

    this.speed = lerp(this.speed, baseSpeed * 0.3 + 1, 0.05);

    this.meshs.forEach((mesh) => {
      const w = mesh.material.uniforms.resolution.value.x;
      mesh.material.uniforms.uTime.value += ((speed * 0.33) / w) * this.speed;
      mesh.material.uniforms.uColorTime.value += 0.001 / w;
    });

    //   Math.floor((1 / 16) * t * 100) * 0.01;
  }

  show() {
    const tl = gsap.timeline();
    this.meshs.forEach((mesh, i) => {
      tl.to(
        mesh.material.uniforms.showY,
        1,
        {
          value: 0,
          ease: window.gb.conf.customOut,
        },
        i * 0.15
      );
    });

    return tl;
  }
}
