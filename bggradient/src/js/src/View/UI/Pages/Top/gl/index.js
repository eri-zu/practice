import { Renderer } from "./renderer";
import { Camera } from "./camera";
import { Object3D, Scene } from "three";
import { itemConfig } from "./item-config";
import { Item } from "./item";
import { Text } from "./text";
import gsap from "gsap";

let prev = 0;
let prevScroll = 0;

const lerp = (a, b, t) => a + (b - a) * t;
const BP = 768;
export class GL {
  constructor(wrap) {
    this.wrap = wrap;
    this.canvas = this.wrap.querySelector("canvas");
    this.renderer = new Renderer(this.canvas);

    this.camera = new Camera();
    this.scene = new Scene();
    this.objectWrap = new Object3D();
    this.scene.add(this.objectWrap);
    this.items = itemConfig.map((item, i) => {
      const itemObj = new Item(item);
      this.objectWrap.add(itemObj);
      return itemObj;
    });
    this.textBG = new Text();
    this.scene.add(this.textBG);
    this.load();
    this.isLoaded = false;
    this.isInView = false;
    this.baseSpeed = 0;
    this.frame = 0;
    // this.isUpdate = true;

    this.onUpdate();
  }

  async load() {
    const p = this.items.map((item) => {
      return item.load();
    });

    await Promise.all([...p, this.textBG.load()]);

    const resizer = new ResizeObserver(this.onResize.bind(this));
    resizer.observe(this.wrap);

    const intersecter = new IntersectionObserver(this.onView.bind(this), {
      rootMargin: "300px 0px",
    });
    intersecter.observe(this.wrap);

    // window.addEventListener("scroll", this.onScroll.bind(this));
  }

  onView(e) {
    const [target] = e;
    this.isInView = target.isIntersecting;
    // this.isInView = true;
  }

  onResize() {
    const w = this.wrap.clientWidth;
    const h = this.wrap.clientHeight;
    this.renderer.onResize(w, h);
    this.camera.onResize(w, h);
    let end = 0;
    itemConfig.forEach((item) => {
      if (window.innerWidth < BP) {
        end += item.spLeft + item.spWidth;
      } else {
        end += item.left + item.width;
      }
    });
    this.items.forEach((item) => {
      item.onResize(
        this.wrap.clientWidth > 768 ? this.wrap.clientWidth : 600,
        end,
        h
      );
    });
    this.textBG.onResize(w, h);

    // if (!this.isLoaded) {
    //   setTimeout(() => {
    //     this.show();
    //   }, 100);
    // }
    this.isLoaded = true;
  }

  onUpdate(t) {
    // if (!this.isUpdate) return;

    const _t = t - prev;
    ++this.frame;
    prev = t;

    const renderTime = Math.floor(_t);
    // const diff = Math.min(Math.abs(window.scrollY - prevScroll), 100) / 100;
    // const d = Math.sin(diff * Math.PI * 0.5);
    if (this.frame % 5 === 0) {
      prevScroll = window.scrollY;
    }
    // prevScroll = window.scrollY;
    // this.baseSpeed = lerp(this.baseSpeed, d * 50, 0.3);
    this.baseSpeed = 0;
    const w = this.wrap.clientWidth / 1280;
    if (this.isLoaded && this.isInView) {
      this.items.forEach((item) => {
        item.onUpdate(renderTime, this.baseSpeed, w);
      });
      this.textBG.onUpdate(renderTime, this.baseSpeed, w);
      this.renderer.render(this.scene, this.camera);
    }

    requestAnimationFrame(this.onUpdate.bind(this));
  }

  show() {
    console.log("show");
    const tl = gsap.timeline();

    this.items.forEach((item, i) => {
      tl.add(item.show.bind(item), 0.08 * i);
    });

    tl.add(this.textBG.show.bind(this.textBG), 1);
  }
}
