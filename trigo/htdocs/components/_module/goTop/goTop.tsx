import { FC, ReactNode } from "react";
import gsap from "gsap";

type Props = {
  children: ReactNode;
};

export const GoTop: FC<Props> = ({ children }) => {
  const onClick: () => void = () => {
    const html = document.documentElement;
    const tl = gsap.timeline();

    tl.to(html, 0.8, {
      scrollTop: 0,
      ease: "power2.out",
    });
  };

  return <div onClick={onClick}>{children}</div>;
};
