import classNames from "classnames";
import styles from "../../styles/components/header.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export const Item = (props) => {
  const { menu } = props;

  const router = useRouter();
  const dom = useRef(null);
  const item = useRef(null);
  const tl = useRef(gsap.timeline());
  const firstShow = useRef(false);

  const [isActive, setisActive] = useState(false);

  const setBar = () => {
    tl.current.set(dom.current.bar, {
      scaleX: 1,
    });
  };

  const showBar = () => {
    tl.current.to(dom.current.bar, 0.7, {
      scaleX: 1,
      ease: "expo.out",
      transformOrigin: "0% 0%",
    });
  };

  const hideBar = () => {
    // console.log(dom.current.bar);
    tl.current.to(dom.current.bar, 0.7, {
      scaleX: 0,
      ease: "expo.out",
      transformOrigin: "100% 0%",
    });
  };

  useEffect(() => {
    // item.current.classList.contains("isActive") ? showBar() : hideBar();
    setisActive(router.pathname == menu.link);
  }, [router.pathname]);

  useEffect(() => {
    if (dom.current) {
      if (!firstShow.current && isActive) {
        setBar();
      } else {
        isActive ? showBar() : hideBar();
      }

      firstShow.current = true;
    }
  }, [isActive]);

  useEffect(() => {
    // dom取得
    dom.current = { bar: item.current.querySelector(".js-header_item_bar") };

    // activeにはbarセット
    // if (item.current.classList.contains("isActive")) setBar();
  }, []);

  return (
    <li className={classNames([styles.navItem])}>
      <Link href={menu.link}>
        <a
          className={isActive ? styles.isActive : styles.isNotActive}
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
