import gsap from "gsap";

export function showTL(spans) {
  const tl = gsap.timeline();

  spans.forEach((span, i) => {
    tl.to(
      span,
      0.1,
      {
        opacity: 1,
      },
      i * 0.05
    );
  });

  return tl;
}

export function hideTL(spans) {
  const tl = gsap.timeline();

  spans.forEach((span, i) => {
    tl.to(
      span,
      0.1,
      {
        opacity: 0,
      },
      i * 0.05
    );
  });

  return tl;
}
