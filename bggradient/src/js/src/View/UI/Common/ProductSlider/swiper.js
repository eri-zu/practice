import { Vector2 } from "three";
export class Swiper {
  constructor(wrap) {
    this.wrap = wrap;
    this.isSwiped = false;

    this.setEvents();
  }

  setEvents() {
    let timer = null;
    const pointerPosi = new Vector2();
    const movePosi = new Vector2();
    this.wrap.addEventListener("pointerdown", (e) => {
      this.isSwiped = true;
      pointerPosi.set(e.clientX, e.clientY);
    });

    this.wrap.addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerType === "touch") return;
        if (this.isSwiped) {
          movePosi.set(e.clientX, e.clientY);

          if (
            Math.abs(movePosi.x - pointerPosi.x) >
              Math.abs(movePosi.y - pointerPosi.y) &&
            Math.abs(movePosi.x - pointerPosi.x) > 10
          ) {
            e.preventDefault();
            this.onFire(movePosi.x - pointerPosi.x > 0 ? "left" : "right");
            this.isSwiped = false;
            return false;
          }
        }
      },
      {
        passive: false,
      }
    );

    this.wrap.addEventListener(
      "touchmove",
      (e) => {
        if (this.isSwiped && e.touches.length === 1) {
          movePosi.set(e.touches[0].clientX, e.touches[0].clientY);
          if (
            Math.abs(movePosi.x - pointerPosi.x) >
              Math.abs(movePosi.y - pointerPosi.y) &&
            Math.abs(movePosi.x - pointerPosi.x) > 10
          ) {
            e.preventDefault();
            this.onFire(movePosi.x - pointerPosi.x > 0 ? "left" : "right");
            this.isSwiped = false;
            return false;
          }
        }
      },
      {
        passive: false,
      }
    );

    this.wrap.addEventListener("pointerout", (e) => {
      this.isSwiped = false;
      pointerPosi.set(0, 0);
    });
    this.wrap.addEventListener("pointerup", (e) => {
      this.isSwiped = false;
      pointerPosi.set(0, 0);
    });
  }

  onSwipe(cb = () => {}) {
    this.onFire = cb;
  }
}
