import gsap from "gsap";
import React, { FC, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  targetID: string;
  children: ReactNode;
  className?: string;
};

export const PageScroll: FC<Props> = ({ targetID, children, className }) => {
  const router = useRouter();

  const onClick: (arg: React.MouseEvent) => void = (e: React.MouseEvent) => {
    const targetDOM = document.getElementById(targetID);

    if (!targetDOM) return;

    const targetPos = targetDOM.getBoundingClientRect().top + window.scrollY;

    const tl = gsap.timeline();

    tl.to(document.documentElement, 0.8, {
      scrollTop: targetPos,
      ease: "power2.out",
    });
  };

  return (
    <>
      {router.pathname == "/" ? (
        <div onClick={onClick} className={className}>
          {children}
        </div>
      ) : (
        <Link href={`/#${targetID}`} className={className}>
          {children}
        </Link>
      )}
    </>
  );
};
