import gsap from "gsap";
import { transform } from "typescript";

export const showBtn = (btn: HTMLDivElement) => {
  const bars = btn.querySelectorAll(".js-bar");
  const txtInner = btn.querySelector(".js-bar_inner");

  const tl = gsap.timeline();

  bars.forEach((el, i) => {
    tl.to(
      el,
      0.6,
      {
        backgroundColor: "#fafafa",
        x: 5,
        y: i == 0 ? -5.2 : 6,
        rotation: i == 0 ? 45 : -45,
        ease: "expo.out",
      },
      0
    );
  });

  tl.to(
    txtInner,
    0.6,
    {
      y: "-100%",
      color: "#fff",
      ease: "expo.out",
    },
    0
  );

  return tl;
};

export const hideBtn = (btn: HTMLDivElement) => {
  const bars = btn.querySelectorAll(".js-bar");
  const txtInner = btn.querySelector(".js-bar_inner");

  const tl = gsap.timeline();

  bars.forEach((el, i) => {
    tl.to(
      el,
      0.6,
      {
        backgroundColor: "#221010",
        rotation: 0,
        x: 0,
        y: 0,
        ease: "expo.out",
      },
      0
    );
  });
  tl.to(
    txtInner,
    0.6,
    {
      y: 0,
      color: "#221010",
      ease: "expo.out",
    },
    0
  );

  return tl;
};

export const showMenu = (drawer: HTMLDivElement) => {
  const bg = drawer.querySelector(".js-drawer_bg");
  const items = drawer.querySelectorAll(".js-drawer_itemin");
  const borders = drawer.querySelectorAll(".js-drawer_border");

  const tl = gsap.timeline();

  tl.to(bg, 0.8, {
    x: 0,
    ease: "expo.out",
  });
  items.forEach((el, i) => {
    tl.to(
      el,
      0.8,
      {
        y: 0,
        ease: "expo.out",
      },
      0.2 + 0.05 * i
    );
  });
  borders.forEach((el, i) => {
    tl.set(el, { transformOrigin: "0% 50%" }, 0)
      //
      .to(
        el,
        0.8,
        {
          scaleX: 1,
          ease: "expo.out",
        },
        0.2 + 0.05 * i
      );
  });

  return tl;
};

export const hideMenu = (drawer: HTMLDivElement) => {
  const bg = drawer.querySelector(".js-drawer_bg");
  const items = drawer.querySelectorAll(".js-drawer_itemin");
  const borders = drawer.querySelectorAll(".js-drawer_border");

  const tl = gsap.timeline();

  items.forEach((el, i) => {
    tl
      //
      .to(
        el,
        0.8,
        {
          y: "100%",
          ease: "expo.out",
        },
        0
      );
  });
  borders.forEach((el, i) => {
    tl.set(el, { transformOrigin: "100% 50%" }, 0)
      //
      .to(
        el,
        0.8,
        {
          scaleX: 0,
          ease: "expo.out",
        },
        0
      );
  });
  tl.to(
    bg,
    0.8,
    {
      x: "101%",
      ease: "expo.out",
    },
    0.2
  );

  return tl;
};
