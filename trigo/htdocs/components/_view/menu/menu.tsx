import styles from "./menu.module.scss";
import gsap from "gsap";
import { PageScroll } from "@/components/_module/pageScroll/pageScroll";
import { useEffect, useState, useRef } from "react";
import {
  showBtn,
  hideBtn,
  showMenu,
  hideMenu,
  addScrollLock,
  removeScrollLock,
} from "./Renderer";
import classNames from "classnames";
// import { addScrollLock } from "@/hooks/useScrollLock";
// import { removeScrollLock } from "@/hooks/useScrollLock";

type Nav = {
  name: string;
  id: string;
};

const nav: Nav[] = [
  { name: "パン", id: "breadmenu" },
  { name: "メッセージ", id: "message" },
  { name: "サービス", id: "service" },
  { name: "ニュース", id: "news" },
  { name: "アクセス", id: "access" },
];

export const Menu = () => {
  const [showFlag, setShowFlag] = useState(false);
  const btn = useRef<HTMLDivElement | null>(null);
  const drawer = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const firstRender = useRef<Boolean>(false);

  const show = () => {
    addScrollLock();

    if (tl.current) tl.current.kill();
    tl.current = gsap.timeline();

    if (btn.current && drawer.current) {
      tl.current
        // btn
        .add(showBtn(btn.current))
        // menu
        .add(showMenu(drawer.current), 0);
    }
  };

  const hide = () => {
    removeScrollLock();

    if (tl.current) tl.current.kill();
    tl.current = gsap.timeline();

    if (btn.current && drawer.current) {
      tl.current
        // btn
        .add(hideBtn(btn.current))
        // menu
        .add(hideMenu(drawer.current), 0);
    }
  };

  const onClick = () => {
    showFlag ? setShowFlag(false) : setShowFlag(true);
  };

  useEffect(() => {
    if (firstRender.current) {
      showFlag ? show() : hide();
    } else {
      firstRender.current = true;
    }
  }, [showFlag]);

  return (
    <>
      <div
        className={styles.menubtn}
        ref={btn}
        onClick={() => {
          onClick();
        }}
      >
        <div className={styles.bars}>
          <div className={classNames([styles.bar, "js-bar"])}></div>
          <div className={classNames([styles.bar, "js-bar"])}></div>
        </div>
        <div className={styles.txtWrap}>
          <div className={classNames([styles.txtInner, "js-bar_inner"])}>
            <p className={styles.txt}>メニュー</p>
            <p className={styles.txt}>閉じる</p>
          </div>
        </div>
      </div>

      <div
        ref={drawer}
        className={classNames([
          styles.drawer,
          showFlag ? styles.isActive : styles.isNotActive,
        ])}
      >
        <div className={classNames([styles.bg, "js-drawer_bg"])}>
          <div className={styles.img}>
            <img src="/img/trigokun.png" alt="" />
          </div>
        </div>
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {nav.map((el, i) => {
                return (
                  <li className={styles.item} key={`item${i}`}>
                    <PageScroll
                      targetID={el.id}
                      className={classNames(
                        styles.pageScroll,
                        "js-drawer_itemin"
                      )}
                    >
                      {el.name}
                    </PageScroll>
                    <div
                      className={classNames([
                        styles.border,
                        "js-drawer_border",
                      ])}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
