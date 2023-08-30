export class BuynowBtn {
  constructor(wrap) {
    this.wrap = wrap;
    this.itemid = wrap.dataset.itemId;
    this.btns = wrap.querySelectorAll(".js-buynow-btn");
    this.contents = wrap.querySelectorAll(".js-buynow-contents");
    this.contetns60 = wrap.querySelector(".js-buynow-contents[data-type='60']");
    this.contetns20 = wrap.querySelector(".js-buynow-contents[data-type='20']");

    this.modals = document.querySelectorAll(
      `.js-buynow-modal[data-item-id="${this.itemid}"]`
    );

    this.modal60 = document.querySelector(
      `.js-buynow-modal[data-item-id="${this.itemid}"][data-type="60"]`
    );

    this.modal20 = document.querySelector(
      `.js-buynow-modal[data-item-id="${this.itemid}"][data-type="20"]`
    );
    this.setEvents();
  }

  open() {
    console.log("open");
  }
  close() {
    console.log("close");
  }

  setEvents() {
    this.btns.forEach((el) => {
      el.addEventListener("click", (e) => {
        this.contents.forEach((el) => el.classList.remove("active"));
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        } else {
          this.btns.forEach((el) => {
            el.classList.remove("active");
          });

          el.classList.add("active");
          const type = el.dataset.type;
          if (type === "60") {
            this.contetns60.classList.add("active");
            this.modal60.classList.add("active");
          } else {
            this.contetns20.classList.add("active");
            this.modal20.classList.add("active");
          }
        }
      });
    });

    this.modals.forEach((el) => {
      el.querySelector(".js-buynow-btn-close").addEventListener(
        "click",
        (e) => {
          this.btns.forEach((el) => {
            el.classList.remove("active");
          });
          this.modals.forEach((el) => {
            el.classList.remove("active");
          });
        }
      );
      el.querySelector(".js-buynow-modal_bg").addEventListener("click", (e) => {
        this.btns.forEach((el) => {
          el.classList.remove("active");
        });
        this.modals.forEach((el) => {
          el.classList.remove("active");
        });
      });
    });
  }
}
