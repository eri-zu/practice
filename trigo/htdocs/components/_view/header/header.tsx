import Link from "next/link";
import { ReactElement } from "react";
import styles from "./header.module.scss";
import LogoSVG from "../../../public/svg/logo.svg";
import { PageScroll } from "@/components/_module/pageScroll/pageScroll";
import { useRouter } from "next/router";
import classNames from "classnames";

type NavItem = {
  name: string;
  link: string;
};

const nav: NavItem[] = [
  { name: "パン", link: "breadmenu" },
  { name: "メッセージ", link: "message" },
  { name: "サービス", link: "service" },
  { name: "ニュース", link: "news" },
  { name: "アクセス", link: "access" },
];

export const Header = (): ReactElement => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoarea}>
          <h1 className={styles.logo}>
            <Link href="/">
              <LogoSVG></LogoSVG>
            </Link>
          </h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {nav.map((el, i) => {
              return (
                <li
                  key={`item${i}`}
                  className={classNames([
                    styles.item,
                    router.pathname == `/${el.link}`
                      ? styles.isNews
                      : styles.isNotNews,
                  ])}
                >
                  <div className={styles.itemIn}>
                    <PageScroll targetID={el.link}>{el.name}</PageScroll>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
