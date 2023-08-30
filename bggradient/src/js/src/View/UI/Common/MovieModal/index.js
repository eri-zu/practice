import YouTubePlayer from "youtube-player";
import { addScrollLock, removeScrollLock } from "../ScrollLock/ScrollLock";
export class MovieModal {
  constructor() {
    this.btns = document.querySelectorAll(".js-movie-modal-btn");
    this.modal = document.querySelector(".js-movie-modal");
    this.close = document.querySelector(".js-movie-modal-close");
    this.container = document.querySelector(".js-movie-modal-container");
    this.bg = document.querySelector(".js-movie-modal-bg");
    this.player = null;

    if (this.modal) this.setEvents();
  }

  setEvents() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        this.show(id);
      });
    });

    this.close.addEventListener("click", () => {
      this.hide();
    });

    this.bg.addEventListener("click", () => {
      this.hide();
    });
  }

  show(id) {
    this.modal.classList.add("active");
    console.log("active?");
    this.player = YouTubePlayer(this.container, {
      videoId: id,
      playerVars: {
        autoplay: 0,
        rel: 0,
      },
    });

    addScrollLock();
  }

  hide() {
    this.player.stopVideo();
    this.modal.classList.remove("active");
    this.player.destroy();
    removeScrollLock();
  }

  //   fixedScroll() {
  //     const y = window.scrollY;
  //     const html = document.documentElement;
  //     html.classList.add("fixed");
  //     html.style.setProperty("--y", -y + "px");
  //     html.dataset.scroll = y;
  //   }

  //   offFixedScroll() {
  //     const html = document.documentElement;
  //     html.classList.remove("fixed");
  //     window.scrollTo(0, html.dataset.scroll);
  //   }
}
