import gsap from "gsap";
import React, { FC, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MenuFlagContext } from "@/components/context/MenuFlag";

type Props = {
  targetID: string;
  children: ReactNode;
  className?: string;
};

export const PageScroll: FC<Props> = ({ targetID, children, className }) => {
  const router = useRouter();
  const [menuFlag, setMenuFlag] = useContext(MenuFlagContext);

  const onClick = () => {
    if (menuFlag) setMenuFlag(false);
    if (router.pathname == "/") {
      scroll();
    } else {
      setTimeout(() => {
        router.push(`/#${targetID}`);
      }, 1000);
    }
  };

  const scroll = () => {
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
      <div onClick={onClick} className={className}>
        {children}
      </div>
    </>
  );
};
