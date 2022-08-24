import gsap from "gsap";

// ここはサーバーサイドレンダリングで、サーバーで動くコード
// サーバーにdocumentないからエラー
// phpでdocument無理
// phpの代わりにjsで動かしてる reactは
// サーバーで動くコードとフロントで動くコード
// documentはフロントでしか動かん

export const showCloseBtnTimeline = ({ openBars, closeBars }) => {
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

export const showOpenBtnTimeline = ({ openBars, closeBars }) => {
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

export const onEnterOpenBtn = ({ openBars }) => {
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

export const onEnterCloseBtn = ({ closeBars }) => {
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
