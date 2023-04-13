import styles from "./fadeIn.module.scss";
import { FC, ReactNode, useState } from "react";
import { useScroll } from "@/hooks/useScroll";
import classNames from "classnames";
type Props = {
  children: ReactNode;
};

export const FadeIn: FC<Props> = ({ children }) => {
  const [fadeInFlag, setFadeInFlag] = useState(false);

  useScroll(() => {
    window.scrollY > 500 ? setFadeInFlag(true) : setFadeInFlag(false);
  });

  return (
    <div
      className={classNames([
        styles.wrap,
        fadeInFlag ? styles.isActive : styles.isNotActive,
      ])}
    >
      {children}
    </div>
  );
};
