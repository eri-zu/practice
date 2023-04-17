import { FC, ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useScroll } from "@/hooks/useScroll";
import styles from "./scrollShowRank.module.scss";

type Props = {
  children: ReactNode;
  index: number;
};

export const ScrollShowRank: FC<Props> = ({ children, index }) => {
  const target = useRef<HTMLDivElement | null>(null);
  const [showFlag, setShowFlag] = useState(false);
  const pos = useRef(0);

  const show = () => {
    const tl = gsap.timeline();

    tl
      //
      .to(
        target.current,
        0.5,
        {
          scale: 1.1,
          z: 0,
          ease: "power2.out",
        },
        index * 0.1
      )
      .to(
        target.current,
        0.4,
        {
          scale: 1,
          z: 0,
          ease: "power2.out",
        },
        index * 0.1 + 0.5
      );
  };

  useScroll(() => {
    if (showFlag) return;
    if (window.scrollY + window.innerHeight + 100 >= pos.current)
      setShowFlag(true);
  });

  useEffect(() => {
    if (target.current) {
      pos.current = target.current.getBoundingClientRect().top;
    }
  }, []);

  useEffect(() => {
    if (showFlag) {
      show();
    } else {
      return;
    }
  }, [showFlag]);

  return (
    <div ref={target} className={styles.target}>
      {children}
    </div>
  );
};
