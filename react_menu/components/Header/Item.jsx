import classNames from "classnames";
import styles from "../../styles/components/header.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const Item = (props) => {
  const { menu } = props;

  const router = useRouter();
  const dom = useRef(null);
  const item = useRef(null);
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    dom.current = { bar: item.current.querySelector(".js-header_item_bar") };
  }, []);

  const showBar = () => {
    tl.current.to(dom.current.bar, 0.7, {
      scaleX: 1,
      ease: "expo.out",
      transformOrigin: "0% 0%",
    });
  };

  const hideBar = () => {
    tl.current.to(dom.current.bar, 0.7, {
      scaleX: 0,
      ease: "expo.out",
      transformOrigin: "100% 0%",
    });
  };

  useEffect(() => {
    item.current.classList.contains("isActive") ? showBar() : hideBar();
  }, [router.pathname]);

  return (
    <li className={classNames([styles.navItem])}>
      <Link href={menu.link}>
        <a
          className={router.pathname == menu.link ? "isActive" : "isNotActive"}
          ref={item}
        >
          <span className={styles.navText}>{menu.name.toUpperCase()}</span>
          <span
            className={classNames([styles.navLine, "js-header_item_bar"])}
          ></span>
        </a>
      </Link>
    </li>
  );
};
