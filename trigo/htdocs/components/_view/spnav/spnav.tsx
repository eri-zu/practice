import styles from "./spnav.module.scss";

import gsap from "gsap";
import { PageScroll } from "@/components/_module/pageScroll/pageScroll";

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

export const SpNav = () => {
  return (
    <>
      <div className={styles.menubtn}>
        <div className={styles.bars}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.txt}>メニュー</div>
      </div>

      <div className={styles.drawer}>
        <div className={styles.bg}></div>
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {nav.map((el, i) => {
                return (
                  <li className={styles.item} key={`item${i}`}>
                    <PageScroll targetID={el.id}>{el.name}</PageScroll>
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
