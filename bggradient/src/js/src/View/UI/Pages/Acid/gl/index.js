import { Renderer } from "./renderer";
import { Camera } from "./camera";
import { Scene, Object3D } from "three";
import { Item } from "./item";

export class GL {
  constructor(wrap) {
    this.wrap = wrap;
    this.canvas = this.wrap.querySelector("canvas");
    this.area = document.querySelector(".js-acid_lineuparea");
    this.renderer = new Renderer(this.canvas);

    // intersection observer
    this.isView = false;
    const intersectionObserver = new IntersectionObserver(
      this.onView.bind(this)
    );
    intersectionObserver.observe(this.wrap);
    this.calc();

    this.setup();
  }

  async setup() {
    // camera
    // scene
    this.camera = new Camera();
    this.scene = new Scene();

    // mesh
    this.item = new Item(i, GL.config.speed);
    this.scene.add(item);

    // load
    await this.load();
    this.isLoaded = false;

    // update
    this.onUpdate();

    // resize
    const resizer = new ResizeObserver(this.onResize.bind(this));
    resizer.observe(this.wrap);
  }

  async load() {
    // const p = this.items.map((item) => {
    //   return item.load();
    // });

    const p = item.load();

    // await Promise.all([...p])
    await p;
  }

  fixed() {
    this.wrap.classList.add("isFixed");
  }

  cancelFixed() {
    this.wrap.classList.remove("isFixed");
  }

  calc() {
    this.top = this.area.getBoundingClientRect().top + window.scrollY;
    this.bottom =
      this.area.getBoundingClientRect().bottom +
      window.scrollY +
      window.innerHeight;
  }

  onView(e) {
    const [data] = e;
    this.isView = data.isIntersecting;
  }

  onResize() {
    const w = this.wrap.clientWidth;
    const h = this.wrap.clientHeight;

    this.renderer.onResize(w, h);
    this.camera.onResize(w, h);

    this.isLoaded = true;
  }

  onUpdate(t) {
    if (this.isView && this.isUpdate) {
      this.renderer.render(this.scene, this.camera);

      if (this.isLoaded) {
        this.item.onUpdate();
      }
    }

    if (
      window.scrollY > this.top &&
      window.scrollY < this.bottom - window.innerHeight + 100
    ) {
      this.fixed();
    } else {
      this.cancelFixed();
    }

    requestAnimationFrame(this.onUpdate.bind(this));
  }
}
