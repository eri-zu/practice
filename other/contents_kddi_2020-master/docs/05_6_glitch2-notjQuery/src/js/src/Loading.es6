import LoadMgr from "View/UI/_Loading/Basic/Controller.es6";

window.$ = query => {
  if (typeof query != "string") {
    console.warn("error query", query);
    return;
  }
  return document.querySelectorAll(query);
};

//高さを追加
$(".section01")[0].style.height = window.innerHeight + "px";

window.gb = {};
window.gb.loadingView = new LoadView(); // contoroller, render

window.gb.loading = new LoadMgr(); // countする機能

$(window).on("start", event => {
  gb.start();
});
