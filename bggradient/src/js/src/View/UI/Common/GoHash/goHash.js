import gsap from "gsap";

export const goHash = () => {
  const urlHash = location.hash;
  const html = document.documentElement;

  if (urlHash) {
    gb.menu.isHeaderLock = true;
    const href = urlHash.slice(1);
    const targetDom = document.getElementById(href);

    const headerH = document.getElementById("header").clientHeight;

    // const targetPos =
    //   targetDom.getBoundingClientRect().top + window.scrollY - headerH * 1.5;
    const targetPos =
      targetDom.getBoundingClientRect().top + window.scrollY - headerH * 1.5;
    const tl = gsap.timeline();

    tl.to(
      html,
      0.001,
      {
        scrollTop: targetPos,
        onComplete: () => {
          setTimeout(() => {
            gb.menu.isHeaderLock = false;
          }, 100);
        },
      },
      0
    ).add(() => {
      html.classList.remove("isHidden");
    });
    // //
    // .add(() => {
    //   console.log("lock解除");
    // }, 0.2);
  } else {
    html.classList.remove("isHidden");
  }
};
