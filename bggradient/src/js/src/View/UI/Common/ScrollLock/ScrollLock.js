import { UAParser } from "ua-parser-js";
let scrollY = 0;
const body = document.body;

export const addScrollLock = () => {
  if (UAParser().device.type) {
    scrollY = window.scrollY;

    body.classList.add("isFixed");
    body.style.setProperty("--position-top", `${-scrollY}px`);
  }
};

export const removeScrollLock = () => {
  if (UAParser().device.type) {
    body.classList.remove("isFixed");
    window.scrollTo(0, scrollY);
  }
};
