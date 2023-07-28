import LoadMgr from "View/UI/_Loading/Basic/Controller.es6";

///bodyにmainを追加
// var script = document.createElement("script");
// script.src = "./assets/js/bundle.js";
// document.body.appendChild(script);

window.$ = query => {
  if (typeof query == "string") {
    console.warn("error query");
    return;
  }
  return document.querySelectorAll(query);
};

window.gb = {};
window.gb.loading = new LoadMgr();
