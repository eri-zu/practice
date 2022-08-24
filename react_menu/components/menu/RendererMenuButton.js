import gsap from "gsap";

export const showCloseBtnTimeline = (wrap) => {
  const openBtn = wrap.querySelector(".js-menubtn_open");
  const openBars = openBtn.querySelectorAll(".js-menubtn_bar");
  const closeBtn = wrap.querySelector(".js-menubtn_close");
  const closeBars = closeBtn.querySelectorAll(".js-menubtn_bar");

  const tl = gsap.timeline();

  // hide open
  openBars.forEach((el, i) => {
    tl.to(
      el,
      0.5,
      {
        scaleX: 0,
        transformOrigin: "100% 0%",
        ease: "expo.out",
      },
      0.05 * i
    );
  });
  // show close
  closeBars.forEach((el, i) => {
    tl.to(
      el,
      0.6,
      {
        scaleX: 1,
        ease: "expo.out",
        transformOrigin: "0% 0%",
      },
      0.05 * i + 0.5
    );
  });

  return tl;
};

export const showOpenBtnTimeline = (wrap) => {
  const openBtn = wrap.querySelector(".js-menubtn_open");
  const openBars = openBtn.querySelectorAll(".js-menubtn_bar");
  const closeBtn = wrap.querySelector(".js-menubtn_close");
  const closeBars = closeBtn.querySelectorAll(".js-menubtn_bar");

  const tl = gsap.timeline();

  // hide close
  closeBars.forEach((el, i) => {
    tl.to(
      el,
      0.5,
      {
        scaleX: 0,
        transformOrigin: "100% 0%",
        ease: "expo.out",
      },
      0.05 * i
    );
  });
  // show open
  openBars.forEach((el, i) => {
    tl.to(
      el,
      0.5,
      {
        scaleX: 1,
        transformOrigin: "0% 0",
        ease: "expo.out",
      },
      0.05 * i + 0.5
    );
  });

  return tl;
};

export const onEnterOpenBtn = (wrap) => {
  const openBtn = wrap.querySelector(".js-menubtn_open");
  const openBars = openBtn.querySelectorAll(".js-menubtn_bar");

  const tl = gsap.timeline();

  // openbtn
  openBars.forEach((el, i) => {
    tl
      // hide open
      .to(
        el,
        0.5,
        {
          scaleX: 0,
          transformOrigin: "100% 0%",
          ease: "expo.out",
        },
        0.05 * i
      )
      // show open
      .to(
        el,
        0.5,
        {
          scaleX: 1,
          transformOrigin: "0% 0%",
          ease: "expo.out",
        },
        0.05 * i + 0.5
      );
  });

  return tl;
};

export const onEnterCloseBtn = (wrap) => {
  const closeBtn = wrap.querySelector(".js-menubtn_close");
  const closeBars = closeBtn.querySelectorAll(".js-menubtn_bar");

  const tl = gsap.timeline();

  // closebtn
  closeBars.forEach((el, i) => {
    tl
      // hide close
      .to(
        el,
        0.5,
        {
          scaleX: 0,
          transformOrigin: "100% 0%",
          ease: "expo.out",
        },
        0.05 * i
      )
      // show close
      .to(
        el,
        0.5,
        {
          scaleX: 1,
          transformOrigin: "0% 0%",
          ease: "expo.out",
        },
        0.05 * i + 0.5
      );
  });

  return tl;
};
