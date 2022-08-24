import gsap from "gsap";

export const openMenuButton = (wrap) => {
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
        x: 0,
        delay: 0.1,
      },
      0.05 * i + 0.5
    );
  });

  return tl;
};

export const closeMenuButton = (wrap) => {
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
        delay: 0.05,
      },
      0.5 + 0.05 * i
    );
  });

  return tl;
};

export const onEnterOpenButton = (wrap) => {
  const openBtn = wrap.querySelector(".js-menubtn_open");
  const openBars = openBtn.querySelectorAll(".js-menubtn_bar");

  const tl = gsap.timeline();

  // openbtn
  openBars.forEach((el, i) => {
    tl
      //set
      .set(el, { transformOrigin: "100% 0" })
      // hide
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
      // // set
      .set(el, { transformOrigin: "0% 0" }, 0.05 * i + 0.5)
      // show
      .to(
        el,
        0.5,
        {
          scaleX: 1,
          ease: "expo.out",
        },
        0.05 * i + 0.5
      );
  });

  return tl;
};

export const onEnterCloseButton = (wrap) => {
  const closeBtn = wrap.querySelector(".js-menubtn_close");
  const closeBars = closeBtn.querySelectorAll(".js-menubtn_bar");

  const tl = gsap.timeline();

  // closebtn
  closeBars.forEach((el, i) => {
    tl
      //set
      .set(el, { transformOrigin: "100% 0" })
      // hide
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
      // // set
      .set(el, { transformOrigin: "0% 0" }, 0.05 * i + 0.5)
      // show
      .to(
        el,
        0.5,
        {
          scaleX: 1,
          ease: "expo.out",
        },
        0.05 * i + 0.5
      );
  });

  return tl;
};
