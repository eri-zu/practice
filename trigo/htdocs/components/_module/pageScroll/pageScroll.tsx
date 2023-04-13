import gsap from "gsap";
import React, { FC, ReactNode } from "react";

type Props = {
  targetID: string;
  children: ReactNode;
  className?: string;
};

export const PageScroll: FC<Props> = ({ targetID, children, className }) => {
  const onClick: (arg: React.MouseEvent) => void = (e: React.MouseEvent) => {
    const targetDOM = document.getElementById(targetID);

    //htmlelement or null

    if (!targetDOM) return;

    //htmlelement

    const targetPos = targetDOM.getBoundingClientRect().top + window.scrollY;

    const tl = gsap.timeline();

    tl.to(document.documentElement, 0.8, {
      scrollTop: targetPos,
      ease: "power2.out",
    });
  };

  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};
