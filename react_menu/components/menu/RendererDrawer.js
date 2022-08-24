import gsap from "gsap";

export const showDrawer = (drawer) => {
  const bg = drawer.querySelector(".js-drawer_bg");

  const tl = gsap.timeline();

  tl.to(bg, 1, {
    opacity: 1,
    ease: "expo.out",
  });

  return tl;
};

export const hideDrawer = (drawer) => {
  const bg = drawer.querySelector(".js-drawer_bg");

  const tl = gsap.timeline();

  tl.to(bg, 1, {
    opacity: 0,
    ease: "expo.out",
  });

  return tl;
};
