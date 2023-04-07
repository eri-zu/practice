import Link from "next/link";
import { ReactElement } from "react";
import styles from "./header.module.scss";
import LogoSVG from "../../../public/svg/logo.svg";
type NavItem = {
  name: string;
  link: string;
};

// array: number[]  中の要素の型[]

// 何も返却しない
// func = (): void=> {
//   const
// }
// 何も返却しない
// func = (): number=> {
//   return 1
// }

const nav: NavItem[] = [
  { name: "メニュー", link: "#menu" },
  { name: "メッセージ", link: "#message" },
  { name: "サービス", link: "#service" },
  { name: "ニュース", link: "#news" },
  { name: "アクセス", link: "#access" },
];

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.logoarea}>
        <h1 className={styles.logo}>
          <LogoSVG></LogoSVG>
        </h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {nav.map((el, i) => {
            return (
              <li className={styles.item} key={`item${i}`}>
                <Link href={el.link}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
